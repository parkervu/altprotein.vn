import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const REPORT = path.join(ROOT, 'report');

/** Split a content file into its YAML frontmatter and Markdown body. */
export function splitFrontmatter(text) {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(text);
  if (!match) throw new Error('Missing frontmatter');
  return { meta: YAML.parse(match[1]), body: text.slice(match[0].length) };
}

/** Load every report page in manifest order. */
export function loadPages() {
  const manifest = JSON.parse(fs.readFileSync(path.join(REPORT, 'site-manifest.json'), 'utf8'));
  return manifest.pages.map((entry) => {
    const text = fs.readFileSync(path.join(REPORT, entry.path), 'utf8');
    const { meta, body } = splitFrontmatter(text);
    if (meta.id !== entry.id)
      throw new Error(`${entry.path}: id ${meta.id} does not match manifest ${entry.id}`);
    return { entry, meta, body };
  });
}

export function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(REPORT, rel), 'utf8'));
}
