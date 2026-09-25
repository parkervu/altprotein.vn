#!/usr/bin/env python3
"""W9-L2 upland school and factory canteen plates: coding and calculations.

Reproduces the data_ tables in this folder from menus transcribed by hand from
the sources listed in sources.csv (UPL-01 to UPL-36). Standard library only.
Run: python3 calc_upland_canteen.py
"""
import csv, os, statistics
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
MEATS = ("pork", "chicken", "duck", "beef")
MINCED_KW = ("nhồi thịt", "xíu mại", "chả lụa", "giò", "nem", "thịt viên", "mọc", "chả thịt", "chả bọc", "trứng chiên thịt", "trứng cuộn thịt", "sốt thịt", "thịt băm", "thịt xay", "xúc xích", "lạp sườn", "ruốc", "đậu nhồi", "thịt say", "chả lợn")
def minced(txt):
    t = txt.lower()
    return any(k in t for k in MINCED_KW)
ANIMAL = MEATS + ("fish", "seafood", "egg", "milk", "other_animal")
PLANT = ("tofu", "legume", "peanut")

# ---------------------------------------------------------------------------
# 1. Upland and ethnic-minority school menus
# Each meal: (date, weekday, meal, dishes_vi, codes, level)
# level: dish = at least one meat, fish or egg dish served as a main;
#        small = animal food only as a garnish or a small item (pork floss,
#                sausage slices in noodles, one egg in noodles, milk carton,
#                meat-filled bun or rice cake);
#        none = no animal food listed.
# codes: protein sources in the meal, main dish first.
# ---------------------------------------------------------------------------
SCHOOLS = {
 "S01": dict(name="Muong Nhe PTDTBT lower secondary", province="Dien Bien", commune="Muong Nhe (land-border commune; school runs a Decree 339 lunch)", type="semi-boarding lower secondary (PTDTBT THCS)", pupils="759 boarders (Sep 2026); 743 (May 2026); 747 (Mar 2026)", funding="Decree 66/2025 food money; Decree 339/2025 for lunch-only pupils", author="school (named staff member), principal signs"),
 "S02": dict(name="Na Tong No. 2 PTDTBT primary", province="Dien Bien", commune="Nua Ngam", type="semi-boarding primary (PTDTBT TH)", pupils="not stated", funding="Decree 66/2025", author="school, principal signs"),
 "S03": dict(name="Muong Anh PTDTBT primary", province="Dien Bien", commune="Muong Cha area", type="semi-boarding primary (PTDTBT TH)", pupils="not stated", funding="Decree 66/2025", author="school"),
 "S04": dict(name="Leng Su Sin PTDTBT primary", province="Dien Bien", commune="Sin Thau (land-border commune)", type="semi-boarding primary (PTDTBT TH)", pupils="255 boarders; 143 lunch pupils under the Nuoi Em project", funding="Decree 66/2025 (boarders); Nuoi Em charity (lunch pupils)", author="school, principal signs"),
 "S05": dict(name="Leng Su Sin PTDTBT lower secondary", province="Dien Bien", commune="Sin Thau (land-border commune)", type="semi-boarding lower secondary (PTDTBT THCS)", pupils="219 boarders", funding="Decree 66/2025", author="school, principal signs"),
 "S06": dict(name="Sen Thuong PTDTBT primary and lower secondary", province="Dien Bien", commune="Sin Thau (land-border commune)", type="semi-boarding primary and lower secondary", pupils="67", funding="Decree 66/2025", author="school"),
 "S07": dict(name="Ta Ngao PTDTBT lower secondary", province="Lai Chau", commune="Tua Sin Chai", type="semi-boarding lower secondary (PTDTBT THCS)", pupils="not stated", funding="Decree 66/2025 (cited on the notice)", author="school"),
 "S08": dict(name="Hong Thu PTDTBT primary", province="Lai Chau", commune="Hong Thu", type="semi-boarding primary (PTDTBT TH)", pupils="229", funding="Decree 66/2025: VND 936,000 a month, VND 46,800 a day over 20 days", author="school, principal signs"),
 "S09": dict(name="Nam Han PTDTBT lower secondary", province="Lai Chau", commune="Nam Cuoi", type="semi-boarding lower secondary (PTDTBT THCS)", pupils="not stated", funding="Decree 66/2025", author="school"),
 "S10": dict(name="Muong Do PTDTBT primary and lower secondary", province="Son La", commune="Muong Do", type="semi-boarding primary and lower secondary", pupils="not stated", funding="Decree 66/2025", author="school"),
 "S11": dict(name="Cao Bang provincial PTDTNT", province="Cao Bang", commune="provincial boarding school", type="full boarding (PTDTNT, provincial)", pupils="not stated", funding="boarding scholarship and kitchen fees (not stated on menu)", author="school kitchen team"),
 "S12": dict(name="Mang Den PTDTNT upper secondary", province="Quang Ngai (former Kon Tum, Central Highlands)", commune="Mang Den", type="full boarding (PTDTNT THPT)", pupils="not stated", funding="not stated on menu", author="boarding management team, principal signs"),
 "S13": dict(name="Na Hy PTDTNT upper secondary", province="Dien Bien", commune="Nam Po area", type="full boarding (PTDTNT THPT)", pupils="not stated", funding="VND 27,500 a meal stated on menu", author="kitchen staff, principal signs"),
}

M = []  # meal records

def add(school, week, src, rows, note=""):
    for r in rows:
        date, wd, meal, dishes, codes, level = r
        M.append(dict(school=school, week=week, src=src, date=date, weekday=wd, meal=meal,
                      dishes=dishes, codes=codes, level=level, note=note))

# S01 Muong Nhe: fixed weekly cycle; boarding pupils return Sunday evening.
def mn_week(week, src, dates, variant):
    sun, mon, tue, wed, thu, fri = dates
    rows = [(sun, "Sun", "dinner", "Trứng vịt tráng; canh rau bắp cải; cơm tẻ", "egg", "dish"),
            (mon, "Mon", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
            (mon, "Mon", "lunch", "Thịt lợn rang; canh bí đỏ; cơm tẻ", "pork", "dish"),
            (mon, "Mon", "dinner", "Thịt lợn xào bí xanh; canh rau bắp cải; cơm tẻ", "pork", "dish"),
            (tue, "Tue", "breakfast", "Bánh mỳ nhân đỗ", "legume", "none"),
            (tue, "Tue", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
            (tue, "Tue", "dinner", "Thịt gà ta lai rang gừng; canh bí đỏ; cơm tẻ", "chicken", "dish"),
            (wed, "Wed", "breakfast", "Xôi thịt lợn băm", "pork", "small"),
            (wed, "Wed", "lunch", "Thịt lợn rang; canh bí đỏ; cơm tẻ", "pork", "dish"),
            (wed, "Wed", "dinner", variant, "pork", "dish"),
            (thu, "Thu", "breakfast", "Bánh mỳ nhân đỗ", "legume", "none"),
            (thu, "Thu", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
            (thu, "Thu", "dinner", "Thịt lợn xào su su; canh bí đỏ; cơm tẻ", "pork", "dish"),
            (fri, "Fri", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
            (fri, "Fri", "lunch", "Thịt lợn rang; canh rau bắp cải; cơm tẻ", "pork", "dish")]
    add("S01", week, src, rows)

mn_week("S01-2026-09-07", "UPL-02", ("2026-09-06", "2026-09-07", "2026-09-08", "2026-09-09", "2026-09-10", "2026-09-11"), "Thịt lợn xào bí xanh; canh rau bắp cải; cơm tẻ")
mn_week("S01-2026-09-14", "UPL-02", ("2026-09-13", "2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18"), "Thịt lợn xào quả đỗ; canh rau bắp cải; cơm tẻ")
mn_week("S01-2026-09-21", "UPL-01", ("2026-09-20", "2026-09-21", "2026-09-22", "2026-09-23", "2026-09-24", "2026-09-25"), "Thịt lợn xào quả đỗ; canh rau bắp cải; cơm tẻ")
add("S01", "S01-2026-05-18", "UPL-03", [
    ("2026-05-18", "Mon", "breakfast", "Xôi thịt lợn băm", "pork", "small"),
    ("2026-05-18", "Mon", "lunch", "Thịt lợn rang; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-05-18", "Mon", "dinner", "Thịt lợn xào quả đỗ; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-05-19", "Tue", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
    ("2026-05-19", "Tue", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-05-19", "Tue", "dinner", "Thịt gà ta lai rang gừng; canh bí đỏ; cơm tẻ", "chicken", "dish"),
    ("2026-05-20", "Wed", "breakfast", "Bánh mỳ nhân đỗ", "legume", "none"),
    ("2026-05-20", "Wed", "lunch", "Thịt lợn rang; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-05-20", "Wed", "dinner", "Thịt lợn xào bí xanh; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-05-21", "Thu", "breakfast", "Xôi thịt lợn băm", "pork", "small"),
    ("2026-05-21", "Thu", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-05-21", "Thu", "dinner", "Thịt lợn xào su su; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-05-22", "Fri", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
    ("2026-05-22", "Fri", "lunch", "Thịt lợn xay rang; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-05-22", "Fri", "dinner", "Thịt lợn kho củ cải; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-05-23", "Sat", "breakfast", "Bánh mỳ nhân kem", "none", "none")])
add("S01", "S01-2026-03-23", "UPL-03", [
    ("2026-03-23", "Mon", "breakfast", "Xôi thịt lợn băm", "pork", "small"),
    ("2026-03-23", "Mon", "lunch", "Thịt lợn rang; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-03-23", "Mon", "dinner", "Thịt lợn xào quả đỗ; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-03-24", "Tue", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
    ("2026-03-24", "Tue", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-03-24", "Tue", "dinner", "Thịt gà ta lai rang gừng; canh bí đỏ; cơm tẻ", "chicken", "dish"),
    ("2026-03-25", "Wed", "breakfast", "Bánh mỳ nhân đỗ", "legume", "none"),
    ("2026-03-25", "Wed", "lunch", "Thịt lợn rang; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-03-25", "Wed", "dinner", "Thịt lợn xào bí xanh; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-03-26", "Thu", "breakfast", "Xôi thịt lợn băm", "pork", "small"),
    ("2026-03-26", "Thu", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-03-26", "Thu", "dinner", "Thịt lợn xào bắp cải; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-03-27", "Fri", "breakfast", "Xôi ruốc thịt lợn", "pork", "small"),
    ("2026-03-27", "Fri", "lunch", "Thịt lợn xay rang; canh rau bắp cải; cơm tẻ", "pork", "dish"),
    ("2026-03-27", "Fri", "dinner", "Thịt lợn kho củ cải; canh bí đỏ; cơm tẻ", "pork", "dish"),
    ("2026-03-28", "Sat", "breakfast", "Bánh mỳ nhân kem", "none", "none"),
    ("2026-03-28", "Sat", "lunch", "Thịt lợn đậu phụ sốt cà chua; canh rau bắp cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-03-29", "Sun", "dinner", "Trứng vịt tráng; canh rau bắp cải; cơm tẻ", "egg", "dish")])

# S02 Na Tong No. 2: fixed weekly cycle, two identical weeks coded.
def nt_week(week, d):
    sun, mon, tue, wed, thu, fri = d
    add("S02", week, "UPL-05", [
        (sun, "Sun", "dinner", "Giò lụa rim cà chua; canh rau củ quả; cơm tẻ", "pork", "dish"),
        (mon, "Mon", "breakfast", "Cơm tẻ; ruốc thịt; canh rau củ quả", "pork", "small"),
        (mon, "Mon", "lunch", "Cá trắm khúc sốt cà chua; thịt lợn giá đỗ; canh", "fish;pork", "dish"),
        (mon, "Mon", "dinner", "Giò rim cà chua; trứng rán; canh", "pork;egg", "dish"),
        (tue, "Tue", "breakfast", "Cơm tẻ; thịt lợn băm xào trứng; canh", "pork;egg", "dish"),
        (tue, "Tue", "lunch", "Bánh đa nem rán; thịt bò xào củ quả; canh", "pork;beef", "dish"),
        (tue, "Tue", "dinner", "Thịt gà rang; đậu phụ sốt cà chua; canh", "chicken;tofu", "dish"),
        (wed, "Wed", "breakfast", "Cơm tẻ; thịt lợn băm xào trứng; canh", "pork;egg", "dish"),
        (wed, "Wed", "lunch", "Thịt lợn kho đậu phụ cà chua; trứng rán; canh", "pork;tofu;egg", "dish"),
        (wed, "Wed", "dinner", "Chả thịt lợn; thịt lợn băm xào củ quả; canh", "pork", "dish"),
        (thu, "Thu", "breakfast", "Cơm tẻ; ruốc thịt lợn; canh", "pork", "small"),
        (thu, "Thu", "lunch", "Thịt lợn băm xào củ quả; cá sốt cà chua; canh", "pork;fish", "dish"),
        (thu, "Thu", "dinner", "Thịt gà rang; đậu phụ sốt cà chua; canh", "chicken;tofu", "dish"),
        (fri, "Fri", "breakfast", "Cơm tẻ; thịt lợn băm xào trứng; canh rau cải thịt băm", "pork;egg", "dish"),
        (fri, "Fri", "lunch", "Chả thịt lợn; thịt bò xào củ quả; canh", "pork;beef", "dish")])
nt_week("S02-2026-03-02", ("2026-03-01", "2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05", "2026-03-06"))
nt_week("S02-2026-03-09", ("2026-03-08", "2026-03-09", "2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13"))

# S03 Muong Anh, 11 to 16 January 2026 (page 1 of 2 read; Friday lunch is the last row read).
add("S03", "S03-2026-01-12", "UPL-06", [
    ("2026-01-11", "Sun", "dinner", "Cơm tẻ; trứng gà ai cập; bí đỏ", "egg", "dish"),
    ("2026-01-12", "Mon", "breakfast", "Bánh mỳ; sữa tươi", "milk", "small"),
    ("2026-01-12", "Mon", "lunch", "Cơm tẻ; thịt gà rang gừng; bắp cải", "chicken", "dish"),
    ("2026-01-12", "Mon", "dinner", "Cơm tẻ; cá rô phi lê; bí đỏ", "fish", "dish"),
    ("2026-01-13", "Tue", "breakfast", "Cơm tẻ; thịt lợn xay xào trứng gà; sữa tươi", "pork;egg;milk", "dish"),
    ("2026-01-13", "Tue", "lunch", "Cơm tẻ; thịt lợn xay xào trứng gà; su su", "pork;egg", "dish"),
    ("2026-01-13", "Tue", "dinner", "Cơm tẻ; thịt lợn mông, vai; bí xanh", "pork", "dish"),
    ("2026-01-14", "Wed", "breakfast", "Mì tôm; sữa tươi", "milk", "small"),
    ("2026-01-14", "Wed", "lunch", "Cơm tẻ; thịt gà rang gừng; bắp cải", "chicken", "dish"),
    ("2026-01-14", "Wed", "dinner", "Cơm tẻ; cá rô phi lê; su su", "fish", "dish"),
    ("2026-01-15", "Thu", "breakfast", "Cơm tẻ; thịt lợn xay xào trứng gà; sữa tươi", "pork;egg;milk", "dish"),
    ("2026-01-15", "Thu", "lunch", "Cơm tẻ; thịt lợn xay xào trứng gà; su su", "pork;egg", "dish"),
    ("2026-01-15", "Thu", "dinner", "Cơm tẻ; thịt lợn mông, vai; su su", "pork", "dish"),
    ("2026-01-16", "Fri", "breakfast", "Mì tôm; sữa tươi", "milk", "small"),
    ("2026-01-16", "Fri", "lunch", "Cơm tẻ; thịt lợn xay xào trứng gà; bắp cải", "pork;egg", "dish")])

# S04 Leng Su Sin primary, boarders: weekly template for 20 to 30 January 2026, with a cost sheet.
add("S04", "S04-2026-01-B", "UPL-07", [
    ("2026-01 wk", "Mon", "breakfast", "Canh mì tôm nấu xúc xích; sữa tươi Mộc Châu 110 ml", "pork;milk", "small"),
    ("2026-01 wk", "Mon", "lunch", "Thịt kho đậu; canh bí đỏ", "pork;tofu", "dish"),
    ("2026-01 wk", "Mon", "dinner", "Uống sữa; thịt lợn xay rim; canh bí đỏ", "pork;milk", "dish"),
    ("2026-01 wk", "Tue", "breakfast", "Xôi đỗ", "legume", "none"),
    ("2026-01 wk", "Tue", "lunch", "Thịt quay; canh rau bắp cải", "pork", "dish"),
    ("2026-01 wk", "Tue", "dinner", "Bánh gạo; trứng rán; lạc rang muối; canh rau bắp cải", "egg;peanut", "dish"),
    ("2026-01 wk", "Wed", "breakfast", "Bánh chưng", "pork", "small"),
    ("2026-01 wk", "Wed", "lunch", "Thịt xào su su, cà rốt; canh bí đỏ", "pork", "dish"),
    ("2026-01 wk", "Wed", "dinner", "Bánh gạo; thịt lợn xay rim; canh bí đỏ", "pork", "dish"),
    ("2026-01 wk", "Thu", "breakfast", "Xôi đỗ; sữa tươi", "legume;milk", "small"),
    ("2026-01 wk", "Thu", "lunch", "Thịt kho đậu; canh cải bắp", "pork;tofu", "dish"),
    ("2026-01 wk", "Thu", "dinner", "Thịt lợn xay rim; canh rau cải bắp", "pork", "dish"),
    ("2026-01 wk", "Fri", "breakfast", "Bánh chưng", "pork", "small"),
    ("2026-01 wk", "Fri", "lunch", "Thịt lợn quay; canh bí đỏ", "pork", "dish")])
# S04 Nuoi Em charity lunches (143 pupils at four sites): Mon to Thu template, VND 8,000 a lunch.
add("S04", "S04-2026-01-NE", "UPL-08", [
    ("2026-01 wk", "Mon", "lunch", "Thịt lợn mông, vai, ba chỉ; đậu phụ; rau bắp cải", "pork;tofu", "dish"),
    ("2026-01 wk", "Tue", "lunch", "Trứng vịt nhỡ; rau bắp cải", "egg", "dish"),
    ("2026-01 wk", "Wed", "lunch", "Thịt lợn mông, vai; đậu phụ; rau bắp cải", "pork;tofu", "dish"),
    ("2026-01 wk", "Thu", "lunch", "Trứng vịt nhỡ; rau bắp cải", "egg", "dish")], note="charity-funded lunch, not Decree 66")

# S05 Leng Su Sin lower secondary, week 26 (2 to 7 March 2026), with cost sheet.
add("S05", "S05-2026-03-02", "UPL-09", [
    ("2026-03-02", "Mon", "breakfast", "Canh mì tôm", "none", "none"),
    ("2026-03-02", "Mon", "lunch", "Thịt đậu sốt cà chua; canh rau, củ, quả", "pork;tofu", "dish"),
    ("2026-03-02", "Mon", "dinner", "Thịt lợn xào hành tây; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-03", "Tue", "breakfast", "Xôi nếp đỗ", "legume", "none"),
    ("2026-03-03", "Tue", "lunch", "Thịt đậu sốt cà chua; canh rau, củ, quả", "pork;tofu", "dish"),
    ("2026-03-03", "Tue", "dinner", "Thịt lợn xào hành tây; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-04", "Wed", "breakfast", "Xôi nếp đỗ", "legume", "none"),
    ("2026-03-04", "Wed", "lunch", "Thịt kho tàu; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-04", "Wed", "dinner", "Thịt lợn xào su su; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-05", "Thu", "breakfast", "Xôi nếp đỗ", "legume", "none"),
    ("2026-03-05", "Thu", "lunch", "Thịt đậu sốt cà chua; canh rau, củ, quả", "pork;tofu", "dish"),
    ("2026-03-05", "Thu", "dinner", "Thịt lợn xào hành tây; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-06", "Fri", "breakfast", "Xôi nếp đỗ", "legume", "none"),
    ("2026-03-06", "Fri", "lunch", "Thịt kho tàu; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-06", "Fri", "dinner", "Thịt lợn xào su su; canh rau, củ, quả", "pork", "dish"),
    ("2026-03-07", "Sat", "breakfast", "Xôi nếp đỗ", "legume", "none")])

# S06 Sen Thuong, 5 to 9 January 2026, with cost sheet.
add("S06", "S06-2026-01-05", "UPL-10", [
    ("2026-01-05", "Mon", "breakfast", "Xôi", "none", "none"),
    ("2026-01-05", "Mon", "lunch", "Sườn rang hành; canh rau; cơm tẻ", "pork", "dish"),
    ("2026-01-05", "Mon", "dinner", "Thịt lợn rang hành; canh rau cải; cơm tẻ", "pork", "dish"),
    ("2026-01-06", "Tue", "breakfast", "Canh mì tôm", "none", "none"),
    ("2026-01-06", "Tue", "lunch", "Đậu kho thịt; canh bí; cơm tẻ", "pork;tofu", "dish"),
    ("2026-01-06", "Tue", "dinner", "Sườn rang; đậu kho hành; canh bí; cơm tẻ", "pork;tofu", "dish"),
    ("2026-01-07", "Wed", "breakfast", "Xôi", "none", "none"),
    ("2026-01-07", "Wed", "lunch", "Trứng rán; giò; canh rau; cơm tẻ", "egg;pork", "dish"),
    ("2026-01-07", "Wed", "dinner", "Thịt lợn rang hành; đậu sốt cà chua; canh rau cải; cơm tẻ", "pork;tofu", "dish"),
    ("2026-01-08", "Thu", "breakfast", "Canh mì tôm", "none", "none"),
    ("2026-01-08", "Thu", "lunch", "Đậu kho thịt; canh bí; cơm tẻ", "pork;tofu", "dish"),
    ("2026-01-08", "Thu", "dinner", "Sườn rang; đậu kho hành; canh bí; cơm tẻ", "pork;tofu", "dish"),
    ("2026-01-09", "Fri", "breakfast", "Xôi", "none", "none"),
    ("2026-01-09", "Fri", "lunch", "Trứng rán; đậu sốt cà chua; canh rau; cơm tẻ", "egg;tofu", "dish")])

# S07 Ta Ngao, week 2 (7 to 13 September 2026), main campus; seven-day boarding.
add("S07", "S07-2026-09-07", "UPL-11", [
    ("2026-09-07", "Mon", "breakfast", "Mì tôm", "none", "none"),
    ("2026-09-07", "Mon", "lunch", "Thịt lợn (mông, vai) xào hành; rau cải", "pork", "dish"),
    ("2026-09-07", "Mon", "dinner", "Chả cá; rau cải", "fish", "dish"),
    ("2026-09-08", "Tue", "breakfast", "Bánh mì ngọt", "none", "none"),
    ("2026-09-08", "Tue", "lunch", "Thịt lợn (mông, vai); đậu phụ; bí đỏ", "pork;tofu", "dish"),
    ("2026-09-08", "Tue", "dinner", "Cá chép kho riềng; rau cải", "fish", "dish"),
    ("2026-09-09", "Wed", "breakfast", "Mì tôm", "none", "none"),
    ("2026-09-09", "Wed", "lunch", "Thịt gà rang gừng; rau cải", "chicken", "dish"),
    ("2026-09-09", "Wed", "dinner", "Giò lụa lợn; rau cải", "pork", "dish"),
    ("2026-09-10", "Thu", "breakfast", "Bánh mì ngọt", "none", "none"),
    ("2026-09-10", "Thu", "lunch", "Thịt lợn (mông, vai); đậu phụ; rau cải", "pork;tofu", "dish"),
    ("2026-09-10", "Thu", "dinner", "Thịt gà rang gừng; rau cải", "chicken", "dish"),
    ("2026-09-11", "Fri", "breakfast", "Mì tôm", "none", "none"),
    ("2026-09-11", "Fri", "lunch", "Thịt gà rang gừng; rau cải", "chicken", "dish"),
    ("2026-09-11", "Fri", "dinner", "Trứng vịt; rau cải", "egg", "dish"),
    ("2026-09-12", "Sat", "breakfast", "Mì tôm", "none", "none"),
    ("2026-09-12", "Sat", "lunch", "Thịt lợn (mông, vai) xào hành; rau cải", "pork", "dish"),
    ("2026-09-12", "Sat", "dinner", "Chả cá; rau cải", "fish", "dish"),
    ("2026-09-13", "Sun", "breakfast", "Bánh mì ngọt", "none", "none"),
    ("2026-09-13", "Sun", "lunch", "Thịt lợn (mông, vai); rau cải", "pork", "dish"),
    ("2026-09-13", "Sun", "dinner", "Trứng vịt; rau cải", "egg", "dish")])

# S08 Hong Thu, February 2026 weekly template (menu headed "January", dated 1 to 28 February 2026).
add("S08", "S08-2026-02-T", "UPL-12", [
    ("2026-02 wk", "Mon", "breakfast", "Cơm; trứng vịt, cà chua; canh rau cải", "egg", "dish"),
    ("2026-02 wk", "Mon", "lunch", "Giò lợn; đậu phụ, cà chua; canh rau cải", "pork;tofu", "dish"),
    ("2026-02 wk", "Mon", "dinner", "Thịt gà, gừng; canh rau cải", "chicken", "dish"),
    ("2026-02 wk", "Tue", "breakfast", "Mì tôm", "none", "none"),
    ("2026-02 wk", "Tue", "lunch", "Giò lợn; đậu phụ, cà chua; canh bí, su su", "pork;tofu", "dish"),
    ("2026-02 wk", "Tue", "dinner", "Thịt lợn mông, vai; đậu phụ; canh bí, su su", "pork;tofu", "dish"),
    ("2026-02 wk", "Wed", "breakfast", "Cơm; trứng vịt, cà chua; canh bắp cải", "egg", "dish"),
    ("2026-02 wk", "Wed", "lunch", "Thịt gà, gừng; canh bắp cải", "chicken", "dish"),
    ("2026-02 wk", "Wed", "dinner", "Thịt lợn mông, vai; đậu phụ, cà chua; canh bắp cải", "pork;tofu", "dish"),
    ("2026-02 wk", "Thu", "breakfast", "Cơm; trứng vịt, cà chua; canh bí, su su", "egg", "dish"),
    ("2026-02 wk", "Thu", "lunch", "Giò lợn; đậu phụ; canh bí, su su", "pork;tofu", "dish"),
    ("2026-02 wk", "Thu", "dinner", "Thịt lợn mông, vai; đậu phụ, cà chua; canh bí, su su", "pork;tofu", "dish"),
    ("2026-02 wk", "Fri", "breakfast", "Mì tôm", "none", "none"),
    ("2026-02 wk", "Fri", "lunch", "Giò lợn, gừng; canh rau cải", "pork", "dish"),
    ("2026-02 wk", "Sun", "dinner", "Giò lợn; đậu phụ, cà chua; canh rau cải", "pork;tofu", "dish")])

# S09 Nam Han, April 2026 weekly template, seven days.
add("S09", "S09-2026-04-T", "UPL-13", [
    ("2026-04 wk", "Mon", "breakfast", "Bánh mì", "none", "none"),
    ("2026-04 wk", "Mon", "lunch", "Thịt kho; giò hấp; canh rau, củ, quả", "pork", "dish"),
    ("2026-04 wk", "Mon", "dinner", "Giò kho; trứng luộc; canh", "pork;egg", "dish"),
    ("2026-04 wk", "Tue", "breakfast", "Bánh mì", "none", "none"),
    ("2026-04 wk", "Tue", "lunch", "Thịt gà rang; đậu phụ luộc; canh", "chicken;tofu", "dish"),
    ("2026-04 wk", "Tue", "dinner", "Thịt lợn rang; trứng hấp khay; canh", "pork;egg", "dish"),
    ("2026-04 wk", "Wed", "breakfast", "Xôi", "none", "none"),
    ("2026-04 wk", "Wed", "lunch", "Thịt kho; giò hấp; canh", "pork", "dish"),
    ("2026-04 wk", "Wed", "dinner", "Trứng tráng; thịt kho; canh", "egg;pork", "dish"),
    ("2026-04 wk", "Thu", "breakfast", "Bánh mì", "none", "none"),
    ("2026-04 wk", "Thu", "lunch", "Thịt gà rang; trứng hấp khay; canh", "chicken;egg", "dish"),
    ("2026-04 wk", "Thu", "dinner", "Giò luộc; đậu phụ rán; canh", "pork;tofu", "dish"),
    ("2026-04 wk", "Fri", "breakfast", "Xôi", "none", "none"),
    ("2026-04 wk", "Fri", "lunch", "Thịt lợn rang; đậu luộc; canh", "pork;tofu", "dish"),
    ("2026-04 wk", "Fri", "dinner", "Thịt kho; trứng luộc; canh", "pork;egg", "dish"),
    ("2026-04 wk", "Sat", "breakfast", "Bánh mì", "none", "none"),
    ("2026-04 wk", "Sat", "lunch", "Thịt gà rang; trứng tráng; canh", "chicken;egg", "dish"),
    ("2026-04 wk", "Sat", "dinner", "Giò; canh", "pork", "dish"),
    ("2026-04 wk", "Sun", "breakfast", "Bánh mì", "none", "none"),
    ("2026-04 wk", "Sun", "lunch", "Thịt lợn; canh", "pork", "dish"),
    ("2026-04 wk", "Sun", "dinner", "Giò, chả lợn; canh", "pork", "dish")])

# S10 Muong Do, weeks 2 and 3 of April 2026 (identical cycle).
def md_week(week, d):
    mon, tue, wed, thu, fri = d
    add("S10", week, "UPL-14", [
        (mon, "Mon", "lunch", "Thịt lợn rang; rau xào; canh rau", "pork", "dish"),
        (mon, "Mon", "dinner", "Thịt xay rang; rau xào; canh rau", "pork", "dish"),
        (tue, "Tue", "breakfast", "Bánh mỳ; sữa", "milk", "small"),
        (tue, "Tue", "lunch", "Thịt gà rang; rau bắp cải xào; canh rau", "chicken", "dish"),
        (tue, "Tue", "dinner", "Thịt lợn sốt đậu cà chua; su su xào; rau nấu canh", "pork;tofu", "dish"),
        (wed, "Wed", "breakfast", "Mỳ tôm; trứng", "egg", "small"),
        (wed, "Wed", "lunch", "Thịt lợn rang; rau xào; canh rau cải", "pork", "dish"),
        (wed, "Wed", "dinner", "Thịt lợn rang; rau xào; canh rau", "pork", "dish"),
        (thu, "Thu", "breakfast", "Bánh mỳ; sữa", "milk", "small"),
        (thu, "Thu", "lunch", "Thịt gà rang; rau xào; rau nấu canh", "chicken", "dish"),
        (thu, "Thu", "dinner", "Thịt lợn rang; su su xào; rau nấu canh", "pork", "dish"),
        (fri, "Fri", "breakfast", "Mỳ tôm; trứng", "egg", "small"),
        (fri, "Fri", "lunch", "Thịt lợn rang; rau xào; canh rau", "pork", "dish"),
        (fri, "Fri", "dinner", "Bánh mỳ; sữa (mang về)", "milk", "small")])
md_week("S10-2026-04-06", ("2026-04-06", "2026-04-07", "2026-04-08", "2026-04-09", "2026-04-10"))
md_week("S10-2026-04-13", ("2026-04-13", "2026-04-14", "2026-04-15", "2026-04-16", "2026-04-17"))

# S11 Cao Bang provincial PTDTNT, weeks 22 and 24 (January 2026). Main (protein) dishes only.
add("S11", "S11-2026-01-12", "UPL-15", [
    ("2026-01-12", "Mon", "breakfast", "Phở; thịt xay xào hành; canh xương", "pork", "dish"),
    ("2026-01-12", "Mon", "lunch", "Lạp sườn xào dứa; đậu rán; canh giá đỗ tương", "pork;tofu", "dish"),
    ("2026-01-12", "Mon", "dinner", "Thịt xào thập cẩm; nem rán; canh cải xoong", "pork", "dish"),
    ("2026-01-13", "Tue", "breakfast", "Mì tôm; giò bé", "pork", "small"),
    ("2026-01-13", "Tue", "lunch", "Sườn xào chua ngọt; lạc rang; canh bí đỏ", "pork;peanut", "dish"),
    ("2026-01-13", "Tue", "dinner", "Thịt xay xào hành, cà chua; trứng rán; canh rau cải thịt xay", "pork;egg", "dish"),
    ("2026-01-14", "Wed", "breakfast", "Bánh cuốn; canh xương", "pork", "small"),
    ("2026-01-14", "Wed", "lunch", "Thịt gà xào nấm hương; tương xào thịt xay; canh dưa đầu cá", "chicken;pork;fish", "dish"),
    ("2026-01-14", "Wed", "dinner", "Xúc xích rán; thịt xay xào tỏi lá; canh cải cúc thịt xay", "pork", "dish"),
    ("2026-01-15", "Thu", "breakfast", "Xôi gấc, ruốc", "pork", "small"),
    ("2026-01-15", "Thu", "lunch", "Lạp sườn xào dứa; đậu nhồi; canh rau ngải thịt xay", "pork;tofu", "dish"),
    ("2026-01-15", "Thu", "dinner", "Thịt xay xào rau củ; nem rán; canh cải xoong thịt xay", "pork", "dish"),
    ("2026-01-16", "Fri", "breakfast", "Phở; thịt xay xào hành; canh xương", "pork", "dish"),
    ("2026-01-16", "Fri", "lunch", "Giò xào hành; đậu phụ nấu canh xương, cà chua", "pork;tofu", "dish"),
    ("2026-01-16", "Fri", "dinner", "Thịt xào thập cẩm; chả cá; canh dưa cà chua", "pork;fish", "dish"),
    ("2026-01-17", "Sat", "breakfast", "Mì tôm; giò bé", "pork", "small"),
    ("2026-01-17", "Sat", "lunch", "Thịt xay xào rau củ; trứng rán; canh giá đỗ tương", "pork;egg", "dish"),
    ("2026-01-17", "Sat", "dinner", "Thịt kho dừa; nem rán; canh cải cúc thịt xay", "pork", "dish"),
    ("2026-01-18", "Sun", "lunch", "Thịt xay xào tỏi lá; đậu nhồi; canh rau ngải thịt xay", "pork;tofu", "dish"),
    ("2026-01-18", "Sun", "dinner", "Thịt xào dứa; tương xào thịt xay; canh cải cúc thịt xay", "pork", "dish")])
add("S11", "S11-2026-01-26", "UPL-15", [
    ("2026-01-26", "Mon", "breakfast", "Phở; thịt xay xào hành; canh xương", "pork", "dish"),
    ("2026-01-26", "Mon", "lunch", "Thịt xào dưa; đậu phụ nấu canh xương; canh bí đỏ thịt xay", "pork;tofu", "dish"),
    ("2026-01-26", "Mon", "dinner", "Lạp sườn xào dứa; tương xào thịt xay; canh cải xoong thịt xay", "pork", "dish"),
    ("2026-01-27", "Tue", "breakfast", "Xôi đỗ, ruốc", "legume;pork", "small"),
    ("2026-01-27", "Tue", "lunch", "Thịt xào chua ngọt; nem rán; canh dưa, cà chua", "pork", "dish"),
    ("2026-01-27", "Tue", "dinner", "Thịt xào thập cẩm; cá rán tẩm bột; canh rau cải thịt xay", "pork;fish", "dish"),
    ("2026-01-28", "Wed", "breakfast", "Bánh cuốn; canh xương", "pork", "small"),
    ("2026-01-28", "Wed", "lunch", "Thịt xay xào tỏi lá; chả cá; canh dưa cà chua thịt xay", "pork;fish", "dish"),
    ("2026-01-28", "Wed", "dinner", "Xúc xích rán; thịt xay xào hành, cà chua; canh cải cúc thịt xay", "pork", "dish"),
    ("2026-01-29", "Thu", "breakfast", "Mì tôm; thịt xay xào hành", "pork", "dish"),
    ("2026-01-29", "Thu", "lunch", "Thịt xào chua ngọt; đậu nhồi; canh bí đỏ thịt xay", "pork;tofu", "dish"),
    ("2026-01-29", "Thu", "dinner", "Lạp sườn xào dứa; lạc rang; canh cải xoong thịt xay", "pork;peanut", "dish"),
    ("2026-01-30", "Fri", "breakfast", "Phở; thịt xay xào hành; canh xương", "pork", "dish"),
    ("2026-01-30", "Fri", "lunch", "Thịt gà xào nấm hương; đậu phụ nấu canh xương, cà chua; canh rau cải thịt xay", "chicken;tofu", "dish"),
    ("2026-01-30", "Fri", "dinner", "Thịt xay xào rau củ; nem rán; canh giá đỗ tương", "pork", "dish"),
    ("2026-01-31", "Sat", "breakfast", "Bánh bao nhân thịt, trứng cút", "pork;egg", "small"),
    ("2026-01-31", "Sat", "lunch", "Thịt xào dứa; chả cá; canh rau ngải thịt xay", "pork;fish", "dish"),
    ("2026-01-31", "Sat", "dinner", "Mọc sốt cà chua; tương xào thịt xay; canh cải cúc", "pork", "dish"),
    ("2026-02-01", "Sun", "lunch", "Thịt xay xào tỏi lá; trứng rán; canh dưa, cà chua", "pork;egg", "dish"),
    ("2026-02-01", "Sun", "dinner", "Thịt tẩm bột chiên rán; đậu nhồi; canh cải xoong", "pork;tofu", "dish")])

# S12 Mang Den PTDTNT, 7 to 13 and 14 to 20 September 2026. Breakfast is a daily choice of
# instant noodles with egg and sausage, or sticky rice with pork floss (coded small).
def mden_week(week, d, mon_side, sun_l):
    mon, tue, wed, thu, fri, sat, sun = d
    add("S12", week, "UPL-16", [
        (mon, "Mon", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (mon, "Mon", "lunch", "Thịt heo kho trứng; " + mon_side + "; canh bầu", "pork;egg" + (";chicken" if "lòng gà" in mon_side else ""), "dish"),
        (mon, "Mon", "dinner", "Gà kho sả; rau muống hoặc cải ngọt; canh lá giang", "chicken", "dish"),
        (tue, "Tue", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (tue, "Tue", "lunch", "Thịt heo kho chả lụa; bí đỏ; canh bí xanh", "pork", "dish"),
        (tue, "Tue", "dinner", "Cá diêu kho; bầu xào; canh cải bó", "fish", "dish"),
        (wed, "Wed", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (wed, "Wed", "lunch", "Sườn heo kho; dưa leo; canh mồng tơi", "pork", "dish"),
        (wed, "Wed", "dinner", "Thịt heo kho chả cá; bí xanh; canh rau dền", "pork;fish", "dish"),
        (thu, "Thu", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (thu, "Thu", "lunch", "Thịt heo kho tôm; cải thìa; canh mướp", "pork;seafood", "dish"),
        (thu, "Thu", "dinner", "Cá rô phi kho; cải thảo; canh bí đỏ", "fish", "dish"),
        (fri, "Fri", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (fri, "Fri", "lunch", "Gà kho sả; phở khô xào lòng gà, thịt bằm hoặc cải ngọt; canh cải bó", "chicken", "dish"),
        (fri, "Fri", "dinner", "Thịt heo kho trứng; bắp xú; canh chua", "pork;egg", "dish"),
        (sat, "Sat", "breakfast", "Mì tôm trứng, xúc xích / xôi chả bông", "egg;pork", "small"),
        (sat, "Sat", "lunch", "Cá ngừ; cải thảo; canh mướp", "fish", "dish"),
        (sat, "Sat", "dinner", "Sườn heo kho; bí xanh; canh mồng tơi", "pork", "dish"),
        (sun, "Sun", "breakfast", "Bánh hỏi chả lụa / mì tôm trứng, xúc xích", "pork;egg", "small"),
        (sun, "Sun", "lunch", sun_l + "; bầu xào; canh rau má", "pork", "dish"),
        (sun, "Sun", "dinner", "Thịt heo kho cá khô; cải ngọt; canh rau dền", "pork;fish", "dish")])
mden_week("S12-2026-09-07", ("2026-09-07", "2026-09-08", "2026-09-09", "2026-09-10", "2026-09-11", "2026-09-12", "2026-09-13"), "rau muống", "Thịt heo kho măng")
mden_week("S12-2026-09-14", ("2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19", "2026-09-20"), "phở khô xào lòng gà, thịt bằm", "Thịt heo kho dưa cải")

# S13 Na Hy PTDTNT, 14 to 20 September 2026 (lunch and dinner listed; VND 27,500 a meal).
add("S13", "S13-2026-09-14", "UPL-17", [
    ("2026-09-14", "Mon", "lunch", "Sườn rang chua ngọt; đậu phụ rán sốt cà chua; bắp cải luộc; canh", "pork;tofu", "dish"),
    ("2026-09-14", "Mon", "dinner", "Tôm rang; trứng rán; su su xào; canh", "seafood;egg", "dish"),
    ("2026-09-15", "Tue", "lunch", "Thịt bò xào thập cẩm; xúc xích rán; bí đỏ luộc; canh; sữa tươi", "beef;pork;milk", "dish"),
    ("2026-09-15", "Tue", "dinner", "Thịt băm hấp; chả thịt lợn rán; bí xanh luộc; canh", "pork", "dish"),
    ("2026-09-16", "Wed", "lunch", "Thịt gà rán; trứng luộc; bắp cải xào; canh", "chicken;egg", "dish"),
    ("2026-09-16", "Wed", "dinner", "Thịt xào thập cẩm; chả mực rán; su su luộc; canh", "pork;seafood", "dish"),
    ("2026-09-17", "Thu", "lunch", "Cá rô phi rán; giò lợn hấp; khoai tây xào; canh; sữa tươi", "fish;pork;milk", "dish"),
    ("2026-09-17", "Thu", "dinner", "Thịt lợn kho tàu; đậu phụ rán sốt cà chua; bí đỏ luộc; canh", "pork;tofu", "dish"),
    ("2026-09-18", "Fri", "lunch", "Sườn rán; trứng luộc; bắp cải xào; canh", "pork;egg", "dish"),
    ("2026-09-18", "Fri", "dinner", "Thịt băm hấp; xúc xích rán; su su xào; canh", "pork", "dish"),
    ("2026-09-19", "Sat", "lunch", "Thịt bò xào thập cẩm; trứng vịt rán; bí xanh luộc; canh", "beef;egg", "dish"),
    ("2026-09-19", "Sat", "dinner", "Thịt kho đậu phụ; chả cá thì là rán; su su xào; canh", "pork;tofu;fish", "dish"),
    ("2026-09-20", "Sun", "lunch", "Thịt lợn rang; xúc xích rán; khoai tây xào; canh", "pork", "dish"),
    ("2026-09-20", "Sun", "dinner", "Thịt gà rang xả; trứng rán; bí đỏ luộc; canh; sữa tươi", "chicken;egg;milk", "dish")])

GROUP = {s: ("full boarding (PTDTNT)" if s in ("S11", "S12", "S13") else "semi-boarding (PTDTBT)") for s in SCHOOLS}

# ---------------------------------------------------------------------------
# 2. Purchase quantities from published cost sheets (per pupil, raw weight)
# ---------------------------------------------------------------------------
Q = [
 # school, sheet, meal, pupils, item, kg, unit_price, source
 ("S01", "boarding 21 to 30 Sep 2026", "lunch, pork day (Mon)", 759, "pork shoulder and rump", 125, 148000, "UPL-01"),
 ("S01", "boarding 21 to 30 Sep 2026", "lunch, pork and tofu day (Tue)", 759, "pork shoulder and rump", 81, 148000, "UPL-01"),
 ("S01", "boarding 21 to 30 Sep 2026", "lunch, pork and tofu day (Tue)", 759, "tofu", 60, 25000, "UPL-01"),
 ("S01", "boarding 21 to 30 Sep 2026", "dinner, pork day (Mon)", 759, "pork shoulder and rump", 81, 148000, "UPL-01"),
 ("S01", "boarding 21 to 30 Sep 2026", "dinner, chicken day (Tue)", 759, "live local cross-bred chicken (live weight)", 185, 100000, "UPL-01"),
 ("S01", "boarding 21 to 30 Sep 2026", "each lunch or dinner", 759, "rice (supplied in kind)", 170, 0, "UPL-01"),
 ("S01", "Decree 339 lunch 21 to 30 Sep 2026", "lunch, pork day", 14, "pork shoulder and rump", 2.2, 148000, "UPL-04"),
 ("S01", "Decree 339 lunch 21 to 30 Sep 2026", "lunch, pork day (Fri, Mon 28, Wed 30)", 14, "pork shoulder and rump", 2.5, 148000, "UPL-04"),
 ("S01", "Decree 339 lunch 21 to 30 Sep 2026", "lunch, pork and tofu day", 14, "pork shoulder and rump", 1.5, 148000, "UPL-04"),
 ("S01", "Decree 339 lunch 21 to 30 Sep 2026", "lunch, pork and tofu day", 14, "tofu", 1.4, 25000, "UPL-04"),
 ("S01", "Decree 339 lunch 21 to 30 Sep 2026", "lunch", 14, "rice (supplied in kind)", 4.0, 0, "UPL-04"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Mon", 255, "pork (rump, shoulder, belly)", 47.7, 149000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Mon", 255, "tofu", 18, 28000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Tue", 255, "pork (rump, shoulder, belly)", 35.8, 149000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Wed", 255, "pork (rump, shoulder, belly)", 53.3, 149000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Thu", 255, "pork (rump, shoulder, belly)", 49, 149000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Thu", 255, "tofu", 18, 28000, "UPL-07"),
 ("S04", "boarding 20 to 30 Jan 2026", "whole day, Fri", 255, "pork (rump, shoulder, belly)", 28, 149000, "UPL-07"),
 ("S04", "Nuoi Em lunch 20 to 30 Jan 2026", "lunch, pork day", 143, "pork (rump, shoulder, belly)", 4.9, 149000, "UPL-08"),
 ("S04", "Nuoi Em lunch 20 to 30 Jan 2026", "lunch, pork day", 143, "tofu", 11.7, 28000, "UPL-08"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day, Mon", 219, "pork (rump, shoulder, belly)", 47, 158000, "UPL-09"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day, Mon", 219, "tofu", 20, 28000, "UPL-09"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day, Tue and Thu", 219, "pork (rump, shoulder, belly)", 42, 158000, "UPL-09"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day, Tue and Thu", 219, "tofu", 21, 28000, "UPL-09"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day, Wed and Fri", 219, "pork (rump, shoulder, belly)", 46, 158000, "UPL-09"),
 ("S05", "week 26, 2 to 7 Mar 2026", "whole day", 219, "rice (supplied in kind)", 120, 0, "UPL-09"),
 ("S06", "5 to 9 Jan 2026", "one meal, pork or ribs", 67, "pork or pork ribs", 7, 149000, "UPL-10"),
 ("S06", "5 to 9 Jan 2026", "one meal, tofu dish", 67, "tofu", 5, 28000, "UPL-10"),
 ("S06", "5 to 9 Jan 2026", "one meal", 67, "rice (supplied in kind)", 17, 0, "UPL-10"),
]
EGGS = [
 ("S04", "boarding, Tue dinner", 255, 500, 4300, "UPL-07"),
 ("S04", "Nuoi Em lunch, egg day", 143, 242, 4300, "UPL-08"),
 ("S06", "Wed and Fri lunch", 67, 70, 4700, "UPL-10"),
]
DAY_COST = [
 # school, sheet, basis, total_vnd, pupils, source, note
 ("S01", "boarding", "Mon 21 Sep 2026, three meals", 41008000, 759, "UPL-01", "breakfast bought ready-made at VND 10,000; rice in kind"),
 ("S01", "boarding", "Tue 22 Sep 2026, three meals", 41778000, 759, "UPL-01", ""),
 ("S01", "boarding", "Wed 23 Sep 2026, three meals", 42028000, 759, "UPL-01", ""),
 ("S01", "Decree 339 lunch", "pork day (2.2 kg)", 334600, 14, "UPL-04", "rice in kind"),
 ("S01", "Decree 339 lunch", "pork and tofu day", 281000, 14, "UPL-04", ""),
 ("S01", "Decree 339 lunch", "pork day (2.5 kg)", 379000, 14, "UPL-04", ""),
 ("S04", "boarding", "Mon to Thu, three meals", 11600000, 255, "UPL-07", "stated VND 45,490 a pupil a day"),
 ("S04", "boarding", "Fri, two meals", 6330000, 255, "UPL-07", "stated VND 24,824"),
 ("S04", "Nuoi Em lunch", "one lunch", 1144000, 143, "UPL-08", "charity budget"),
 ("S05", "boarding", "Mon, three meals", 10175500, 219, "UPL-09", "stated VND 51,747"),
 ("S05", "boarding", "Tue to Fri, three meals", 10188000, 219, "UPL-09", "stated VND 51,735"),
 ("S08", "boarding", "norm", 46800, 1, "UPL-12", "VND 936,000 a month over 20 days (stated)"),
 ("S13", "full boarding", "one meal", 27500, 1, "UPL-17", "stated on menu"),
]

# ---------------------------------------------------------------------------
# 3. Factory canteen protein dishes from caterers' published menus
# (caterer, region, tier_vnd, menu, slot, dish_vi, lead, others)
# lead: pork, chicken, duck, beef, fish, seafood, egg, tofu, other_animal
# ---------------------------------------------------------------------------
C = []
def cat(caterer, region, tier, menu, src, date, dishes):
    for slot, dish, lead, others in dishes:
        C.append(dict(caterer=caterer, region=region, tier=tier, menu=menu, src=src, date=date,
                      slot=slot, dish=dish, lead=lead, others=others))

cat("Hoang Kim", "South (Binh Duong)", "20000", "sample tray Binh Duong", "UPL-27", "2024-02-25", [("main", "Thịt kho trứng", "pork", "egg")])
cat("Hoang Kim", "South (Binh Duong)", "20000", "sample tray VSIP 1", "UPL-27", "2024-02-25", [("main", "Thịt kho đậu hũ", "pork", "tofu")])
cat("Hoang Kim", "South (Binh Duong)", "20000", "sample tray VSIP 2", "UPL-27", "2024-02-25", [("main", "Thịt kho tép", "pork", "seafood")])
cat("Hoang Kim", "South (Binh Duong)", "20000", "sample tray Tan Uyen", "UPL-27", "2024-02-23", [("main", "Cá thu sốt cà ớt", "fish", "")])
cat("Hoang Kim", "South (Binh Duong)", "25000", "sample tray Dai Dang", "UPL-27", "2024-02-25", [("main", "Cá nục chiên giòn sốt cà", "fish", ""), ("main", "Bò xào hành cần", "beef", "")])
cat("Hoang Kim", "South (Binh Duong)", "25000", "sample tray Tan Uyen", "UPL-27", "2024-02-25", [("main", "Thịt xào đậu que", "pork", ""), ("main", "Gà kho sả ớt", "chicken", "")])

vd = [("Mon", "Thịt kho măng", "pork", ""), ("Mon", "Trứng chiên thịt", "egg", "pork"),
      ("Tue", "Cá diêu hồng sốt cà chua", "fish", ""), ("Tue", "Gà chiên mắm", "chicken", ""),
      ("Wed", "Cotlet sốt cà", "pork", ""), ("Wed", "Đậu hũ nhồi thịt băm", "tofu", "pork"),
      ("Thu", "Thịt bò xào giá đỗ", "beef", ""), ("Thu", "Đậu hũ sốt cà chua", "tofu", ""),
      ("Fri", "Sườn xào chua ngọt", "pork", ""), ("Fri", "Đậu hũ luộc", "tofu", ""), ("Fri", "Gà kho mắm", "chicken", ""),
      ("Sat", "Gà xá xíu", "chicken", ""), ("Sat", "Lòng mề xào giá đỗ", "chicken", ""),
      ("Sun", "Đùi gà chiên", "chicken", ""), ("Sun", "Trứng ốp la", "egg", "")]
cat("Viet Dai", "South (Binh Duong)", "20000 to 30000", "7-day worker menu", "UPL-28", "2023-11-03", vd)

tph = {"17000": [("Cá chi chi chiên giòn", "fish", ""), ("Thịt heo luộc", "pork", ""), ("Thịt bò xào lá lốt", "beef", ""), ("Trứng cút kho thịt", "egg", "pork")],
       "18000": [("Thịt kho trứng", "pork", "egg"), ("Thịt gà chiên hoặc kho", "chicken", ""), ("Cá đồng, cá biển chiên hoặc kho", "fish", "")],
       "20000": [("Thịt kho củ cải", "pork", ""), ("Đậu nhồi thịt", "tofu", "pork"), ("Thịt bò xào", "beef", ""), ("Trứng rán cuộn hành", "egg", "")],
       "22000": [("Nem rán", "pork", ""), ("Mướp đắng nhồi thịt", "pork", ""), ("Khoai tây xào thịt", "pork", ""), ("Đậu phụ tẩm hành", "tofu", "")],
       "25000": [("Sườn cốt lết rim", "pork", ""), ("Đậu nhồi thịt", "tofu", "pork"), ("Thịt gà kho", "chicken", ""), ("Cá cơm chiên", "fish", "")],
       "30000": [("Gà kho gừng", "chicken", ""), ("Thịt xào mắm ruốc", "pork", ""), ("Cá chiên nước mắm", "fish", "")],
       "35000": [("Bò xào giá hẹ", "beef", ""), ("Ếch xào sả ớt", "other_animal", ""), ("Thịt xào măng", "pork", ""), ("Cá sapa chiên sốt cà", "fish", "")],
       "40000": [("Thịt kho tàu", "pork", ""), ("Ba chỉ nướng", "pork", ""), ("Bò sốt tiêu đen", "beef", ""), ("Bò xào bông cải", "beef", "")],
       "50000": [("Cánh gà chiên nước mắm", "chicken", ""), ("Thịt kho tiêu", "pork", ""), ("Bò sốt tiêu đen", "beef", ""), ("Bò xào bông cải", "beef", "")]}
for tier, dl in tph.items():
    cat("Thien Phuc Hieu", "South (Dong Nai, HCMC)", tier, "tier sample " + tier, "UPL-29", "2025-02-15", [("option", d, l, o) for d, l, o in dl])
cat("Thien Phuc Hieu", "South (Dong Nai, HCMC)", "25000", "7-day page sample", "UPL-29", "2025-02-16",
    [("option", "Cá hú kho cà", "fish", ""), ("option", "Trứng sốt tứ xuyên", "egg", ""), ("option", "Gà nấu la ru", "chicken", ""), ("option", "Cá mó chiên sả", "fish", "")])

pm = {
 "week 1 lunch": [("Cotlet ram mặn", "pork", ""), ("Gà ram lá chanh", "chicken", ""), ("Cá basa kho thơm", "fish", ""), ("Vịt kho gừng", "duck", ""), ("Ba rọi ram sả ớt", "pork", ""), ("Cá điêu hồng chưng tương", "fish", ""), ("Thịt kho trứng", "pork", "egg"),
                  ("Đậu hủ tứ xuyên", "tofu", "pork"), ("Cá bạc má chiên giòn", "fish", ""), ("Đậu hủ sốt thịt", "tofu", "pork"), ("Xúc xích ram hành", "pork", ""), ("Cá lưỡi mèo chiên", "fish", ""), ("Trứng cút sốt thịt", "egg", "pork"), ("Cá lưỡi mèo chiên sả", "fish", "")],
 "week 1 afternoon": [("Cá sapa kho thơm", "fish", ""), ("Giò heo giả cầy", "pork", ""), ("Gà kho sả ớt", "chicken", ""), ("Cá sapa kho cà", "fish", ""), ("Gà chiên nước mắm", "chicken", ""), ("Sườn non ram me", "pork", ""), ("Cá lóc kho tiêu", "fish", ""),
                      ("Chả lụa xào đậu que", "pork", ""), ("Trứng luộc", "egg", ""), ("Tim heo cháy tỏi", "pork", ""), ("Chả lụa kho tiêu", "pork", ""), ("Thịt xào cải chua", "pork", ""), ("Chả cá ram hành", "fish", ""), ("Trứng luộc", "egg", "")],
 "week 2 lunch": [("Gà kho sả ớt", "chicken", ""), ("Thịt ram hành", "pork", ""), ("Cá ngừ kho thơm", "fish", ""), ("Tôm cháy tỏi", "seafood", ""), ("Thịt kho trứng", "pork", "egg"), ("Cá trê kho gừng", "fish", ""), ("Thịt kho tiêu", "pork", ""),
                  ("Cá lưỡi chiên sả", "fish", ""), ("Đậu hủ nhồi thịt", "tofu", "pork"), ("Trứng chưng mắm linh", "egg", "fish"), ("Tim heo xào chua ngọt", "pork", ""), ("Cá hường chiên", "fish", ""), ("Thịt xào cải chua", "pork", ""), ("Trứng luộc", "egg", "")],
 "week 2 afternoon": [("Cá lóc kho tộ", "fish", ""), ("Sườn non hầm bắp Mỹ", "pork", ""), ("Bò xào rau muống", "beef", ""), ("Cá sapa kho cà", "fish", ""), ("Gà chiên nước mắm", "chicken", ""), ("Tôm rim Thái", "seafood", ""), ("Cá lóc kho tiêu", "fish", ""),
                      ("Khổ qua nhồi thịt", "pork", ""), ("Cá bạc má kho hành", "fish", ""), ("Xíu mại rim me cay", "pork", ""), ("Chả lụa kho tiêu", "pork", ""), ("Chả bọc trứng rim", "pork", "egg"), ("Trứng sốt mắm tỏi", "egg", ""), ("Trứng luộc", "egg", "")],
 "week 3 lunch": [("Ba rọi cháy cạnh", "pork", ""), ("Giò heo hầm măng", "pork", ""), ("Tôm rim coca", "seafood", ""), ("Thịt kho mắm ruốc", "pork", ""), ("Đùi gà roti", "chicken", ""), ("Cá trê kho gừng", "fish", ""), ("Thịt xào lăn", "pork", ""),
                  ("Cá lưỡi chiên sả", "fish", ""), ("Chả thịt bọc trứng cút rim", "pork", "egg"), ("Chả cá Nha Trang kho tiêu", "fish", ""), ("Cá hường chiên tươi", "fish", ""), ("Chả cá xào cải chua", "fish", ""), ("Đậu hủ tứ xuyên", "tofu", "pork"), ("Cá điêu hồng hấp", "fish", "")],
 "week 3 afternoon": [("Cá lóc kho tộ", "fish", ""), ("Cá lóc kho tộ", "fish", ""), ("Cotlet ram mặn", "pork", ""), ("Cá sapa kho cà", "fish", ""), ("Giò heo chiên nước mắm", "pork", ""), ("Tôm rim Thái", "seafood", ""), ("Cá lóc kho tiêu", "fish", ""),
                      ("Trứng cuộn thịt", "egg", "pork"), ("Đậu hủ tứ xuyên", "tofu", "pork"), ("Khô cá cơm rim", "fish", ""), ("Chả lụa kho tiêu", "pork", ""), ("Cá nục chiên giòn", "fish", ""), ("Trứng sốt mắm tỏi", "egg", ""), ("Trứng luộc", "egg", "")],
}
for k, dl in pm.items():
    cat("Phu My Gold", "South (Ba Ria, Phu My)", "30000", k, "UPL-30", "2023-03-14", [("main or second", d, l, o) for d, l, o in dl])

hs20 = [("Heo kho tiêu", "pork", ""), ("Gà xào sả ớt", "chicken", ""), ("Cá basa áp chảo", "fish", ""), ("Đậu phụ sốt cà", "tofu", ""), ("Sườn rim mặn", "pork", ""),
        ("Gà kho ngũ vị", "chicken", ""), ("Cá thu sốt chanh dây", "fish", ""), ("Heo xào thập cẩm", "pork", ""), ("Đậu phụ chiên trứng", "tofu", "egg"), ("Sườn xào chua ngọt", "pork", ""),
        ("Gà áp chảo sốt tiêu", "chicken", ""), ("Cá basa kho tộ", "fish", ""), ("Heo rim mặn", "pork", ""), ("Trứng cuộn nấm", "egg", ""), ("Heo xào gừng", "pork", ""),
        ("Gà nướng mật ong", "chicken", ""), ("Cá thu áp chảo", "fish", ""), ("Heo kho tàu", "pork", ""), ("Đậu phụ sốt nấm đông cô", "tofu", ""), ("Sườn kho chua ngọt", "pork", "")]
cat("Haseca", "North (Hanoi, northern industrial parks)", "20000 to 28000", "20-day sample (4 weeks x 5 days)", "UPL-32", "2025-12-11", [("main", d, l, o) for d, l, o in hs20])
hs7 = [("Thịt heo kho trứng", "pork", "egg"), ("Cá basa sốt cà", "fish", ""), ("Gà kho gừng", "chicken", ""), ("Đậu phụ nhồi thịt sốt cà", "tofu", "pork"),
       ("Sườn xào chua ngọt", "pork", ""), ("Gà áp chảo sốt tiêu", "chicken", ""), ("Trứng chiên thịt", "egg", "pork")]
cat("Haseca", "North (Hanoi, northern industrial parks)", "20000 to 28000", "7-day sample", "UPL-32", "2025-12-11", [("main", d, l, o) for d, l, o in hs7])

# ---------------------------------------------------------------------------
# 4. Conversion factors (wave 7 L3 method; FUF-03 carcass weights)
# ---------------------------------------------------------------------------
PROT_PER_DISH = 20.0      # g protein per dish (DMA-083)
DISPLACE = 0.8            # net displacement (DMA-114)
PROT_PER_CARC = 0.15      # kg protein per kg carcass (package factor)
CARC = {"pig": 66.0, "chicken": 2.1, "duck": 1.2, "cattle": 148.0, "buffalo": 196.0}
carc_g = PROT_PER_DISH * DISPLACE / PROT_PER_CARC   # g carcass displaced per dish replaced
AN = {"pork": carc_g / 1000 / CARC["pig"],
      "chicken": carc_g / 1000 / CARC["chicken"],
      "duck": carc_g / 1000 / CARC["duck"],
      "beef": carc_g / 1000 * (0.8 / CARC["cattle"] + 0.2 / CARC["buffalo"]),
      "poultry_L3": carc_g / 1000 * (0.88 / CARC["chicken"] + 0.12 / CARC["duck"])}

# Composition per 100 g (APR-04; DIE-12, as tabulated by wave 8 L4): protein g, zinc mg
COMP = {"pork_lean": (19.0, 2.5), "tofu": (10.9, 0.8), "egg": (12.96, 0.9), "rice": (7.9, 1.5)}

# ---------------------------------------------------------------------------
# Output helpers
# ---------------------------------------------------------------------------
BASE_COLS = ["source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"]
def clean(v):
    s = str(v)
    for bad in (chr(0x2013), chr(0x2014)):
        s = s.replace(bad, " to ")
    return s
def write(name, cols, rows):
    path = os.path.join(HERE, name)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(cols)
        for r in rows:
            w.writerow([clean(r.get(c, "")) for c in cols])
    return path

def pct(a, b):
    return round(100.0 * a / b, 1) if b else 0.0

# ---------------------------------------------------------------------------
# A. Meal-level table
# ---------------------------------------------------------------------------
rows = []
for i, m in enumerate(M, 1):
    codes = m["codes"].split(";")
    meats = [c for c in codes if c in MEATS]
    lead = next((c for c in codes if c in ANIMAL and c != "milk"), "none")
    plant = [c for c in codes if c in PLANT]
    s = SCHOOLS[m["school"]]
    rows.append(dict(record_id=f"UPL-M{i:03d}", province=s["province"], school_en=s["name"], school_group=GROUP[m["school"]],
        school_week_id=m["week"], date=m["date"], weekday=m["weekday"], meal=m["meal"], dishes_vi=m["dishes"],
        protein_codes=m["codes"], lead_animal_source=lead, meat_species=";".join(dict.fromkeys(meats)) or "none",
        animal_food_level=m["level"], little_or_no_animal_food="yes" if m["level"] in ("none", "small") else "no",
        no_meat="yes" if not meats else "no", plant_protein=";".join(plant) or "none",
        tofu_beside_or_in_meat_dish="yes" if ("tofu" in codes and meats) else "no",
        textured_soy_or_mock_meat="no", minced_or_processed_meat=("yes" if minced(m["dishes"]) else "no"),
        source_ids=m["src"], evidence_label="VN-direct", confidence="High", demand_evidence_type="revealed",
        notes=("menu plan, not measured intake; " + m["note"]).strip("; ")))
cols = ["record_id", "province", "school_en", "school_group", "school_week_id", "date", "weekday", "meal", "dishes_vi", "protein_codes",
        "lead_animal_source", "meat_species", "animal_food_level", "little_or_no_animal_food", "no_meat", "plant_protein",
        "tofu_beside_or_in_meat_dish", "textured_soy_or_mock_meat", "minced_or_processed_meat"] + BASE_COLS
write("data_upland_school_meals.csv", cols, rows)

# ---------------------------------------------------------------------------
# B. School-week summary
# ---------------------------------------------------------------------------
weeks = defaultdict(list)
for r in rows:
    weeks[(r["school_en"], r["school_week_id"])].append(r)
wk_rows = []
for (sch, wk), rs in weeks.items():
    main = [r for r in rs if r["meal"] in ("lunch", "dinner")]
    brk = [r for r in rs if r["meal"] == "breakfast"]
    lunch = [r for r in rs if r["meal"] == "lunch"]
    sid = next(k for k, v in SCHOOLS.items() if v["name"] == sch)
    wk_rows.append(dict(school_week_id=wk, school_en=sch, province=SCHOOLS[sid]["province"], school_group=GROUP[sid],
        meals_coded=len(rs), lunches=len(lunch), dinners=len([r for r in rs if r["meal"] == "dinner"]), breakfasts=len(brk),
        main_meals_with_meat_fish_or_egg_dish=sum(r["animal_food_level"] == "dish" for r in main),
        main_meals_little_or_no_animal_food=sum(r["little_or_no_animal_food"] == "yes" for r in main),
        main_meals_without_meat=sum(r["no_meat"] == "yes" for r in main),
        breakfasts_little_or_no_animal_food=sum(r["little_or_no_animal_food"] == "yes" for r in brk),
        breakfasts_no_animal_food=sum(r["animal_food_level"] == "none" for r in brk),
        main_meals_with_tofu_or_legume=sum(r["plant_protein"] != "none" for r in main),
        lunches_with_pork=sum("pork" in r["meat_species"] for r in lunch),
        textured_soy_or_mock_meat=0,
        source_ids=rs[0]["source_ids"], evidence_label="VN-direct", confidence="High", demand_evidence_type="revealed",
        notes="menu plan; " + ("fixed weekly cycle repeated" if sid in ("S01", "S02", "S10", "S12") else "single week or template")))
wcols = ["school_week_id", "school_en", "province", "school_group", "meals_coded", "lunches", "dinners", "breakfasts",
         "main_meals_with_meat_fish_or_egg_dish", "main_meals_little_or_no_animal_food", "main_meals_without_meat",
         "breakfasts_little_or_no_animal_food", "breakfasts_no_animal_food", "main_meals_with_tofu_or_legume", "lunches_with_pork",
         "textured_soy_or_mock_meat"] + BASE_COLS
write("data_upland_school_weeks.csv", wcols, wk_rows)

# ---------------------------------------------------------------------------
# C. Headline statistics (printed and used in the paper)
# ---------------------------------------------------------------------------
def stats(sel, label):
    main = [r for r in sel if r["meal"] in ("lunch", "dinner")]
    brk = [r for r in sel if r["meal"] == "breakfast"]
    allm = sel
    out = dict(label=label, meals=len(allm), main=len(main), breakfasts=len(brk),
        all_little_or_no=pct(sum(r["little_or_no_animal_food"] == "yes" for r in allm), len(allm)),
        all_none=pct(sum(r["animal_food_level"] == "none" for r in allm), len(allm)),
        main_little_or_no=pct(sum(r["little_or_no_animal_food"] == "yes" for r in main), len(main)),
        main_no_meat=pct(sum(r["no_meat"] == "yes" for r in main), len(main)),
        brk_little_or_no=pct(sum(r["little_or_no_animal_food"] == "yes" for r in brk), len(brk)),
        brk_none=pct(sum(r["animal_food_level"] == "none" for r in brk), len(brk)),
        main_tofu=pct(sum("tofu" in r["plant_protein"] for r in main), len(main)),
        main_tofu_with_meat=pct(sum(r["tofu_beside_or_in_meat_dish"] == "yes" for r in main), len(main)))
    return out

S = []
S.append(stats(rows, "all coded meals, 13 schools"))
S.append(stats([r for r in rows if r["school_group"].startswith("semi")], "semi-boarding primary and lower secondary (10 schools)"))
S.append(stats([r for r in rows if r["school_group"].startswith("full")], "full boarding (3 schools)"))
S.append(stats([r for r in rows if "charity" not in r["notes"]], "excluding charity lunches"))
# one week per school (first coded week) to reduce weighting by schools with several weeks
first = {}
for r in rows:
    first.setdefault(r["school_en"], r["school_week_id"])
S.append(stats([r for r in rows if r["school_week_id"] == first[r["school_en"]] or r["school_week_id"] == "S04-2026-01-NE"], "one week per school"))

# lead animal source of main meals, and meat species mix of main-dish meat
lead_main = Counter(r["lead_animal_source"] for r in rows if r["meal"] in ("lunch", "dinner"))
meat_dish = Counter()
for m in M:
    if m["meal"] in ("lunch", "dinner"):
        for c in dict.fromkeys(m["codes"].split(";")):
            if c in ANIMAL and c != "milk":
                meat_dish[c] += 1

# school-weighted share of main meals led by pork
per_school = defaultdict(lambda: [0, 0])
for r in rows:
    if r["meal"] in ("lunch", "dinner"):
        per_school[r["school_en"]][1] += 1
        per_school[r["school_en"]][0] += r["lead_animal_source"] == "pork"
school_pork = [a / b for a, b in per_school.values()]

# ---------------------------------------------------------------------------
# D. Purchase quantities and zinc per lunch (our calculation)
# ---------------------------------------------------------------------------
qrows = []
for sch, sheet, meal, n, item, kg, price, src in Q:
    g = kg * 1000 / n
    qrows.append(dict(school_en=SCHOOLS[sch]["name"], province=SCHOOLS[sch]["province"], sheet=sheet, meal_or_day=meal, pupils=n,
        item=item, kg_bought=kg, grams_per_pupil=round(g, 1), unit_price_vnd_per_kg=price or "in kind",
        vnd_per_pupil=round(kg * price / n) if price else "",
        source_ids=src, evidence_label="VN-direct", confidence="High", demand_evidence_type="revealed",
        notes="our calculation: kg bought divided by pupils stated on the sheet; raw weight as purchased"))
for sch, what, n, eggs, price, src in EGGS:
    qrows.append(dict(school_en=SCHOOLS[sch]["name"], province=SCHOOLS[sch]["province"], sheet="cost sheet", meal_or_day=what, pupils=n,
        item="duck eggs (count)", kg_bought="", grams_per_pupil=round(eggs / n, 2), unit_price_vnd_per_kg=f"{price} per egg",
        vnd_per_pupil=round(eggs * price / n), source_ids=src, evidence_label="VN-direct", confidence="High", demand_evidence_type="revealed",
        notes="grams_per_pupil column holds eggs per pupil for this row"))
for sch, sheet, basis, tot, n, src, note in DAY_COST:
    qrows.append(dict(school_en=SCHOOLS[sch]["name"], province=SCHOOLS[sch]["province"], sheet=sheet, meal_or_day=basis, pupils=n,
        item="food spend", kg_bought="", grams_per_pupil="", unit_price_vnd_per_kg="", vnd_per_pupil=round(tot / n),
        source_ids=src, evidence_label="VN-direct", confidence="High", demand_evidence_type="revealed",
        notes=("our calculation: total divided by pupils; " + note).strip("; ")))
qcols = ["school_en", "province", "sheet", "meal_or_day", "pupils", "item", "kg_bought", "grams_per_pupil", "unit_price_vnd_per_kg", "vnd_per_pupil"] + BASE_COLS
write("data_upland_purchases.csv", qcols, qrows)

def zn(pork=0, tofu=0, eggs=0, rice=0):
    p = pork * COMP["pork_lean"][0] / 100 + tofu * COMP["tofu"][0] / 100 + eggs * 55 * 0.86 * COMP["egg"][0] / 100 + rice * COMP["rice"][0] / 100
    z = pork * COMP["pork_lean"][1] / 100 + tofu * COMP["tofu"][1] / 100 + eggs * 55 * 0.86 * COMP["egg"][1] / 100 + rice * COMP["rice"][1] / 100
    return round(p, 1), round(z, 2)
ZL = [
 ("S01 boarding lunch, pork day", 125000 / 759, 0, 0, 170000 / 759, "UPL-01"),
 ("S01 boarding lunch, pork and tofu day", 81000 / 759, 60000 / 759, 0, 170000 / 759, "UPL-01"),
 ("S01 Decree 339 lunch, pork day (2.2 kg)", 2200 / 14, 0, 0, 4000 / 14, "UPL-04"),
 ("S01 Decree 339 lunch, pork and tofu day", 1500 / 14, 1400 / 14, 0, 4000 / 14, "UPL-04"),
 ("S06 lunch, pork and tofu (Tue)", 7000 / 67, 5000 / 67, 0, 17000 / 67, "UPL-10"),
 ("S06 lunch, egg and tofu (Fri, no meat)", 0, 5000 / 67, 70 / 67, 17000 / 67, "UPL-10"),
 ("S04 Nuoi Em lunch, pork and tofu (rice 110 g assumed)", 4900 / 143, 11700 / 143, 0, 110, "UPL-08"),
 ("S04 Nuoi Em lunch, eggs only (rice 110 g assumed)", 0, 0, 242 / 143, 110, "UPL-08"),
]
zrows = []
for label, pork, tofu, eggs, rice, src in ZL:
    p, z = zn(pork, tofu, eggs, rice)
    zrows.append(dict(lunch=label, pork_g=round(pork), tofu_g=round(tofu), eggs=round(eggs, 2), rice_raw_g=round(rice),
        protein_g=p, zinc_mg=z, band_by_guidance="poor (no animal food)" if (pork == 0 and eggs == 0) else "moderate or good",
        lunch_zinc_need_age_6_7_mg="3.4 to 4.5" if (pork == 0 and eggs == 0) else "1.7 to 2.2",
        lunch_zinc_need_boys_10_11_mg="5.2 to 6.9" if (pork == 0 and eggs == 0) else "2.6 to 3.4",
        source_ids=src + "; APR-04; DIE-12", evidence_label="VN-direct", confidence="Low", demand_evidence_type="inferred",
        notes="our calculation; lean pork composition applied to shoulder, rump and belly cuts overstates protein and zinc; duck eggs valued as hen eggs (55 g, 86% edible); vegetables excluded; needs from wave 8 L4 (APR-04 bands)"))
zcols = ["lunch", "pork_g", "tofu_g", "eggs", "rice_raw_g", "protein_g", "zinc_mg", "band_by_guidance", "lunch_zinc_need_age_6_7_mg", "lunch_zinc_need_boys_10_11_mg"] + BASE_COLS
write("data_upland_lunch_zinc.csv", zcols, zrows)

# ---------------------------------------------------------------------------
# E. Canteen dishes and summaries
# ---------------------------------------------------------------------------
crow = []
for i, c in enumerate(C, 1):
    crow.append(dict(record_id=f"UPL-C{i:03d}", caterer=c["caterer"], region=c["region"], price_tier_vnd=c["tier"], menu=c["menu"],
        slot=c["slot"], dish_vi=c["dish"], lead_source=c["lead"], other_sources=c["others"] or "none",
        plant_protein_lead="yes" if c["lead"] == "tofu" else "no", tofu_any="yes" if (c["lead"] == "tofu" or "tofu" in c["others"]) else "no",
        plant_only_dish="yes" if (c["lead"] == "tofu" and not c["others"]) else "no", textured_soy_or_mock_meat="no",
        minced_or_processed_meat="yes" if minced(c["dish"]) else "no",
        source_ids=c["src"], evidence_label="VN-direct", confidence="Medium", demand_evidence_type="stated",
        notes=f"caterer's published sample menu dated {c['date']}; marketing, not a served-menu record"))
ccols = ["record_id", "caterer", "region", "price_tier_vnd", "menu", "slot", "dish_vi", "lead_source", "other_sources", "plant_protein_lead",
         "tofu_any", "plant_only_dish", "textured_soy_or_mock_meat", "minced_or_processed_meat"] + BASE_COLS
write("data_canteen_dishes.csv", ccols, crow)

def mix(sel):
    n = len(sel)
    cnt = Counter(c["lead"] for c in sel)
    return n, cnt
summ = []
groups = [("all caterers, dish-weighted", C)]
for name in ["Hoang Kim", "Viet Dai", "Thien Phuc Hieu", "Phu My Gold", "Haseca"]:
    groups.append((name, [c for c in C if c["caterer"] == name]))
groups.append(("South caterers", [c for c in C if c["region"].startswith("South")]))
groups.append(("North caterer (Haseca)", [c for c in C if c["region"].startswith("North")]))
for label, sel in groups:
    n, cnt = mix(sel)
    meat_n = sum(cnt[k] for k in MEATS)
    summ.append(dict(group=label, protein_dishes=n,
        pork_pct=pct(cnt["pork"], n), chicken_pct=pct(cnt["chicken"], n), duck_pct=pct(cnt["duck"], n), beef_pct=pct(cnt["beef"], n),
        fish_pct=pct(cnt["fish"], n), seafood_pct=pct(cnt["seafood"], n), egg_pct=pct(cnt["egg"], n), tofu_led_pct=pct(cnt["tofu"], n),
        other_animal_pct=pct(cnt["other_animal"], n),
        plant_only_pct=pct(sum(1 for c in sel if c["lead"] == "tofu" and not c["others"]), n),
        tofu_any_pct=pct(sum(1 for c in sel if c["lead"] == "tofu" or "tofu" in c["others"]), n),
        pork_share_of_meat_led_pct=pct(cnt["pork"], meat_n), poultry_share_of_meat_led_pct=pct(cnt["chicken"] + cnt["duck"], meat_n),
        beef_share_of_meat_led_pct=pct(cnt["beef"], meat_n),
        source_ids=";".join(sorted(set(c["src"] for c in sel))), evidence_label="VN-direct", confidence="Medium", demand_evidence_type="stated",
        notes="our calculation; lead source of each protein dish on caterers' published sample menus"))
# caterer-weighted mean
cw = defaultdict(list)
for s in summ[1:6]:
    for k in ("pork_pct", "chicken_pct", "duck_pct", "beef_pct", "fish_pct", "seafood_pct", "egg_pct", "tofu_led_pct"):
        cw[k].append(s[k])
cwrow = dict(group="five caterers, caterer-weighted mean", protein_dishes=len(C))
for k, v in cw.items():
    cwrow[k] = round(statistics.mean(v), 1)
cwrow.update(source_ids="UPL-27;UPL-28;UPL-29;UPL-30;UPL-32", evidence_label="VN-direct", confidence="Medium", demand_evidence_type="stated",
             notes="our calculation; unweighted mean of the five caterers' shares")
summ.append(cwrow)
scols = ["group", "protein_dishes", "pork_pct", "chicken_pct", "duck_pct", "beef_pct", "fish_pct", "seafood_pct", "egg_pct", "tofu_led_pct",
         "other_animal_pct", "plant_only_pct", "tofu_any_pct", "pork_share_of_meat_led_pct", "poultry_share_of_meat_led_pct", "beef_share_of_meat_led_pct"] + BASE_COLS
write("data_canteen_summary.csv", scols, summ)

# ---------------------------------------------------------------------------
# F. Animals per meal replaced (wave 7 L3 method), by observed meat-dish mix
# ---------------------------------------------------------------------------
def apm(cnt):
    meat = {k: cnt.get(k, 0) for k in MEATS}
    tot = sum(meat.values())
    if not tot:
        return 0, {}
    shares = {k: v / tot for k, v in meat.items()}
    val = sum(shares[k] * AN[k] for k in MEATS)
    return val, shares
arows = []
def arow(label, cnt, src, note):
    val, sh = apm(cnt)
    arows.append(dict(case=label, pork_share=round(sh.get("pork", 0), 3), chicken_share=round(sh.get("chicken", 0), 3),
        duck_share=round(sh.get("duck", 0), 3), beef_share=round(sh.get("beef", 0), 3),
        animals_per_meal_replaced=round(val, 4), times_pork_dish=round(val / AN["pork"], 1),
        source_ids=src + "; FUF-03; DMA-083; DMA-114", evidence_label="VN-adjacent", confidence="Low", demand_evidence_type="inferred",
        notes="our calculation; one 20 g protein dish replaced at 0.8 net displacement; meat-led dishes only (fish, seafood, egg and tofu dishes excluded, as in wave 7 L3); " + note))
arow("pork dish only (wave 7 L3)", Counter(pork=1), "FUF-03", "L3 value 0.0016")
arow("chicken dish only (poultry mix, wave 7 L3)", Counter(), "FUF-03", "L3 value 0.055")
arows[-1]["animals_per_meal_replaced"] = round(AN["poultry_L3"], 4); arows[-1]["times_pork_dish"] = round(AN["poultry_L3"] / AN["pork"], 1); arows[-1]["chicken_share"] = 0.88; arows[-1]["duck_share"] = 0.12
all_c = Counter(c["lead"] for c in C)
arow("canteen caterers, all meat-led dishes", all_c, "UPL-27; UPL-28; UPL-29; UPL-30; UPL-32", "dish-weighted")
arow("canteen, South caterers", Counter(c["lead"] for c in C if c["region"].startswith("South")), "UPL-27; UPL-28; UPL-29; UPL-30", "")
arow("canteen, North caterer (Haseca)", Counter(c["lead"] for c in C if c["region"].startswith("North")), "UPL-32", "")
for name in ["Hoang Kim", "Viet Dai", "Thien Phuc Hieu", "Phu My Gold"]:
    arow("canteen, " + name, Counter(c["lead"] for c in C if c["caterer"] == name), next(c["src"] for c in C if c["caterer"] == name), "")
arow("upland school main meals, lead meat", Counter(r["lead_animal_source"] for r in rows if r["meal"] in ("lunch", "dinner")), "UPL-01 to UPL-17", "lead source of each lunch and dinner")
acols = ["case", "pork_share", "chicken_share", "duck_share", "beef_share", "animals_per_meal_replaced", "times_pork_dish"] + BASE_COLS
write("data_animals_per_meal.csv", acols, arows)


# ---------------------------------------------------------------------------
# G. Extra calculations used in the paper (our calculation)
# ---------------------------------------------------------------------------
EXTRA = {}
main_rows = [r for r in rows if r["meal"] in ("lunch", "dinner")]
EXTRA["upland_main_minced_pct"] = pct(sum(r["minced_or_processed_meat"] == "yes" for r in main_rows), len(main_rows))
EXTRA["canteen_minced_pct"] = pct(sum(1 for c in C if minced(c["dish"])), len(C))
# Muong Nhe tofu-day economics (UPL-01): pork day 125 kg pork; tofu day 81 kg pork + 60 kg tofu
pk, tf = COMP["pork_lean"][0] / 100, COMP["tofu"][0] / 100
EXTRA["mn_pork_day_protein_kg"] = round(125 * pk, 1)
EXTRA["mn_tofu_day_protein_kg"] = round(81 * pk + 60 * tf, 1)
EXTRA["mn_pork_day_cost_vnd"] = 125 * 148000
EXTRA["mn_tofu_day_cost_vnd"] = 81 * 148000 + 60 * 25000
EXTRA["mn_pork_cut_pct"] = pct(125 - 81, 125)
EXTRA["mn_cost_cut_pct"] = pct(EXTRA["mn_pork_day_cost_vnd"] - EXTRA["mn_tofu_day_cost_vnd"], EXTRA["mn_pork_day_cost_vnd"])
# Protein-food share of Decree 339 lunch spend (UPL-04)
EXTRA["d339_pork_share_pork_day_pct"] = pct(325600, 334600)
EXTRA["d339_protein_share_tofu_day_pct"] = pct(222000 + 35000, 281000)
# Illustrative Decree 339 pork purchase (UPL-22 pupils; APR-09 amount; UPL-04 shares)
pupils_339 = 417708
money = pupils_339 * 450000 * 9
EXTRA["d339_money_vnd_bn"] = round(money / 1e9)
for share in (0.80, 0.95):
    t = money * share / 148000 / 1000
    EXTRA[f"d339_pork_t_at_{int(share*100)}pct"] = round(t)
    EXTRA[f"d339_pork_protein_t_at_{int(share*100)}pct"] = round(t * pk)
# Per tonne of protein delivered through canteens, observed caterer meat mix (L3 method)
cnt = Counter(c["lead"] for c in C)
meat_tot = sum(cnt[k] for k in MEATS)
sh = {k: cnt[k] / meat_tot for k in MEATS}
carc_t = 0.8 / PROT_PER_CARC   # t carcass per t protein delivered
EXTRA["per_t_pigs"] = round(carc_t * 1000 * sh["pork"] / CARC["pig"], 1)
EXTRA["per_t_birds"] = round(carc_t * 1000 * (sh["chicken"] / CARC["chicken"] + sh["duck"] / CARC["duck"]))
EXTRA["per_t_cattle"] = round(carc_t * 1000 * sh["beef"] * (0.8 / CARC["cattle"] + 0.2 / CARC["buffalo"]), 2)
EXTRA["per_t_total"] = round(EXTRA["per_t_pigs"] + EXTRA["per_t_birds"] + EXTRA["per_t_cattle"])
# CO2e per t protein with the same mix (GLEAM central values used by L3: pork 6.15, broiler 5.18, beef 54.5 kg CO2e per kg carcass; replacement 8.36)
gross = carc_t * (sh["pork"] * 6.15 + (sh["chicken"] + sh["duck"]) * 5.18 + sh["beef"] * 54.5)
EXTRA["per_t_co2e_net"] = round(gross - 8.36, 1)
# D-BENCH 2035 R4 (649 t meat protein displaced, wave 7 L3) re-split by the observed canteen mix
disp = 649
carc = disp / PROT_PER_CARC
EXTRA["r4_2035_pigs"] = round(carc * sh["pork"] / CARC["pig"] * 1000)
EXTRA["r4_2035_birds"] = round(carc * (sh["chicken"] / CARC["chicken"] + sh["duck"] / CARC["duck"]) * 1000)
EXTRA["r4_2035_cattle"] = round(carc * sh["beef"] * (0.8 / CARC["cattle"] + 0.2 / CARC["buffalo"]) * 1000)
EXTRA["r4_2035_total"] = EXTRA["r4_2035_pigs"] + EXTRA["r4_2035_birds"] + EXTRA["r4_2035_cattle"]

# ---------------------------------------------------------------------------
# Print a summary for the paper
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    print("meals", len(rows), "school-weeks", len(wk_rows), "schools", len(set(r["school_en"] for r in rows)))
    for s in S:
        print(s)
    print("lead source of main meals", lead_main)
    print("animal sources appearing in main meals", meat_dish)
    print("pork-led share of main meals per school: mean", round(100 * statistics.mean(school_pork), 1), "min", round(100 * min(school_pork), 1), "max", round(100 * max(school_pork), 1))
    for s in summ:
        print({k: s[k] for k in ("group", "protein_dishes", "pork_pct", "chicken_pct", "duck_pct", "beef_pct", "fish_pct", "seafood_pct", "egg_pct", "tofu_led_pct") if k in s}, "plant_only", s.get("plant_only_pct"), "tofu_any", s.get("tofu_any_pct"), "pork/poultry/beef of meat", s.get("pork_share_of_meat_led_pct"), s.get("poultry_share_of_meat_led_pct"), s.get("beef_share_of_meat_led_pct"))
    for a in arows:
        print(a["case"], a["animals_per_meal_replaced"], a["times_pork_dish"], a["pork_share"], a["chicken_share"], a["duck_share"], a["beef_share"])
    for z in zrows:
        print(z["lunch"], z["protein_g"], z["zinc_mg"])
    print("AN", {k: round(v, 5) for k, v in AN.items()})
    print(EXTRA)

# ---------------------------------------------------------------------------
# H. Money rules and prices for upland school meals and factory canteens
# ---------------------------------------------------------------------------
FM = [
 dict(item="Decree 66/2025/ND-CP: semi-boarding (ban tru) pupil food support", setting="PTDTBT and other schools in ethnic minority and mountain areas", amount="VND 936,000 a month plus 15 kg rice; VND 360,000 more a month if housing is self-arranged; up to 9 months a year",
      per_school_day="VND 46,800 over 20 days (Hong Thu) or about VND 40,700 to 42,500 over 22 to 23 days (our calculation)", source_ids="UPL-20; UPL-12; UPL-23", demand_evidence_type="revealed", notes="in force 1 May 2025; covers two or three meals a day for boarders"),
 dict(item="Decree 188/2026/ND-CP: new boarding schools (truong pho thong noi tru) incl. land-border communes", setting="full boarders and midday boarders", amount="full boarder VND 1,170,000 a month plus 15 kg rice; midday boarder VND 450,000 plus 8 kg; up to 9 months",
      per_school_day="full boarder about VND 45,000 over 26 days or VND 53,200 over 22 days (our calculation)", source_ids="UPL-21", demand_evidence_type="revealed", notes="signed 27 May 2026, in force 15 July 2026 (per UPL-21 and a law-firm summary)"),
 dict(item="Decree 339/2025/ND-CP: lunch for primary and lower-secondary pupils in land-border communes", setting="lunch only", amount="VND 450,000 a month plus 8 kg rice; up to 9 months",
      per_school_day="VND 20,455 to 22,500 (wave 8 L4); observed lunch spend VND 19,871 to 27,071 a pupil (UPL-04)", source_ids="APR-09; UPL-22; UPL-04", demand_evidence_type="revealed", notes="417,708 pupils expected; more than VND 2,000 billion and 30,000 t of rice a year (draft stage, UPL-22)"),
 dict(item="Nuoi Em charity lunch", setting="preschool and primary satellite sites", amount="VND 8,000 a lunch (VND 1,144,000 for 143 pupils)", per_school_day="VND 8,000", source_ids="UPL-08", demand_evidence_type="revealed", notes="charity-funded; 34 g pork and 82 g tofu, or 1.7 duck eggs, a pupil"),
 dict(item="Hope Foundation and De Heus Vietnam top-up", setting="three boarding schools (Son La, Thanh Hoa, Nghe An)", amount="about VND 10,000 more a meal; VND 1.2 billion since 1 Oct 2024; 86,000 breakfasts and 22,000 lunches in 2024 to 2025", per_school_day="", source_ids="UPL-25", demand_evidence_type="revealed", notes="a feed company funding breakfasts and an extra dish"),
 dict(item="Boarding meal cost stated by schools", setting="Pha Danh (Nghe An); Na Hy PTDTNT (Dien Bien)", amount="VND 17,000 to 18,000 a meal (Pha Danh); VND 27,500 a meal (Na Hy)", per_school_day="", source_ids="UPL-23; UPL-17", demand_evidence_type="stated", notes=""),
 dict(item="Factory shift meal, Hai Phong industrial parks (2026)", setting="lunch", amount="average about VND 31,000 (east) and 27,000 (west); some firms VND 17,000; union negotiations raised firms from 20,000 to 22,000, 22,000 to 28,000 and 24,000 to 26,500", per_school_day="", source_ids="UPL-34", demand_evidence_type="revealed", notes="updates CHN-39 (VND 25,000 to 35,000)"),
 dict(item="Caterer price tiers (published)", setting="industrial caterers", amount="VND 17,000 to 50,000 (Thien Phuc Hieu); 18,000 to 30,000 (Viet Dai); 20,000 one protein dish, 25,000 two (Hoang Kim); 20,000 to 25,000 pork, tofu and basa, 25,000 to 30,000 chicken and sea fish, 35,000 to 40,000 beef and mackerel (Haseca)", per_school_day="", source_ids="UPL-27; UPL-28; UPL-29; UPL-32", demand_evidence_type="stated", notes="Haseca: main dish 90 to 120 g a portion"),
]
for r in FM:
    r.update(evidence_label="VN-direct", confidence="Medium" if r["demand_evidence_type"] == "stated" else "High")
write("data_meal_money_and_prices.csv", ["item", "setting", "amount", "per_school_day"] + BASE_COLS, FM)
