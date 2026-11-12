# Haq — Product Story and Ghost Deck (Phase 10)

**Audience:** hackathon judges, product leaders, AI and fintech experts.
**What they should think:** this team found a real ₹-scale leak that nobody works on for the customer, and built an agent that closes it safely.
**What they should do:** score it high on problem, AI necessity, feasibility and impact.
**The one idea:** *Indian patients already have rights that save them money and time. Haq is the AI that enforces those rights for them.*

## The story in twelve answers

1. **Problem.** In FY25 insurers deducted ₹18,521 crore from health-claim bills, more than they rejected outright. Families rarely learn which cuts followed the policy and which broke the rules.
2. **Who.** A daughter handling her father's hospital stay on a phone, in a corridor, with a policy she has never read.
3. **Why the journey fails.** She makes cost decisions blind (room choice), waits without a clock (discharge), receives a settlement with codes instead of reasons, and complains in the wrong order (21% of health Ombudsman complaints are rejected).
4. **Why unsolved.** Every claims-AI deployment in India serves the insurer or TPA (speed, fraud). On the customer side, advocates are human and don't scale, and they charge success fees or serve only their own customers.
5. **Why AI, why now.**
   - Vision models can read messy Indian hospital bills.
   - LLMs can map line items to policy clauses.
   - Agent frameworks can take audited actions.
   - IRDAI's 2024 Master Circular set hard clocks.
   - NHCX gives a standard claims pipe.
   - Paytm is building agents for insurers (Paytm Intelligence).
6. **What we built.** Haq, a claim agent inside Paytm that works for the patient.
7. **How it works.** An orchestrator plans. Specialist agents read the policy and bills. A deterministic engine computes entitlements. A verifier checks every outgoing word. Tools file and track.
8. **Actions.** Simulates room costs, starts regulatory clocks, flags breaches, recomputes settlements, drafts and sends contests (with OTP approval), schedules the grievance ladder, and verifies payouts.
9. **When AI can't solve it.** Medical-necessity disputes, fraud or non-disclosure allegations, and high amounts go to a human expert with the full case file, one tap from any screen.
10. **Why different.** It takes the patient's side, it produces a number and a filed action, and it is rule-bound with a citation on every claim.
11. **Impact.**
    - Families: money recovered, cost known before admission, fewer wrong-forum complaints.
    - Paytm: renewal trust and a B2B product for insurers.
    - Every 1% of FY25 deductions recovered returns about ₹185 crore to patients.
12. **Scale.** The same engine plus a new rulebook covers credit-report disputes (30 days, ₹100/day), failed UPI refunds (T+1, ₹100/day) and motor claims (24 h / 15 d / 7 d).

## Before vs after (Priya's case)

| Moment | Today | With Haq |
|---|---|---|
| Admission | Picks ₹8,000 room blind | Sees ≈ ₹62,300 out of pocket vs ≈ ₹5,700 for twin-share; chooses knowingly |
| Discharge | Waits, pays extra hours | 3-hour clock, breach logged; insurer bears the extra charges |
| Settlement | "₹88,875 deducted" | ₹62,325 explained, ₹26,550 flagged as against IRDAI rules |
| Response | Gives up or calls repeatedly | Contest sent in under 10 minutes with OTP approval |
| Escalation | Wrong forum | Ladder scheduled in the right order |

## Ghost deck (the contract for QA)

| # | Action title | Layout / device |
|---|---|---|
| 1 | Haq: an AI claim agent that works for the patient, not the insurer | Dark cover, product name, and a mini audit card showing ₹26,550 found |
| 2 | Insurers cut ₹18,521 crore from hospital bills in FY25, and patients rarely learn why | 100% stacked bar of where claimed money went, plus 3 evidence cards |
| 3 | A family decides blind at six points between the admission desk and the Ombudsman | 6-stage journey map with a friction stat at each stage |
| 4 | Claims AI in India works for insurers; the patient's side still runs on phone calls | 2×2 positioning matrix plus a list of existing IRDAI rights |
| 5 | Haq follows one hospital stay from the admission desk to the last rupee | 4 connected stage cards over a human-expert rail |
| 6 | Same hospital stay, two outcomes: with Haq, Priya recovers ₹26,550 and sees every cost first | Two-lane before/after comparison |
| 7 | An orchestrator plans, specialists read, a rules engine does the maths and a verifier checks every word | Architecture diagram |
| 8 | Haq does the work: it reads, computes, files, tracks and escalates through audited tool calls | 5 verb columns with tool chips and approval gates |
| 9 | Haq files only with your approval, the insurer still decides, and judgement calls go to a human | 3 autonomy lanes plus a guardrail strip |
| 10 | Demo: of ₹88,875 deducted, ₹26,550 broke IRDAI rules, and Haq filed the contest in under 10 minutes | Waterfall chart plus violation list plus 8-step demo strip |
| 11 | Recovered claims build renewal trust for Paytm, and the same engine sells to insurers | KPI table with counter-metrics plus 2 business cards |
| 12 | One engine, new rulebooks: credit reports, UPI refunds and motor claims come next | Tech stack plus roadmap plus expansion table |
| 13 | Sources | Reference list (appendix) |

Title-only read-through: the problem is large (2), it breaks at specific moments (3), nobody serves the patient (4), Haq covers the journey (5), outcome for one family (6), how it works (7), what it does (8), how it stays safe (9), proof (10), impact (11), scale (12).
