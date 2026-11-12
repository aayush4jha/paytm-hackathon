# Research report: Paytm today, and agentic AI in Indian financial services (as of Sept 2026)

This report draws on about 45 web searches and page fetches. Where I could not confirm a claim from a primary source, or only one weak secondary source supports it, it is marked **UNVERIFIED**. Results reported by vendors (Sierra, Decagon, Kogo and others) are labelled as vendor-reported.

---

## PART A: Paytm today

### A1. Latest operating numbers (Q1 FY27, the quarter ending 30 June 2026; earnings release dated 20 July 2026)
Source: Paytm Earnings Release Q1 FY2027 (primary PDF, text extracted) — https://paytm.com/document/ir/financial-results/Paytm_Earning-Release_Q1-FY-2027.pdf

| Metric | Q1 FY27 | Change |
|---|---|---|
| Revenue | ₹2,448 Cr | +28% YoY, +8% QoQ |
| EBITDA | ₹203 Cr (highest ever) | +182% YoY |
| PAT | ₹220 Cr | +79% YoY (per press coverage) |
| Financial services distribution revenue | ₹814 Cr | +45% YoY |
| Merchant GMV | ₹7.1 lakh Cr | +31% YoY |
| Subscription merchants (Soundbox and other devices) | 1.57 Cr | +27 lakh net devices YoY |
| MTU (monthly transacting users, average) | 8.0 Cr | +60 lakh YoY (7.4 Cr in Q1 FY26) |
| Consumer UPI GTV | ₹5.9 lakh Cr | +45% YoY, against about 20% industry growth |
| Key financial services customers | 7.6 lakh | +34% YoY |
| Merchant loans: repeat-borrower share | >50% of disbursements | — |
| Merchant loan indicative ECL | 4.5–5.0%; Bucket-1 resolution 83–90% | — |
| Total indirect expenses | ₹1,147 Cr | +6% YoY, against revenue +28% (called "AI as a Multiplier") |
| Sales employees (average) | 43,715 | +12% |

- Paytm is a **distributor, not a lender**. Loans are underwritten and booked on partner balance sheets, and Paytm acts as the collection outsourcing partner.
- The rupee value of loans disbursed is not given in the Q1 FY27 release I extracted, so it is not reported here.
- Earlier quarters:
  - Q1 FY26: first profitable quarter, PAT ₹123 Cr (https://paytm.com/blog/investor-relations/paytm-turns-profitable-with-rs123cr-pat-in-q1fy26/).
  - Q2 FY26: revenue ₹2,061 Cr, financial services ₹611 Cr, up 63%.
  - FY26 full year: PAT ₹552 Cr on revenue ₹8,437 Cr.
  - Cash was ₹13,315 Cr in March 2026 and ₹13,529 Cr per Q1 FY27 coverage.
- On 20 July 2026 the board approved a ₹100 Cr investment in Paytm Money and rejected a proposed bonus issue.

### A2. Product lines and regulatory status
- **Paytm Payments Bank (PPBL):**
  - RBI barred new customers in March 2022.
  - RBI barred deposits, credits and top-ups on 31 January and 16 February 2024.
  - **RBI cancelled PPBL's licence effective 24 April 2026**, citing persistent non-compliance and depositor interest. RBI says PPBL has enough liquidity to repay deposits.
  - Paytm UPI and payments continue through partner banks.
  - Sources: https://www.paytm.bank.in/Information/RBI-cancels-Licence-of-Paytm-Payments-Bank-Limited-Bank.pdf ; https://www.finextra.com/newsarticle/47642/rbi-cancels-paytm-payments-bank-license
- **Payment aggregator licences:** Paytm Payments Services Ltd (PPSL) received:
  - online PA authorisation on 26 November 2025;
  - offline and cross-border PA authorisation on 17 December 2025.
  - Source: https://yourstory.com/2025/11/rbi-paytm-ppsl-final-approval-payment-aggregator
- **Insurance:**
  - Paytm Insurance Broking Pvt Ltd (IRDAI broker registration no. 700) had its **Direct Broker (Life & General) licence renewed from 17 February 2026 to 16 February 2029** (https://www.businesstoday.in/markets/stocks/story/paytm-shares-in-focus-irdai-renews-insurance-broking-license-of-subsidiary-515509-2026-02-10).
  - Paytm withdrew its own general insurance licence application in 2024 and now only distributes.
  - Products listed: health (individual and floater), term life, two-wheeler, car, plus "shop and gadget" covers (https://paytminsurance.co.in/our-policies/FAQ/).
  - Paytm acts only as the broker; claims are filed with the insurer.
  - Grievance path: insurer first. If unresolved after 15 days, Paytm "Contact Us", then IRDAI Bima Bharosa (155255).
- **Micro and embedded covers:**
  - **Paytm Health Saathi** (July 2024) for merchants: from ₹35 per month; teleconsult and OPD through MediBuddy, plus income-protection cover; claims filed in the app; pilot with more than 3,000 merchants (https://paytm.com/blog/insurance/paytm-introduces-affordable-healthcare-and-income-protection-for-merchants-with-health-saathi-plan/).
  - "Payment Protect" / UPI fraud cover (for example, ₹30 premium covering up to ₹10,000): **UNVERIFIED as a current product.** The main source is an older Smartprix article.
  - Q1 FY27 KPIs explicitly **exclude "attachment insurance products"** because their contribution is negligible. That is a signal that insurance is still small in Paytm's revenue mix.
- **Lending:**
  - Merchant loans are the core lending line.
  - Personal loans are distributed for partner lenders.
  - **Paytm Postpaid was relaunched on 17 September 2025 as a credit line on UPI with Suryoday SFB.** It offers up to 30 days interest-free, works at merchants only (no P2P), and was rolled out to selected users (https://paytm.com/blog/loan/postpaid-loan/paytm-launches-postpaid-a-credit-line-on-upi-in-partnership-with-suryoday-small-finance-bank-offering-spend-now-pay-next-month-convenience/).
  - Management expects Postpaid to make a meaningful revenue and EBITDA contribution **from FY2028**.
- **Credit cards:** co-branded Paytm SBI Card and SELECT, and Paytm HDFC cards. Credit cards on UPI and UPI credit lines are lifting payment margins above 4 bps.
- **Wealth:** Paytm Money (equity broking, margin trade funding, mutual funds) and Paytm Gold. Management says "AI-powered offerings" will drive growth there.

### A3. Paytm's AI strategy (2025–2026)
- **February 2025, Perplexity partnership:** AI search inside the Paytm app, in local languages, for financial and everyday questions (https://paytm.com/blog/artificial-intelligence/paytm-partners-with-perplexity-to-bring-the-power-of-ai-to-crores-of-indians/).
- **October 2025 (Global Fintech Fest), Paytm AI Soundbox:** billed as India's first AI business device. It includes a voice assistant in 11 languages that answers merchants' questions about collections and trends, runs Android, and has dual displays (https://paytm.com/blog/artificial-intelligence/paytm-launches-indias-first-ai-soundbox-for-payments/).
- **8 May 2026, Q4 FY26 earnings call:**
  - Vijay Shekhar Sharma (VSS): "Any new investment, only in AI."
  - Paytm is piloting a **fully agentic chat interface for Paytm Checkin (travel)** as a "dip test" of whether Indian consumers are comfortable with agents.
  - It claims **funnel conversion 7–8x higher on the agentic interface**. This is management's own claim, not independently verified.
  - On Paytm Money, VSS said: "Agents will show up that will do trading… portfolio re-adjustment."
  - Source: https://www.medianama.com/2026/05/223-paytm-agentic-ai-wealthtech-growth-q4-fy26/
- **Q1 FY27 release (20 July 2026):**
  - "We have developed function specific models and agents by fine-tuning open source models."
  - Paytm lists AI in merchant onboarding, fraud prevention, "customer delight", marketing, cross-sell and collections, plus "AI agent-powered sales and service."
  - It says agentic coding, review and testing is lowering the cost of building software.
  - Next step for merchants: "building agents that can enable merchants to market their services, engage with their customers… and service their customers."
- **September 2026, Paytm Intelligence (Pi), shown at GFF 2026:**
  - An enterprise agentic AI service sold to **banks, lenders and insurers in India and the UAE**.
  - Agents cover sales calls, customer support, campaigns, cross-sell and back-office work.
  - It combines payments intelligence, behavioural models, voice and workflow automation.
  - VSS: "a low-cost AI model… 4 billion parameters, has low latency."
  - Some AI products already earn "a few lakhs" of revenue.
  - **Internally, Paytm's AI handles more than 10 million customer queries a month and has cut annual support costs by more than $11M** (company claim).
  - Paytm plans about 4,000 hires.
  - Sources: https://www.medianama.com/2026/09/223-paytm-paytm-intelligence/ ; https://www.freepressjournal.in/business/paytm-bets-big-on-ai-plans-to-offer-ai-agents-to-banks-and-insurers-in-india-and-uae
- **VSS thesis (September 2026):** AI agents will "eat apps" by 2027, and "by the end of 2026, we will have super-capable AI assistants" (https://yourstory.com/2026/09/paytms-vijay-shekhar-sharma-predicts-ai-agents-will-eat-apps-by-2027).
- **Paytm MCP server:**
  - An official "Paytm Payments MCP Server" (github.com/paytm/payment-mcp-server) was listed on MCP directories.
  - It exposes three tools: `create_payment_link`, `fetch_payment_links` and `fetch_transactions_for_link`.
  - It needs the environment variables `PAYTM_MID`, `PAYTM_KEY_SECRET` and `PAYTM_BASE_URL` (https://deepwiki.com/paytm/payment-mcp-server/2-core-components).
  - **The GitHub URL returned 404 when I fetched it, so its current status is UNVERIFIED.** It may be private, renamed or removed.

### A4. User pain themes

| Theme | Evidence |
|---|---|
| Refunds and failed transactions | Refunds shown as both failed and successful; months-long refund loops (Desidime, ComplaintsBoard); Trustpilot review in Aug 2026 waiting more than 10 days |
| Support quality and AI walls | Trustpilot, Sep 2026: "only AI will give the answer." Play Store: Soundbox complaint met by an AI phone call repeating "We regret that your issue has not been resolved yet" for an hour |
| Account access and KYC | Business account deactivated without notice; unable to withdraw or add a bank account for more than 2 months ("money held hostage", May 2026) |
| Fees and cashback | Unexpected convenience fees; coupons that could not be claimed |
| Lending and wealth trust | Complaints of loan verification without proper consent; digital gold buy/sell spread |
| Insurance | Paytm is a broker, so claim decisions sit with the insurer. The user has to handle a multi-hop grievance path: insurer, then Paytm, then IRDAI |

- Trustpilot rating is 1.4/5 from 170 reviews, 83% of them one-star. It is a small sample and not representative of the Play Store base (https://www.trustpilot.com/review/www.paytm.com).
- Paytm's stated service levels: first response in 2 hours and resolution in 2 business days, with Level-2 escalation by email (https://paytm.com/company/grievance).

### A5. India health-claims pain (context for the example problem)
- **FY25 (IRDAI data):** 3.26 Cr health claims; 87% settled, 8% repudiated, about 5% pending.
- **IRDAI does not collect the reasons for denials.** Insurer-wise rejection reasons are "not available" (https://www.insurancebusinessmag.com/asia/news/life-insurance/irdai-cannot-explain-why-health-insurance-claims-go-unpaid-583814.aspx, 27 July 2026).
- **FY24:** ₹15,100 Cr disallowed (12.9% of claims), ₹10,937 Cr repudiated (Business Standard). "₹30,000 Cr rejected in FY25" appears in only one secondary source and is **UNVERIFIED**.
- **Insurance Ombudsman FY25:** 53,184 complaints, about 71% settled in the policyholder's favour. **95% of health complaints concern partial or total repudiation**, typically over sub-limits, room-rent caps, co-pay or the "reasonable and customary" clause (secondary sources, including Business Standard).
- **IRDAI Health Master Circular (29 May 2024):** cashless pre-authorisation within **1 hour**, discharge authorisation within **3 hours**; the insurer pays the extra charges if late; target of 100% cashless.
- **Insurers adopting AI in claims:**
  - Star Health processes about 20% of cashless claims straight-through with AI and targets more than 50% within 2 years (March 2026). Humans handle exceptions, high-value claims and fraud.
  - ICICI Lombard says AI-based cashless approval cut decision time "from an hour to a minute" (company blog).

---

## PART B: Agentic AI in financial services

### B1. Agentic infrastructure and APIs in India that a hackathon team can call or mock

| Rail or API | What it is | Access for a hackathon | Status |
|---|---|---|---|
| **UPI Reserve Pay (formerly Single Block Multiple Debit)** | Block funds once, debit several times | NPCI circular OC-228 FY25-26; PSP docs (for example Pine Labs). Mock locally | Live. Cap about ₹10,000; blocks up to 90 days |
| **NPCI + Razorpay + OpenAI "Agentic Payments" pilot (October 2025)** | UPI payments inside ChatGPT via Reserve Pay and UPI Circle | Not open; reference design only | Pilot. Banks: Axis, Airtel Payments Bank. Merchants: BigBasket, Vi |
| **NPCI "Unified Agent Protocol"** | Lets agents make small UPI payments without per-payment approval; liability follows control | Not public | **UNVERIFIED.** Reuters cites unnamed sources; NPCI has not confirmed |
| **Pine Labs P3P (11 June 2026)** | UPI agent payments: Reserve Pay or one-time mandate, plus the "Grantex" identity/delegation layer and HTTP 402 payment requests | Talk to Pine Labs; the pattern is easy to mock | Production. Gullak live; Vijay Sales proof of concept |
| **Mastercard Agent Pay (India)** | Tokenised, authenticated agent card payments | Partner-only | First Indian authenticated agentic transaction in February 2026 (Axis, RBL; Swiggy, Zepto; through Razorpay, PayU, Juspay, Cashfree) |
| **Visa Intelligent Commerce / Trusted Agent Protocol** | Agent credentials and passkeys | Partner-only | Showcased in India at GFF 2026 |
| **Razorpay MCP server** | Official; remote hosted or local. Tools include orders, payment links, refunds, payouts | **Public GitHub; works with Razorpay test-mode keys, which suits a hackathon** | Live |
| **Paytm MCP server** | Payment-link tools | Needs a Paytm merchant ID and key (staging base URL is configurable) | Repo returned 404; **UNVERIFIED** |
| **Stripe Agent Toolkit / PayPal Agent Toolkit** | MCP and function-calling toolkits | Public, sandbox available | Stripe: February 2025. PayPal: April 2025 |
| **Account Aggregator (ReBIT specifications)** | Consented financial data (bank, insurance, mutual funds, pensions) | **Sandboxes from Finvu, OneMoney, Perfios, Setu and others; Sahamati has hackathon FAQs** | About 2.61 billion accounts enabled and about 252.9 million users linked by December 2025 (secondary source). 28,472 life policies issued through AA in FY25. Sahamati was recognised as the AA self-regulatory organisation on 5 June 2026 |
| **DigiLocker** | Issuer, requester and subscriber APIs; IRDAI told insurers in February 2021 to issue policies to DigiLocker | Partner portal: partners.digilocker.gov.in (registration needed); mock for a demo | Live |
| **ABDM (ABHA, HIE-CM consent, HIP/HIU)** | Health ID and consented FHIR R4 health records | **Public ABDM sandbox registration** | Live |
| **NHCX (National Health Claims Exchange)** | FHIR R4 claims exchange: coverage eligibility, pre-authorisation, claim, communication and payment notice | NRCeS FHIR implementation guide (nrces.in/ndhm/fhir/r4/hcx-profile.html); NHA sandbox certification | Live since June 2024. About 160 integrators and 12,600+ hospitals (May 2026, secondary source). NHA ran an NHCX hackathon, 22–28 February 2026, with IRDAI, GIC, Google and IIB |
| **Bima Sugam** | IRDAI marketplace; "Bima Pehchaan" insurance ID and electronic insurance account; buy, service, claims, grievance | Not open to developers | IRDAI chairman (30 June 2026): initial products by end of September 2026, behind schedule. Phase details are **UNVERIFIED** (secondary blogs) |

**Practical point for a hackathon:** a realistic stack is
- NHCX FHIR resources (mocked with the published implementation-guide profiles) for claim status and pre-authorisation;
- ABDM or DigiLocker for documents;
- an AA sandbox for financial and insurance data;
- Razorpay test-mode MCP (or a mocked Paytm payment-link MCP) for premiums and top-ups.

### B2. Agentic AI products in finance and CX

| Product | What it does | Reported results | Limits and caveats |
|---|---|---|---|
| **Lemonade AI Jim** (insurer) | Claims first notice of loss (FNOL), triage, instant pay | 10-K for FY2025: takes FNOL **96%** of the time with no human; about **55% of claims fully automated** | Escalates claims it cannot settle to humans; mostly simple personal lines |
| **Star Health** (India) | AI cashless adjudication | About 20% straight-through; target >50% in 2 years; tech spend ₹120 Cr rising to ₹200 Cr | Humans handle high-value, fraud and exception claims |
| **ICICI Lombard** (India) | OCR/ICR plus deep-learning cashless approval | "1 hour to 1 minute" (company claim) | Company claim only |
| **Sixfold** | Underwriting agent | More than 1M submissions; Zurich NA saves up to 2 hours per submission for 200+ underwriters | Underwriter keeps the decision |
| **Klarna AI assistant** | Customer service chat | February 2024: 2.3M chats in month one, two-thirds of chats, equivalent to 700 full-time agents, resolution <2 min vs 11 min, repeat inquiries down 25% | **May 2025: reversed course and rehired humans.** CEO: "We went too far… lower quality." Now positions human support as "VIP" |
| **Sierra** | Enterprise CX agents (Nubank, Ramp, Rocket Mortgage) | Vendor case studies: 64–94% resolution; WeightWatchers about 70% in week one | Vendor-reported; valued at $10B in Sep 2025 and above $15B in May 2026 |
| **Decagon** | CX agents (Chime, Bilt, Affirm) | Chime: 70% resolution on chat and voice, 60% lower cost (vendor). Bilt: 75% resolution | Vendor-reported |
| **Kasisto KAIgentic** | Banking agent platform (August 2025) | No public containment numbers found | — |
| **Haptik** (Jio) | BFSI WhatsApp and voice bots | Reports more than 1B conversations a year; CASHe WhatsApp loan journey "credit in under a minute" | Vendor claims |
| **Gupshup** | WhatsApp insurance journeys (SBI General: buy, renew, intimate claims) | No outcome metrics found | — |
| **Kogo AI** | Agent workspace for regulated industries | Reports about 30M voice interactions a day across 12+ languages; $10M Series B tranche in March 2026 | Vendor claims, **UNVERIFIED** |
| **Paytm (internal) / Paytm Intelligence** | Support, sales and ops agents | More than 10M queries a month; more than $11M a year saved on support; agentic travel funnel converts 7–8x | Company claims. Users complain about AI loops with no path to a human |

Yellow.ai, Cognigy and Uniphore: I found no credible BFSI outcome numbers.

### B3. Failures, risks and regulatory guardrails
- **Moffatt v. Air Canada (BC Civil Resolution Tribunal, 14 February 2024):** the company was held liable for a bereavement-fare policy its chatbot made up; the award was CAD 812.02. The tribunal rejected the argument that the chatbot was a separate entity. **Lesson:** anything the agent says about policy coverage is binding, so answers must be grounded in and cite the policy wording.
- **CFPB Issue Spotlight (June 2023):** chatbots in consumer finance risk:
  - inaccurate information;
  - failing to recognise that a customer is disputing or invoking their rights;
  - "doom loops" with no human;
  - privacy exposure.
- **Klarna reversal (2025):** cutting costs through AI degraded quality, and the company re-added humans for complex cases.
- **Which? / UK testing (November 2025):** ChatGPT, Copilot, Gemini and Meta AI gave confidently wrong financial guidance (for example, telling a user to exceed ISA limits) (https://www.giskard.ai/knowledge/when-ai-financial-advice-goes-wrong-chatgpt-copilot-and-gemini-failed-uk-consumers).
- **RBI FREE-AI framework (13 August 2025; committee chaired by Pushpak Bhattacharyya):**
  - **7 sutras:** Trust is the Foundation; People First; Innovation over Restraint; Fairness and Equity; Accountability; Understandable by Design; Safety, Resilience and Sustainability.
  - **6 pillars:** Infrastructure, Policy, Capacity, Governance, Protection, Assurance.
  - **26 recommendations**, including:
    - a board-approved AI policy;
    - **disclosure to customers when they are interacting with AI**;
    - consumer grievance paths to challenge AI decisions and trigger human review;
    - standardised AI incident reporting;
    - AI inventories and audits.
  - RBI's own survey found only about 15% of regulated entities used interpretability tools and about 35% tested for bias.
  - Source: https://rbidocs.rbi.org.in/rdocs/PublicationReport/Pdfs/FREEAIR130820250A24FF2D4578453F824C72ED9F5D5851.PDF
- **IRDAI:**
  - On 19 June 2026 it set up a 7-member AI working group (chaired by IIIT-H director Sandeep Shukla, with members from SBI Life, Star Health and ICICI Lombard). It has 3 months to draft the sector's first AI governance framework, which is due around September/October 2026.
  - It flagged **claims processing and fraud detection** as the priority areas.
  - Existing rules still apply: 1-hour and 3-hour cashless clocks, Bima Bharosa grievances, and the Ombudsman.
- **Agentic payments liability:**
  - The reported NPCI principle is "liability follows control": banks answer for authentication, PSPs for execution, merchants for misrepresentation, and the AI provider for actions outside the user's instructions.
  - Medianama raised unresolved liability and privacy questions about Pine Labs P3P.
- **DPDP Act and consent:** AA and ABDM consent artefacts give a ready-made, auditable way to show consent.

---

## Implications for a hackathon concept
1. **Match Paytm's own direction.** Paytm is betting on agentic interfaces (claiming 7–8x conversion), selling agents to insurers through Paytm Intelligence, and already distributes health, motor and term insurance as a licensed broker to about 8 Cr MTUs and 1.57 Cr merchants. An "insurance claim companion agent" fits both Paytm's consumer app and a Paytm Intelligence offer to insurers.
2. **The painful gap is after purchase, not the purchase itself.**
   - 95% of Ombudsman health complaints are about partial or total repudiation (sub-limits, room rent, co-pay).
   - IRDAI cannot see why claims are denied.
   - Paytm's broker role means users have to handle the insurer → Paytm → IRDAI path themselves.
   - Candidate agent jobs:
     - explain coverage *before* admission, including room-rent, sub-limit and co-pay impact, with cited clauses;
     - build a document checklist and pull documents from DigiLocker or ABDM;
     - track pre-authorisation and claims through NHCX (FHIR ClaimResponse);
     - flag breaches of the 1-hour and 3-hour clocks;
     - explain denials and draft a grievance or Ombudsman appeal;
     - offer a top-up or gap payment via UPI (Reserve Pay or a payment link through MCP).
3. **Build in the guardrails the regulators ask for:**
   - disclose that the user is talking to AI (FREE-AI);
   - ground every coverage answer in cited policy text (the Air Canada lesson);
   - route to a human in one step, since "AI loops" are Paytm's top complaint;
   - log consent through AA or ABDM artefacts;
   - use confidence thresholds, with humans deciding repudiations and payments;
   - keep an audit trail and an incident log.
4. **Merchant angle:** Soundbox merchants (Health Saathi) could use voice claims in 11 languages, reusing the AI Soundbox's multilingual voice stack.
5. **Demo feasibility:**
   - Real sandboxes: Razorpay MCP (test mode), AA sandboxes (Setu, Finvu, OneMoney), ABDM sandbox, Stripe/PayPal toolkits.
   - Mock these from their public specifications: NHCX (NRCeS FHIR implementation guide), Paytm payment-link MCP (3 tools), UPI Reserve Pay flow, DigiLocker pull.
6. **Metrics to pitch:**
   - claim turnaround time against the IRDAI 1-hour and 3-hour clocks;
   - fewer partial-repudiation surprises;
   - share of queries resolved without a human, together with a CSAT guardrail (Klarna's lesson);
   - cost per contact (Paytm claims more than $11M a year saved already).
   - Do not promise the 7–8x conversion figure; it is management's claim only.

---

## Sources (title — URL — date)
1. Paytm Earnings Release Q1 FY2027 — https://paytm.com/document/ir/financial-results/Paytm_Earning-Release_Q1-FY-2027.pdf — 20 Jul 2026
2. Paytm Q1 FY26 profitable (₹123 Cr PAT) — https://paytm.com/blog/investor-relations/paytm-turns-profitable-with-rs123cr-pat-in-q1fy26/ — Jul 2025
3. Paytm Q2 FY26 results — https://paytm.com/blog/investor-relations/paytm-q2-results-fy26-revenue-jumps-to-rs-2061-cr-led-by-robust-business-model-and-ai-led-opportunities-pat-improves-to-rs-211-cr/ — Nov 2025
4. Paytm FY26 results — https://paytm.com/support/investor-relations/paytm-fy-2026-results-full-year-profitability-with-pat-at-552-cr-revenue-grows-to-8437-cr — May 2026
5. DSIJ, Paytm Q1 FY27 (Paytm Money ₹100 Cr) — https://insights.dsij.in/dsijarticledetail/one-of-indias-largest-fintech-companies-reports-q1-fy27-results-profit-rises-79-yoy-to-rs-220-crore-board-approves-rs-100-crore-investment-in-paytm-money-58462 — Jul 2026
6. Medianama, Paytm agentic AI Q4 FY26 call — https://www.medianama.com/2026/05/223-paytm-agentic-ai-wealthtech-growth-q4-fy26/ — 8 May 2026
7. Medianama, Paytm Intelligence — https://www.medianama.com/2026/09/223-paytm-paytm-intelligence/ — Sep 2026
8. Free Press Journal, Paytm AI agents for banks and insurers — https://www.freepressjournal.in/business/paytm-bets-big-on-ai-plans-to-offer-ai-agents-to-banks-and-insurers-in-india-and-uae — 9 Sep 2026
9. Startuppedia, Paytm Pi — https://startuppedia.in/trending/paytm-expands-into-agentic-ai-with-pi-to-offer-ai-agents-to-banks-in-india-uae-12509459 — Sep 2026
10. YourStory, VSS "AI agents will eat apps" — https://yourstory.com/2026/09/paytms-vijay-shekhar-sharma-predicts-ai-agents-will-eat-apps-by-2027 — Sep 2026
11. Paytm blog, Perplexity partnership — https://paytm.com/blog/artificial-intelligence/paytm-partners-with-perplexity-to-bring-the-power-of-ai-to-crores-of-indians/ — Feb 2025
12. Paytm blog, AI Soundbox — https://paytm.com/blog/artificial-intelligence/paytm-launches-indias-first-ai-soundbox-for-payments/ — Oct 2025
13. DeepWiki, paytm/payment-mcp-server — https://deepwiki.com/paytm/payment-mcp-server/2-core-components — n.d. (GitHub repo https://github.com/paytm/payment-mcp-server returned 404)
14. RBI cancels PPBL licence — https://www.paytm.bank.in/Information/RBI-cancels-Licence-of-Paytm-Payments-Bank-Limited-Bank.pdf — 24 Apr 2026
15. Finextra, RBI cancels PPBL licence — https://www.finextra.com/newsarticle/47642/rbi-cancels-paytm-payments-bank-license — Apr 2026
16. YourStory, PPSL PA final approval — https://yourstory.com/2025/11/rbi-paytm-ppsl-final-approval-payment-aggregator — Nov 2025
17. BusinessToday, IRDAI renews Paytm broking licence — https://www.businesstoday.in/markets/stocks/story/paytm-shares-in-focus-irdai-renews-insurance-broking-license-of-subsidiary-515509-2026-02-10 — 10 Feb 2026
18. Paytm Insurance FAQ — https://paytminsurance.co.in/our-policies/FAQ/ — n.d.
19. Paytm Health Saathi — https://paytm.com/blog/insurance/paytm-introduces-affordable-healthcare-and-income-protection-for-merchants-with-health-saathi-plan/ — Jul 2024
20. Paytm Postpaid on UPI with Suryoday — https://paytm.com/blog/loan/postpaid-loan/paytm-launches-postpaid-a-credit-line-on-upi-in-partnership-with-suryoday-small-finance-bank-offering-spend-now-pay-next-month-convenience/ — 17 Sep 2025
21. Smartprix, Paytm Payment Protect (**UNVERIFIED as current**) — https://www.smartprix.com/bytes/paytm-payment-protect-will-save-you-from-fraudulent-transactions/ — older
22. Paytm grievance policy — https://paytm.com/company/grievance — n.d.
23. Trustpilot, Paytm — https://www.trustpilot.com/review/www.paytm.com — accessed Sep 2026
24. Desidime, Paytm refund complaints — https://www.desidime.com/discussions/paytm-not-providing-refund-how-to-raise-the-complaint — n.d.
25. Razorpay, NPCI and OpenAI agentic payments — https://razorpay.com/newsroom/razorpay-npci-and-openai-come-together-to-launch-agentic-payments-ushering-in-ai-driven-commerce-at-national-scale/ — Oct 2025
26. NPCI UPI Reserve Pay circular OC-228 — https://www.npci.org.in/uploads/UPI_OC_No_228_FY_2025_26_Enhancement_in_UPI_Single_Block_Multiple_Debits_UPI_Reserve_Pay_a9095c181d.pdf — FY25-26
27. Forkast, NPCI weighs agent protocol — https://forkast.news/india-eyes-ai-driven-upi-payments-as-npci-weighs-agent-protocol/ — 2026
28. Pine Labs P3P launch — https://www.pinelabs.com/media-analyst/the-ai-agent-can-now-pay-pine-labs-launches-p3p-indias-first-agentic-payment-protocol-built-on-upi — 11 Jun 2026
29. Medianama, P3P liability questions — https://www.medianama.com/2026/06/223-pine-labs-agentic-payments-protocol-upi-liability-privacy-questions/ — Jun 2026
30. Mastercard India first authenticated agentic transaction — https://www.mastercard.com/news/ap/en-in/newsroom/press-releases/en-in/2026/february/mastercard-demonstrates-readiness-for-a-new-era-of-ai-powered-payments-in-india-with-its-first-authenticated-agentic-commerce-transaction/ — Feb 2026
31. Visa Intelligent Commerce — https://www.visa.com/en-us/solutions/intelligent-commerce — n.d.
32. Razorpay MCP server — https://github.com/razorpay/razorpay-mcp-server — ongoing
33. PayPal Agent Toolkit and MCP — https://developer.paypal.com/community/blog/paypal-mcp-agenttoolkit/ — 2025
34. Stripe/PayPal/Visa/Mastercard agent APIs overview — https://paymentbrief.com/articles/ai-agents-payment-apis-mcp-stripe-toolkit/ — 2025/26
35. Sahamati AA sandbox — https://sahamati.org.in/fip-fiu-connecting-with-account-aggregators/ — n.d.
36. HyperVerge, AA 2026 guide (account statistics) — https://hyperverge.co/blog/account-aggregator-framework-rbi/ — 2026
37. PIB, IRDAI DigiLocker advisory — https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1697372 — Feb 2021
38. ABDM sandbox guide — https://healthatoms.com/kosha/india/ndhm-sandbox-gateway — n.d.
39. NRCeS NHCX FHIR profiles — https://www.nrces.in/ndhm/fhir/r4/hcx-profile.html — v6.5.0
40. PIB, NHCX hackathon winners — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2236366 — Mar 2026
41. Caladrius, NHCX explained (adoption statistics) — https://caladriushealth.ai/what-is-nhcx/ — 2026
42. Business Standard, Bima Sugam by September end — https://www.business-standard.com/finance/insurance/bima-sugam-to-launch-initial-products-by-sept-end-irdai-chairman-seth-126063000744_1.html — 30 Jun 2026
43. Ditto, Bima Sugam guide — https://joinditto.in/articles/general/bima-sugam/ — 2026
44. Insurance Business, IRDAI cannot explain unpaid claims — https://www.insurancebusinessmag.com/asia/news/life-insurance/irdai-cannot-explain-why-health-insurance-claims-go-unpaid-583814.aspx — 27 Jul 2026
45. Business Standard, ₹15,100 Cr disallowed FY24 — https://www.business-standard.com/industry/news/health-insurers-disallowed-claims-worth-rs-15-100-cr-during-fy24-irdai-124123000562_1.html — Dec 2024
46. Business Standard, insurance complaints up 45% in Q2 2025 — https://www.business-standard.com/amp/finance/personal-finance/insurance-complaints-up-45-in-q2-2025-most-about-health-policies-report-125092401017_1.html — Sep 2025
47. IRDAI cashless 1-hour and 3-hour rules — https://www.angelone.in/news/personal-finance/cashless-health-insurance-claim-authorisation-in-2025-how-long-does-it-take-irdai-s-new-rules-and-data — 2025
48. Angel One, Star Health AI claims — https://www.angelone.in/news/market-updates/star-health-expects-most-cashless-claims-to-be-settled-by-ai-within-2-years — 10 Mar 2026
49. ICICI Lombard AI claims blog — https://www.icicilombard.com/health-insurance/blogs/ai-based-claim-settlement — n.d.
50. Lemonade 10-K FY2025 — https://www.sec.gov/Archives/edgar/data/1691421/000169142126000016/lmnd-20251231.htm — 2026
51. Klarna press release, AI assistant — https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/ — Feb 2024
52. CX Dive, Klarna rehires humans — https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/ — May 2025
53. Sixfold 1M submissions — https://insurance-edge.net/2025/12/05/sixfold-passes-1-million-ai-underwriting-marker/ — Dec 2025
54. Zurich NA, Sixfold — https://www.zurichna.com/media/news-releases/2025/ai-tool-brings-real-world-value-to-zurich-usmm-underwriters — 2025
55. Decagon, Chime case study — https://decagon.ai/case-studies/chime — 2025
56. Sacra, Sierra — https://sacra.com/c/sierra/ — 2026
57. Kasisto KAIgentic launch — https://kasisto.com/press-releases/kasisto-launches-kaigentic-the-banking-standard-for-agentic-ai/ — Aug 2025
58. Gupshup and SBI General on WhatsApp — https://www.gupshup.ai/resources/press-releases/gupshup-supports-sbi-general-insurance-with-seamless-health-insurance-buying-journey-on-whatsapp/ — n.d.
59. Haptik, AI agents in BFSI — https://www.haptik.ai/blog/ai-agents-use-cases-in-banking — 2026
60. ABA, Moffatt v. Air Canada — https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/ — Feb 2024
61. CFPB, Chatbots in consumer finance — https://www.consumerfinance.gov/about-us/newsroom/cfpb-issue-spotlight-analyzes-artificial-intelligence-chatbots-in-banking/ — Jun 2023
62. Giskard, AI financial advice failures (UK) — https://www.giskard.ai/knowledge/when-ai-financial-advice-goes-wrong-chatgpt-copilot-and-gemini-failed-uk-consumers — Nov 2025
63. RBI FREE-AI report PDF — https://rbidocs.rbi.org.in/rdocs/PublicationReport/Pdfs/FREEAIR130820250A24FF2D4578453F824C72ED9F5D5851.PDF — 13 Aug 2025
64. Chambers, FREE-AI summary — https://chambers.com/articles/rbi-committee-report-on-responsible-ai-in-the-financial-sector-free-ai-framework — 2025
65. Insurance Business, IRDAI AI working group — https://www.insurancebusinessmag.com/asia/news/technology/indias-insurance-regulator-steps-in-to-govern-ai-adoption-579846.aspx — Jun 2026
