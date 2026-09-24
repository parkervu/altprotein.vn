// Build-time inline-SVG chart renderer.
//
//   import { renderAllCharts, chartCss } from './scripts/charts/index.mjs';
//   const charts = renderAllCharts('/abs/path/to/report');
//   charts['chart-feed-import-dependence'].svg  // complete <svg> (or HTML for matrix-table / cards-2x2)
//
// Colours are CSS custom properties only (--series-1..8, --seq-1..7, --chart-*), defined by the site.
import fs from 'node:fs';
import path from 'node:path';
import { readCsv } from '../lib/csv.mjs';
import { svgDoc } from './lib.mjs';
import * as bars from './bars.mjs';
import * as ranges from './ranges.mjs';
import * as lines from './lines.mjs';
import * as grids from './grids.mjs';
import * as tl from './timelines.mjs';
import * as html from './html.mjs';

export { chartCss } from './html.mjs';

/** Renderer per chart id. Each returns {body, height, table} for SVG, or {html, table}. */
const RENDERERS = {
  'chart-feed-import-dependence': bars.feedImportDependence,
  'chart-animal-protein-output': bars.animalProteinOutput,
  'chart-fishmeal-price': lines.fishmealPrice,
  'chart-feedstock-volumes': ranges.feedstockVolumes,
  'chart-feedstock-map': grids.feedstockMap,
  'chart-capability-matrix': html.capabilityMatrix,
  'chart-retail-protein-archetypes': ranges.retailArchetypes,
  'chart-retail-price-per-protein': bars.retailPricePerProtein,
  'chart-timeline': tl.chartTimeline,
  'chart-route-to-market': html.routeToMarket,
  'chart-research-benchmark': bars.researchBenchmark,
  'chart-vn-vc-agritech': bars.vcAgritech,
  'chart-global-altprotein-investment': bars.globalInvestment,
  'chart-hawkwood-scores': grids.hawkwoodScores,
  'chart-regional-approvals': tl.regionalApprovals,
  'chart-cassava-starch-trade': bars.cassavaTrade,
  'chart-cost-stack-fungal': bars.costStackFungal,
  'chart-price-to-beat': ranges.priceToBeat,
  'chart-capex-per-tonne': ranges.capexPerTonne,
  'chart-technology-fit-matrix': grids.technologyFit,
  'chart-plays-scoring': bars.playsScoring,
  'chart-plays-horizon': ranges.playsHorizon,
  'chart-policy-effort-impact': lines.policyScatter,
  'chart-milestones-timeline': tl.milestonesTimeline,
  'chart-scenarios': html.scenarios2035,
  'chart-sources-by-type': bars.sourcesByType,
  'chart-drivers-matrix': lines.driversMatrix,
  'chart-frontier-windows': ranges.frontierWindows,
  'chart-cost-paths-2050': ranges.costPaths2050,
  'chart-sbm-scenarios-2050': lines.sbmScenarios,
  'chart-sbm-tornado': bars.sbmTornado,
  'chart-scenarios-2050': html.scenarios2050,
  'chart-play-robustness': grids.playRobustness,
  'chart-vision-backcast': tl.visionBackcast,
  'chart-robust-moves': grids.robustMoves,
};

function dataCtx(reportDir) {
  const cache = new Map();
  return {
    reportDir,
    csv(rel) {
      if (!cache.has(rel)) cache.set(rel, readCsv(path.join(reportDir, rel)));
      // hand out copies so renderers can sort freely
      return cache.get(rel).map((r) => ({ ...r }));
    },
  };
}

/** Render one chart spec. Exposed for tests and for the interactive page. */
export function renderChart(spec, reportDir, D = dataCtx(reportDir)) {
  const fn = RENDERERS[spec.id];
  if (!fn) throw new Error(`No renderer for chart ${spec.id} (type ${spec.type})`);
  const out = fn(spec, D);
  const svg =
    out.html !== undefined
      ? out.html
      : svgDoc(spec.id, out.height, out.body, spec.title, spec.alt_text);
  return {
    id: spec.id,
    type: spec.type,
    title: spec.title,
    subtitle: spec.subtitle ?? '',
    svg,
    table: out.table,
    notes: spec.notes ?? '',
    alt: spec.alt_text ?? '',
    source_ids: spec.source_ids ?? [],
    evidence: spec.evidence ?? '',
    confidence: spec.confidence ?? '',
    interactive: spec.type === 'interactive-bar',
  };
}

/** @param {string} reportDir absolute path to report/ */
export function renderAllCharts(reportDir) {
  const specs = JSON.parse(
    fs.readFileSync(path.join(reportDir, 'charts', 'chart-specs.json'), 'utf8'),
  );
  const D = dataCtx(reportDir);
  const out = {};
  for (const spec of specs.charts) out[spec.id] = renderChart(spec, reportDir, D);
  return out;
}

export { playScores } from './bars.mjs';
