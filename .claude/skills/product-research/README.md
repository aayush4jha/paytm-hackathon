# product-research

`product-research` turns live-product research into a repeatable agent workflow.

It is an Agent Skill for researching competitors, AI products, SaaS tools, and developer platforms from the outside. The skill guides an agent through product exploration, browser-based observation, network capture, source-map / public-package inspection, evidence tracking, and a final readable teardown.

<p align="center">
  <img src="assets/demo.png" alt="product-research replay: protocol stream, answer pipeline, rendered UI" width="100%">
</p>

<p align="center"><sub>An illustrative replay from a product teardown: protocol events -> backend pipeline -> rendered UI. Open <code>examples/perplexity-illustrative/flow-demo.html</code> for the offline interactive demo.</sub></p>

## Why

Product research often fails in the same ways:

1. Exploration is scattered across browser tabs, screenshots, and chat.
2. Observed behavior, inference, and unknowns get mixed together.
3. Network evidence is captured late, or not captured at all.
4. Login-gated products are treated as public landing pages when the real product is behind auth.
5. The final report is hard to audit, hard to resume, and too repetitive to read.

`product-research` makes those habits explicit. It gives the agent a fixed research structure, provenance rules, templates, and safety boundaries so the final docs can be read, checked, and continued later.

## Quick Start

### Option A: ask your agent to install it

Paste this into Claude Code or another agent that can install skills from GitHub:

```text
Install the product-research skill from https://github.com/HaoNan2k/product-research.

Please:
1. Clone the repository.
2. Inspect the README and skill manifest before installing anything.
3. Install it for the current agent host.
4. Tell me where the skill was installed and whether I need to restart the agent.
```

Then start a research task in natural language:

```text
Use product-research to investigate how Perplexity structures its answer flow, citations, and visible product surface.
```

### Option B: install as a Claude Code plugin

In Claude Code:

```text
/plugin marketplace add HaoNan2k/product-research
/plugin install product-research@haonan-product-research
```

Restart the agent if your host requires it, then ask for a product teardown:

```text
Research the Cursor website and app surface with product-research. Focus on onboarding, pricing, editor integration, and any observable agent runtime behavior.
```

### Option C: install as a plain skill

Clone the repository into the skill directory your agent host scans. For Claude Code:

```bash
git clone https://github.com/HaoNan2k/product-research ~/.claude/skills/product-research
```

For a local Codex-style setup, use the configured skills directory for that host.

## Usage Examples

### For users

Research a competitor:

```text
Use product-research to tear down Linear. I care about onboarding, issue creation, collaboration surfaces, and pricing.
```

Research an AI product with login:

```text
Use product-research to investigate this agent workspace. If login is needed, explain what extra evidence login unlocks and hand the browser to me.
```

Research a developer tool:

```text
Use product-research to inspect this CLI product. Check the website, public package metadata, CLI help, docs, and any observable API behavior.
```

### For AI agents

Invoke the skill explicitly when the host does not route by natural language:

```text
Use $product-research at /path/to/product-research to research <product>.

Create the standard docs from the templates, capture raw evidence as you go, separate observed facts from inference, and put all unavailable or unverified claims in open-questions.md.
```

When auth blocks the real product surface:

```text
Use $product-research to continue after a login wall.

First tell the user what login would unlock and what boundaries you will follow. If the user does not log in, continue with public pages, bundles, public packages, CLI output, docs, and search results, then record the missing evidence and confidence impact in open-questions.md.
```

## What It Adds

- A seven-part research document structure: overview, product definition, usage flows, network layer, frontend implementation, differentiation, synthesis, plus open questions.
- A three-level access model: black-box observation, gray-box frontend / public-package inspection, and white-box repository reading when authorized.
- Provenance discipline for every important claim: source, method, timestamp when useful, and whether the claim was observed or inferred.
- Browser and network workflow guidance for landing pages, logged-in apps, streaming responses, WebSocket / SSE frames, screenshots, and raw traces.
- Login-first guidance for auth-gated products: ask the user to log in when it materially improves evidence, then fall back only with clear uncertainty.
- Public package and CLI probes for developer products: npm / PyPI / Homebrew / Docker metadata, packed artifacts, help output, schemas, constants, and dependencies.
- Readability constraints that prevent duplicate sections, drifting numbers, vague superlatives, and scattered TODOs.
- PII handling rules for logged-in research, including redaction and verification before final delivery.

## Research Output Layout

The skill writes research docs with this shape:

```text
<research-target>/
  00-overview.md
  01-product-definition.md
  02-usage-flows.md
  03-network.md
  04-frontend.md
  05-differentiation.md
  99-synthesis.md
  open-questions.md
  raw/
```

`open-questions.md` is the single place for missing evidence, blocked login flows, unverified server behavior, source-map limits, and public-package / live-product mismatches.

## Skill Layout

```text
product-research/
  SKILL.md
  references/
    code-access.md
    fingerprint-probes.md
    network-capture.md
    scenario-design.md
    tool-playbook.md
  templates/
    00-overview.md
    01-product-definition.md
    02-usage-flows.md
    03-network.md
    04-frontend.md
    05-differentiation.md
    99-synthesis.md
    open-questions.md
  examples/
    perplexity-illustrative/
  assets/
    demo.png
  .claude-plugin/
    marketplace.json
    plugin.json
```

## Example

The repository includes an illustrative Perplexity teardown sample under:

```text
examples/perplexity-illustrative/
```

It includes a compact research doc set and a single-file offline demo:

```text
examples/perplexity-illustrative/flow-demo.html
```

The demo reconstructs a visible answer flow with three synchronized panes:

1. Answer pipeline
2. Raw event stream
3. Rendered UI

The example is based on publicly observable Perplexity behavior. The SSE endpoint shape and citation style are grounded in observation; the exact event schema is illustrative rather than a captured production frame log.

## Safety Model

- Only inspect code the user is allowed to access: open-source repositories, the user's own products, publicly shipped source maps, public packages, or explicitly authorized private repositories.
- Do not attempt to bypass login, paywalls, rate limits, or private APIs.
- Do not enter passwords or complete OAuth on behalf of the user. Hand the browser to the user for login.
- Before taking any logged-in action, state what will be submitted, what quota may be consumed, and what will not be touched.
- Do not change account settings, subscriptions, billing, sharing, publishing, or destructive data.
- Redact personal data from saved evidence and verify the redaction before final delivery.
- Treat public packages, CLI output, and frontend bundles as client-side evidence, not proof of current server behavior.

## Status

Current release: `v1.1.0`.

This release adds login-first guidance for auth-gated products and public package / CLI probes for developer-tool research. Future work may add an installer, richer smoke tests, and more complete examples for SaaS dashboards and local-first developer tools.

## License

[MIT](./LICENSE)
