# Research Report — AI-Powered Financial Journeys (team_SGS)

Team: Tarun Bhutra, Aayush Jha · Prepared 25 Sep 2026
Detailed evidence lives in `research/01-insurance.md`, `research/02-lending.md`, `research/03-fintech-support.md`, `research/04-paytm-and-agentic-ai.md`. Every number below is cited there; the consolidated list is in `02-sources.md`. Items marked UNVERIFIED in those files are not used as headline claims.

---

## Phase 1 — What the problem statement is really asking

**"Make Insurance, Lending and Fintech simpler, faster and more human."**

### 1. What is a "financial journey"?
A multi-step, multi-party process a customer must *complete* to get a financial outcome — money paid out, credit granted, a wrong reversed. It is not a single transaction. It crosses organisations (insurer, TPA, hospital, lender, bureau, bank, NPCI, regulator), has deadlines, needs documents, and ends in a decision the customer often does not understand.

### 2–4. Journeys in scope

| Insurance | Lending | Fintech / payments |
|---|---|---|
| Choosing a policy & disclosing health | Checking eligibility / credit score | Failed / pending UPI payment & refund |
| Cashless admission (pre-auth) | Application, KYC, KFS/APR | Wrong-recipient transfer |
| Discharge authorisation | Rejection or low offer | Fraud reporting ("golden hour") |
| Reimbursement claim & query letters | Disbursal & cooling-off exit | Account frozen after a cyber complaint |
| Settlement with deductions | Repayment, bounces, hardship | KYC / re-KYC / dormant account |
| Rejection & grievance / Ombudsman | Collections & recovery agents | Complaint routing to bank → RBI CMS |
| Motor FNOL & surveyor | Closure, NOC, credit-report update | Nominee update, unclaimed deposits |
| Term life death claim (nominee) | Credit-report dispute | Merchant settlement / chargebacks |

### 5–9. Turning the adjectives into measurable things

| PS word | What we will measure |
|---|---|
| **Simpler** | Steps and documents the customer must handle; number of parties they must contact; % who understand the decision (explainability score); reading level of every message |
| **Faster** | Time-to-resolution vs the regulatory clock (IRDAI 1h / 3h / 15-30 days; RBI T+1, 30 days); time from event to first correct action |
| **More human** | Customer never repeats themselves; vernacular + voice; one-tap human handoff with full case file; empathy at a stressful moment (a hospital bed, a lost ₹20,000) |
| **Removing friction** | Fewer re-submissions, fewer wrong-forum complaints (today 21% of health Ombudsman complaints and ~59% of RBI complaints are rejected as non-entertainable), fewer "where is my claim" contacts |
| **Greater confidence** | Customer knows *before* committing what they will pay; every AI statement cites the clause or rule; the customer can verify the outcome and knows their next right |

### 10. What a strong solution looks like
- Picks **one journey with a large, provable money-and-time loss** and goes deep.
- The AI **does work** (reads documents, computes entitlements, files, tracks, escalates), not only answers questions.
- Grounded in **policy wording and regulation**, with citations, so it cannot make up coverage (the *Moffatt v. Air Canada* lesson).
- **Human escalation is designed in**, not an afterthought (the Klarna reversal lesson).
- A demo where the judge *sees money recovered or a deadline enforced*.
- A clear path to Paytm's business (distribution, Paytm Intelligence).

### 11. What a weak solution looks like
- "A chatbot for insurance FAQs" or "RAG over policy PDFs".
- A generic multi-product assistant with no depth anywhere.
- AI that decides credit or claims (regulatory red flag; that is the lender's or insurer's call).
- A demo that only shows text answers, no state change, no tracking.
- Claims of impact with no baseline.

---

## Phase 2 — Market and user research (headline evidence)

### Insurance (health)
- **₹1,32,488 cr claimed in FY25; ₹18,521 cr (14%) deducted from bills and ₹11,412 cr (29.5 lakh claims) rejected** — together ~₹29,900 cr not paid. Deductions exceed rejections and grew ~23% over FY24. *(IRDAI Annual Report 2024-25, Table I.29 — primary)*
- **IRDAI does not record *why* claims are cut or rejected** (parliamentary reply, Jul 2026).
- **94.8% of entertainable health Ombudsman complaints are about partial or total repudiation**; **21% of health complaints are thrown out**, mostly because the customer did not first go to the insurer. *(CIO Annual Report 2023-24 — primary)*
- Bima Bharosa grievances vs general & health insurers: **1.37 lakh in FY25, +45%; 69% about claims.** *(IRDAI AR — primary)*
- Patients: **>50% saw a rejection or partial approval**; **47% say they personally faced deliberate delay**; **83% want transparent online claim tracking**. *(LocalCircles, Jan 2025, 28,700 respondents)*
- Discharge: insurers report **96.7% of discharge approvals within 3 hours**, yet **50–60% of patients wait 6–48 hours** — the hospital billing and file-assembly time before the insurer's clock starts is invisible. *(Lok Sabha reply Dec 2025; LocalCircles 2025 & 2026)*
- Literacy: **65% have limited or no understanding of their policy; 60% of dependents don't know they are covered.** *(CoverSure, 2025)*
- Rules that already protect the customer (IRDAI Health Master Circular, 29 May 2024): pre-auth ≤1 h; discharge ≤3 h, **insurer pays for any extra stay**; the **customer is not required to submit documents**; every rejection needs **Claims Review Committee** sign-off with specific clauses; **60-month moratorium** on non-disclosure contests; ₹5,000/day if an Ombudsman award is not implemented.

### Lending
- RBI Ombudsman FY25: **13.34 lakh complaints (+13.55%); loans & advances the largest category at 29.25%**; 7.84 lakh closed as non-maintainable.
- **RBI penalised TransUnion CIBIL, CRIF High Mark and Equifax (31 Aug 2026) for not paying the ₹100/day compensation** owed when credit-report corrections exceed 30 days.
- More than half of small-PL borrowers hold **3+ live loans at origination**; vintage delinquency on <₹50K PLs was **8.2%**. *(RBI FSR 2024)*
- LocalCircles 2026: **64% saw hidden fees debited without disclosure**. LocalCircles 2022: **54% of instant-loan-app users faced extortion or data misuse**.
- First-time borrowers fell to **13% of retail originations** (32% in 2017). *(TransUnion CIBIL CMI Mar 2026)*

### Payments & support
- UPI: **24.5 bn transactions in Aug 2026**; even a sub-1% failure rate means tens of millions of stuck payments a month (our estimate).
- RBI TAT circular (2019): failed UPI/IMPS must auto-reverse by **T+1**, else **₹100/day paid without the customer asking** — often not paid in practice.
- **51% of UPI fraud victims filed no complaint anywhere.** *(LocalCircles 2025, 32,000+ responses)*
- Innocent receivers' accounts frozen after cyber complaints — Delhi HC, Rajasthan HC (Sep 2026) and the Supreme Court have intervened.
- Customer attitude: **64% would prefer companies not use AI for service; top fear is losing access to a human.** *(Gartner 2024)*. CFPB (2023) documents "doom loops". Klarna reversed its AI-only support in 2025.

### Paytm context
- Q1 FY27: 8.0 Cr MTU, 1.57 Cr subscription merchants, **financial services distribution revenue ₹814 Cr (+45%)**.
- **Paytm Insurance Broking licence renewed to Feb 2029**; distributes health, term, motor; Paytm's current claim flow is a submission form plus FAQ — no AI help and no live tracking described.
- Strategy: "Any new investment, only in AI" (Q4 FY26 call); **Paytm Intelligence (Pi)** sells agents to banks, lenders and **insurers** (Sep 2026); Paytm reports its AI already handles >10M queries/month.
- User pain on Paytm itself: "only AI will give the answer" — AI walls with no human (Trustpilot, Play reviews).

---

## Phase 3 — Journey maps with friction (condensed)

### A. Health insurance — hospitalisation (cashless + reimbursement)

| Stage | What the customer must do | Why it is hard | Missing info | Manual | Delay | Confusion / distrust / tickets |
|---|---|---|---|---|---|---|
| Goal | Get treated without paying out of pocket | Emergency, emotional | Coverage for *this* treatment | — | — | "Am I covered?" |
| Discovery (at hospital) | Find e-card, TPA, network status | Documents scattered | Is the hospital cashless for my insurer now? (AHPI / Max disputes 2025) | Calls to TPA | Minutes–hours | Surprise "cashless not available" |
| Eligibility | Know waiting periods, sub-limits, room cap | Policy is 50+ pages of legalese | Room-rent cap → **proportionate deduction** on the whole bill | Reading PDF | — | 65% don't understand policy |
| Application (pre-auth) | Hospital sends request | Out of patient's hands | Status | Hospital desk | 13% take >1 h | "Is it approved?" |
| Documents | Hospital compiles; for reimbursement, patient compiles | Rules say patient needn't, practice says otherwise | Which documents, originals? | Photocopies, courier | Query letters stop the clock | Repeated asks |
| Verification | TPA/insurer checks | Opaque | — | Adjudicator | Queries | — |
| Decision | Approval / partial / rejection | Reasons are codes, not clauses | Why ₹X was cut | — | — | **>50% partial or rejected** |
| Payment (discharge) | Pay the gap, leave | Bill appears at the end | Final payable until the last minute | Billing desk | **6–48 h for 50–60%** | Held at hospital |
| Tracking | Chase TPA / insurer | No live view | Stage, deadline | Calls, email | — | **83% want tracking** |
| Support | Call centre / bot | Script, loop | — | — | — | "Deliberate delay" (47%) |
| Resolution | Grievance → Bima Bharosa → Ombudsman | Order matters; 14-day waits | Which rule was breached | Letters | Months | 21% of Ombudsman complaints rejected on sequence |

### B. Lending — rejection → credit-report error → dispute
Goal (loan) → eligibility (score unknown to 68%) → application → **rejection with no reason** → user discovers a closed loan still "active" on the bureau → must obtain NOC, file with lender (21 days) and bureau (9 days) → no tracking → ₹100/day compensation not paid (bureaus penalised Aug 2026) → Ombudsman within 90 days → re-apply.

### C. Payments — failed UPI payment
Goal (pay) → debit without credit → status check capped at 3 → wait T+1 → no reversal → complaint in app (often hidden, English-only) → bank → 30 days → RBI CMS (59% of complaints non-maintainable) → ₹100/day compensation rarely paid suo moto.

**The pattern across all three:** the rules already give the customer a deadline and a remedy. The customer does not know the rule, cannot see the clock, cannot assemble the evidence, and gives up or files in the wrong place.

---

## Phase 4 — Existing solutions and the real gap

| Player | Solves | AI where | Still manual | Limit |
|---|---|---|---|---|
| ICICI Lombard claims copilot | Adjudicator speed (>50% faster) | Doc reading for the insurer | Final decision | Works **for the insurer**; patient sees nothing |
| Star Health | ~20% straight-through cashless; target >50% | Adjudication, fraud | Exceptions | Still #1 by Ombudsman complaints |
| Medi Assist (TPA) | Bill prediction, fraud | Predictive billing | Adjudication | B2B only |
| Policybazaar / Ditto / ClaimBuddy / Insurance Samadhan | Human claim advocacy | Little | Everything | Only own customers, human-limited, or after the damage (success fee) |
| Plum / Loop | Group-health claim tracking | Doc OCR | Advocacy | Employees only — not retail |
| Paytm Insurance | Premium payment, claim form | None evident | Everything after submission | No explanation, no tracking |
| CRED / OneScore / bank apps | Score display | Alerts | Disputes filed manually | No SLA or compensation tracking |
| NPCI UPI Help (pilot) | UPI status & complaint | FiMI model | Resolution | Pilot, 4 languages, not in-app yet |
| Klarna / Sierra / Decagon / Intercom Fin | FAQ & simple actions | LLM agents | Complex, emotional cases | Klarna re-hired humans |

**Genuine gap (not "add AI"):** In India, AI in claims and credit is built for the *institution* — faster adjudication, fraud, collections. **Nobody works for the customer at scale**: no one reads the customer's own policy and settlement against the rulebook, tells them what they are owed, and runs the process to get it. Human advocates prove demand (Insurance Samadhan: 18,000+ cases, ₹160 cr recovered; Policybazaar Claim Samadhan Diwas: ₹24 cr recovered) but cannot scale.

---

## Phase 5 — Where AI actually helps (and what kind)

| Gap | Current workflow | AI-enhanced workflow | AI role(s) | Tools / APIs | Human stays for |
|---|---|---|---|---|---|
| Deduction opacity | Settlement letter with codes; patient gives up | Read bill + letter + policy, classify every deduction, test against clauses and IRDAI rules, compute recoverable amount | Document intelligence, reasoning, decision support | OCR, policy clause index, rules engine, calculator | Contest letters sent in the customer's name need their approval |
| Out-of-pocket surprise | Learn at discharge | Estimate payable before choosing a room | Reasoning, recommendation | Hospital tariff, policy limits | Clinical choices |
| Discharge wait | Wait at the desk | Clock starts, nudges hospital desk, logs breach → extra charges borne by insurer | Agent, workflow execution | Claim status API (NHCX-shaped), notifications | Hospital staff |
| Wrong-forum grievance | Customer guesses | Ladder: insurer → 14 days → Bima Bharosa → Ombudsman, auto-drafted with rule citations | Agent, autonomous workflow | Email/portal, templates, scheduler | Ombudsman filing needs consent; complex medical disputes → human claims expert |
| Credit-report error | Manual portal, no tracking | Detect, file, track 21+9 days, claim ₹100/day | Doc intelligence, agent | Bureau report (consented), AA | Customer confirms dispute |
| Failed UPI | Chase bank | Detect, UDIR complaint, track T+1, claim ₹100/day | Agent | UPI status / UDIR (mock) | Disputed fraud cases |

We prefer the first four because they chain **several** AI roles and **several** actions inside one high-value journey.
