# Insurance in India: Research for the AI-Powered Financial Journeys Hackathon

Focus: health insurance, plus motor and term life. Research date: 25 Sep 2026.
Conventions: every number has a source. Anything taken from a secondary blog or not confirmed in a primary source is marked **UNVERIFIED**. The IRDAI Annual Report 2024-25 and the Insurance Ombudsman (CIO) Annual Report 2023-24 were downloaded and read directly (marked **[primary]**).

---

## 1. Key statistics

### 1.1 Health claims: volume and outcomes (IRDAI Annual Report 2024-25) [primary]
Table I.29, general and health insurers, FY25 (1 Apr 2024 to 31 Mar 2025):

| Metric | Number (lakh) | Amount (Rs crore) | Share |
|---|---|---|---|
| Total claims to handle (opening outstanding plus new) | 372.58 | 1,32,487.81 | 100% |
| Paid | 326.01 | 94,247.60 | 87.50% by number, 71.14% by value |
| **Disallowed** (deductions under policy terms, i.e. partial payment) | n/a | **18,521.02** | **13.98% of value** |
| **Repudiated** (rejected outright) | **29.51** | **11,412.42** | **7.92% by number, 8.61% by value** |
| Outstanding at year end | 17.07 | 8,306.76 | 4.58% / 6.27% |

- **About Rs 29,900 crore (roughly 22.6% of claimed value) was either deducted or rejected in FY25.** Deductions (Rs 18.5k cr) were larger than outright rejections (Rs 11.4k cr). This is the main number behind "partial settlement" frustration.
- Average paid claim: **Rs 28,910**. How claims were settled: **69% through TPAs, 31% in-house**. **58% by number were cashless (66.35% by value)** and **36.7% reimbursement only**. TPA-handled claims: 136.33 lakh cashless and 81.26 lakh reimbursement.
- Coverage: **58 crore lives under 2.65 crore policies**. Of those lives, 42.3% are under government schemes, 47.4% under group policies and only **10.3% under individual/retail policies**.
- Health premium FY25: **Rs 1,27,417 crore**, which is 41.42% of non-life premium ([Outlook Money](https://www.outlookmoney.com/personal-finance/irdai-2024-25-annual-report-health-premiums-cross-rs-127-lakh-crore-mark)).
- Insurance penetration is flat at **3.7% of GDP**, with non-life at 1.0% ([Business Standard](https://www.business-standard.com/amp/finance/insurance/india-s-insurance-penetration-needle-remains-flat-at-3-7-in-2024-25-126010900679_1.html)).
- Source PDF: [IRDAI Annual Report 2024-25](https://lifeinscouncil.org/component/IRDAI%20Annual%20Report%202024-25.pdf)

### 1.2 FY24 comparison (IRDAI Annual Report 2023-24, via press)
- Rs 1.17 trillion claimed and **Rs 83,493 cr paid (71.29%)**. **Rs 15,100 cr disallowed (12.9%)**, Rs 10,937 cr repudiated (9.34%), Rs 7,584 cr outstanding. 3.26 crore claims, 82.46% settled by number, average Rs 31,086 ([The Statesman](https://www.thestatesman.com/business/health-insurers-disallow-claims-worth-rs-15100-crore-in-fy24-irdai-1503381190.html); [Business Standard](https://www.business-standard.com/industry/news/health-insurers-disallowed-claims-worth-rs-15-100-cr-during-fy24-irdai-124123000562_1.html)).
- Disallowed plus repudiated came to about Rs 26,000 cr, up 19.10% from Rs 21,861 cr in FY23 ([Business Standard](https://www.business-standard.com/amp/finance/personal-finance/health-insurance-claims-rejection-up-19-10-in-fy24-irdai-report-124122700754_1.html)).
- **Trend: disallowed amounts grew from Rs 15.1k cr in FY24 to Rs 18.5k cr in FY25, about 23% (my calculation from the two reports).**

### 1.3 IRDAI does not collect the reasons behind rejections
- A parliamentary reply confirmed that "insurer-wise data on claims rejected specifically on grounds such as 'non-medical necessity' or 'exclusion' ... is not available". IRDAI collects only aggregate repudiation rates ([Insurance Business Asia, 27 Jul 2026](https://www.insurancebusinessmag.com/asia/news/life-insurance/irdai-cannot-explain-why-health-insurance-claims-go-unpaid-583814.aspx)). **The system cannot explain its own deductions, so a product that explains them fills a real gap.**

### 1.4 Cashless turnaround: official data vs what patients report
- **Official (Finance Minister's Lok Sabha reply, 1 Dec 2025, period 1 Aug 2024 to 31 May 2025):**
  - Pre-auth: **86.88% of 63.7 lakh requests decided within 1 hour**, 8.49% in 1-2 h, 3.11% in 2-5 h, 1.52% over 5 h.
  - Final discharge authorisation: **96.69% of 56.8 lakh within 3 hours**, 0.77% over 8 h.
  - Sources: [Upstox](https://upstox.com/news/personal-finance/insurance/how-long-does-cashless-health-insurance-claim-authorisation-take-latest-irdai-rules-and-data/article-185553/), [Angel One](https://www.angelone.in/news/personal-finance/cashless-health-insurance-claim-authorisation-in-2025-how-long-does-it-take-irdai-s-new-rules-and-data)
- **What patients report (LocalCircles, Jan 2025, 30,366 respondents):** only 8% were discharged instantly. **21% waited 24-48 h**, 12% 12-24 h, 14% 9-12 h, 12% 6-9 h, 21% 3-6 h and 12% 1-3 h. **60% waited 6-48 hours** ([LocalCircles](https://m-www.localcircles.com/a/press/page/health-insurance-claims-processing)).
- **LocalCircles, Mar 2026 (54,000+ responses, 323 districts):** 50% waited 6-48 h for discharge approval and 8% were instant ([LocalCircles](https://www.localcircles.com/a/press/page/health-insurance-claim-survey)).
- **How to read the gap:** the insurer's 3-hour clock starts only when the hospital sends the discharge request. The time before that (final bill, discharge summary, file assembly) is not measured. Medi Assist's CEO cited a typical **3-4 h for bill generation plus 1-2 h of TPA processing** at discharge ([The Federal, Nov 2024](https://thefederal.com/category/business/insurance-tpa-medi-assist-banking-on-ai-to-enhance-claims-submission-157758)). **The hospital-side preparation before the request is the least-measured and most-felt friction.**

### 1.5 Claim outcomes as patients report them (LocalCircles)
- **Jan 2025 (28,700 respondents with a claim in the last 3 years):** 20% rejected for invalid reasons, 33% partially approved for invalid reasons, 25% fully approved, 6% approved only after negotiation. More than 50% saw a rejection or partial denial. **47% said they had personally experienced intentional delays by insurers.** **83% want IRDAI to require a transparent web-based claim-processing system** ([LocalCircles](https://m-www.localcircles.com/a/press/page/health-insurance-claims-processing); [Business Today](https://www.businesstoday.in/personal-finance/insurance/story/insurance-claims-over-50-health-cover-claims-faced-rejection-or-partial-approval-says-survey-459394-2025-01-02)).
- **Mar 2026 (2023-25 claims):** 15% fully rejected, 29% partially approved for invalid reasons, 15% partially approved for valid reasons, 32% fully approved, 9% approved after back-and-forth. **70%+ saw premiums rise 50-200% cumulatively over 2022-25** ([LocalCircles](https://www.localcircles.com/a/press/page/health-insurance-claim-survey)).

### 1.6 Grievances (Bima Bharosa, IRDAI Annual Report 2024-25) [primary]
- **2,57,790 grievances in FY25**: 1,20,429 life and **1,37,361 general and health**. General and health grievances rose from 94,843 in FY24, up about 45%.
- **69% of general and health grievances were about claims.** That is 88,841 claim-related grievances against 11.26 crore claims.
- Pending at year end: 9,606 for general and health insurers, of which 8,201 were at PSU insurers.
- Life: unfair business practice (mis-selling) grievances were 26,667 (22.14% of life grievances), up from 23,335. 15,085 were decided against the policyholder.
- Separately, 14,156 grievances reached IRDAI through the government's CPGRAMS/DARPG portal.

### 1.7 Insurance Ombudsman
- **FY24 [primary, CIO Annual Report 2023-24]:** 52,575 complaints received in total. **Health: 31,490 (about 60%)**. Of 24,663 entertainable health complaints, **23,386 (94.8%) were under Rule 13(1)(b), "partial or total repudiation of claims"**. Only 446 were about delay. Another 6,699 were non-entertainable, mostly because the complainant had not first gone to the insurer. By insurer: Star Health 12,594 received, of which 7,506 were ruled against the insurer; Care 3,419; Niva Bupa 2,399 ([CIO report](https://cioins.co.in/annualreports/AnnualReport2023-2024.pdf); [basunivesh](https://www.basunivesh.com/top-5-health-insurance-companies-by-complaints-cio-report/)).
- **FY25:** Star Health 12,186 (51 per lakh policyholders), Care 4,423, Niva Bupa 3,983, Aditya Birla Health 2,354, HDFC ERGO 1,542, ICICI Lombard 974 ([Insurance Business Asia, 13 Feb 2026](https://www.insurancebusinessmag.com/asia/news/life-insurance/latest-india-data-finds-complaints-clustered-in-insurance-segment-565197.aspx)).
- **Insurance Samadhan (9,928 grievances):** 88% of complaints were about claim rejection. 46% came from 25-38 year-olds, 67% were graduates, and 62% were salaried professionals. Even educated users fail at this journey ([Business Today, 12 Mar 2025](https://www.businesstoday.in/personal-finance/insurance/story/88-of-consumer-complaints-are-due-to-insurance-claims-being-rejected-report-467731-2025-03-12)).

### 1.8 Policy literacy
- **CoverSure survey (5,000+ people, Jun 2025):** 79% unsure whether their cover is adequate. 65% have limited or no understanding of benefits, exclusions and claims. **60% of dependents did not know they were covered** and only 1 in 10 could describe the benefits ([Business Today](https://www.businesstoday.in/personal-finance/insurance/story/insurance-illusion-79-of-indians-unsure-what-their-policies-actually-cover-says-survey-481785-2025-06-25)).
- The "missing middle" is an estimated **300-350 million Indians without health cover** ([SAGE 2024](https://journals.sagepub.com/doi/10.1177/00252921241284190); [NITI Aayog 2021](https://www.niti.gov.in/sites/default/files/2021-10/HealthInsurance-forIndiasMissingMiddle_28-10-2021.pdf)).

### 1.9 Life and term
- Individual death-claim settlement is **97.82% by number in FY25** ([Outlook Money](https://www.outlookmoney.com/personal-finance/irdai-2024-25-annual-report-health-premiums-cross-rs-127-lakh-crore-mark)). Section 45 allows repudiation for non-disclosure only within 3 years of policy start. Life insurers recorded 33,280 claim-related grievances against 26.68 lakh life claims (IRDAI AR, primary).

---

## 2. Regulatory facts

### 2.1 IRDAI Master Circular on Health Insurance Business (29 May 2024)
It replaced 55 earlier circulars. Systems had to be in place by **31 Jul 2024**.
- **Cashless pre-auth decision "immediately, but not more than 1 hour"** from receiving the request. Pre-auth must also be available in digital mode.
- **Final discharge authorisation within 3 hours** of the hospital's request. **Any extra hospital charges caused by a delay beyond 3 hours are borne by the insurer from its shareholders' fund.** The patient must not be made to wait for discharge.
- **The policyholder is not required to submit documents.** Insurers and TPAs must collect them from the hospital.
- **No claim may be repudiated without approval from the Claims Review Committee.** For a rejection or partial disallowance, the reasons must be given in detail, citing specific policy clauses.
- **Insurers must "strive to achieve 100% cashless" settlement** in a time-bound manner.
- **Moratorium is 60 months.** After 5 years of continuous cover, no claim can be contested for non-disclosure or misrepresentation except proven fraud. Waiting period for pre-existing diseases capped at 36 months. No entry-age cap. Free-look period is 30 days.
- Renewal cannot be denied because of past claims. Customers must receive a Customer Information Sheet.
- **Rs 5,000 per day** is payable to the complainant if an Ombudsman award is not implemented within 30 days.
- Sources: [The Week, 30 May 2024](https://www.theweek.in/news/india/2024/05/30/irdai-issues-new-master-circular-to-make-health-insurance-claims-process-more-seamless.html); [Actuaries India copy of the circular](https://www.actuariesindia.org/sites/default/files/inline-files/5.%20Master%20Circular%20on%20Health%20Insurance%20Business%202024.pdf); [Fincart](https://www.fincart.com/blog/irdais-new-master-circular-on-health-insurance)
- Proportionate (room-rent) deduction may not be applied to ICU, medicines, implants, consumables or diagnostics ([Ditto](https://joinditto.in/articles/health-insurance/proportionate-deduction-in-health-insurance/)).

### 2.2 Settlement timelines and penalties
- Reimbursement decision within 30 days of the last required document. Delay attracts **penal interest at bank rate + 2%** ([Oquilia](https://www.oquilia.com/news/irdai-claim-settlement-tat-norms), secondary).
- **Motor (Master Circular on General Insurance, Jun 2024):** surveyor allotted within 24 h through the General Insurance Council's system. Survey report within 15 days. Insurer decision within 7 days of the report. A claim cannot be rejected only for missing documents ([Business Today, 11 Jun 2024](https://www.businesstoday.in/personal-finance/insurance/story/irdai-new-claim-settlement-rules-insurers-to-settle-claims-within-7-days-surveyors-to-submit-reports-within-15-days-check-other-details-432968-2024-06-11)). **UNVERIFIED:** a Rs 500/day payment to the claimant for surveyor delay (from a secondary site only).
- **Life:** death claims within 15 days if no investigation is needed, 45 days if it is. Interest at bank rate + 2% for delay (secondary sources; [GI Council repost](https://www.gicouncil.in/news-media/gic-in-the-news/how-irdai-s-new-master-circular-help-life-health-insurance-policyholders/)).
- **Grievances:** acknowledge promptly and resolve within **14 days**. If unresolved, go to Bima Bharosa and then the Ombudsman ([Oquilia](https://www.oquilia.com/news/irdai-protection-policyholders-interests-master-circular-2024-grievance), secondary).

### 2.3 Cashless Everywhere (General Insurance Council, 24 Jan 2024)
- Cashless treatment at **non-network hospitals with at least 15 beds**. Intimation **48 h before a planned admission**, or **within 48 h of an emergency admission** ([GI Council press release](https://www.gicouncil.in/news-media/events/press-release-launch-of-cashless-everywhere/)).
- It depends on the hospital agreeing to the insurer's tariff. Disputes still break cashless access:
  - **AHPI told about 15,000 hospitals to suspend cashless for Bajaj Allianz from 1 Sep 2025**, citing unilateral deductions and delayed pre-auth and discharge approvals. The notice was withdrawn on 28 Aug 2025 ([Business Today](https://www.businesstoday.in/personal-finance/insurance/story/ahpi-revokes-suspension-of-cashless-services-for-bajaj-allianz-policyholders-491617-2025-08-29)).
  - **Niva Bupa lost cashless at Max Hospitals** in Aug-Sep 2025 ([Business Standard](https://www.business-standard.com/amp/finance/personal-finance/cashless-no-more-niva-bupa-customers-to-pay-at-max-hospitals-claim-later-125090200136_1.html)).

### 2.4 National Health Claims Exchange (NHCX)
- Built by the National Health Authority with IRDAI under the Ayushman Bharat Digital Mission. **Live since June 2024.** It is a FHIR-based digital exchange of claim messages between hospitals, insurers and TPAs. IRDAI directed onboarding in June 2023 ([Wikipedia](https://en.wikipedia.org/wiki/National_Health_Claims_Exchange)).
- Reported status: about 160 integrators and **12,600+ hospitals** as of May 2026 (**UNVERIFIED**, from a vendor blog, [Healthixio](https://healthixio.com/blog/view/nhcx-integration-guide-hospitals/)). Adoption is described as "well underway but uneven". There is no hard legal mandate on hospitals.
- For a product: NHCX standardises the pipe between institutions, not the patient's experience. The patient still cannot see the claim.

### 2.5 Bima Sugam
- IRDAI (Bima Sugam - Insurance Electronic Marketplace) Regulations, 2024. Run by the not-for-profit Bima Sugam India Federation.
- **First products (motor, health, term) targeted to go live by end-Sep 2026**, per IRDAI Chairman Ajay Seth ([Business Standard, 30 Jun 2026](https://www.business-standard.com/amp/finance/insurance/bima-sugam-to-launch-initial-products-by-sept-end-irdai-chairman-seth-126063000744_1.html)).
- Motor for new vehicles began in Jun 2026 and renewals in Aug 2026 (**UNVERIFIED**, [Vaatun](https://www.vaatun.com/posts/bima-sugam-renewals-august-2026-brokers)).
- Claims and servicing are planned for later.

### 2.6 GST
- Individual health and life premiums became **GST-exempt from 22 Sep 2025** ([PolicyX](https://www.policyx.com/health-insurance/articles/irdai-new-rules-2026/), secondary).

---

## 3. Top user pain points, ranked by evidence strength

1. **Partial settlement and opaque deductions.** This is the single largest pain point.
   - Rs 18,521 cr was disallowed in FY25, more than was repudiated.
   - 29-33% of LocalCircles claimants got "partially approved with invalid reasons".
   - Causes: room-rent caps with proportionate deduction, a "Claim Payable = (Eligible room rent ÷ Actual room rent) × bill" formula ([Ditto](https://joinditto.in/articles/health-insurance/proportionate-deduction-in-health-insurance/)); non-payable consumables (gloves, masks, PPE, toiletries) ([ManipalCigna](https://www.manipalcigna.com/blog/non-payable-items-health-insurance)); disease sub-limits; co-pay; and "customary and reasonable" cuts.
   - Ditto example: a cataract claim was paid at Rs 60,000 instead of Rs 90,000 until a doctor's letter got it paid in full ([Zerodha Z-Connect x Ditto](https://zerodha.com/z-connect/insurance-by-ditto/top-reasons-why-insurance-companies-deny-your-claim-and-what-you-can-do-about-it)).
   - 2021 industry data: 85.4% of claims settled by number but only 53.8% by value, attributed to room-rent caps, sub-limits and consumables ([Business Standard](https://www.business-standard.com/amp/article/pf/low-sum-insured-sub-limits-give-rise-to-partial-payouts-experts-121041301412_1.html)).
2. **Outright rejection: non-disclosure, waiting periods, exclusions.**
   - About 8% of claims by number are repudiated, and **94.8% of health Ombudsman complaints are about repudiation**.
   - Ditto calls non-disclosure "the most common denial reason". Its examples include an ACL injury wrongly rejected under a 2-year waiting-period exclusion and a hospital on the insurer's blacklist.
   - Business Standard example: a 72-year-old's Rs 4 lakh claim was rejected for "non-disclosure" because of a hospital note on 3 months of chest heaviness. It took **10 months of appeals** to get it settled ([Business Standard](https://www.business-standard.com/amp/finance/personal-finance/claim-denied-mistakes-in-health-insurance-that-can-give-you-heartache-123112301194_1.html)).
   - **UNVERIFIED:** claims like "non-disclosure causes ~25%/30-40% of rejections" come from blogs, not IRDAI.
3. **Discharge-day waiting.** 50-60% wait 6-48 h (LocalCircles), even though 96.7% of insurer decisions come within 3 h. The bottleneck is hospital billing, file assembly and queries.
4. **Not understanding one's own policy.** 65% have limited or no understanding and 60% of dependents do not know they are covered (CoverSure). The mistakes happen at purchase (disclosure) and at admission (room category).
5. **Opaque status and a sense of intentional delay.** 47% say they have personally seen deliberate delays, and 83% want a transparent web-based claim-tracking system (LocalCircles).
6. **Reimbursement friction: documents and query letters.**
   - Any deficiency letter stops the regulatory clock until the customer responds ([Ditto on timelines](https://joinditto.in/articles/health-insurance/cashless-health-insurance-claims-timelines/)).
   - Practice reports put reimbursement at 45-90 days (**UNVERIFIED**, [InterPixels](https://interpixels.ai/insights/insights-cashless-vs-reimbursement-health-insurance-claims-apac/)).
   - **Gap: there is no public data on the share of claims that get a query letter.**
7. **Cashless breakdowns** from insurer-hospital tariff disputes (AHPI, Max) and non-network hospitals refusing cashless.
8. **Escalation is hard to navigate.**
   - 6,699 of 31,490 health Ombudsman complaints (21%) were non-entertainable, mainly because they were not first filed with the insurer [primary].
   - People do not know the insurer, then Bima Bharosa, then Ombudsman sequence (IRDAI AR; CIO).
9. **Premium shock at renewal.** 70%+ saw premiums rise 50-200% over 3 years (LocalCircles 2026).

---

## 4. Friction at each stage of the journey

| Stage | Friction | Evidence |
|---|---|---|
| **Discovery** | Only 10.3% of covered lives hold retail policies, and there are 300-350M uninsured. Plans are compared on premium, not on room-rent caps, sub-limits or co-pay. Claim settlement ratio figures are misread. | IRDAI AR; SAGE; [Beshak](https://www.beshak.org/insurance/insurance-companies/star-health-and-allied-insurance-company-limited/claim-settlement-ratio/) says CSR "offers only a partial view" |
| **Purchase / proposal** | Non-disclosure on the proposal form becomes a rejection years later (within the 5-year moratorium). Mis-selling grievances (life) rose 14%. | IRDAI AR; Master Circular |
| **Post-purchase / literacy** | 65% don't understand their policy, 60% of dependents unaware of cover. Waiting-period clocks are invisible. | CoverSure |
| **Claim intimation** | Cashless Everywhere needs 48 h notice for planned admissions. Users don't know the TPA, policy number or e-card at the admission desk. | GI Council |
| **Pre-auth (admission)** | 13% of pre-auths take more than 1 h. Room category is chosen without knowing the proportionate-deduction effect. Hospital may refuse cashless. | Lok Sabha data; AHPI disputes |
| **During stay** | Enhancement requests, consumables and non-payables pile up unseen, so the patient learns the out-of-pocket amount only at discharge. | Medi Assist "predictive billing" shows the gap exists |
| **Discharge** | 50-60% wait 6-48 h. Billing (3-4 h) plus TPA (1-2 h) before and after the insurer's 3-h clock. | LocalCircles; The Federal |
| **Reimbursement / documents** | Deficiency letters stop the clock. Originals and illegible discharge summaries cause trouble. Reimbursement is 36.7% of claims by number. | IRDAI AR; Ditto |
| **Settlement** | Deductions are shown as line items without plain-language reasons. Rs 18.5k cr disallowed in FY25. | IRDAI AR |
| **Grievance** | Insurer (14 days), then Bima Bharosa, then Ombudsman (5,000+ complaints per year at Star alone). 21% of health Ombudsman complaints non-entertainable because of wrong sequencing. | CIO report |
| **Motor** | Surveyor scheduling, depreciation disputes, FIR/RC/DL paperwork. Regulatory clock is 24 h + 15 d + 7 d. | Business Today |
| **Term / life death claim** | Nominee paperwork, early-claim investigation within 3 years (Section 45), missing alternate nominee leading to a succession certificate. | Secondary |

---

## 5. Existing solutions

| Player | What it does | Where AI is used | What stays manual | Limitations |
|---|---|---|---|---|
| **Policybazaar** | Claim assistance, "30-minute claim assistance" for health, Claim Samadhan Diwas (Rs 24 cr in disputed health claims settled), term D-CAP (Rs 227 cr since Apr 2022) | Not publicly detailed | Relationship managers and advisors, escalation to insurers | Help is limited to policies bought on Policybazaar; human-heavy; reactive ([PB claim](https://www.policybazaar.com/claim/), [Samadhan Diwas](https://www.policybazaar.com/health-insurance/claim-samadhan-diwas/)) |
| **Ditto** | Advisory plus claims support for health and term | "Ditto 2.0" conversational AI for advisory; AI tools for analysing policy documents (per Tracxn / secondary) | Claims managers do the follow-up. Scale reported as about 5-6 claims per day (secondary) | Human-limited; helps only its own customers ([Ditto claims](https://joinditto.in/claims-assistance/)) |
| **Beshak** | Unbiased reviews, CSR and complaint analysis of NL-39 disclosures | None evident | One-on-one advisors | Content and analysis; no claim operations |
| **Insurance Samadhan** | Paid advocacy after rejection (Ombudsman, legal); 18,000+ cases, Rs 160 cr recovered | Polifyx app (claims a 55% turnaround reduction) | Case work by experts | Starts after the damage is done; takes a success fee |
| **ClaimBuddy** | Staff at hospital desks helping with cashless filing; 35,000+ patients, Rs 500 cr+, 250+ hospitals | Tech-enabled checks (limited public detail) | On-ground "Claim Buddies" | Hospital-by-hospital scaling ([Insurtech Insights](https://www.insurtechinsights.com/claimbuddy-raises-us5-million-in-series-a-funding-to-boost-health-insurance-claim-assistance-platform/)) |
| **ICICI Lombard** | Claims copilot on Azure OpenAI, OCR and Document Intelligence; summarises discharge summaries, lab reports and bills; checks against NHA protocols | Claim processing time down more than 50%, 2x adjudicator productivity | Adjudicator decides | Built for the insurer, not the customer; no patient transparency ([Microsoft](https://www.microsoft.com/en-in/aifirstmovers/icici-lombard)) |
| **Star Health** | About 20% of claims processed with AI; target more than 50% of routine cashless claims in 2 years; 85% of claim value is cashless. Reported Amplify Health platform deal (Jun 2026) and Medi Assist AI platform | Routine adjudication, fraud | Exceptions, high-value claims, fraud | Still the #1 insurer by Ombudsman complaints ([Angel One, Mar 2026](https://www.angelone.in/news/market-updates/star-health-expects-most-cashless-claims-to-be-settled-by-ai-within-2-years); [Digital Health News](https://www.digitalhealthnews.com/star-health-targets-ai-driven-settlement-for-majority-of-cashless-claims)) |
| **HDFC ERGO** | 80%+ of service interactions digital, about 10% of them AI-led; WhatsApp and chatbot; straight-through decisions for low-complexity claims on the roadmap | GenAI for communication and fraud | Most claims | Internal efficiency focus ([Duck Creek](https://www.duckcreek.com/resource/press-releases/hdfc-ergo-becomes-indias-first-insurer-to-service-health-insurance-using-duck-creek-ondemand/)) |
| **Medi Assist (largest TPA)** | 72.9 lakh claims in FY25, 348M lives; "Raksha Prime" bill-free discharge for about 3.22 lakh patients (FY26) | Predictive billing, fraud detection (fraud savings up 60%) | Adjudication at scale | B2B; the patient has little visibility ([The Federal](https://thefederal.com/category/business/insurance-tpa-medi-assist-banking-on-ai-to-enhance-claims-submission-157758)) |
| **ACKO** | Digital-first health and motor insurer | OCR, NLP and ML for straightforward claims (**UNVERIFIED** specifics, [Digiqt](https://digiqt.com/blog/acko-insurance-automation/)) | Complex claims | Only ACKO's own policies |
| **Digit** | Smartphone self-inspection for motor claims | Computer vision on damage video (**UNVERIFIED** specifics, [productgrowth](https://productgrowth.in/insights/insurtech/motor-insurance-digital-journey/)) | Surveyor for larger losses | Only its own policies |
| **Plum / Loop** (group health) | App-based claim start, real-time tracking, emergency flag in 3 taps. Loop: 95% of claims settled within 10 days, 98.7% CSAT (self-reported) | Plum: GPT-4 vision plus Vertex OCR brought reimbursement turnaround to about 8 days, targeting 1 day | Claims team advocacy | Employees only (group policies) ([Plum](https://www.plumhq.com/employee-experience); [Loop](https://www.loophealth.com/post/group-health-insurance-claims-settlement)) |
| **Paytm Insurance** | Premium payment for many insurers; own-distributed policies with a "My Policies → Make a Claim" flow (OPD/IPD) and doctor consults | None evident | Insurer handles everything after submission | The public claims page is educational; **no AI assistance and no real-time tracking described** ([Paytm blog, Jan 2025](https://paytm.com/blog/insurance/health-insurance/how-to-raise-claim-talk-to-doctor-paytm-app/); [paytminsurance.co.in](https://paytminsurance.co.in/health-insurance/claim-settlement/)) |
| **Lemonade (US)** | AI Jim takes the first notice of loss without a human 96% of the time; about 55% of claims fully automated | End-to-end for simple claims | Complex claims | P&C/pet in the US; not comparable to Indian hospital claims ([Lemonade 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1691421/000169142126000016/lmnd-20251231.htm)) |
| **Tractable (UK/global)** | Photo-based motor and property damage estimates; partners with more than a third of the top 100 carriers (Aviva, GEICO) | Computer vision estimation | Complex repairs | No confirmed Indian insurer partnership found ([Aviva](https://www.aviva.com/newsroom/news-releases/2022/04/aviva-partners-with-tractable-to-bring-the-benefits-of-ai-to-motor-claims/)) |
| **Sprout.ai / Shift Technology** | Sprout: health claims STP from unstructured documents (about 70% automated in one case study). Shift: fraud and claims automation | Document AI, fraud | Exceptions | Sold to insurers; no India retail presence found ([Sprout.ai](https://sprout.ai/)) |

**Pattern:** nearly all AI investment in India sits on the insurer, TPA or adjudicator side (speed, fraud, cost). The customer side is either human advocates who don't scale (Ditto, Policybazaar RMs, ClaimBuddy, Samadhan) or static FAQ pages (Paytm). The one polished customer-side automation is in group health (Plum, Loop), which does not reach the retail user.

---

## 6. Genuine gaps (product opportunities)

1. **An explainer for deductions.** Rs 18.5k cr was disallowed in FY25, IRDAI cannot say why, and patients call deductions "invalid". An AI that reads the policy wording and the settlement letter or itemised bill could:
   - classify each deduction line (non-payable consumable, proportionate room rent, sub-limit, co-pay, "reasonable and customary")
   - flag deductions that break IRDAI rules (for example proportionate deduction applied to ICU, medicines or implants, which is not allowed)
   - draft the reconsideration letter

   **No customer-facing product does this at scale.**
2. **A pre-admission "what will I actually pay" simulator.** Given the policy, the hospital's room tariff and the procedure, estimate out-of-pocket cost before the patient picks a room. Medi Assist does predictive billing for TPAs, not for patients.
3. **A discharge-day copilot.** Covers the unmeasured stretch between the doctor's discharge advice and the hospital's discharge request: checklist, live status, nudges, and a record of IRDAI's 3-hour right (the insurer pays for the extra stay). This targets the 50-60% who wait more than 6 hours.
4. **A pre-check for rejection risk before filing.** Check waiting periods, pre-existing disease clauses and moratorium status against the diagnosis. The moratorium protects after 60 months, and blanket non-disclosure rejections after that are contestable.
5. **Handling deficiency letters.** OCR the query letter, map it to the missing documents, fetch them (DigiLocker or hospital), and point out that under the Master Circular the insurer should collect documents from the hospital.
6. **A grievance autopilot.** 21% of health Ombudsman complaints are non-entertainable mainly because of wrong sequencing. Automate insurer grievance (day 0), then Bima Bharosa (after 14 days), then an Ombudsman complaint pre-filled with the relevant rule and clauses, with evidence attached.
7. **Plain-language policy understanding at purchase and renewal.** 65% don't understand their policy. Turn the Customer Information Sheet plus wording into a "what's not covered for *you*" summary, add honest disclosure guidance to prevent later non-disclosure rejections, and explain premium hikes (70%+ saw 50-200% increases).
8. **Paytm-specific whitespace.** Paytm already collects premiums for many insurers but offers no AI claim help and no live tracking. An insurer-agnostic "claim companion" (upload policy, bills and letters, get explanations and next actions) matches Paytm's multi-insurer premium-payment base. **UNVERIFIED:** the size of Paytm's insurance user base (not found).
9. **Motor and term.** Guided photo/video first notice of loss plus a tracker for the 24 h / 15 d / 7 d clock (motor). A nominee death-claim checklist with document collection for the 15/45-day timelines (term).

---

## 7. Sources

| # | Title | URL | Date |
|---|---|---|---|
| 1 | IRDAI Annual Report 2024-25 (PDF, read directly) | https://lifeinscouncil.org/component/IRDAI%20Annual%20Report%202024-25.pdf | Dec 2025 |
| 2 | Council for Insurance Ombudsmen Annual Report 2023-24 (PDF, read directly) | https://cioins.co.in/annualreports/AnnualReport2023-2024.pdf | 2024 |
| 3 | IRDAI cannot explain why health insurance claims go unpaid (Insurance Business Asia) | https://www.insurancebusinessmag.com/asia/news/life-insurance/irdai-cannot-explain-why-health-insurance-claims-go-unpaid-583814.aspx | 27 Jul 2026 |
| 4 | Health insurers disallowed claims worth Rs 15,100 cr in FY24 (Business Standard) | https://www.business-standard.com/industry/news/health-insurers-disallowed-claims-worth-rs-15-100-cr-during-fy24-irdai-124123000562_1.html | 30 Dec 2024 |
| 5 | Health insurers disallow claims worth Rs 15,100 crore (The Statesman) | https://www.thestatesman.com/business/health-insurers-disallow-claims-worth-rs-15100-crore-in-fy24-irdai-1503381190.html | Dec 2024 |
| 6 | Health insurance claims rejection up 19.10% in FY24 (Business Standard) | https://www.business-standard.com/amp/finance/personal-finance/health-insurance-claims-rejection-up-19-10-in-fy24-irdai-report-124122700754_1.html | 27 Dec 2024 |
| 7 | IRDAI 2024-25 annual report: health premiums cross Rs 1.27 lakh crore (Outlook Money) | https://www.outlookmoney.com/personal-finance/irdai-2024-25-annual-report-health-premiums-cross-rs-127-lakh-crore-mark | Dec 2025 / Jan 2026 |
| 8 | IRDAI Annual Report key insights (Ditto) | https://joinditto.in/articles/general/irdai-annual-report/ | 2026 |
| 9 | Insurance penetration flat at 3.7% in 2024-25 (Business Standard) | https://www.business-standard.com/amp/finance/insurance/india-s-insurance-penetration-needle-remains-flat-at-3-7-in-2024-25-126010900679_1.html | 9 Jan 2026 |
| 10 | LocalCircles: 6 in 10 waited 6-48 hrs (claims processing survey) | https://m-www.localcircles.com/a/press/page/health-insurance-claims-processing | 3 Jan 2025 |
| 11 | LocalCircles: India is paying more for less (health insurance survey) | https://www.localcircles.com/a/press/page/health-insurance-claim-survey | 7 Mar 2026 |
| 12 | Over 50% health claims faced rejection or partial approval (Business Today) | https://www.businesstoday.in/personal-finance/insurance/story/insurance-claims-over-50-health-cover-claims-faced-rejection-or-partial-approval-says-survey-459394-2025-01-02 | 2 Jan 2025 |
| 13 | How long does cashless authorisation take (Upstox, Lok Sabha data) | https://upstox.com/news/personal-finance/insurance/how-long-does-cashless-health-insurance-claim-authorisation-take-latest-irdai-rules-and-data/article-185553/ | Dec 2025 |
| 14 | Cashless claim authorisation in 2025 (Angel One) | https://www.angelone.in/news/personal-finance/cashless-health-insurance-claim-authorisation-in-2025-how-long-does-it-take-irdai-s-new-rules-and-data | Dec 2025 |
| 15 | Medi Assist banking on AI (The Federal) | https://thefederal.com/category/business/insurance-tpa-medi-assist-banking-on-ai-to-enhance-claims-submission-157758 | 24 Nov 2024 |
| 16 | IRDAI issues new master circular on health claims (The Week) | https://www.theweek.in/news/india/2024/05/30/irdai-issues-new-master-circular-to-make-health-insurance-claims-process-more-seamless.html | 30 May 2024 |
| 17 | Master Circular on Health Insurance Business 2024 (copy) | https://www.actuariesindia.org/sites/default/files/inline-files/5.%20Master%20Circular%20on%20Health%20Insurance%20Business%202024.pdf | 29 May 2024 |
| 18 | IRDAI's New Master Circular on Health Insurance (Fincart) | https://www.fincart.com/blog/irdais-new-master-circular-on-health-insurance | 2024 |
| 19 | Claim settlement TAT norms under IRDAI 2024 (Oquilia) | https://www.oquilia.com/news/irdai-claim-settlement-tat-norms | 2025-26 |
| 20 | IRDAI 2024 Policyholder Protection Master Circular (Oquilia) | https://www.oquilia.com/news/irdai-protection-policyholders-interests-master-circular-2024-grievance | 2025-26 |
| 21 | IRDAI new claim settlement rules: 7 days / 15 days (Business Today) | https://www.businesstoday.in/personal-finance/insurance/story/irdai-new-claim-settlement-rules-insurers-to-settle-claims-within-7-days-surveyors-to-submit-reports-within-15-days-check-other-details-432968-2024-06-11 | 11 Jun 2024 |
| 22 | How IRDAI's new master circular helps life, health policyholders (GI Council) | https://www.gicouncil.in/news-media/gic-in-the-news/how-irdai-s-new-master-circular-help-life-health-insurance-policyholders/ | 2024 |
| 23 | Press release: Launch of Cashless Everywhere (GI Council) | https://www.gicouncil.in/news-media/events/press-release-launch-of-cashless-everywhere/ | 24 Jan 2024 |
| 24 | AHPI revokes suspension of cashless for Bajaj Allianz (Business Today) | https://www.businesstoday.in/personal-finance/insurance/story/ahpi-revokes-suspension-of-cashless-services-for-bajaj-allianz-policyholders-491617-2025-08-29 | 29 Aug 2025 |
| 25 | Cashless no more: Niva Bupa customers at Max Hospitals (Business Standard) | https://www.business-standard.com/amp/finance/personal-finance/cashless-no-more-niva-bupa-customers-to-pay-at-max-hospitals-claim-later-125090200136_1.html | 2 Sep 2025 |
| 26 | National Health Claims Exchange (Wikipedia) | https://en.wikipedia.org/wiki/National_Health_Claims_Exchange | 2026 |
| 27 | NHCX integration guide (Healthixio, vendor, UNVERIFIED numbers) | https://healthixio.com/blog/view/nhcx-integration-guide-hospitals/ | 2026 |
| 28 | Bima Sugam first products by Sept-end (Business Standard) | https://www.business-standard.com/amp/finance/insurance/bima-sugam-to-launch-initial-products-by-sept-end-irdai-chairman-seth-126063000744_1.html | 30 Jun 2026 |
| 29 | Bima Sugam renewals Aug 2026 (Vaatun, UNVERIFIED) | https://www.vaatun.com/posts/bima-sugam-renewals-august-2026-brokers | 2026 |
| 30 | Top 5 health insurers by complaints, CIO report (basunivesh) | https://www.basunivesh.com/top-5-health-insurance-companies-by-complaints-cio-report/ | 2025 |
| 31 | Latest India data finds complaints clustered in insurance segment (Insurance Business Asia) | https://www.insurancebusinessmag.com/asia/news/life-insurance/latest-india-data-finds-complaints-clustered-in-insurance-segment-565197.aspx | 13 Feb 2026 |
| 32 | 88% of complaints due to claim rejection (Business Today, Insurance Samadhan) | https://www.businesstoday.in/personal-finance/insurance/story/88-of-consumer-complaints-are-due-to-insurance-claims-being-rejected-report-467731-2025-03-12 | 12 Mar 2025 |
| 33 | 79% of Indians unsure what policies cover (Business Today, CoverSure) | https://www.businesstoday.in/personal-finance/insurance/story/insurance-illusion-79-of-indians-unsure-what-their-policies-actually-cover-says-survey-481785-2025-06-25 | 25 Jun 2025 |
| 34 | The 'Missing Middle' (SAGE, Mahal et al.) | https://journals.sagepub.com/doi/10.1177/00252921241284190 | 2024 |
| 35 | Health Insurance for India's Missing Middle (NITI Aayog) | https://www.niti.gov.in/sites/default/files/2021-10/HealthInsurance-forIndiasMissingMiddle_28-10-2021.pdf | Oct 2021 |
| 36 | Proportionate deduction in health insurance (Ditto) | https://joinditto.in/articles/health-insurance/proportionate-deduction-in-health-insurance/ | 2025-26 |
| 37 | Non-payable items in health insurance (ManipalCigna) | https://www.manipalcigna.com/blog/non-payable-items-health-insurance | 2025 |
| 38 | Top reasons insurers deny claims (Zerodha Z-Connect x Ditto) | https://zerodha.com/z-connect/insurance-by-ditto/top-reasons-why-insurance-companies-deny-your-claim-and-what-you-can-do-about-it | 26 Oct 2023 |
| 39 | Claim denied: mistakes in health insurance (Business Standard) | https://www.business-standard.com/amp/finance/personal-finance/claim-denied-mistakes-in-health-insurance-that-can-give-you-heartache-123112301194_1.html | 23 Nov 2023 |
| 40 | Low sum insured, sub-limits give rise to partial payouts (Business Standard) | https://www.business-standard.com/amp/article/pf/low-sum-insured-sub-limits-give-rise-to-partial-payouts-experts-121041301412_1.html | 13 Apr 2021 |
| 41 | Cashless claim time limits (Ditto) | https://joinditto.in/articles/health-insurance/cashless-health-insurance-claims-timelines/ | 2025-26 |
| 42 | Cashless vs reimbursement (InterPixels, UNVERIFIED) | https://interpixels.ai/insights/insights-cashless-vs-reimbursement-health-insurance-claims-apac/ | 2026 |
| 43 | Policybazaar claim assistance | https://www.policybazaar.com/claim/ | accessed Sep 2026 |
| 44 | Policybazaar Claim Samadhan Diwas | https://www.policybazaar.com/health-insurance/claim-samadhan-diwas/ | accessed Sep 2026 |
| 45 | Ditto claims assistance | https://joinditto.in/claims-assistance/ | accessed Sep 2026 |
| 46 | Beshak Star Health CSR page | https://www.beshak.org/insurance/insurance-companies/star-health-and-allied-insurance-company-limited/claim-settlement-ratio/ | 2026 |
| 47 | ICICI Lombard claims copilot (Microsoft) | https://www.microsoft.com/en-in/aifirstmovers/icici-lombard | 2024-25 |
| 48 | Star Health expects most cashless claims settled by AI (Angel One) | https://www.angelone.in/news/market-updates/star-health-expects-most-cashless-claims-to-be-settled-by-ai-within-2-years | 10 Mar 2026 |
| 49 | Star Health AI-driven settlement (Digital Health News) | https://www.digitalhealthnews.com/star-health-targets-ai-driven-settlement-for-majority-of-cashless-claims | 2026 |
| 50 | HDFC ERGO on Duck Creek OnDemand | https://www.duckcreek.com/resource/press-releases/hdfc-ergo-becomes-indias-first-insurer-to-service-health-insurance-using-duck-creek-ondemand/ | Aug 2025 |
| 51 | ClaimBuddy raises US$5M (Insurtech Insights) | https://www.insurtechinsights.com/claimbuddy-raises-us5-million-in-series-a-funding-to-boost-health-insurance-claim-assistance-platform/ | 2024-25 |
| 52 | Plum employee experience | https://www.plumhq.com/employee-experience | 2025 |
| 53 | Loop 360° claims ecosystem | https://www.loophealth.com/post/group-health-insurance-claims-settlement | 2025 |
| 54 | How to raise a claim on Paytm app (Paytm blog) | https://paytm.com/blog/insurance/health-insurance/how-to-raise-claim-talk-to-doctor-paytm-app/ | 20 Jan 2025 |
| 55 | Paytm Insurance health claim settlement page | https://paytminsurance.co.in/health-insurance/claim-settlement/ | accessed Sep 2026 |
| 56 | Acko automation (Digiqt, UNVERIFIED) | https://digiqt.com/blog/acko-insurance-automation/ | 2025 |
| 57 | Motor digital journey: ACKO vs PB vs Digit (productgrowth, UNVERIFIED) | https://productgrowth.in/insights/insurtech/motor-insurance-digital-journey/ | 2025-26 |
| 58 | Lemonade Form 10-K FY2025 | https://www.sec.gov/Archives/edgar/data/1691421/000169142126000016/lmnd-20251231.htm | early 2026 |
| 59 | Aviva partners with Tractable | https://www.aviva.com/newsroom/news-releases/2022/04/aviva-partners-with-tractable-to-bring-the-benefits-of-ai-to-motor-claims/ | Apr 2022 |
| 60 | Sprout.ai | https://sprout.ai/ | accessed Sep 2026 |
| 61 | IRDAI Health Insurance Rules 2026 (PolicyX) | https://www.policyx.com/health-insurance/articles/irdai-new-rules-2026/ | 2026 |
