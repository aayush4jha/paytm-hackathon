# Research Report: Fintech/Payments and Financial Customer Support in India
*(for the Paytm hackathon "AI-Powered Financial Journeys" brief. Research done 25 Sep 2026. Everything below comes from a web search or page fetch. Items marked **UNVERIFIED** are secondary or older sources I could not check against a primary document, or sources that disagree with each other.)*

---

## 1. Key statistics (each with a source)

### Scale of payments
- **UPI volume:** 24.51 bn transactions worth ₹29.82 lakh crore in Aug 2026, about 791 mn a day. Volume was up 22% YoY and 752 banks were live. [Business Standard, 1 Sep 2026](https://www.business-standard.com/finance/news/upi-transactions-august-2026-record-volume-npci-126090100506_1.html) · [MediaNama](https://www.medianama.com/2026/09/223-upi-transactions-august-2026/)
- **UPI technical declines (failures on the bank or NPCI side):**
  - NPCI's target is under 1%.
  - Failures fell from 8–10% (2016) to about 0.7–0.8% (2025), per secondary sources. **UNVERIFIED.** NPCI publishes the figure per bank each month. [Paytm blog](https://paytm.com/blog/payments/upi/upi-decline-rate-drops-to-0-8-global-expansion/) · [D91 Labs](https://d91labs.substack.com/p/why-upi-success-rate-matters)
  - Even at ~0.5%, 24.5 bn transactions a month means **over 100 million failed or stuck transactions a month**. This is my own arithmetic, not a published figure.

### Complaints to the RBI Ombudsman
**FY 2024-25** (report released 1 Dec 2025):
- 13.34 lakh complaints under the RBI Integrated Ombudsman Scheme, up 13.55% YoY.
- The central processing centre (CRPC) handled 9.11 lakh and closed 7.84 lakh as "non-maintainable or non-complaint".
- The ombudsman offices received 2.96 lakh and disposed of 93.07%.
- Loans and advances were 29.25% of complaints. Credit-card complaints rose 20.04%. Mobile/electronic banking complaints fell 12.74%.
- Banks drew 81.53% of complaints (private banks 37.53%, public-sector banks 34.80%) and NBFCs 14.80%.
- Toll-free calls rose 29% to 9.27 lakh, and over 70% of them were in Hindi.
- Sources: [Tribune/ANI](https://www.tribuneindia.com/news/business/rbi-ombudsman-sees-13-34-lakh-complaints-in-fy25-loans-credit-cards-dominate/) · [C4S summary](https://c4scourses.in/banking-finance/rbis-annual-report-of-the-ombudsman-scheme-2024-25/)

**FY 2023-24:**
- 9.34 lakh complaints, up 32.8%.
- Mobile/electronic banking: 57,242 complaints, 19.48% of the total, up 32.61%.
- Loans: 29.01%, up 42.7%.
- Complaints per lakh accounts rose from 2.85 (Mar 2022) to 8.9 (Mar 2024).
- Disposal rate fell from 97.99% to 95.1%.
- Sources: [KNN India](https://knnindia.co.in/news/newsdetails/sectors/one-third-of-banking-complaints-about-loan-advance-related-rbi-ombudsman-report-2023-24) · [IndiaTracker](https://www.indiatracker.in/story/rbi-ombudsman-see-32.81-rise-in-complaints-in-fy24-exposing-gaps-in-grievance-redressal-efficiency)

**What this suggests:** about 59% of FY25 complaints (7.84 of 13.34 lakh) were closed as non-maintainable. That points to large "wrong forum / incomplete complaint / not first raised with the bank" friction. This is my inference.

### Fraud
- **UPI fraud** (Finance Ministry figures given to the Lok Sabha):
  - FY23: 7.25 lakh cases, ₹573 cr
  - FY24: 13.42 lakh cases, ₹1,087 cr (up 85%)
  - FY25 through September: 6.32 lakh cases, ₹485 cr
  - [MediaNama](https://www.medianama.com/2024/11/223-upi-fraud-up-85-per-cent-fy2023-24-finance-ministry-data/) · [Moneylife](https://www.moneylife.in/article/upi-frauds-27-lakh-cases-worth-rs2145-crore-registered-in-30-months-govt/75709.html)
- **Cyber fraud losses, 2024:** ₹22,845.73 cr, up 206%. 36.37 lakh complaints on the national cybercrime portal (NCRP) and the fraud-reporting system (CFCFRMS), up from 24.42 lakh. ₹5,489 cr saved across 17.82 lakh complaints. The I4C Suspect Registry flagged 24 lakh mule accounts. [Angel One/Govt data](https://www.angelone.in/news/market-updates/cyber-fraud-costs-indians-22-845-crore-in-2024-government) · [India TV](https://www.indiatvnews.com/technology/news/indians-lost-over-rs-22-845-crore-to-cyber-fraud-in-2024-incidents-skyrocket-by-206-government-2025-07-22-1000037)
- **Cyber fraud losses, 2025:** at least ₹22,495 cr lost and 28.15 lakh cases. Investment scams were over 75% of the loss. FIRs fell to 55,484. [ThePrint](https://theprint.in/india/cybercrime-saw-24-spike-in-2025-indians-lost-rs-22495-crore-mainly-in-investment-scams/2859930/)
  - Another source gives ₹19,812.96 cr and 21.78 lakh complaints. Sources disagree, so treat 2025 totals as **UNVERIFIED**. [The420](https://the420.in/india-cyber-fraud-losses-i4c-data-statewise-investment-scams/)
- **Money saved:** by 31 Jan 2026, over ₹8,690 cr "saved" across 24.65 lakh complaints. [secondary: search summary citing govt] **UNVERIFIED**
- **RBI Annual Report FY25:** 23,953 bank frauds (down 34%) involving ₹36,014 cr (about 3x, driven by reclassification). Card and internet frauds were 66.8% of cases by number. [Business Standard](https://www.business-standard.com/finance/news/bank-fraud-amount-triples-in-fy25-despite-drop-in-number-of-cases-rbi-125052900696_1.html) · [MediaNama](https://www.medianama.com/2025/06/223-rbi-annual-report-2024-25-central-bank-agenda/)
- **LocalCircles UPI fraud survey** (Mar–Jun 2025; 32,000+ responses from 365 districts):
  - 1 in 5 families had a UPI fraud in the past 3 years.
  - **51% of victims filed no complaint anywhere.**
  - Only 25% complained to the UPI app, and 13% each to the bank, NPCI or RBI.
  - [LocalCircles](https://www.localcircles.com/a/press/page/upi-fraud-complaint)

### Account access, KYC and dormancy
- **LocalCircles, Sep 2023** (31,000+ responses):
  - 41% of families have someone who cannot access a bank account online. Reasons: credentials not working (39%), account marked dormant (19%), moved to the DEA Fund (7%).
  - **60% find their bank "bureaucratic and inefficient" when trying to get access restored.**
  - [LocalCircles](https://www.localcircles.com/a/press/page/online-banking-access-survey)
- **Jan Dhan accounts:** 13.05 cr of 56.04 cr were inoperative (30 Jul 2025). This prompted RBI's re-KYC camps from 1 Jul to 30 Sep 2025. [Business Standard/PTI](https://www.business-standard.com/pti-stories/national/23-per-cent-of-total-56-04-crore-pm-jan-dhan-accounts-inoperative-125081800582_1.html) · [DD News](https://ddnews.gov.in/en/jan-dhan-account-holders-can-complete-re-kyc-at-camps-till-september-30-rbi/)
- **Mutual fund KYC:** of 108.3 mn KYC records, 73% were validated and 12% were "On Hold" as of 31 Mar 2024. On-hold investors could not transact until SEBI eased the rules. [Business Standard](https://www.business-standard.com/amp/industry/news/over-73-of-kyc-records-validated-systems-in-place-for-remaining-kras-124042401206_1.html) · [Upstox](https://upstox.com/news/personal-finance/mutual-funds/sebis-new-kyc-norms-allow-mf-investors-to-redeem-funds-in-on-hold-accounts/article-86931/)
- **Unclaimed deposits:**
  - Over ₹67,000 cr (RBI push in 2025).
  - Earlier reported at ₹78,213 cr in FY24, up 26%.
  - The UDGAM portal covers about 30 banks and about 90% of the value. Actually claiming the money still requires a branch visit with documents.
  - [Free Press Journal](https://www.freepressjournal.in/business/rbi-urges-banks-to-identify-return-67000-crore-unclaimed-deposits-to-rightful-owners) · [Business Standard](https://www.business-standard.com/amp/finance/news/unclaimed-deposits-with-banks-rise-26-to-rs-78-213-crore-rbi-report-124053000742_1.html) · [UDGAM](https://udgam.rbi.org.in/)
- **Merchant re-KYC:** RBI set a 15 Sep 2026 deadline for payment aggregators to re-KYC existing merchants. An estimated 30–35% of small QR merchants may miss it. **UNVERIFIED** estimate. [VARINDIA](https://varindia.com/news/rbi-kyc-deadline-likely-to-disrupt-upi-payments-for-millions-of-small-merchants)

### Customer attitudes to AI support
- **Gartner** (Dec 2023 survey, 5,728 customers; published 9 Jul 2024): **64% would prefer companies didn't use AI for customer service.** 53% would consider switching. The top concern is that AI makes it harder to reach a human. [Gartner](https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service)
  - The sub-percentages (60% harder to reach a human, 42% don't trust answers, 46% fear job loss) come from secondary summaries. **UNVERIFIED** in the primary release.
- **CFPB "Chatbots in consumer finance"** (June 2023): about 98 mn US users (37% of the population) used bank chatbots in 2022, and all top-10 US banks run one. Harms listed:
  - "doom loops"
  - inaccurate information
  - blocked access to humans, leading to late fees
  - privacy and security risks
  - Complainant quote: *"I ran into loop after loop of the same questions, all of them redirecting me to login."*
  - [CFPB](https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/)
  - The report also gives "80% frustrated, 78% needed a human". That figure is cited from a third-party survey inside the report.
- **EY India** (May 2026, 2,030 banking customers): only 25% rate their overall banking experience as excellent. Chatbots are "underutilized and less trusted". Half of one segment ("golden transitioners") prefer a real person over AI. [EY](https://www.ey.com/en_in/newsroom/2026/05/55-percent-indian-banking-customers-want-improved-digital-support-across-the-app-web-and-chatbot)

---

## 2. Regulatory facts

| Rule | What it says | Source |
|---|---|---|
| **RBI TAT Harmonisation circular** (DPSS.CO.PD No.629/02.01.014/2019-20, 20 Sep 2019) | UPI/IMPS money debited but not credited to the beneficiary: auto-reversal by **T+1**, then **₹100/day** compensation. UPI merchant payment debited but merchant not credited: reversal by **T+5**, then ₹100/day. Compensation must be paid **suo moto (without the customer asking)**. If unresolved, the customer can go to the RBI Ombudsman. | [RBI circular PDF](https://rbi.org.in/commonman/Upload/English/Notification/PDFs/NT6720092019.pdf) · [RBI page](https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=3074) · [NPCI IMPS/UPI circular](https://www.npci.org.in/PDF/npci/imps/circular/IMPS-and-UPI-OC-93_RBI-TAT-Harmonisation.pdf) |
| **NPCI UDIR** (2020) | API-based, real-time dispute and issue resolution inside UPI apps, replacing file-based refunds that took 3–5 days. | [Razorpay](https://razorpay.com/blog/all-you-need-to-know-about-npci-led-udir/) |
| **NPCI auto chargeback acceptance/rejection** (from 15 Feb 2025) | Chargebacks are auto-accepted or rejected based on the beneficiary bank's credit confirmation (TCC) or return (RET) in the next settlement cycle. The chargeback window is 45 days. IMPS followed from 27 Aug 2025. | [Business Standard](https://www.business-standard.com/finance/personal-finance/new-upi-rule-on-automatic-acceptance-rejection-of-chargebacks-from-feb-15-125021200820_1.html) · [TaxGuru](https://taxguru.in/finance/npci-revises-imps-chargeback-handling-process.html) |
| **NPCI API limits** (from 1 Aug 2025) | Pending-status check: max 3 times, 90 seconds apart. Balance check: 50 a day per app. Account listing: 25 a day. AutoPay runs in non-peak hours. | [SCC Online](https://www.scconline.com/blog/post/2025/07/30/upi-changes-starting-august-1-ncpi-guidelines-upi-api-usage-2025/) · [The Week](https://www.theweek.in/news/biz-tech/2025/08/01/major-upi-changes-from-august-1-here-is-the-full-list-of-balance-enquiry-limits-pending-payment-status-upi-security-and-more-from-npci.html) |
| **NPCI "UPI Help"** (pilot, 8 Oct 2025, OC-227/2025-26) | AI assistant powered by NPCI's FiMI model. Covers status tracking, complaints for failed/pending payments, and AutoPay pause/resume/revoke. Languages: English, Hindi, Telugu, Bengali. Reached via bank sites and chatbots and DigiSaathi. In-app integration via API comes later. | [TeamLease RegTech](https://teamleaseregtech.com/updates/article/47862/npci-introduction-of-upi-help-ai-powered-assistant-for-upi-payments/) · [NewsBytes](https://www.newsbytesapp.com/news/science/npci-launches-fimi-ai-based-conversational-support-system-for-upi-users/story) |
| **Money sent to the wrong UPI ID** | If the payment succeeded to a valid account, the bank **cannot reverse it without the recipient's consent**. The sender's bank asks the recipient's bank through NPCI's dispute process. After 30 days the customer can escalate to the Ombudsman, which also cannot force a return. | [Business Standard, Jan 2026](https://www.business-standard.com/finance/personal-finance/wrong-upi-payment-here-s-what-you-can-recover-and-what-you-can-t-126012900939_1.html) · [The420](https://the420.in/upi-wrong-transfer-refund-rules-rbi-npci-guidelines/) |
| **RBI digital-fraud compensation framework** (finalised about 24–25 Jun 2026; effective **1 Jan 2027**, deferred from 1 Jul 2026) | For losses up to ₹50,000 from fraudulent electronic transfers: compensation of 85% of the net loss or ₹25,000, whichever is lower. RBI funds about 65%, and the remitting and beneficiary banks about 10% each. Banks must prove customer liability and decide within 45 days (domestic) or 60 days (cross-border). | [Business Standard](https://www.business-standard.com/industry/banking/rbi-finalises-fraud-compensation-framework-for-victims-of-digital-fraud-126062401240_1.html) · [Upstox](https://upstox.com/news/personal-finance/latest-updates/rbi-s-digital-fraud-compensation-rules-2026-how-will-bank-customers-get-25-000-or-more-explained/article-195942/) |
| **RBI FREE-AI report** (13 Aug 2025) | 7 guiding principles ("Sutras"), 6 pillars, 26 recommendations. Customer protections: tell customers when AI materially affects an outcome, explainability, a grievance route for AI decisions, bias testing, board-approved AI policy, audits. Survey: **20.8%** of surveyed regulated entities were deploying AI (customer support, sales, underwriting, cybersecurity). | [Khaitan PDF](https://www.khaitanco.com/sites/default/files/2025-08/Ergo%20-%20FREE%20AI%20Framework%20-%2028%20Augusut%202025.pdf) · [KPMG](https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/09/rbis-free-ai-committee-report-in-the-financial-sector.pdf) · [Scrut](https://www.scrut.io/post/rbi-framework-for-responsible-and-ethical-enablement-of-artificial-intelligence) |
| **RBI draft Internal Ombudsman Directions** (7 Oct 2025) | Every regulated entity needs an Internal Ombudsman. An automated complaint system must auto-escalate unresolved or rejected complaints within 20–25 days, with reasoned decisions. | [Vinod Kothari](https://vinodkothari.com/2025/10/rbis-draft-on-integrated-and-internal-ombudsman/) · [TeamLease](https://www.teamleaseregtech.com/updates/article/47795/draft-master-direction-reserve-bank-of-india-internal-ombudsman-for-re/) |
| **DPDP Act 2023 and Rules 2025** (notified Nov 2025) | Phased: Data Protection Board immediately; **Consent Manager framework 13 Nov 2026**; full obligations on notice, consent, data-principal rights and grievance handling by **13 May 2027**. Consent managers are modelled on RBI's Account Aggregator framework. | [PIB PDF](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) · [AZB](https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/) |
| **Account freezes on cyber-crime complaints** | A complaint to 1930 or NCRP makes CFCFRMS tell the "Layer 1" bank to hold funds; later layers get flagged as money is traced onward. MHA/I4C issued an SOP. **Delhi HC** (Feb–Mar 2025) criticised indiscriminate freezes and said to put a lien on the disputed amount instead. **Supreme Court** (Feb 2026) ordered nationwide adoption of the NCRP–CFCFRMS SOP. **Rajasthan HC** (Sep 2026) set guidelines: freezes must be proportionate, specific and time-bound; lien on the disputed amount rather than a blanket freeze; lift once the holder is cleared. It noted entire accounts frozen over amounts as small as ₹100. | [SCC Online – Delhi HC](https://www.scconline.com/blog/post/2025/03/01/delhi-high-court-freezing-bank-accounts-cyber-crime-policy-reform-legal-news/) · [SCC Online – Rajasthan HC](https://www.scconline.com/blog/post/2026/09/18/rajasthan-hc-bank-account-freeze-cyber-fraud-guidelines/) · [LawBeat – SC](https://lawbeat.in/top-stories/supreme-court-places-plea-on-bank-account-freezing-sop-before-cji-as-similar-issue-under-suo-motu-review-1557664) · [Vikram Kushwaha](https://vikramkushwaha.in/blog/ncrp-layer-account-freeze-innocent-beneficiary/) |
| **Faridabad freeze** | Over 36,000 accounts frozen nationwide in one probe. Some were frozen for receiving as little as ₹826. **UNVERIFIED** (legal blog only). | [CourtKutchehry](https://www.courtkutchehry.com/pages/blog/upi-fraud-laws-bank-account-freeze-faridabad-cyber-scam/) |
| **Bank nominees** (Banking Laws (Amendment) Act 2025, from 1 Nov 2025) | Up to 4 nominees, either at the same time (shares adding to 100%) or in order of succession, for deposits, safe custody and lockers. This creates a mass nominee-update journey. | [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2181734&reg=48&lang=2) |
| **FASTag** | IHMCL fined toll operators ₹1 lakh per case in about 250 wrong-deduction cases, and such cases reportedly fell about 70%. Complaints: 1033 or falsededuction@ihmcl.com. | [Business Standard](https://www.business-standard.com/india-news/nhai-fastag-false-toll-deductions-penalty-125030300322_1.html) |
| **Tax (AIS/26AS mismatch)** | When TDS in the return doesn't match Form 26AS, the processing centre cuts the credit and raises a demand under s.143(1), which delays refunds. Allahabad HC (Oct 2025) held that a refund can't be denied solely for a 26AS mismatch if valid Form 16A exists. | [BusinessToday](https://www.businesstoday.in/personal-finance/tax/story/itr-filing-mistakes-mismatch-in-form-26as-and-ais-can-trigger-tax-notices-for-you-what-do-next-536740-2026-06-13) · [Income Tax FAQ](https://www.incometax.gov.in/iec/foportal/help/e-filing-manage-tax-credit-mismatch-faq) |

---

## 3. Top user pain points, ranked by evidence

1. **Money stuck: failed or pending UPI payments and slow refunds.** This is the highest-volume problem. At 24.5 bn transactions a month, even a sub-1% failure rate is enormous. The ₹100/day compensation is supposed to be automatic, but in practice customers have to chase it. Paytm reviews: *"payment showing pending after 36 hours with no response"*. [Play/Trustpilot summaries](https://www.trustpilot.com/review/www.paytm.com). Dvara field note: *"I arranged Rs. 12,000 from others and sent it again… I would have lost trust"*; *"I now carry cash as backup."* [Dvara](https://dvararesearch.com/field-notes-how-constrained-users-engage-with-the-grms-of-upi-apps/)
2. **Fraud victims don't know where to go.** 51% never complain. Complaints are split across the app, the bank, 1930/NCRP, NPCI and the RBI Ombudsman. Reporting within the "golden hour" decides whether money is recovered. [LocalCircles](https://www.localcircles.com/a/press/page/upi-fraud-complaint)
3. **Accounts of innocent receivers frozen after cyber complaints.** Blanket debit freezes over tiny credits. The account holder has no notice, no FIR and no single place to contact. At least three High Courts and the Supreme Court have acted on it (2025–26). This hurts merchants and gig workers most.
4. **No human, looping bots, hidden complaint options.** Per CFPB, the harms are doom loops and blocked human access. Per Dvara, some UPI apps offer no in-app complaint, the option is hard to find, there is little vernacular help, and status is hard to track. Users go to the bank branch instead: *"I didn't understand how to move forward from this screen. Then I thought I would visit the bank branch."* Paytm reviews: *"no proper customer care, only system generated answers."* [Trustpilot](https://www.trustpilot.com/review/www.paytm.com). Paytm's Play rating is 4.8 from 23.7M reviews, but Sitejabber is 1.7 and MouthShut 2.62. [Sitejabber](https://www.sitejabber.com/reviews/paytm.com) · [MouthShut](https://www.mouthshut.com/product-reviews/paytm-reviews-925631912)
5. **Wrong-recipient transfers.** Recovery depends entirely on the recipient agreeing. The process has no clear time limit and no status visibility. [Business Standard](https://www.business-standard.com/finance/personal-finance/wrong-upi-payment-here-s-what-you-can-recover-and-what-you-can-t-126012900939_1.html)
6. **Complaints filed in the wrong place or incomplete.** About 59% of FY25 RBI Ombudsman complaints were closed as non-maintainable. Meanwhile loan and credit-card complaints keep rising (loans 29.25%, cards +20%).
7. **KYC, re-KYC, dormancy and access loss.** 41% of families have someone locked out of online banking. 60% say the bank is bureaucratic when they try to regain access. 13 cr Jan Dhan accounts are inoperative. About 12% of MF KYC records were "On Hold" in 2024.
8. **Long-tail admin journeys.** Nominee updates (new 4-nominee rules), claiming unclaimed deposits (₹67k–78k cr, still needs a branch visit), AIS/TDS mismatches that delay refunds, and FASTag double deductions. One example case took 22 days to recover ₹320 after the bank asked for a screenshot on day 3. **UNVERIFIED** (anecdote on a guide site). [CitizenNest](https://www.citizennest.com/guide/fastag-double-deduction-toll-refund)

---

## 4. Journey friction by stage (payments and support)

| Stage | Friction | Evidence |
|---|---|---|
| **Before the transaction** | KYC "on hold" or re-KYC due; dormant account; merchant re-KYC deadline | LocalCircles 2023; Jan Dhan data; RBI merchant re-KYC deadline |
| **During the transaction** | Technical decline or "pending" state; status checks capped at 3 (from Aug 2025); wrong UPI ID; scam payment link or QR | NPCI API rules; LocalCircles fraud types (50% PIN/settings compromised, 40% payment links) |
| **Right after (first minutes/hours)** | User doesn't know if money left the account; for fraud, the "golden hour" to call 1930 is missed | 51% of fraud victims never report |
| **Raising the complaint** | Complaint option hidden or missing in the app; English only; too many possible venues; bots that loop | Dvara; CFPB |
| **Tracking** | No visible timeline; ₹100/day compensation not paid automatically; repeated requests for documents | Dvara; FASTag case; Paytm reviews |
| **Escalation** | Must know to go bank → internal ombudsman → RBI CMS after 30 days, or NPCI; about 59% of RBI complaints non-maintainable | RBI FY25 report |
| **Resolution or recovery** | Wrong-transfer money needs recipient consent; fraud compensation only from Jan 2027 and capped at ₹25k; frozen innocent accounts need police sign-off | RBI 2026 framework; HC rulings |
| **Life events and admin** | Nominee changes, account closure, unclaimed deposits (UDGAM search online but claim at branch), tax mismatch | PIB; UDGAM; Income Tax |

---

## 5. Existing AI support solutions

| Solution | What the AI does | Automated | Still manual | Limitations | Results (as reported) |
|---|---|---|---|---|---|
| **Klarna AI assistant** (OpenAI, Feb 2024) | Chat support in 35+ languages | Refunds, returns, payment questions | Complex or emotional cases, disputes | Generic answers; quality fell on complex cases. CEO in May 2025: *"what you end up having is lower quality."* Humans rehired, "always reach a human" model | 2.3M chats in month 1 (two-thirds of chats), equal to 700 FTEs; resolution time 11 → under 2 min; 25% fewer repeat inquiries; about $40M profit uplift. [Klarna PR](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/) · [CX Dive](https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/) · [Forbes](https://www.forbes.com/sites/quickerbettertech/2025/05/18/business-tech-news-klarna-reverses-on-ai-says-customers-like-talking-to-people/) |
| **Bank of America Erica** (since 2018) | In-app assistant with proactive insights | Balance, transactions, alerts, insights | Specialist conversations (handed off) | Mostly informational | Over 3 bn interactions, about 50M users, 58M+ a month, 1.7 bn proactive insights, "98% find the info they need" (Aug 2025). [BofA](https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/08/a-decade-of-ai-innovation--bofa-s-virtual-assistant-erica-surpas.html) |
| **HDFC EVA / SBI SIA / ICICI iPal** | FAQ-style chatbots | FAQs, basic service | Almost all transactional disputes | First-generation NLP | Only old figures found: EVA 2.7M queries, iPal 6M queries at 90% accuracy. **UNVERIFIED and dated (2017–19).** [Emerj](https://emerj.com/ai-applications-in-the-top-4-indian-banks/) · [HDFC EVA](https://www.hdfc.bank.in/ways-to-bank/digital-banking/eva-chatbot) |
| **PhonePe** | Support automation; AI fraud investigation; 200+ internal agents | About 92–94% of support tickets (target 96%); about 80% of fraud investigations | About 500 human agents for over 10 bn transactions a month | Figures reported differently across articles | Fraud investigation cost ₹50 → ₹5–15; 90 min → near-instant. The 92% vs 94% difference is **UNVERIFIED** (GFF 2026 talk). [Indian Startup News](https://indianstartupnews.com/news/10-billion-transactions-500-support-agents-how-phonepe-is-building-ai-at-population-scale-12524389) · [Storyboard18](https://www.storyboard18.com/brand-marketing/phonepe-expands-ai-use-across-consumer-merchant-and-internal-operations-110559.htm) |
| **Paytm** | AI app redesign (Nov 2025): balance across banks, spend summaries, "Magic Paste" of bank details; AI Soundbox (GFF 2025) in 11 languages for merchants; "Pi by Paytm" agent platform for banks, insurers and lenders (2026); Groq partnership | Merchant insights, spend categorisation | Consumer disputes and refunds (no public figures on automated resolution) | No published support-resolution metrics. Management cites AI for cost savings: indirect expenses down 18% YoY in Q2 FY26 | [Paytm blog – new app](https://paytm.com/blog/artificial-intelligence/paytm-launches-the-all-new-app-combining-clean-interface-and-ai-first-features-to-redefine-everyday-payments/) · [Paytm AI Soundbox](https://paytm.com/blog/artificial-intelligence/paytm-launches-indias-first-ai-soundbox-for-payments/) · [PaymentExpert – Pi](https://paymentexpert.com/2026/09/09/paytm-ai-agent-upgrade-business-clien/) · [Q2 FY26 release](https://paytm.com/document/ir/financial-results/fy2025-26/Paytm_Earnings-Release_FY26-Q2-USD.pdf) |
| **NPCI UPI Help** (FiMI) | Grievance assistant | Status tracking, raising complaints, AutoPay mandate actions | Resolution itself stays with banks under TAT | Pilot; 4 languages; not yet inside apps | [TeamLease](https://teamleaseregtech.com/updates/article/47862/npci-introduction-of-upi-help-ai-powered-assistant-for-upi-payments/) |
| **Razorpay Agent Studio** (FTX'26, built on Claude Agent SDK) | Merchant-side agents | Dispute Responder, cart recovery, subscription recovery; onboarding cut from 30–45 min to about 5 min | Consumer support is not the focus | B2B only | [Razorpay](https://razorpay.com/newsroom/razorpay-launches-the-worlds-first-ai-native-agent-studio-for-payments-at-ftx26-powered-by-anthropics-claude/) |
| **Sierra (SoFi) / Decagon (Chime)** | Agentic customer-service agents | Account, card and transfer queries | Escalations | Vendor-reported figures | SoFi: 61% containment, 50k+ conversations a week, chat NPS +33. Chime/Decagon: 70% resolution (from a 40% baseline), support cost down 60%. [Sierra SoFi](https://sierra.ai/customers/sofi) · [Decagon Chime](https://decagon.ai/case-studies/chime) |
| **Intercom Fin** | Support agent | FAQ and workflow resolution | Complex cases | Real-world rates vary from 25% to 80%+ depending on the knowledge base | About 67% average resolution claimed for Fin 3 (2025); IG Group about 70% deflection. [CreateWith](https://www.createwith.com/tool/intercom/updates/intercom-ships-200-updates-in-2025-fin-3-reaches-67-average-resolution-rate) · [fin.ai](https://fin.ai/) |
| **Salesforce Agentforce for Financial Services** | Multi-agent service | Disputes, lost card, fee reversals, KYC checks | — | — | Xero: 62% of cases resolved autonomously; Agibank: 70k inquiries a month on WhatsApp. [Salesforce](https://www.salesforce.com/agentforce/metrics/) |

**Pattern across all of these:** they deflect FAQs and status questions well. Few of them *take action* (file a dispute with the right code, calculate and claim TAT compensation, assemble evidence, route a fraud or freeze case to the right authority). And most fail on complex, emotional or high-stakes cases, which is where Klarna had to reverse course.

---

## 6. Gaps that remain open

1. **Nobody acts as a "money-stuck case manager".** No consumer tool diagnoses a failed, pending or wrong transfer; knows the exact RBI/NPCI timeline that applies; raises the complaint through UDIR in-app; tracks it; and **claims the ₹100/day compensation** that is owed without asking but often isn't paid.
2. **Fraud "golden hour" coordination.** Victims have to reach 1930/NCRP, the bank and the app separately, and 51% never report at all. An agent could file all three from one conversation, build an evidence pack (transaction IDs, screenshots), and prepare the claim under the 2027 compensation framework (85% / ₹25k; 45-day decision).
3. **Help for innocent receivers whose accounts are frozen.** Explain whether it's a lien or a full freeze, get the police/NCRP reference from the bank, cite the SOP and High Court proportionality rules, draft the request for a lien-only restriction, and track the case. No one serves this today. It hits merchants hardest.
4. **Complaint routing to the right forum.** About 59% of RBI Ombudsman complaints are non-maintainable. An AI could check that the complaint was first raised with the bank, that 30 days have passed, and that the category is correct, then draft a CMS-ready complaint.
5. **Vernacular, voice-first, low-literacy access.** Dvara found in-app complaint options hidden and English-only. Over 70% of RBI toll-free calls are in Hindi. NPCI UPI Help supports only 4 languages so far.
6. **Handing off to a human with full context.** Gartner and CFPB show customers fear losing access to a human, and Klarna proved it. A design that always offers a human, passes the whole case file and never asks the customer to repeat themselves is a differentiator. It also fits FREE-AI's disclosure and human-override expectations.
7. **Life-admin journeys.** Re-KYC and dormancy, the 4-nominee update, UDGAM claims, and AIS/TDS mismatch. All involve document-heavy, repeated requests, and an agent could pre-fill and track them. A DPDP-compliant consent flow (Consent Manager from Nov 2026) is needed for this.
8. **Proactive outreach.** Erica-style alerts ("your ₹2,000 is pending, auto-reversal due by T+1; we'll claim ₹100/day if it's late") instead of waiting for the customer to complain.

---

## 7. Sources
- RBI TAT Harmonisation circular (20 Sep 2019): https://rbi.org.in/commonman/Upload/English/Notification/PDFs/NT6720092019.pdf ; https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=3074
- NPCI IMPS/UPI TAT circular OC-93: https://www.npci.org.in/PDF/npci/imps/circular/IMPS-and-UPI-OC-93_RBI-TAT-Harmonisation.pdf
- Tribune/ANI – RBI Ombudsman FY25 (1 Dec 2025): https://www.tribuneindia.com/news/business/rbi-ombudsman-sees-13-34-lakh-complaints-in-fy25-loans-credit-cards-dominate/
- C4S – Ombudsman 2024-25: https://c4scourses.in/banking-finance/rbis-annual-report-of-the-ombudsman-scheme-2024-25/
- KNN – Ombudsman 2023-24: https://knnindia.co.in/news/newsdetails/sectors/one-third-of-banking-complaints-about-loan-advance-related-rbi-ombudsman-report-2023-24
- IndiaTracker – FY24 ombudsman: https://www.indiatracker.in/story/rbi-ombudsman-see-32.81-rise-in-complaints-in-fy24-exposing-gaps-in-grievance-redressal-efficiency
- Business Standard – UPI Aug 2026 (1 Sep 2026): https://www.business-standard.com/finance/news/upi-transactions-august-2026-record-volume-npci-126090100506_1.html
- MediaNama – UPI Aug 2026: https://www.medianama.com/2026/09/223-upi-transactions-august-2026/
- Paytm blog – UPI decline rate: https://paytm.com/blog/payments/upi/upi-decline-rate-drops-to-0-8-global-expansion/
- D91 Labs – UPI success rate: https://d91labs.substack.com/p/why-upi-success-rate-matters
- Business Standard – UPI chargeback rule (Feb 2025): https://www.business-standard.com/finance/personal-finance/new-upi-rule-on-automatic-acceptance-rejection-of-chargebacks-from-feb-15-125021200820_1.html
- TaxGuru – IMPS chargeback: https://taxguru.in/finance/npci-revises-imps-chargeback-handling-process.html
- SCC Online – UPI changes Aug 2025: https://www.scconline.com/blog/post/2025/07/30/upi-changes-starting-august-1-ncpi-guidelines-upi-api-usage-2025/
- The Week – UPI Aug 2025 rules: https://www.theweek.in/news/biz-tech/2025/08/01/major-upi-changes-from-august-1-here-is-the-full-list-of-balance-enquiry-limits-pending-payment-status-upi-security-and-more-from-npci.html
- TeamLease – NPCI UPI Help (Oct 2025): https://teamleaseregtech.com/updates/article/47862/npci-introduction-of-upi-help-ai-powered-assistant-for-upi-payments/
- NewsBytes – NPCI FiMI: https://www.newsbytesapp.com/news/science/npci-launches-fimi-ai-based-conversational-support-system-for-upi-users/story
- Razorpay – UDIR explainer: https://razorpay.com/blog/all-you-need-to-know-about-npci-led-udir/
- MediaNama – UPI fraud FY24 (Nov 2024): https://www.medianama.com/2024/11/223-upi-fraud-up-85-per-cent-fy2023-24-finance-ministry-data/
- Moneylife – UPI frauds 27 lakh cases: https://www.moneylife.in/article/upi-frauds-27-lakh-cases-worth-rs2145-crore-registered-in-30-months-govt/75709.html
- Angel One – cyber fraud ₹22,845 cr 2024 (Jul 2025): https://www.angelone.in/news/market-updates/cyber-fraud-costs-indians-22-845-crore-in-2024-government
- India TV – cyber fraud 2024: https://www.indiatvnews.com/technology/news/indians-lost-over-rs-22-845-crore-to-cyber-fraud-in-2024-incidents-skyrocket-by-206-government-2025-07-22-1000037
- ThePrint – cyber fraud 2025: https://theprint.in/india/cybercrime-saw-24-spike-in-2025-indians-lost-rs-22495-crore-mainly-in-investment-scams/2859930/
- The420 – I4C 2025: https://the420.in/india-cyber-fraud-losses-i4c-data-statewise-investment-scams/
- Business Standard – RBI AR fraud FY25 (May 2025): https://www.business-standard.com/finance/news/bank-fraud-amount-triples-in-fy25-despite-drop-in-number-of-cases-rbi-125052900696_1.html
- MediaNama – RBI Annual Report 2024-25: https://www.medianama.com/2025/06/223-rbi-annual-report-2024-25-central-bank-agenda/
- LocalCircles – UPI fraud survey (2025): https://www.localcircles.com/a/press/page/upi-fraud-complaint
- LocalCircles – online banking access (Sep 2023): https://www.localcircles.com/a/press/page/online-banking-access-survey
- Business Standard – RBI digital fraud compensation (Jun 2026): https://www.business-standard.com/industry/banking/rbi-finalises-fraud-compensation-framework-for-victims-of-digital-fraud-126062401240_1.html
- Upstox – fraud compensation explainer: https://upstox.com/news/personal-finance/latest-updates/rbi-s-digital-fraud-compensation-rules-2026-how-will-bank-customers-get-25-000-or-more-explained/article-195942/
- Business Standard – wrong UPI payment (Jan 2026): https://www.business-standard.com/finance/personal-finance/wrong-upi-payment-here-s-what-you-can-recover-and-what-you-can-t-126012900939_1.html
- The420 – wrong UPI transfer rules: https://the420.in/upi-wrong-transfer-refund-rules-rbi-npci-guidelines/
- SCC Online – Delhi HC on account freezing (Mar 2025): https://www.scconline.com/blog/post/2025/03/01/delhi-high-court-freezing-bank-accounts-cyber-crime-policy-reform-legal-news/
- SCC Online – Rajasthan HC guidelines (18 Sep 2026): https://www.scconline.com/blog/post/2026/09/18/rajasthan-hc-bank-account-freeze-cyber-fraud-guidelines/
- LawBeat – SC on freezing SOP: https://lawbeat.in/top-stories/supreme-court-places-plea-on-bank-account-freezing-sop-before-cji-as-similar-issue-under-suo-motu-review-1557664
- NCRP layered freeze explainer: https://vikramkushwaha.in/blog/ncrp-layer-account-freeze-innocent-beneficiary/
- CourtKutchehry – Faridabad 36,000 accounts: https://www.courtkutchehry.com/pages/blog/upi-fraud-laws-bank-account-freeze-faridabad-cyber-scam/
- Khaitan – FREE-AI (Aug 2025): https://www.khaitanco.com/sites/default/files/2025-08/Ergo%20-%20FREE%20AI%20Framework%20-%2028%20Augusut%202025.pdf
- KPMG – FREE-AI (Sep 2025): https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/09/rbis-free-ai-committee-report-in-the-financial-sector.pdf
- Scrut – FREE-AI explainer: https://www.scrut.io/post/rbi-framework-for-responsible-and-ethical-enablement-of-artificial-intelligence
- Vinod Kothari – draft Internal Ombudsman (Oct 2025): https://vinodkothari.com/2025/10/rbis-draft-on-integrated-and-internal-ombudsman/
- TeamLease – draft Internal Ombudsman: https://www.teamleaseregtech.com/updates/article/47795/draft-master-direction-reserve-bank-of-india-internal-ombudsman-for-re/
- PIB – DPDP Rules 2025 (Nov 2025): https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf
- AZB – DPDP phased rollout: https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/
- PIB – nomination provisions (Oct 2025): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2181734&reg=48&lang=2
- Business Standard – Jan Dhan inoperative (Aug 2025): https://www.business-standard.com/pti-stories/national/23-per-cent-of-total-56-04-crore-pm-jan-dhan-accounts-inoperative-125081800582_1.html
- DD News – Jan Dhan re-KYC camps: https://ddnews.gov.in/en/jan-dhan-account-holders-can-complete-re-kyc-at-camps-till-september-30-rbi/
- Business Standard – MF KYC 73% validated (Apr 2024): https://www.business-standard.com/amp/industry/news/over-73-of-kyc-records-validated-systems-in-place-for-remaining-kras-124042401206_1.html
- Upstox – SEBI KYC on-hold relaxation: https://upstox.com/news/personal-finance/mutual-funds/sebis-new-kyc-norms-allow-mf-investors-to-redeem-funds-in-on-hold-accounts/article-86931/
- Free Press Journal – ₹67,000 cr unclaimed: https://www.freepressjournal.in/business/rbi-urges-banks-to-identify-return-67000-crore-unclaimed-deposits-to-rightful-owners
- Business Standard – unclaimed deposits ₹78,213 cr (May 2024): https://www.business-standard.com/amp/finance/news/unclaimed-deposits-with-banks-rise-26-to-rs-78-213-crore-rbi-report-124053000742_1.html
- UDGAM portal: https://udgam.rbi.org.in/
- VARINDIA – merchant re-KYC deadline: https://varindia.com/news/rbi-kyc-deadline-likely-to-disrupt-upi-payments-for-millions-of-small-merchants
- Business Standard – NHAI FASTag penalties (Mar 2025): https://www.business-standard.com/india-news/nhai-fastag-false-toll-deductions-penalty-125030300322_1.html
- CitizenNest – FASTag double deduction: https://www.citizennest.com/guide/fastag-double-deduction-toll-refund
- BusinessToday – AIS/26AS mismatch (Jun 2026): https://www.businesstoday.in/personal-finance/tax/story/itr-filing-mistakes-mismatch-in-form-26as-and-ais-can-trigger-tax-notices-for-you-what-do-next-536740-2026-06-13
- Income Tax – tax credit mismatch FAQ: https://www.incometax.gov.in/iec/foportal/help/e-filing-manage-tax-credit-mismatch-faq
- Dvara Research – UPI in-app grievance mechanisms: https://dvararesearch.com/do-upi-in-app-grievance-redress-mechanisms-work-for-constrained-users/
- Dvara Research – field notes: https://dvararesearch.com/field-notes-how-constrained-users-engage-with-the-grms-of-upi-apps/
- CFPB – Chatbots in consumer finance (Jun 2023): https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/
- Gartner – 64% prefer no AI (9 Jul 2024): https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service
- EY India banking CX (May 2026): https://www.ey.com/en_in/newsroom/2026/05/55-percent-indian-banking-customers-want-improved-digital-support-across-the-app-web-and-chatbot
- Klarna press release (27 Feb 2024): https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
- CX Dive – Klarna rehiring (2025): https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/
- Forbes – Klarna reverses on AI (May 2025): https://www.forbes.com/sites/quickerbettertech/2025/05/18/business-tech-news-klarna-reverses-on-ai-says-customers-like-talking-to-people/
- BofA Erica 3bn (Aug 2025): https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/08/a-decade-of-ai-innovation--bofa-s-virtual-assistant-erica-surpas.html
- Emerj – Indian bank chatbots (dated): https://emerj.com/ai-applications-in-the-top-4-indian-banks/
- HDFC EVA: https://www.hdfc.bank.in/ways-to-bank/digital-banking/eva-chatbot
- Indian Startup News – PhonePe AI (Sep 2026): https://indianstartupnews.com/news/10-billion-transactions-500-support-agents-how-phonepe-is-building-ai-at-population-scale-12524389
- Storyboard18 – PhonePe AI: https://www.storyboard18.com/brand-marketing/phonepe-expands-ai-use-across-consumer-merchant-and-internal-operations-110559.htm
- Paytm new AI app (Nov 2025): https://paytm.com/blog/artificial-intelligence/paytm-launches-the-all-new-app-combining-clean-interface-and-ai-first-features-to-redefine-everyday-payments/
- Paytm AI Soundbox: https://paytm.com/blog/artificial-intelligence/paytm-launches-indias-first-ai-soundbox-for-payments/
- PaymentExpert – Pi by Paytm (Sep 2026): https://paymentexpert.com/2026/09/09/paytm-ai-agent-upgrade-business-clien/
- Paytm Q4FY25 call takeaways: https://paytm.com/blog/investor-relations/key-takeaways-from-our-earnings-call-for-q4fy25-focusing-on-sustainable-growth-and-automation/
- Paytm Q2 FY26 earnings release: https://paytm.com/document/ir/financial-results/fy2025-26/Paytm_Earnings-Release_FY26-Q2-USD.pdf
- Razorpay Agent Studio (FTX'26): https://razorpay.com/newsroom/razorpay-launches-the-worlds-first-ai-native-agent-studio-for-payments-at-ftx26-powered-by-anthropics-claude/
- Sierra – SoFi: https://sierra.ai/customers/sofi
- Decagon – Chime: https://decagon.ai/case-studies/chime
- Intercom Fin 2025: https://www.createwith.com/tool/intercom/updates/intercom-ships-200-updates-in-2025-fin-3-reaches-67-average-resolution-rate
- Fin.ai: https://fin.ai/
- Salesforce Agentforce metrics: https://www.salesforce.com/agentforce/metrics/
- Trustpilot – Paytm reviews: https://www.trustpilot.com/review/www.paytm.com
- Sitejabber – Paytm reviews: https://www.sitejabber.com/reviews/paytm.com
- MouthShut – Paytm reviews: https://www.mouthshut.com/product-reviews/paytm-reviews-925631912

**Research limitations:**
- Several Business Standard and Gartner pages returned 403, so some figures come from syndicated or secondary copies.
- I found no public data on NPCI UPI dispute volumes, or on what share of complaints are about failed transactions.
- I found no public Paytm figure for its support automation or resolution rate.
- I found no LocalCircles survey specifically about reaching a human at bank or fintech support. The closest is the Sep 2023 access survey (60% call banks "bureaucratic and inefficient").
