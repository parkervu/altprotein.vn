// Explicit developer convenience only; never run against a remote environment.
const origin = 'http://127.0.0.1:4321';
const response = await fetch(`${origin}/_emdash/api/setup/dev-bypass`, {
  method: 'POST',
  headers: { 'X-EmDash-Request': '1', Origin: origin },
});
if (!response.ok) throw new Error(`Local setup failed (${response.status}). Start pnpm dev first.`);
console.log('Report imported into local D1. Existing content was preserved.');
console.log(
  `Open ${origin}/_emdash/api/auth/dev-bypass?redirect=/_emdash/admin to use the local test editor.`,
);
