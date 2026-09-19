import { useId, useState } from 'react';

type RangeProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
};

const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 1,
});

function Range({ label, value, min, max, step, unit, onChange }: RangeProps) {
  const id = useId();
  return (
    <label className="scenario-control" htmlFor={id}>
      <span>
        {label}
        <output htmlFor={id}>
          {number.format(value)}
          {unit}
        </output>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
      />
      <span className="range-bounds" aria-hidden="true">
        <span>
          {number.format(min)}
          {unit}
        </span>
        <span>
          {number.format(max)}
          {unit}
        </span>
      </span>
    </label>
  );
}

export default function ScenarioTools() {
  const [capacity, setCapacity] = useState(20);
  const [utilisation, setUtilisation] = useState(75);
  const [price, setPrice] = useState(1600);
  const [cost, setCost] = useState(1350);
  const [market, setMarket] = useState(400);
  const [share, setShare] = useState(10);
  const [imports, setImports] = useState(7000);

  const output = (capacity * utilisation) / 100;
  const revenue = (output * price) / 1000;
  const contribution = (output * (price - cost)) / 1000;
  const displaced = (market * share) / 100;
  const importShare = (output / imports) * 100;

  const reset = () => {
    setCapacity(20);
    setUtilisation(75);
    setPrice(1600);
    setCost(1350);
    setMarket(400);
    setShare(10);
    setImports(7000);
  };

  return (
    <section className="scenario-lab" aria-labelledby="scenario-title">
      <div className="scenario-heading">
        <div>
          <p className="eyebrow">Interactive / Change the assumptions</p>
          <h2 id="scenario-title">Model a biomass protein scenario</h2>
          <p>
            Move any control to test a potential outcome. The starting values sit within the ranges
            discussed in this report; they are illustrative, not a forecast.
          </p>
        </div>
        <button type="button" onClick={reset}>
          Reset assumptions
        </button>
      </div>

      <div className="scenario-grid">
        <fieldset>
          <legend>01 / Plant economics</legend>
          <Range
            label="Nameplate capacity"
            value={capacity}
            min={2}
            max={100}
            step={1}
            unit=" kt/year"
            onChange={setCapacity}
          />
          <Range
            label="Plant utilisation"
            value={utilisation}
            min={30}
            max={100}
            step={1}
            unit="%"
            onChange={setUtilisation}
          />
          <Range
            label="Selling price"
            value={price}
            min={800}
            max={2400}
            step={25}
            unit=" USD/t"
            onChange={setPrice}
          />
          <Range
            label="Production cost"
            value={cost}
            min={800}
            max={2200}
            step={25}
            unit=" USD/t"
            onChange={setCost}
          />
          <div className="scenario-results" aria-live="polite">
            <div>
              <span>Annual output</span>
              <strong>{number.format(output)} kt</strong>
            </div>
            <div>
              <span>Annual revenue</span>
              <strong>{money.format(revenue)}m</strong>
            </div>
            <div className={contribution < 0 ? 'negative' : ''}>
              <span>Gross contribution</span>
              <strong>{money.format(contribution)}m</strong>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>02 / First market</legend>
          <Range
            label="Displaceable fishmeal pool"
            value={market}
            min={350}
            max={450}
            step={5}
            unit=" kt/year"
            onChange={setMarket}
          />
          <Range
            label="Share captured"
            value={share}
            min={1}
            max={50}
            step={1}
            unit="%"
            onChange={setShare}
          />
          <div className="scenario-results" aria-live="polite">
            <div>
              <span>Potential demand</span>
              <strong>{number.format(displaced)} kt</strong>
            </div>
            <div>
              <span>Plants at this scale</span>
              <strong>{number.format(displaced / output)}</strong>
            </div>
          </div>
          <p className="scenario-note">
            Uses the report’s 350–450 kt fishmeal pool, not total aquafeed tonnage.
          </p>
        </fieldset>

        <fieldset>
          <legend>03 / Import substitution</legend>
          <Range
            label="Soybean meal consumption"
            value={imports}
            min={5000}
            max={9000}
            step={100}
            unit=" kt/year"
            onChange={setImports}
          />
          <div className="scenario-results" aria-live="polite">
            <div>
              <span>Plant output / consumption</span>
              <strong>{number.format(importShare)}%</strong>
            </div>
            <div>
              <span>Equivalent annual plants</span>
              <strong>{number.format(imports / output)}</strong>
            </div>
          </div>
          <p className="scenario-note">
            This is a scale comparison only. The report does not claim microbial protein can replace
            soybean meal one-for-one.
          </p>
        </fieldset>
      </div>
      <p className="scenario-method">
        <strong>How it works.</strong> Output = capacity × utilisation. Revenue and gross
        contribution exclude capital, finance, tax and distribution. “Plants” divides demand by the
        modelled annual output. Results update only in your browser and are not saved.
      </p>
    </section>
  );
}
