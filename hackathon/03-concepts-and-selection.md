# Phases 6–8 — Solution Concepts, Hostile Review, Selection

Method: an Opportunity Solution Tree (outcome → customer opportunities → solutions), then Problem-Validation scoring (Frequency × Intensity × Workarounds × Willingness-to-pay, each 1–5; 250+ = strong). After that, each concept went through a hostile-judge review (Phase 7) and a VC-style scorecard for the finalists.

## Opportunity Solution Tree

**Desired outcome:** more Paytm customers complete a critical financial journey with the outcome they are owed, in less time, without a human agent on every case.

```
Outcome: journeys completed with full entitlement, inside the regulatory clock
├── O1  "I don't know what I'll pay / why money was cut"          (insurance: ₹18.5k cr deducted FY25)
│     ├── S1 Deduction auditor + contest agent          ◄ selected core
│     ├── S2 Pre-admission out-of-pocket simulator      ◄ selected (same engine)
│     └── S3 Plain-language policy card at purchase
├── O2  "Nobody tells me where my case is / clock is running"      (83% want tracking; 6–48h discharge)
│     ├── S4 Discharge-clock guardian                   ◄ selected (same engine)
│     ├── S5 Proactive status push via WhatsApp/Soundbox voice
│     └── S6 Hospital-desk copilot (B2B)
├── O3  "I complain in the wrong place / give up"                  (21% Ombudsman & ~59% RBI complaints rejected)
│     ├── S7 Escalation autopilot (insurer → Bima Bharosa → Ombudsman)   ◄ selected
│     ├── S8 Complaint-maintainability checker
│     └── S9 Human-advocate marketplace
└── O4  "Rules promise me compensation I never receive"            (UPI ₹100/day; CIC ₹100/day penalties)
      ├── S10 UPI stuck-money case manager
      ├── S11 Credit-report dispute & compensation agent
      └── S12 Frozen-account (innocent receiver) resolver
```

---

## Phase 6 — Twelve concepts

Scores: **F**requency, **I**ntensity, **W**orkarounds, **P**ay (WTP, or for B2B the institution's cost) → Validation score.

### C1. ClaimLens — health-claim deduction auditor and contest agent (Insurance)
- **Pitch:** Photograph the settlement letter. In 60 seconds you see every rupee cut, whether it was allowed, and a ready-to-send contest.
- **User:** A retail health policyholder after a partial settlement, or their family member.
- **Problem & evidence:** ₹18,521 cr disallowed in FY25, more than was rejected outright (IRDAI AR). 29–33% of claimants report "partial for invalid reasons" (LocalCircles). IRDAI records no reasons.
- **Alternatives:** Ditto, Policybazaar RMs, Insurance Samadhan (success fee), consumer forums.
- **Gap:** No customer-side, instant, rule-grounded audit exists.
- **Solution:** OCR the bill and settlement letter, map each line to a policy clause and IRDAI rule, recompute the entitlement, and draft a reconsideration letter.
- **Why AI:** Bills are unstructured and hospital-specific (hundreds of line names). Policy wording varies by insurer. The line-item-to-clause mapping needs language understanding; the arithmetic is deterministic.
- **Agent roles:** document intelligence, reasoning, decision support, action (draft and send).
- **Tools:** OCR/vision LLM, policy-clause index, IRDAI rulebook, entitlement calculator, email/portal.
- **Human-in-loop:** The customer approves sending. Medical-necessity disputes go to a human claims expert.
- **MVP:** 1 policy wording, 1 bill format, 6 deduction rules.
- **Demo:** A ₹2.27 L bill with ₹88,875 deducted; the agent finds ₹26,550 cut illegally.
- **Impact:** Recovered ₹ per claim, contest success rate, NPS.
- **Risks:** Wrong advice creates liability, so the agent cites clauses and flags "likely", never guarantees. As broker, Paytm must also be seen to act for the customer.
- **Score:** F3 · I5 · W5 (people pay success fees) · P5 = **375**

### C2. AdmitSure — pre-admission cost simulator (Insurance)
- **Pitch:** Before choosing a hospital room, see what you will pay out of pocket.
- **Evidence:** Proportionate deduction is the #1 source of partial payouts (Ditto; Business Standard 2021: 85% settled by count but 54% by value). The room is chosen in minutes at the admission desk.
- **Why AI:** Reading the policy and inferring limits; the tariff needs parsing.
- **Demo:** "Single room ₹8,000: you pay ~₹60,000. Twin-share ₹4,500: you pay ~₹5,000."
- **Score:** F3 · I4 · W2 · P3 = **72**. On its own this is weak: nobody pays for it and few look for it. As a front-end to C1 it is strong.

### C3. DischargeClock — discharge-day guardian (Insurance)
- **Pitch:** Starts IRDAI's 3-hour clock the moment the doctor says "discharge", and makes sure you don't pay for the insurer's delay.
- **Evidence:** 50–60% wait 6–48 h (LocalCircles), yet insurers report 96.7% within 3 h. Master Circular: the insurer bears extra charges after 3 h.
- **Why AI:** Mostly workflow. AI reads the discharge summary for completeness and drafts nudges.
- **Score:** F3 · I4 · W3 · P2 = **72**. The pain is real, but on its own the AI is thin.

### C4. BimaHaq Escalation Autopilot (Insurance)
- **Pitch:** Runs the grievance ladder for you: insurer, then 14 days, then Bima Bharosa, then Ombudsman, each step drafted with the rule breached.
- **Evidence:** 21% of health Ombudsman complaints are non-entertainable. Bima Bharosa grievances rose 45%. The Ombudsman rules for the policyholder in a large share of cases (UNVERIFIED share).
- **Score:** F2 · I5 · W5 · P4 = **200**. On its own it only starts after the damage, so it works best as the tail end of C1.

### C5. CreditFix Agent — credit-report dispute and ₹100/day claimer (Lending)
- **Pitch:** Finds the closed loan still showing "active", files the dispute with lender and bureau, tracks 21+9 days, claims ₹100/day, and escalates to RBI CMS.
- **Evidence:** RBI penalised all 3 bureaus (Aug 2026) for unpaid compensation. CIC complaints are rising. 68% don't know their score.
- **Alternatives:** CIBIL dispute portal (manual), CreditMantri/FREED (paid).
- **Why AI:** Reading bureau reports and spotting anomalies across tradelines; drafting.
- **Score:** F2 · I4 · W4 · P3 = **96**. Real but episodic. Bureau APIs are hard to demo credibly.

### C6. Why-Not — loan-rejection explainer and eligibility plan (Lending)
- **Pitch:** "You were declined because 4 live loans push your EMI-to-income ratio to 62%. Close X and reapply on 12 Nov."
- **Evidence:** ~30% rejected without reason (UNVERIFIED method). 3+ live loans common (FSR).
- **Risk:** Paytm is the LSP, and lenders' real reasons are proprietary. The agent would guess, which is a hallucination risk.
- **Score:** F3 · I3 · W2 · P2 = **36**. Kill.

### C7. Saathi Hardship — merchant loan hardship copilot (Lending)
- **Pitch:** When a Soundbox merchant's UPI inflows fall 40%, offer an EMI-date shift or restructuring request before collections call.
- **Evidence:** 1.57 Cr Soundbox merchants. Merchant ECL 4.5–5%. Aggressive collections complaints (54%).
- **Why AI:** Cash-flow anomaly detection plus voice in 11 languages via AI Soundbox.
- **Risk:** The restructuring decision belongs to the lender. The demo depends on lender policy.
- **Score:** F2 · I5 · W2 · P4 (lender saves on credit costs) = **80**. Good B2B story; weak as a customer journey demo.

### C8. TrueCost — KFS explainer and debt-stacking guard (Lending)
- **Pitch:** Before you accept: "You get ₹47,640, repay ₹61,200, and foreclosing in month 3 costs ₹2,100. This is your 4th live loan."
- **Evidence:** 64% saw hidden fees. The KFS is mandatory but unread.
- **Score:** F4 · I3 · W1 · P1 = **12**. Useful, but people don't seek it and the AI is thin (it's a calculator). Kill as a hero.

### C9. MoneyStuck — failed UPI case manager (Payments)
- **Pitch:** Detects a debit-without-credit, raises the UDIR dispute, tracks T+1, and claims ₹100/day.
- **Evidence:** 24.5 bn transactions a month. The TAT circular exists, but compensation is not paid suo moto.
- **Risk:** NPCI "UPI Help" (FiMI) is already rolling out status and complaints. Most cases auto-reverse, so the AI adds little.
- **Score:** F4 · I3 · W2 · P1 = **24**. Kill: crowded and low AI necessity.

### C10. FreezeFree — innocent-receiver account-freeze resolver (Payments)
- **Pitch:** Your account is frozen because a scam victim's ₹826 reached you. The agent gets the NCRP reference, asks for a lien-only restriction citing the SOP and HC rulings, and tracks it.
- **Evidence:** Delhi HC, Rajasthan HC (Sep 2026), SC action. 36,000 accounts frozen in one probe (UNVERIFIED).
- **Risk:** Police processes are not API-able. Legal advice is regulated.
- **Score:** F1 · I5 · W4 · P3 = **60**. Powerful story, but hard to demo and legally risky.

### C11. Golden Hour — fraud first responder (Payments)
- **Pitch:** One message files 1930/NCRP, blocks the card or UPI, alerts the bank, and packages evidence for the 2027 compensation framework.
- **Evidence:** 51% of fraud victims never report. ₹22,845 cr lost in 2024.
- **Risk:** NCRP has no API. Filing with police on behalf of a user is sensitive.
- **Score:** F2 · I5 · W1 · P2 = **20**. The strong emotion doesn't make up for the weak actionability.

### C12. Haq Engine — a rights-and-clocks case agent across all three verticals (Platform)
- **Pitch:** One agent that knows every rule that owes the customer a deadline or money (IRDAI 1h/3h/15-day, RBI T+1, CIC 30-day, Ombudsman sequencing), watches the clock, and enforces it.
- **Evidence:** The same failure appears in all three reports: rules exist, delivery fails (UPI compensation, bureau penalties, discharge delays, wrong-forum complaints).
- **Risk:** Breadth kills demos, and the judges would see a platform slide with no depth.
- **Score:** as a hero, n/a. As an **architecture principle**, strong.

---

## Phase 7 — Hostile-judge review

| Question | C1 ClaimLens | C4 Escalation | C5 CreditFix | C7 Hardship | C9 MoneyStuck | C12 Haq Engine |
|---|---|---|---|---|---|---|
| Just a chatbot? | No: output is a recomputed entitlement and a filed contest | No: workflow with deadlines | No | No | Partly (status bot) | No |
| Just RAG? | No: RAG finds clauses, a rules engine and calculator decide amounts, tools act | Mostly templates | Partly | No | No | No |
| Does AI need to exist? | **Yes**: unstructured bills, varied wording, line-to-clause mapping | Weak | Medium | Medium | Weak | Yes |
| Important problem? | **₹18.5k cr/yr, #1 grievance** | Yes | Medium | Yes | Medium | Yes |
| Specific enough? | **Yes, one journey, one artifact** | Yes | Yes | Yes | Yes | Too broad |
| Already common? | **No customer-side product** | Samadhan does it with humans | CIBIL portal exists | No | NPCI UPI Help | No |
| Easy to copy? | The prompt, yes. The rulebook, deduction taxonomy, bill-line ontology and outcome data compound over time | Easy | Medium | Hard (needs Paytm data) | Easy | Hard |
| Meaningful action? | **Recomputes, drafts, files, schedules, escalates** | Files | Files | Requests | Files | Yes |
| Compelling demo? | **"₹26,550 found in 60 seconds" is visible and verifiable** | Slow by nature | OK | Needs merchant data | Weak | Abstract |
| Demo without Paytm internal APIs? | **Yes**: public policy wording, synthetic bill, NHCX-shaped mock | Yes | Mock bureau | Mock | Mock | Yes |
| Privacy / security | Health data: DPDP sensitive, consent artefact, local redaction | Low | Credit data | Merchant data | Low | High |
| Regulatory | Broker may assist claims. The agent advises and drafts; the insurer decides; the customer approves sending | OK | OK | Lender decides | OK | OK |
| Measurable impact? | **₹ recovered, % contested, TAT vs clock** | Yes | Yes | Yes | Yes | Yes |
| **Verdict** | **Hero** | Merge into C1 | Scale-story | B2B future | Kill | Architecture principle |

**Eliminated:** C6 (would guess at the lender's reasons), C8 (calculator, not AI), C9 (crowded; NPCI already covers it), C10 and C11 (no APIs, legal risk).
**Merged:** C2 (before admission), C3 (at discharge) and C4 (after rejection) become stages of C1. The result covers the full hospitalisation journey, which is exactly the PS's own example, but built from the customer's side.
**Kept as the scale story:** C12. The same engine reapplied to C5 (credit report) and C9 (UPI) shows the platform without spreading the demo thin.

---

## Phase 8 — Selection

### VC-style scorecard for the finalists (1–5)

| Dimension | Haq for Health Claims (C1+C2+C3+C4) | CreditFix (C5) | Saathi Hardship (C7) |
|---|---|---|---|
| Need validity | 5: IRDAI primary data, Ombudsman 94.8% | 4 | 4 |
| Market size | 5: 3.26 Cr+ health claims a year; Paytm 8 Cr MTU | 4 | 4 |
| Timing (why now) | 5: Master Circular 2024 rights, NHCX live, Bima Sugam Sept 2026, IRDAI AI working group, Paytm Pi | 4 | 3 |
| Differentiation durability | 4: rulebook + deduction ontology + outcome data | 3 | 4 |
| Business model | 4: broker retention and cross-sell; Pi licence to insurers (fewer Ombudsman cases, lower TAT) | 3 | 4 |
| Execution feasibility (hackathon) | 5: public wording plus a synthetic bill is enough | 3 | 2 |
| Team–market fit | 4: Paytm is a licensed broker; team can build doc AI | 3 | 3 |
| **Total /35** | **32** | 24 | 24 |

**One-line verdict:** Build the customer-side claim agent for health insurance. It is the largest provable money leak in the problem statement, today only human advocates work on the customer's side, and the AI has to read, reason, calculate, act and escalate, not just chat.

### Why this beats "another claims chatbot"
Most teams will build *Q&A over the policy* or *an insurer-side claim-processing bot*. Ours:
1. Works for the **customer, not the insurer**. That is the open gap: all Indian claims AI today sits with insurers and TPAs.
2. Produces a **number and a filed action**, not an answer.
3. Is **rule-bound**: every rupee flagged cites a policy clause *and* an IRDAI circular, and deterministic code does the arithmetic, not the LLM.
4. **Owns the clock**: 1 h pre-auth, 3 h discharge, 15/30-day settlement, 14-day grievance, Ombudsman sequencing.
5. Hands over to a human **with a complete case file** when stakes or uncertainty are high.
