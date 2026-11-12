# Haq — Demo Design (Phase 9)

**Format:** a 5-minute live demo on a phone-sized web app. A second panel shows the **agent trace**, so judges can watch each reasoning step, tool call and clock. Everything runs on a laptop with mock APIs; nothing needs Paytm-internal access.

## Demo data (all synthetic; the policy wording is real and public)

- **Policy:** "SampleCare Health", modelled on IRDAI's standard *Arogya Sanjeevani* wording (Universal Sompo UIN UNIHLIP20171V011920, public PDF).
  - Sum insured ₹5,00,000
  - Room cap 1% of SI = ₹5,000/day (set lower than Arogya's 2% so the case works at ₹5 L SI)
  - ICU 2% = ₹10,000/day
  - Co-pay 0% for age < 61
  - Policy start 12 Jun 2019, so more than 60 months of cover (moratorium applies)
- **Patient:** Ramesh Kulkarni, 56, Pune. Laparoscopic cholecystectomy (gallbladder removal). 4 days in a single private room at ₹8,000/day.
- **Daughter / user:** Priya.

### Hospital final bill: ₹2,27,500

| Line | ₹ |
|---|---|
| Room rent (4 × 8,000) | 32,000 |
| Nursing & RMO | 6,000 |
| Surgeon + anaesthetist | 70,000 |
| OT charges | 35,000 |
| Doctor visits | 8,000 |
| Pharmacy & medicines | 38,000 |
| Surgical consumables (incl. ₹3,200 gloves/masks/kits) | 14,000 |
| Diagnostics (lab, ultrasound) | 22,000 |
| Registration / admin | 2,500 |
| **Total** | **2,27,500** |

### Insurer settlement (mocked FHIR `ClaimResponse`): approved ₹1,38,625, deducted ₹88,875

- The room is capped at ₹20,000.
- Non-payables of ₹5,700 are removed.
- **Proportionate factor 5,000/8,000 = 0.625 is applied to every other line, including pharmacy, consumables and diagnostics.**

### Haq's recomputation (entitlement engine)

| Item | Insurer | Haq (rule) | Verdict |
|---|---|---|---|
| Room excess ₹12,000 | deducted | deducted (R1) | VALID: explained |
| Non-payables ₹5,700 | deducted | deducted (R3) | VALID: explained |
| Proportionate on nursing, surgeon, OT, visits (₹1,19,000 × 0.375) = ₹44,625 | deducted | deducted (R2) | VALID: explained. This is the cost of the room choice. |
| Proportionate on pharmacy ₹38,000 → ₹14,250 | deducted | **not allowed** | **VIOLATION**: IRDAI/HLT/REG/CIR/151/06/2020 |
| Proportionate on consumables ₹10,800 → ₹4,050 | deducted | **not allowed** | **VIOLATION** |
| Proportionate on diagnostics ₹22,000 → ₹8,250 | deducted | **not allowed** | **VIOLATION** |
| **Entitled amount** | ₹1,38,625 | **₹1,65,175** | **Recoverable: ₹26,550** |

Arithmetic check: 20,000 + (1,19,000 × 0.625 = 74,375) + 38,000 + 10,800 + 22,000 = 1,65,175. Legitimate deductions 12,000 + 5,700 + 44,625 = 62,325. 1,65,175 + 62,325 = 2,27,500 ✓.

## The story (5 minutes)

| # | Beat | What the judge sees | Agent trace (right panel) | Capability shown |
|---|---|---|---|---|
| 0 | **Hook (15 s)** | "Last year Indian insurers deducted ₹18,521 crore from hospital bills. Nobody tells you which of those cuts were legal." | — | Problem |
| 1 | **Admission desk (45 s)** | Priya: "पापा को एडमिट कर रहे हैं, कौन सा रूम लें?" ("We're admitting Papa, which room should we take?"). Haq shows the cover card, then room options: *Single ₹8,000 → you pay ≈ ₹62,300 · Twin-share ₹4,500 → you pay ≈ ₹5,700*. | `fetch_policy` → `parse_coverage` (clause D.1.i) → `get_tariff` → `engine.simulate(rooms)` | Context, retrieval, reasoning, recommendation |
| 2 | **Choice & pre-auth (20 s)** | Priya still picks Single (wants privacy for her father). Haq records the informed choice. Pre-auth is requested and the 1-hour clock starts; it is approved in 40 min. | `nhcx.claim(preauth)` · `clock.start(PREAUTH,1h)` · ✓ | Respects the user's choice; tracking |
| 3 | **Discharge day (40 s)** | Doctor advises discharge at 11:00. Haq: "Discharge summary pending from hospital." It nudges the hospital desk. The discharge request is sent at 13:10, so the 3-hour clock starts. At 16:10 it is still not approved: **BREACH**. Haq: "From now on, extra hospital charges are the insurer's responsibility (IRDAI Master Circular 2024)." Evidence is saved. Approved at 17:40. | `clock.start(DISCHARGE,3h)` → `breach_detected` → `evidence.snapshot` → `notify(user, hospital)` | Tracking, rights enforcement |
| 4 | **Settlement letter (60 s), the hero moment** | Priya photographs the settlement letter and bill. In about 20 s: *"₹88,875 was deducted. ₹62,325 follows your policy (here's why, in plain Hindi). **₹26,550 was deducted against IRDAI rules.**"* Each line is colour-coded with the clause and circular. | `vision.ocr(bill, letter)` → `classify_lines` (conf 0.97) → `engine.recompute` → `verifier.check(numbers==engine, citations✓)` | Document intelligence, reasoning, explainability |
| 5 | **Act (40 s)** | "Contest ₹26,550?" A draft reconsideration letter to the insurer's Grievance Redressal Officer appears, citing the circular with the recomputation attached. Priya approves with OTP and it is sent. The ladder is scheduled: day 14 Bima Bharosa, then Ombudsman (pre-drafted, right sequence). | `advocate.draft` → `user.approve(OTP)` → `email.send(GRO)` → `scheduler.add(D+14, BIMA_BHAROSA)` | Action via tools, human approval |
| 6 | **Time-skip (30 s)** | Fast-forward 6 days: the insurer's mock API returns a revised `ClaimResponse` for +₹26,550. Haq verifies the amount against its own computation and tells Priya: "₹26,550 approved. Payment expected by …" | `nhcx.poll` → `verify(amount==expected)` → `notify` → `case.close` | Verifies the outcome |
| 7 | **Escalation (40 s)** | A second, harder case: the insurer queries "possible pre-existing condition, non-disclosure" on an older claim. Haq notes the moratorium (policy active for more than 60 months, §F.13). Because it is an allegation of non-disclosure, it **does not auto-contest**. It hands off to a human claims expert, and the expert console opens with the full case file. | `policy.check(moratorium)=true` → `escalate(reason=NON_DISCLOSURE_ALLEGATION)` → `expert_console.open(case)` | Knows its limits; human in the loop |
| 8 | **Close (20 s)** | "Haq didn't answer a question. It found ₹26,550, filed the contest, watched the clock and knew when to call a human." | Trace summary: 14 tool calls, 3 clocks, 1 human handoff | Pitch |

## Screens (frontend)

1. **Cover card:** sum insured, room cap, co-pay, waiting periods, moratorium status. Each limit has a clause chip that opens the exact wording.
2. **Room simulator:** 2–3 room options with the out-of-pocket estimate and a "why" breakdown.
3. **Case timeline:** admission → pre-auth → stay → discharge → settlement → contest. Live regulatory clocks (green / amber / red).
4. **Deduction audit:** a waterfall from billed to paid. Line list with VALID / QUESTIONABLE / VIOLATION. Tap a line for the clause and circular.
5. **Approval sheet:** draft letter (editable), attachments, recipient, OTP confirm.
6. **Expert console** (web): case summary, documents, engine trace, drafts, clocks, and "take over" / "message user".
7. **Agent trace panel** (demo only): streaming log of reasoning steps, tool calls and verifier checks.

## Backend components

- `orchestrator/`: case state machine and Claude planner with typed tools.
- `agents/`: policy_intel, doc_intel, advocate, communicator, verifier.
- `engine/`: rules R1–R6 in plain Python, with unit tests for the demo arithmetic.
- `clocks/`: APScheduler jobs with a `TIME_SCALE` flag so days pass in seconds during the demo.
- `mocks/`: a FastAPI mock NHCX FHIR server (`Claim`, `ClaimResponse`, `Communication`), plus tariff and policy endpoints.
- `store/`: Postgres (cases, audit log), pgvector (clauses, circulars), a documents folder.

## What is real vs mocked

| Real in the demo | Mocked |
|---|---|
| LLM reasoning, OCR of a real photographed bill, clause retrieval over a real IRDAI standard policy wording, deterministic engine, letter drafting, email send to a sandbox inbox, scheduler, verifier | Insurer/TPA claim API (NHCX-shaped), hospital tariff, Paytm policy record, Bima Bharosa / Ombudsman portals, time passage |

## Build plan (2 people, hackathon)

| Block | Tarun | Aayush |
|---|---|---|
| H0–6 | Engine rules + tests; mock FHIR server | Policy parsing + clause index; OCR on sample bill |
| H6–14 | Orchestrator + tools + clocks | Frontend screens 1–5 |
| H14–20 | Advocate drafting + verifier + email | Trace panel, expert console, Hindi copy |
| H20–24 | Dry runs, failure fallbacks (pre-recorded video backup), deck | Same |

**Demo risks and fallbacks:**
- If the live OCR fails, a cached OCR result runs behind a feature flag.
- If the network is down, the model responses for the scripted path are pre-recorded.
- A backup video is always ready.
