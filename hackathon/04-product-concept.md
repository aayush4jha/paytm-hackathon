# Haq — Product Concept & PRD

**Haq (हक़, "what is rightfully yours"): an AI claim agent inside Paytm that works for the patient, not the insurer.** It follows one hospitalisation from admission to the last rupee: it estimates what you will pay, keeps the regulator's clocks, audits every deduction against your policy and IRDAI rules, and files and escalates on your behalf. When a case needs judgement, it hands you to a human with the full case file.

Part of the Paytm Insurance Broking journey (licence valid to Feb 2029). The same engine can be sold to insurers through Paytm Intelligence.

---

## 1. Problem (evidence first)

- **₹18,521 cr was deducted from health-claim bills in FY25**, more than the ₹11,412 cr rejected outright. Deductions grew ~23% year on year. *(IRDAI Annual Report 2024-25, Table I.29)*
- **IRDAI does not record why claims are cut.** *(Parliamentary reply, Jul 2026)*
- **>50% of claimants saw a rejection or partial approval; 47% report deliberate delays; 83% want transparent tracking.** *(LocalCircles, Jan 2025, n≈28,700)*
- **50–60% wait 6–48 hours to be discharged**, although insurers report 96.7% of discharge approvals within 3 hours. *(LocalCircles 2025/26; Lok Sabha, Dec 2025)*
- **94.8% of health complaints to the Ombudsman are about repudiation, and 21% of all health complaints are rejected** as not entertainable, mostly because the customer skipped the insurer step. *(CIO Annual Report 2023-24)*
- **65% don't understand their policy.** *(CoverSure 2025)*
- **Every Indian claims-AI deployment we found serves the insurer or TPA.** ICICI Lombard, Star Health and Medi Assist use it for speed and fraud control. On the customer's side there are only human advocates who can't scale (Ditto, ClaimBuddy, Insurance Samadhan charges a success fee) or a static FAQ page (Paytm today).

**The core insight:** most of what the customer needs is already a right. IRDAI requires the insurer to decide pre-auth within 1 hour and discharge within 3 hours, and to pay for any extra stay beyond 3 hours. The customer does not have to submit documents. Every rejection must cite specific clauses. The insurer may not take a proportionate deduction from pharmacy, consumables, implants, diagnostics or ICU charges. The customer never learns these rights, so they are never enforced.

## 2. Goals (hackathon pilot → 6-month production targets)

| Goal | Baseline | Target |
|---|---|---|
| Out-of-pocket amount known **before** admission | ~0% (learned at discharge) | 70% of Haq-assisted admissions |
| Rule-violating deductions contested | ~0% (customer can't tell) | 90% of detected violations contested within 7 days |
| Discharge-clock breaches recorded with evidence | 0 | 100% of Haq-tracked discharges |
| Ombudsman complaints rejected for wrong sequence (Haq users) | 21% | <3% |
| Claim cases resolved without a human agent | n/a | 60%, while human handoff stays ≤1 tap |

## 3. Target users

- **Primary:** a family member (30–50) managing a parent's hospitalisation under a retail health policy bought or renewed via Paytm. They are anxious, on a phone, in a hospital corridor, and are more comfortable in Hindi or another regional language than in insurance English.
- **Persona — Priya, 34, Pune.** Her father Ramesh (56) is admitted for a gallbladder removal. The policy was bought in 2019 (sum insured ₹5 lakh). She has never read it.
- **Secondary:** Paytm Health Saathi merchants (1.57 Cr merchant base) using voice on the AI Soundbox. **B2B:** insurers and TPAs buying the engine through Paytm Intelligence to cut Ombudsman exposure and handling costs.

## 4. Requirements

**P0 (demo does not work without these)**
1. The user can share a policy (PDF or Paytm policy record) and get a one-screen "your cover" card. Every limit on the card cites its clause.
2. Before choosing a room, the user sees their estimated out-of-pocket cost for each room category offered.
3. The user can upload the hospital bill and settlement letter. Haq classifies every deduction, marks it *valid / questionable / violates rule*, and shows the recoverable amount with clause and circular citations.
4. With one approval, Haq drafts and sends a reconsideration request to the insurer and schedules the escalation ladder (insurer → 14 days → Bima Bharosa → Ombudsman).
5. The user can reach a human claims expert with one tap at any step. The expert receives the full case file.

**P1**
- A live case timeline with regulatory clocks (1 h, 3 h, 15/30 days, 14 days) and breach flags.
- Hindi plus 2 regional languages, text and voice.
- Reads a query or deficiency letter and lists what is missing, citing the rule that the insurer must collect documents from the hospital.

**P2**
- Pre-purchase "what's not covered for you" summary.
- Motor and term-life claim variants.
- Auto-fetching documents from DigiLocker or ABHA.

## 5. Success metrics (each with a counter-metric)

| Metric | Counter-metric |
|---|---|
| ₹ recovered per contested claim (target ≥ ₹10,000 median) | Contest *precision*: ≥85% of contests the insurer upholds or partly upholds. We must not flood insurers with weak claims. |
| Time from settlement letter to contest filed: < 10 min (today: weeks or never) | User-approval rate on drafts ≥ 90% (no rubber-stamping; tracked by edits) |
| Cases resolved without a human: 60% | CSAT on AI-only cases ≥ human-handled cases; handoff requests answered < 5 min |
| Discharge-clock breaches evidenced: 100% | False breach flags < 2% |

## 6. Out of scope

- **Deciding claims.** The insurer decides. Haq advises, calculates, drafts and files with the customer's consent. This keeps the broker's role clean.
- **Medical-necessity judgements.** Disputes over whether a treatment was needed go to a human expert.
- **Fraud detection.** That is the insurer's job, and mixing it in would compromise the customer-advocate position.
- **Filing legal cases** (consumer court). Haq stops at the Ombudsman.
- **Non-health lines** in the hackathon build. They are only shown as roadmap.

## 7. Open questions

- Can Paytm, as a broker, send a contest on the customer's behalf, or only prepare it for the customer to send? *(Paytm Insurance Broking compliance)* Our default is that the customer sends it, with one tap, from their own email or the insurer portal.
- Which insurers expose claim status by API through NHCX today? *(Paytm partnerships)* The demo mocks this with NHCX-shaped FHIR resources.

---

## Current vs proposed journey (for the deck)

| Moment | Today | With Haq |
|---|---|---|
| Admission desk | Picks a ₹8,000 room; no idea about the cap | "Your cap is ₹5,000/day. A ₹8,000 room reduces what you can claim on surgery and other room-linked charges (~₹44,600 at this bill). Twin-share keeps you inside the cap." |
| During stay | Bill grows unseen | Running estimate of what is covered vs out-of-pocket |
| Discharge | Waits 6–48 h, pays the extra day | Clock starts at "discharge advised". Hospital desk and insurer nudged. A breach after 3 h is logged, so the insurer bears the extra charges. |
| Settlement letter | "₹88,875 deducted". Gives up. | In 60 s: ₹26,550 deducted in breach of IRDAI's June 2020 guidelines, with a ready-to-send contest |
| Grievance | Calls, emails, wrong forum | Ladder runs itself: day 0 insurer, day 14 Bima Bharosa, then Ombudsman, pre-filled and in the right order |
| Stuck | Bot loop | "Talk to a claims expert". The expert sees everything, so the user never repeats the story. |
