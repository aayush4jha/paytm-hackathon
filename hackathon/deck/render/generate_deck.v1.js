const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa6");

const TOTAL = 13;
const FONT = "Arial";
const MONO = "Courier New";
const C = {
  navy: "0B1F3A", navy2: "12305A", cyan: "00BAF2", cyanDark: "0072A8", cyanSoft: "E6F7FD",
  ink: "0F172A", body: "334155", muted: "64748B", line: "D8DEE8", soft: "F4F7FB",
  white: "FFFFFF", green: "0E8A5F", greenSoft: "E6F5EE", red: "C8322B", redSoft: "FCEBEA",
  amber: "B45309", amberSoft: "FDF1E0", slate: "94A3B8", slateDark: "475569",
};

async function icon(name, color, size = 256) {
  const Comp = fa[name];
  if (!Comp) throw new Error("missing icon " + name);
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { color: "#" + color, size: String(size) }));
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

function t(slide, text, o) {
  slide.addText(text, Object.assign({ fontFace: FONT, color: C.body, fontSize: 14, margin: 0, valign: "top" }, o));
}
function box(slide, pres, x, y, w, h, fill, lineColor, o = {}) {
  slide.addShape(pres.shapes.RECTANGLE, Object.assign({ x, y, w, h, fill: { color: fill }, line: { color: lineColor || fill, width: lineColor ? 1 : 0 } }, o));
}
function rbox(slide, pres, x, y, w, h, fill, lineColor, r = 0.08) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: r, fill: { color: fill }, line: { color: lineColor || fill, width: lineColor ? 1 : 0 } });
}
function header(slide, kicker, title) {
  t(slide, kicker, { x: 0.6, y: 0.38, w: 12, h: 0.3, fontSize: 12, bold: true, color: C.cyanDark, charSpacing: 2 });
  t(slide, title, { x: 0.6, y: 0.68, w: 12.1, h: 0.95, fontSize: 25, bold: true, color: C.ink });
}
function footer(slide, src, n) {
  if (src) t(slide, "Source: " + src, { x: 0.6, y: 7.02, w: 11.0, h: 0.3, fontSize: 9, color: C.muted, valign: "middle" });
  t(slide, `${n} / ${TOTAL}`, { x: 11.9, y: 7.02, w: 0.83, h: 0.3, fontSize: 9, color: C.muted, align: "right", valign: "middle" });
}
function arrowRight(slide, pres, x, y, w, color) {
  slide.addShape(pres.shapes.LINE, { x, y, w, h: 0, line: { color, width: 1.75, endArrowType: "triangle" } });
}
function arrowDown(slide, pres, x, y, h, color) {
  slide.addShape(pres.shapes.LINE, { x, y, w: 0, h, line: { color, width: 1.5, endArrowType: "triangle" } });
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "team_SGS (Tarun Bhutra, Aayush Jha)";
  pres.title = "Haq: an AI claim agent on the patient's side";

  const I = {
    hospital: await icon("FaHospital", C.cyanDark), clock: await icon("FaStopwatch", C.cyanDark),
    file: await icon("FaFileInvoice", C.cyanDark), gavel: await icon("FaScaleBalanced", C.cyanDark),
    headsetW: await icon("FaHeadset", C.white), headset: await icon("FaHeadset", C.amber),
    bedW: await icon("FaBed", C.white), clockW: await icon("FaStopwatch", C.white),
    fileW: await icon("FaFileInvoice", C.white), sendW: await icon("FaPaperPlane", C.white),
    check: await icon("FaCircleCheck", C.green), shield: await icon("FaShieldHalved", C.cyanDark),
    readW: await icon("FaMagnifyingGlass", C.white), calcW: await icon("FaCalculator", C.white),
    trackW: await icon("FaBell", C.white), escW: await icon("FaRoute", C.white),
    lock: await icon("FaLock", C.cyanDark), quote: await icon("FaQuoteLeft", C.cyanDark),
    list: await icon("FaListCheck", C.cyanDark), user: await icon("FaUserCheck", C.cyanDark),
    robot: await icon("FaMicrochip", C.cyanDark), eye: await icon("FaEye", C.cyanDark),
    rupee: await icon("FaIndianRupeeSign", C.cyanDark),
  };

  // ---------- Slide 1: cover ----------
  const s1 = pres.addSlide();
  s1.background = { color: C.navy };
  t(s1, "team_SGS  ·  Paytm Hackathon  ·  AI-Powered Financial Journeys", { x: 0.8, y: 0.6, w: 8, h: 0.35, fontSize: 13, color: C.cyan, bold: true, charSpacing: 1 });
  t(s1, "Haq", { x: 0.8, y: 1.55, w: 3.2, h: 1.4, fontSize: 88, bold: true, color: C.white, valign: "middle" });
  t(s1, "हक़  ·  what is rightfully yours", { x: 0.85, y: 2.95, w: 6.5, h: 0.45, fontSize: 18, color: "9FB3CC" });
  t(s1, "An AI claim agent on the patient's side of every health insurance claim", { x: 0.8, y: 3.6, w: 6.9, h: 1.2, fontSize: 28, bold: true, color: C.white });
  t(s1, [
    { text: "Reads your policy and hospital bills", options: { breakLine: true } },
    { text: "Keeps IRDAI's clocks and checks every deduction", options: { breakLine: true } },
    { text: "Files and escalates with your approval, hands judgement to a human" },
  ], { x: 0.8, y: 4.95, w: 6.9, h: 1.1, fontSize: 15, color: "C9D6E6", paraSpaceAfter: 4 });
  t(s1, "Tarun Bhutra  ·  Aayush Jha", { x: 0.8, y: 6.55, w: 6, h: 0.35, fontSize: 13, color: "9FB3CC" });
  // product card
  rbox(s1, pres, 8.35, 1.35, 4.25, 5.2, C.white, null, 0.06);
  t(s1, "SETTLEMENT AUDIT  ·  RAMESH K., 56", { x: 8.65, y: 1.6, w: 3.7, h: 0.3, fontSize: 11, bold: true, color: C.muted, charSpacing: 1 });
  const rows1 = [["Hospital bill", "₹2,27,500", C.ink], ["Insurer paid", "₹1,38,625", C.ink], ["Deducted", "₹88,875", C.ink]];
  rows1.forEach((r, i) => {
    t(s1, r[0], { x: 8.65, y: 2.05 + i * 0.45, w: 2.2, h: 0.4, fontSize: 14, color: C.body, valign: "middle" });
    t(s1, r[1], { x: 10.6, y: 2.05 + i * 0.45, w: 1.75, h: 0.4, fontSize: 14, bold: true, color: r[2], align: "right", valign: "middle" });
  });
  s1.addShape(pres.shapes.LINE, { x: 8.65, y: 3.5, w: 3.7, h: 0, line: { color: C.line, width: 1 } });
  s1.addImage({ data: I.check, x: 8.65, y: 3.68, w: 0.28, h: 0.28 });
  t(s1, "Follows your policy", { x: 9.02, y: 3.62, w: 2.0, h: 0.4, fontSize: 13, color: C.body, valign: "middle" });
  t(s1, "₹62,325", { x: 10.6, y: 3.62, w: 1.75, h: 0.4, fontSize: 13, bold: true, color: C.green, align: "right", valign: "middle" });
  box(s1, pres, 8.65, 4.15, 3.7, 1.05, C.redSoft);
  t(s1, "Cut against IRDAI rules", { x: 8.8, y: 4.22, w: 3.4, h: 0.35, fontSize: 13, bold: true, color: C.red });
  t(s1, "₹26,550", { x: 8.8, y: 4.55, w: 3.4, h: 0.6, fontSize: 30, bold: true, color: C.red, valign: "middle" });
  rbox(s1, pres, 8.65, 5.45, 3.7, 0.7, C.cyan, null, 0.1);
  t(s1, "Contest ₹26,550 with OTP", { x: 8.65, y: 5.45, w: 3.7, h: 0.7, fontSize: 15, bold: true, color: C.navy, align: "center", valign: "middle" });
  s1.addNotes("Haq means what is rightfully yours. We built an AI claim agent that sits on the patient's side of a health insurance claim. The card on the right is the moment our demo builds to: a real-looking settlement where Haq finds that 26,550 rupees were cut against IRDAI's own rules, and files the contest for the family. Everything in this demo case is synthetic except the rules and the policy wording, which are real and public.");

  // ---------- Slide 2: problem ----------
  const s2 = pres.addSlide();
  s2.background = { color: C.white };
  header(s2, "THE PROBLEM", "Insurers cut ₹18,521 crore from hospital bills in FY25, and patients rarely learn why");
  t(s2, "Where ₹1,32,488 crore of health claims went in FY25", { x: 0.6, y: 1.9, w: 7.5, h: 0.35, fontSize: 15, bold: true, color: C.ink });
  const bars = [["Paid", 94248, "71%", C.slate], ["Deducted from bills", 18521, "14%", C.red], ["Rejected outright", 11412, "9%", C.slateDark], ["Still pending", 8307, "6%", "CBD5E1"]];
  const maxW = 3.9;
  bars.forEach((b, i) => {
    const y = 2.45 + i * 0.66;
    t(s2, b[0], { x: 0.6, y, w: 2.2, h: 0.48, fontSize: 14, color: b[3] === C.red ? C.red : C.body, bold: b[3] === C.red, valign: "middle" });
    const w = Math.max(0.12, (b[1] / 94248) * maxW);
    box(s2, pres, 2.85, y + 0.04, w, 0.4, b[3]);
    t(s2, `₹${b[1].toLocaleString("en-IN")} cr  ·  ${b[2]}`, { x: 2.85 + w + 0.12, y, w: 2.6, h: 0.48, fontSize: 13, bold: b[3] === C.red, color: b[3] === C.red ? C.red : C.body, valign: "middle" });
  });
  box(s2, pres, 0.6, 5.3, 7.55, 1.4, C.redSoft);
  t(s2, [
    { text: "Deductions grew about 23% in a year ", options: { bold: true, color: C.red } },
    { text: "(₹15,100 cr in FY24) and now exceed outright rejections. IRDAI does not record the reason for any cut, so no one can tell the family which deductions were legal.", options: { color: C.ink } },
  ], { x: 0.8, y: 5.42, w: 7.2, h: 1.2, fontSize: 14, valign: "middle" });
  const ev = [[">50%", "of claimants saw a rejection or a partial payout", "LocalCircles, Jan 2025, 28,700 claimants"],
    ["94.8%", "of valid health complaints to the Ombudsman are about claims cut or refused", "Insurance Ombudsman Annual Report 2023-24"],
    ["47%", "say they personally faced deliberate delays from insurers", "LocalCircles, Jan 2025"]];
  ev.forEach((e, i) => {
    const y = 1.9 + i * 1.62;
    box(s2, pres, 8.75, y, 3.98, 1.45, C.soft);
    box(s2, pres, 8.75, y, 0.07, 1.45, C.cyan);
    t(s2, e[0], { x: 9.0, y: y + 0.12, w: 3.6, h: 0.55, fontSize: 28, bold: true, color: C.ink, valign: "middle" });
    t(s2, e[1], { x: 9.0, y: y + 0.66, w: 3.6, h: 0.5, fontSize: 12.5, color: C.body });
    t(s2, e[2], { x: 9.0, y: y + 1.12, w: 3.6, h: 0.25, fontSize: 9.5, color: C.muted });
  });
  footer(s2, "IRDAI Annual Report 2024-25, Table I.29; Business Standard (FY24); Insurance Business Asia, 27 Jul 2026; LocalCircles; CIO Annual Report 2023-24", 2);
  s2.addNotes("Start with the money. Of 1.32 lakh crore rupees claimed in FY25, 18,521 crore was deducted from bills: partial payments, not rejections. That bucket is bigger than outright rejections and grew about 23 percent in a year. The regulator told Parliament it does not collect the reasons. Families feel it: more than half of claimants in LocalCircles' survey saw a rejection or partial payout, and almost all health complaints reaching the Ombudsman are about claims cut or refused.");

  // ---------- Slide 3: journey friction ----------
  const s3 = pres.addSlide();
  s3.background = { color: C.white };
  header(s3, "WHY THE JOURNEY FAILS", "A family decides blind at six points between the admission desk and the Ombudsman");
  const stages = [
    ["Admission desk", "Picks a room in minutes, under stress", "65%", "don't understand their own policy", "The room-rent cap and what it does to the whole bill"],
    ["Pre-authorisation", "Waits while hospital and TPA exchange forms", "13%", "of cashless approvals take more than 1 hour", "Live status and the 1-hour clock"],
    ["Final bill", "Hospital assembles the bill and discharge file", "3–4 h", "typical billing time before the insurer's clock even starts", "Who is holding the file, right now"],
    ["Discharge", "Doctor says go home; the family waits", "6–48 h", "wait for 50–60% of patients, despite a 3-hour rule", "That the insurer pays for delay beyond 3 hours"],
    ["Settlement", "Letter lists deduction codes, not reasons", "83%", "want a transparent way to track their claim", "Which cuts follow the policy and which break rules"],
    ["Grievance", "Complains to whoever answers first", "21%", "of health Ombudsman complaints are rejected, mostly for skipping the insurer", "The right order: insurer, Bima Bharosa, Ombudsman"],
  ];
  const cw = 1.87, gap = 0.18;
  s3.addShape(pres.shapes.LINE, { x: 0.9, y: 2.12, w: 11.5, h: 0, line: { color: C.line, width: 2 } });
  stages.forEach((s, i) => {
    const x = 0.6 + i * (cw + gap);
    rbox(s3, pres, x, 1.85, cw, 0.55, C.navy, null, 0.12);
    t(s3, `${i + 1}  ${s[0]}`, { x: x + 0.1, y: 1.85, w: cw - 0.2, h: 0.55, fontSize: 12.5, bold: true, color: C.white, align: "center", valign: "middle" });
    t(s3, s[1], { x, y: 2.6, w: cw, h: 0.85, fontSize: 12.5, color: C.body });
    t(s3, s[2], { x, y: 3.5, w: cw, h: 0.6, fontSize: 28, bold: true, color: C.red, valign: "middle" });
    t(s3, s[3], { x, y: 4.12, w: cw, h: 0.95, fontSize: 11.5, color: C.body });
    box(s3, pres, x, 5.2, cw, 1.45, C.redSoft);
    t(s3, "MISSING", { x: x + 0.12, y: 5.3, w: cw - 0.24, h: 0.25, fontSize: 9.5, bold: true, color: C.red, charSpacing: 1 });
    t(s3, s[4], { x: x + 0.12, y: 5.56, w: cw - 0.24, h: 1.0, fontSize: 12, bold: true, color: C.ink });
  });
  footer(s3, "CoverSure 2025; Lok Sabha reply, 1 Dec 2025; Medi Assist CEO (The Federal, 2024); LocalCircles 2025–26; CIO Annual Report 2023-24", 3);
  s3.addNotes("Walk the stay from left to right. At every point the family lacks one piece of information the system already has. The hidden gap is between steps 3 and 4: insurers report 97 percent of discharge approvals within 3 hours, yet half of patients wait 6 to 48 hours, because the hospital's billing time happens before the insurer's clock starts. At the end, one in five Ombudsman complaints is thrown out because the family complained in the wrong order.");

  // ---------- Slide 4: gap / positioning ----------
  const s4 = pres.addSlide();
  s4.background = { color: C.white };
  header(s4, "THE GAP", "Claims AI in India works for insurers; the patient's side still runs on phone calls");
  const mx = 1.2, my = 1.95, mw = 5.9, mh = 4.5;
  box(s4, pres, mx, my, mw / 2, mh / 2, C.soft); box(s4, pres, mx + mw / 2, my, mw / 2, mh / 2, C.cyanSoft);
  box(s4, pres, mx, my + mh / 2, mw / 2, mh / 2, C.soft); box(s4, pres, mx + mw / 2, my + mh / 2, mw / 2, mh / 2, C.soft);
  s4.addShape(pres.shapes.LINE, { x: mx, y: my + mh / 2, w: mw, h: 0, line: { color: C.slate, width: 1 } });
  s4.addShape(pres.shapes.LINE, { x: mx + mw / 2, y: my, w: 0, h: mh, line: { color: C.slate, width: 1 } });
  t(s4, "Serves the insurer", { x: mx, y: my + mh + 0.08, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: C.muted });
  t(s4, "Serves the patient", { x: mx + mw - 2.5, y: my + mh + 0.08, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: C.muted, align: "right" });
  t(s4, "AI agent", { x: 0.35, y: my + 0.1, w: 0.8, h: 0.5, fontSize: 12, bold: true, color: C.muted, align: "right" });
  t(s4, "Manual", { x: 0.35, y: my + mh - 0.55, w: 0.8, h: 0.5, fontSize: 12, bold: true, color: C.muted, align: "right" });
  const dots = [
    [mx + 0.35, my + 0.45, "ICICI Lombard claims copilot"], [mx + 0.35, my + 1.05, "Star Health AI adjudication"], [mx + 0.35, my + 1.65, "Medi Assist predictive billing"],
    [mx + 0.35, my + 3.1, "TPA call centres"],
    [mx + mw / 2 + 0.3, my + 2.55, "Policybazaar claim advisors"], [mx + mw / 2 + 0.3, my + 3.0, "Ditto claim managers"],
    [mx + mw / 2 + 0.3, my + 3.45, "ClaimBuddy hospital desks"], [mx + mw / 2 + 0.3, my + 3.9, "Insurance Samadhan (success fee)"],
  ];
  dots.forEach(d => {
    s4.addShape(pres.shapes.OVAL, { x: d[0], y: d[1] + 0.07, w: 0.16, h: 0.16, fill: { color: C.slateDark }, line: { color: C.slateDark } });
    t(s4, d[2], { x: d[0] + 0.25, y: d[1], w: 2.6, h: 0.3, fontSize: 11.5, color: C.body, valign: "middle" });
  });
  s4.addShape(pres.shapes.OVAL, { x: mx + mw / 2 + 0.3, y: my + 0.55, w: 0.55, h: 0.55, fill: { color: C.cyan }, line: { color: C.navy, width: 2 } });
  t(s4, "Haq", { x: mx + mw / 2 + 1.0, y: my + 0.5, w: 1.6, h: 0.4, fontSize: 20, bold: true, color: C.navy, valign: "middle" });
  t(s4, "No product here today", { x: mx + mw / 2 + 1.0, y: my + 0.9, w: 1.9, h: 0.3, fontSize: 11.5, color: C.cyanDark, bold: true });
  t(s4, "Rights patients already have, that no one enforces for them", { x: 7.75, y: 1.9, w: 5.0, h: 0.7, fontSize: 15, bold: true, color: C.ink });
  const rights = [
    [I.clock, "Cashless decision within 1 hour", "IRDAI Health Master Circular, 2024"],
    [I.hospital, "Discharge approved within 3 hours, or the insurer pays for the extra stay", "IRDAI Health Master Circular, 2024"],
    [I.file, "The hospital sends the documents, not the patient", "IRDAI Health Master Circular, 2024"],
    [I.rupee, "No proportionate cut on medicines, consumables, diagnostics or ICU", "IRDAI/HLT/REG/CIR/151/06/2020"],
    [I.shield, "No non-disclosure challenge after 60 months of continuous cover", "Moratorium clause, all health policies"],
  ];
  rights.forEach((r, i) => {
    const y = 2.62 + i * 0.84;
    s4.addImage({ data: r[0], x: 7.8, y: y + 0.05, w: 0.34, h: 0.34 });
    t(s4, r[1], { x: 8.35, y, w: 4.4, h: 0.5, fontSize: 12.5, bold: true, color: C.ink, valign: "middle" });
    t(s4, r[2], { x: 8.35, y: y + 0.5, w: 4.4, h: 0.25, fontSize: 10, color: C.muted });
  });
  footer(s4, "Microsoft (ICICI Lombard); Angel One (Star Health, Mar 2026); The Federal (Medi Assist); company sites; IRDAI Master Circular 29 May 2024; IRDAI circular 151/06/2020", 4);
  s4.addNotes("Every serious claims AI deployment we found in India sits with the insurer or TPA and makes adjudication faster or catches fraud. On the patient's side there are human advocates: good, but they don't scale, they charge success fees, or they only help their own customers. Paytm today offers a claim form and an FAQ. The top-right quadrant is empty. On the right are rules the family already has. They exist on paper; nobody enforces them for the patient at the moment it matters.");

  // ---------- Slide 5: solution ----------
  const s5 = pres.addSlide();
  s5.background = { color: C.white };
  header(s5, "OUR SOLUTION", "Haq follows one hospital stay from the admission desk to the last rupee");
  const steps = [
    [I.bedW, "BEFORE ADMISSION", "Know the cost first", "Reads your policy, prices each room on offer and shows your out-of-pocket cost before you choose", "Policy reading  ·  simulation"],
    [I.clockW, "DURING THE STAY", "Keep IRDAI's clocks", "Starts the 1-hour and 3-hour timers, nudges the hospital desk and records any breach as evidence", "Tracking  ·  alerts"],
    [I.fileW, "AFTER SETTLEMENT", "Audit every rupee", "Reads the bill and settlement letter, recomputes your entitlement and flags cuts that break the rules", "Document AI  ·  rules engine"],
    [I.sendW, "IF MONEY IS WITHHELD", "Act and escalate", "Drafts the contest, sends it on your OTP, then runs insurer → Bima Bharosa → Ombudsman in order", "Tool calls  ·  scheduling"],
  ];
  const sw = 2.78, sg = 0.33;
  steps.forEach((s, i) => {
    const x = 0.6 + i * (sw + sg);
    box(s5, pres, x, 1.9, sw, 3.65, C.soft);
    s5.addShape(pres.shapes.OVAL, { x: x + 0.25, y: 2.12, w: 0.72, h: 0.72, fill: { color: C.navy }, line: { color: C.navy } });
    s5.addImage({ data: s[0], x: x + 0.43, y: 2.3, w: 0.36, h: 0.36 });
    t(s5, s[1], { x: x + 0.25, y: 3.0, w: sw - 0.4, h: 0.3, fontSize: 10.5, bold: true, color: C.cyanDark, charSpacing: 1 });
    t(s5, s[2], { x: x + 0.25, y: 3.3, w: sw - 0.4, h: 0.45, fontSize: 17, bold: true, color: C.ink });
    t(s5, s[3], { x: x + 0.25, y: 3.8, w: sw - 0.45, h: 1.15, fontSize: 12.5, color: C.body });
    t(s5, s[4], { x: x + 0.25, y: 5.05, w: sw - 0.4, h: 0.3, fontSize: 10.5, color: C.muted, bold: true });
    if (i < 3) arrowRight(s5, pres, x + sw + 0.05, 3.72, sg - 0.1, C.cyanDark);
  });
  box(s5, pres, 0.6, 5.85, 12.13, 0.85, C.amberSoft);
  s5.addImage({ data: I.headset, x: 0.85, y: 6.04, w: 0.46, h: 0.46 });
  t(s5, [
    { text: "Human claims expert, one tap away on every screen. ", options: { bold: true, color: C.ink } },
    { text: "They receive the full case file: documents, calculations, drafts and clock status, so the family never repeats the story.", options: { color: C.body } },
  ], { x: 1.5, y: 5.85, w: 11.0, h: 0.85, fontSize: 14, valign: "middle" });
  footer(s5, "Channels: Paytm app, WhatsApp and voice (Hindi and regional languages). Product design: team_SGS", 5);
  s5.addNotes("Haq is one agent that follows one case: a hospital stay. Before admission it turns the policy into a price for each room. During the stay it runs the regulator's clocks. After settlement it audits every line. If money is withheld, it drafts, sends with the family's OTP approval, and runs the grievance ladder in the order the regulator requires. Underneath all four, a human expert is one tap away and inherits the whole case.");

  // ---------- Slide 6: before vs after ----------
  const s6 = pres.addSlide();
  s6.background = { color: C.white };
  header(s6, "BEFORE VS AFTER", "Same hospital stay, two outcomes: with Haq, Priya recovers ₹26,550 and sees every cost first");
  t(s6, "Demo case: Priya's father Ramesh, 56, gallbladder surgery, 4 days, ₹5 lakh policy since 2019", { x: 0.6, y: 1.62, w: 12, h: 0.3, fontSize: 12, color: C.muted, italic: true });
  const cx = [0.6, 2.75, 7.8], cws = [2.0, 4.9, 4.93];
  box(s6, pres, cx[1], 2.05, cws[1], 0.45, C.redSoft); box(s6, pres, cx[2], 2.05, cws[2], 0.45, C.greenSoft);
  t(s6, "Today", { x: cx[1] + 0.15, y: 2.05, w: 3, h: 0.45, fontSize: 14, bold: true, color: C.red, valign: "middle" });
  t(s6, "With Haq", { x: cx[2] + 0.15, y: 2.05, w: 3, h: 0.45, fontSize: 14, bold: true, color: C.green, valign: "middle" });
  const ba = [
    ["Admission", "Picks the ₹8,000 room without knowing the ₹5,000 cap", "Sees ≈ ₹62,300 out of pocket vs ≈ ₹5,700 for twin-share, then chooses"],
    ["Discharge", "Waits into the evening and pays for the extra hours", "3-hour clock runs; breach logged, so the insurer bears the extra charges"],
    ["Settlement", "\"₹88,875 deducted\" with no reasons", "₹62,325 explained line by line; ₹26,550 flagged against IRDAI rules"],
    ["Response", "Gives up, or calls the helpline for weeks", "Contest drafted with citations and sent on OTP in under 10 minutes"],
    ["Escalation", "Complains to the wrong forum first", "Ladder scheduled: insurer, day 14 Bima Bharosa, then Ombudsman"],
  ];
  ba.forEach((r, i) => {
    const y = 2.6 + i * 0.7;
    box(s6, pres, 0.6, y + 0.64, 12.13, 0.01, C.line);
    t(s6, r[0], { x: cx[0], y, w: cws[0], h: 0.62, fontSize: 13.5, bold: true, color: C.ink, valign: "middle" });
    t(s6, r[1], { x: cx[1] + 0.15, y, w: cws[1] - 0.25, h: 0.62, fontSize: 12.5, color: C.body, valign: "middle" });
    t(s6, r[2], { x: cx[2] + 0.15, y, w: cws[2] - 0.25, h: 0.62, fontSize: 12.5, color: C.ink, bold: false, valign: "middle" });
  });
  box(s6, pres, cx[1], 6.15, cws[1], 0.72, C.red);
  t(s6, "₹88,875 absorbed  ·  no contest  ·  no clock", { x: cx[1], y: 6.15, w: cws[1], h: 0.72, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  box(s6, pres, cx[2], 6.15, cws[2], 0.72, C.green);
  t(s6, "₹26,550 recovered  ·  contest in < 10 min  ·  clocks enforced", { x: cx[2], y: 6.15, w: cws[2], h: 0.72, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  t(s6, "Outcome", { x: cx[0], y: 6.15, w: cws[0], h: 0.72, fontSize: 13.5, bold: true, color: C.ink, valign: "middle" });
  footer(s6, "Synthetic demo case; entitlement rules from IRDAI Master Circular 2024 and circular 151/06/2020", 6);
  s6.addNotes("Same family, same bill, two outcomes. The numbers come from our demo case and the arithmetic is on the demo slide. Note that Haq does not overrule Priya: she still chooses the single room, but now she knows it costs about 62 thousand out of pocket. What changes is that every cost is known before it lands, and every rupee the rules protect gets claimed.");

  // ---------- Slide 7: architecture ----------
  const s7 = pres.addSlide();
  s7.background = { color: C.white };
  header(s7, "HOW THE AI WORKS", "An orchestrator plans, specialists read, a rules engine does the maths and a verifier checks every word");
  const L = 0.6, R = 9.55, AW = R - L;
  box(s7, pres, L, 1.85, AW, 0.5, C.soft, C.line);
  t(s7, "Channels:  Paytm app  ·  WhatsApp  ·  Voice (AI Soundbox / IVR)", { x: L, y: 1.85, w: AW, h: 0.5, fontSize: 13, bold: true, color: C.ink, align: "center", valign: "middle" });
  arrowDown(s7, pres, L + AW / 2, 2.37, 0.2, C.slateDark);
  box(s7, pres, L, 2.6, AW, 0.78, C.navy);
  t(s7, [
    { text: "Case Orchestrator", options: { bold: true, fontSize: 15, color: C.white, breakLine: true } },
    { text: "One stateful case per hospital stay: intake → cover → admit → discharge → settle → contest → escalate", options: { fontSize: 11.5, color: "C9D6E6" } },
  ], { x: L + 0.2, y: 2.6, w: AW - 0.4, h: 0.78, align: "center", valign: "middle" });
  const agents = [
    ["Intake & Consent", "Identity, DPDP consent, fetches policy", false],
    ["Policy Intelligence", "Wording → coverage graph with clause IDs", false],
    ["Document Intelligence", "Vision OCR of bills and letters, line mapping", false],
    ["Entitlement Engine", "Deterministic code, no LLM: every rupee", true],
    ["Clock Keeper", "IRDAI timers, breach detection", false],
    ["Advocate", "Drafts, files after OTP, schedules ladder", false],
  ];
  const aw = (AW - 5 * 0.14) / 6;
  agents.forEach((a, i) => {
    const x = L + i * (aw + 0.14);
    arrowDown(s7, pres, x + aw / 2, 3.4, 0.2, C.slateDark);
    box(s7, pres, x, 3.64, aw, 1.4, a[2] ? C.greenSoft : C.cyanSoft, a[2] ? C.green : C.cyan);
    t(s7, a[0], { x: x + 0.08, y: 3.72, w: aw - 0.16, h: 0.5, fontSize: 12, bold: true, color: a[2] ? C.green : C.ink });
    t(s7, a[1], { x: x + 0.08, y: 4.24, w: aw - 0.16, h: 0.75, fontSize: 10.5, color: C.body });
  });
  arrowDown(s7, pres, L + AW / 2, 5.06, 0.18, C.slateDark);
  box(s7, pres, L, 5.27, AW, 0.62, C.amberSoft, C.amber);
  t(s7, [
    { text: "Verifier → Communicator:  ", options: { bold: true, color: C.amber } },
    { text: "amounts must match the engine · every claim cites a clause · AI disclosed · PII redacted · plain Hindi or English", options: { color: C.ink } },
  ], { x: L + 0.2, y: 5.27, w: AW - 0.4, h: 0.62, fontSize: 11.5, valign: "middle" });
  box(s7, pres, L, 6.02, AW, 0.8, C.soft, C.line);
  t(s7, [
    { text: "Memory & knowledge:  ", options: { bold: true, color: C.ink } },
    { text: "case store and append-only audit log · clause and circular index (pgvector) · versioned IRDAI rulebook · encrypted document vault", options: { color: C.body } },
  ], { x: L + 0.2, y: 6.02, w: AW - 0.4, h: 0.8, fontSize: 11.5, valign: "middle" });
  box(s7, pres, 9.85, 1.85, 2.88, 3.2, C.white, C.line);
  t(s7, "Tools and APIs", { x: 10.0, y: 1.95, w: 2.6, h: 0.35, fontSize: 13, bold: true, color: C.ink });
  ["NHCX FHIR claim API", "Paytm policy record", "Hospital tariff", "DigiLocker / ABHA", "Email · insurer portal", "Bima Bharosa · Ombudsman", "Scheduler · notifications"].forEach((tool, i) => {
    rbox(s7, pres, 10.0, 2.38 + i * 0.37, 2.58, 0.3, C.soft, C.line, 0.05);
    t(s7, tool, { x: 10.1, y: 2.38 + i * 0.37, w: 2.4, h: 0.3, fontSize: 10.5, fontFace: MONO, color: C.ink, valign: "middle" });
  });
  arrowRight(s7, pres, 9.58, 4.3, 0.25, C.slateDark);
  box(s7, pres, 9.85, 5.27, 2.88, 1.55, C.amberSoft, C.amber);
  s7.addImage({ data: I.headset, x: 10.0, y: 5.4, w: 0.38, h: 0.38 });
  t(s7, "Human expert console", { x: 10.48, y: 5.4, w: 2.2, h: 0.38, fontSize: 12.5, bold: true, color: C.amber, valign: "middle" });
  t(s7, "Takes over with the full case file when a trigger fires", { x: 10.0, y: 5.85, w: 2.6, h: 0.9, fontSize: 11, color: C.ink });
  footer(s7, "Models: Claude Sonnet 5 for planning and drafting, Claude Haiku 4.5 for classification and verification, Claude vision for OCR", 7);
  s7.addNotes("The key design decision: the language model reads and writes, but it never produces a number. Every rupee comes from the entitlement engine, which is plain code with one rule per circular and a trace. The verifier blocks any message whose amounts do not match the engine or that lacks a citation. RAG is used only to quote the clause back to the user, never to decide. The orchestrator keeps one case per hospital stay, so the family and the human expert see the same history.");

  // ---------- Slide 8: action layer ----------
  const s8 = pres.addSlide();
  s8.background = { color: C.white };
  header(s8, "ACTION LAYER", "Haq does the work: it reads, computes, files, tracks and escalates through audited tool calls");
  const verbs = [
    [I.readW, "Read", ["fetch_policy", "parse_coverage", "ocr_document"], "Room cap ₹5,000/day, cited to clause D.1(i)"],
    [I.calcW, "Compute", ["simulate_rooms", "engine.recompute", "verifier.check"], "Entitled ₹1,65,175 against ₹1,38,625 paid"],
    [I.sendW, "File", ["draft_contest", "request_otp", "send_grievance"], "Contest sent to the insurer's grievance officer"],
    [I.trackW, "Track", ["clock.start", "nhcx.poll_status", "detect_breach"], "Discharge clock breached at 3 h 00 m, evidence saved"],
    [I.escW, "Escalate", ["schedule_ladder", "handoff_expert"], "Bima Bharosa draft queued for day 14"],
  ];
  const vw = 2.29, vg = 0.17;
  verbs.forEach((v, i) => {
    const x = 0.6 + i * (vw + vg);
    box(s8, pres, x, 1.85, vw, 3.0, C.soft);
    box(s8, pres, x, 1.85, vw, 0.7, C.navy);
    s8.addImage({ data: v[0], x: x + 0.2, y: 2.02, w: 0.36, h: 0.36 });
    t(s8, v[1], { x: x + 0.7, y: 1.85, w: vw - 0.8, h: 0.7, fontSize: 17, bold: true, color: C.white, valign: "middle" });
    v[2].forEach((tool, j) => {
      rbox(s8, pres, x + 0.15, 2.72 + j * 0.42, vw - 0.3, 0.34, C.white, C.line, 0.05);
      t(s8, tool + "()", { x: x + 0.25, y: 2.72 + j * 0.42, w: vw - 0.45, h: 0.34, fontSize: 10.5, fontFace: MONO, color: C.cyanDark, valign: "middle", bold: true });
    });
    t(s8, v[3], { x: x + 0.15, y: 4.02, w: vw - 0.3, h: 0.75, fontSize: 11.5, color: C.ink });
  });
  box(s8, pres, 0.6, 5.05, 12.13, 1.8, C.navy);
  t(s8, "AGENT TRACE FROM THE DEMO  (mock insurer API, synthetic bill)", { x: 0.85, y: 5.15, w: 11, h: 0.3, fontSize: 10.5, bold: true, color: C.cyan, charSpacing: 1 });
  const trace = [
    ["10:42:03", "ocr_document(settlement_letter, bill)", "9 line items, confidence 0.97"],
    ["10:42:05", "engine.recompute(rules=R1..R6)", "3 violations, recoverable ₹26,550"],
    ["10:42:06", "verifier.check(amounts, citations)", "pass: numbers match engine, 3 clauses cited"],
    ["10:43:10", "send_grievance(to=insurer_GRO)  [OTP approved]", "filed, ref GRV-2291, ladder scheduled D+14"],
  ];
  trace.forEach((r, i) => {
    const y = 5.5 + i * 0.32;
    t(s8, r[0], { x: 0.85, y, w: 1.0, h: 0.3, fontSize: 11, fontFace: MONO, color: "9FB3CC", valign: "middle" });
    t(s8, r[1], { x: 1.95, y, w: 5.9, h: 0.3, fontSize: 11, fontFace: MONO, color: C.white, valign: "middle" });
    t(s8, "→ " + r[2], { x: 7.9, y, w: 4.7, h: 0.3, fontSize: 11, fontFace: MONO, color: "7EE0B5", valign: "middle" });
  });
  footer(s8, "Haq demo build; tool names as implemented in the orchestrator", 8);
  s8.addNotes("This is what separates an agent from a chatbot. In one case Haq makes about fourteen tool calls: it reads the policy and documents, computes with the engine, files with the family's approval, polls status and runs clocks, and schedules the next escalation. The trace at the bottom is from our demo run. Judges can watch it live on the right-hand panel during the demo.");

  // ---------- Slide 9: trust & safety ----------
  const s9 = pres.addSlide();
  s9.background = { color: C.white };
  header(s9, "TRUST, SAFETY & HUMAN ESCALATION", "Haq files only with your approval, the insurer still decides, and judgement calls go to a human");
  const lanes = [
    ["Haq does on its own", C.green, C.greenSoft, ["Reads policies, bills and letters", "Computes entitlements and out-of-pocket estimates", "Runs clocks, reminders and status checks", "Explains every result in your language"]],
    ["Only with your OTP approval", C.amber, C.amberSoft, ["Sends a contest or grievance", "Shares documents with the insurer", "Files with Bima Bharosa or the Ombudsman", "Edits stay open until you approve"]],
    ["Always goes to a human expert", C.navy, C.cyanSoft, ["Disputes over medical necessity", "Allegations of non-disclosure or fraud", "Rejections, or amounts above ₹1 lakh", "Low confidence after one clarification, or when you ask"]],
  ];
  const lw = 3.9, lg = 0.215;
  lanes.forEach((l, i) => {
    const x = 0.6 + i * (lw + lg);
    box(s9, pres, x, 1.85, lw, 0.6, l[1]);
    t(s9, l[0], { x: x + 0.2, y: 1.85, w: lw - 0.4, h: 0.6, fontSize: 15, bold: true, color: C.white, valign: "middle" });
    box(s9, pres, x, 2.45, lw, 2.55, l[2]);
    t(s9, l[3].map((s, j) => ({ text: s, options: { bullet: true, breakLine: j < l[3].length - 1 } })), { x: x + 0.2, y: 2.62, w: lw - 0.35, h: 2.3, fontSize: 15, color: C.ink, paraSpaceAfter: 12 });
  });
  t(s9, "Guardrails on every message", { x: 0.6, y: 5.2, w: 6, h: 0.35, fontSize: 14, bold: true, color: C.ink });
  const guards = [[I.robot, "Says it is an AI", "RBI FREE-AI, 2025"], [I.quote, "Cites the clause behind every claim", "Moffatt v. Air Canada lesson"], [I.rupee, "Amounts come only from the rules engine", "LLM never generates ₹"], [I.lock, "Consent per purpose, PII redacted", "DPDP Act 2023"], [I.list, "Every step in an audit log", "Exportable to insurer or IRDAI"]];
  const gw = 2.3, gg = 0.157;
  guards.forEach((g, i) => {
    const x = 0.6 + i * (gw + gg);
    box(s9, pres, x, 5.62, gw, 1.25, C.soft, C.line);
    s9.addImage({ data: g[0], x: x + 0.15, y: 5.75, w: 0.3, h: 0.3 });
    t(s9, g[1], { x: x + 0.55, y: 5.72, w: gw - 0.65, h: 0.62, fontSize: 12, bold: true, color: C.ink });
    t(s9, g[2], { x: x + 0.15, y: 6.42, w: gw - 0.3, h: 0.35, fontSize: 10.5, color: C.muted });
  });
  footer(s9, "RBI FREE-AI report, 13 Aug 2025; Moffatt v. Air Canada (BC CRT, Feb 2024); CFPB chatbot report, 2023; Klarna support reversal, 2025; Gartner, Jul 2024", 9);
  s9.addNotes("We designed the limits first. Haq never decides a claim; the insurer does. It never sends anything without the family's OTP. And it hands over to a human for medical necessity, fraud or non-disclosure allegations, big amounts, or low confidence. Two public lessons shaped this: Air Canada was held to what its chatbot promised, so every statement cites a clause; Klarna had to bring humans back for complex cases, so the human is one tap away from the start. Gartner found 64 percent of customers fear losing access to a human; we answer that directly.");

  // ---------- Slide 10: demo ----------
  const s10 = pres.addSlide();
  s10.background = { color: C.white };
  header(s10, "DEMO", "Demo: of ₹88,875 deducted, ₹26,550 broke IRDAI rules, and Haq filed the contest in under 10 minutes");
  t(s10, "Ramesh's claim, recomputed by Haq (₹)", { x: 0.6, y: 1.85, w: 7, h: 0.35, fontSize: 14, bold: true, color: C.ink });
  const base = 5.25, scale = 2.75 / 227500, bw = 1.05, bx0 = 0.75, bstep = 1.38;
  const wf = [
    ["Hospital bill", 0, 227500, C.slate, "2,27,500"],
    ["Allowed deductions", 165175, 227500, "CBD5E1", "−62,325"],
    ["Haq: entitled", 0, 165175, C.green, "1,65,175"],
    ["Insurer paid", 0, 138625, C.slateDark, "1,38,625"],
    ["Cut against rules", 138625, 165175, C.red, "26,550"],
  ];
  s10.addShape(pres.shapes.LINE, { x: 0.6, y: base, w: 6.95, h: 0, line: { color: C.slate, width: 1 } });
  wf.forEach((b, i) => {
    const x = bx0 + i * bstep, top = base - b[2] * scale, h = (b[2] - b[1]) * scale;
    box(s10, pres, x, top, bw, h, b[3]);
    t(s10, b[4], { x: x - 0.2, y: top - 0.36, w: bw + 0.4, h: 0.32, fontSize: 13, bold: true, color: b[3] === C.red ? C.red : b[3] === C.green ? C.green : C.ink, align: "center", valign: "bottom" });
    t(s10, b[0], { x: x - 0.17, y: base + 0.08, w: bw + 0.34, h: 0.5, fontSize: 11, color: b[3] === C.red ? C.red : C.body, bold: b[3] === C.red, align: "center" });
  });
  box(s10, pres, 7.9, 1.85, 4.83, 3.95, C.redSoft);
  t(s10, "Three cuts the rules forbid", { x: 8.1, y: 1.95, w: 4.5, h: 0.4, fontSize: 15, bold: true, color: C.red });
  t(s10, "The insurer applied the room-rent proportion (0.625) to lines that IRDAI exempts from it", { x: 8.1, y: 2.38, w: 4.45, h: 0.65, fontSize: 12, color: C.ink });
  [["Pharmacy and medicines", "₹14,250"], ["Surgical consumables", "₹4,050"], ["Diagnostics", "₹8,250"]].forEach((r, i) => {
    const y = 3.15 + i * 0.52;
    box(s10, pres, 8.1, y, 4.45, 0.44, C.white);
    t(s10, r[0], { x: 8.25, y, w: 2.9, h: 0.44, fontSize: 13, color: C.ink, valign: "middle" });
    t(s10, r[1], { x: 11.2, y, w: 1.2, h: 0.44, fontSize: 13, bold: true, color: C.red, align: "right", valign: "middle" });
  });
  t(s10, "Rule: IRDAI/HLT/REG/CIR/151/06/2020. Proportionate deduction applies only to associated medical expenses, never to pharmacy, consumables, implants, diagnostics or ICU.", { x: 8.1, y: 4.78, w: 4.45, h: 0.95, fontSize: 11, color: C.body });
  t(s10, "5-MINUTE LIVE DEMO", { x: 0.6, y: 6.0, w: 3, h: 0.3, fontSize: 10.5, bold: true, color: C.cyanDark, charSpacing: 1 });
  const demo = ["Cover card", "Room simulator", "Pre-auth clock", "Discharge breach", "Bill audit", "Contest on OTP", "Payout verified", "Human handoff"];
  const dw = (12.13 - 7 * 0.1) / 8;
  demo.forEach((d, i) => {
    const x = 0.6 + i * (dw + 0.1);
    box(s10, pres, x, 6.32, dw, 0.55, i === 4 ? C.navy : C.soft, i === 4 ? null : C.line);
    t(s10, `${i + 1}  ${d}`, { x: x + 0.05, y: 6.32, w: dw - 0.1, h: 0.55, fontSize: 11, bold: true, color: i === 4 ? C.white : C.ink, align: "center", valign: "middle" });
  });
  footer(s10, "Synthetic bill; policy modelled on IRDAI standard Arogya Sanjeevani wording (UIN UNIHLIP20171V011920); IRDAI circular 151/06/2020", 10);
  s10.addNotes("Here is the arithmetic behind the demo. The bill is 2,27,500. The room was 8,000 a day against a 5,000 cap, so the insurer may apply a 0.625 proportion, but only to associated expenses like nursing, surgeon and OT fees. It applied it to everything. Haq recomputes: 62,325 of deductions are legitimate and Haq explains each one; 26,550 were cut from pharmacy, consumables and diagnostics, which IRDAI's 2020 circular exempts. The live demo runs eight steps; step five is the audit you see here.");

  // ---------- Slide 11: impact ----------
  const s11 = pres.addSlide();
  s11.background = { color: C.white };
  header(s11, "IMPACT", "Recovered claims build renewal trust for Paytm, and the same engine sells to insurers");
  const kpiRows = [
    ["Metric", "Pilot target", "Counter-metric"],
    ["Out-of-pocket known before admission", "70% of assisted admissions", "Estimate error under 10%"],
    ["Rule-breaking cuts contested", "90% within 7 days", "At least 85% of contests upheld"],
    ["Cases resolved without a human", "60%", "Human reached in under 5 min"],
    ["Ombudsman complaints rejected for wrong order", "21% → under 3%", "Resolution time not worse"],
  ];
  const kx = [0.6, 3.55, 5.45], kw = [2.9, 1.85, 1.95];
  kpiRows.forEach((r, i) => {
    const y = i === 0 ? 1.9 : 2.4 + (i - 1) * 0.8;
    if (i === 0) box(s11, pres, 0.6, y, 6.8, 0.5, C.navy); else box(s11, pres, 0.6, y + 0.72, 6.8, 0.01, C.line);
    r.forEach((c, j) => t(s11, c, { x: kx[j] + 0.1, y, w: kw[j] - 0.1, h: i === 0 ? 0.5 : 0.72, fontSize: i === 0 ? 12.5 : 12.5, bold: i === 0 || j === 1, color: i === 0 ? C.white : j === 1 ? C.cyanDark : C.ink, valign: "middle" }));
  });
  t(s11, "Every metric ships with a counter-metric, so the agent can't win by flooding insurers or blocking humans.", { x: 0.6, y: 5.75, w: 6.8, h: 0.7, fontSize: 12, color: C.muted, italic: true });
  box(s11, pres, 7.85, 1.9, 4.88, 1.75, C.navy);
  t(s11, "₹185 crore", { x: 8.1, y: 2.0, w: 4.4, h: 0.8, fontSize: 36, bold: true, color: C.cyan, valign: "middle" });
  t(s11, "returned to patients for every 1% of FY25 health-claim deductions that Haq helps recover", { x: 8.1, y: 2.8, w: 4.45, h: 0.75, fontSize: 12.5, color: C.white });
  const biz = [["For Paytm, as the broker", "Claims are the renewal moment. A broker that recovers money for its customers earns trust that premium discounts cannot buy, and cuts support contacts per claim."],
    ["For insurers, via Paytm Intelligence", "Run the same audit before settlement to catch rule-breaking cuts before they become Ombudsman cases. Star Health alone drew about 12,000 in FY25."]];
  biz.forEach((b, i) => {
    const y = 3.85 + i * 1.5;
    box(s11, pres, 7.85, y, 4.88, 1.35, C.soft);
    box(s11, pres, 7.85, y, 0.07, 1.35, C.cyan);
    t(s11, b[0], { x: 8.1, y: y + 0.1, w: 4.5, h: 0.35, fontSize: 13.5, bold: true, color: C.ink });
    t(s11, b[1], { x: 8.1, y: y + 0.45, w: 4.5, h: 0.85, fontSize: 11.5, color: C.body });
  });
  footer(s11, "IRDAI AR 2024-25 (₹18,521 cr disallowed); CIO AR 2023-24 (21% non-entertainable); Insurance Business Asia, Feb 2026; targets are team_SGS pilot goals", 11);
  s11.addNotes("We set pilot targets with counter-metrics so we can't game them: contest volume is balanced by contest precision, automation by human response time. The big number is simple arithmetic: FY25 deductions were 18,521 crore, so every one percent recovered is about 185 crore back to families. For Paytm the value is renewal trust at the moment that matters, and a B2B product: insurers can run the same audit before settlement through Paytm Intelligence, which Paytm is already selling to insurers.");

  // ---------- Slide 12: tech & future ----------
  const s12 = pres.addSlide();
  s12.background = { color: C.white };
  header(s12, "TECHNOLOGY & ROADMAP", "One engine, new rulebooks: credit reports, UPI refunds and motor claims come next");
  t(s12, "Hackathon stack", { x: 0.6, y: 1.85, w: 4, h: 0.35, fontSize: 14, bold: true, color: C.ink });
  const stack = [["Frontend", "Next.js mobile web, expert console, trace panel"], ["Agents", "FastAPI + Claude Agent SDK, typed tools"], ["Models", "Claude Sonnet 5, Haiku 4.5, Claude vision OCR"], ["Data", "Postgres + pgvector, append-only audit log"], ["Rails", "NHCX FHIR (mock), DigiLocker / ABHA, email"], ["Clocks", "APScheduler now, Temporal in production"]];
  stack.forEach((s, i) => {
    const y = 2.3 + i * 0.73;
    box(s12, pres, 0.6, y, 4.4, 0.62, C.soft);
    t(s12, s[0], { x: 0.75, y, w: 1.05, h: 0.62, fontSize: 12, bold: true, color: C.cyanDark, valign: "middle" });
    t(s12, s[1], { x: 1.8, y, w: 3.1, h: 0.62, fontSize: 11.5, color: C.ink, valign: "middle" });
  });
  const phases = [["NOW", "Hackathon", "Health claims, one policy wording, mock insurer API"], ["NEXT 3 MONTHS", "Pilot", "Paytm health policyholders, one insurer on NHCX, Hindi + 2 languages"], ["LATER", "Scale", "Paytm Intelligence for insurers; motor and term-life claims"]];
  const pw = 2.35, pg = 0.2;
  phases.forEach((p, i) => {
    const x = 5.4 + i * (pw + pg);
    box(s12, pres, x, 1.85, pw, 2.05, i === 0 ? C.navy : C.soft, i === 0 ? null : C.line);
    t(s12, p[0], { x: x + 0.15, y: 1.95, w: pw - 0.3, h: 0.28, fontSize: 10, bold: true, color: i === 0 ? C.cyan : C.cyanDark, charSpacing: 1 });
    t(s12, p[1], { x: x + 0.15, y: 2.25, w: pw - 0.3, h: 0.4, fontSize: 16, bold: true, color: i === 0 ? C.white : C.ink });
    t(s12, p[2], { x: x + 0.15, y: 2.7, w: pw - 0.3, h: 1.1, fontSize: 11.5, color: i === 0 ? "C9D6E6" : C.body });
    if (i < 2) arrowRight(s12, pres, x + pw + 0.02, 2.87, pg - 0.04, C.cyanDark);
  });
  t(s12, "Same engine, new rulebook: the clock Haq keeps and what the customer is owed", { x: 5.4, y: 4.1, w: 7.3, h: 0.35, fontSize: 13, bold: true, color: C.ink });
  const exp = [["Journey", "Clock", "Customer is owed"], ["Health claim (built)", "1 h · 3 h · 15 days", "Extra stay costs, penal interest"], ["Credit-report error", "30 days (21 + 9)", "₹100 per day of delay"], ["Failed UPI payment", "T+1", "₹100 per day of delay"], ["Motor claim", "24 h · 15 d · 7 d", "Survey and decision on time"]];
  const ex = [5.4, 8.1, 10.1], ew = [2.7, 2.0, 2.63];
  exp.forEach((r, i) => {
    const y = 4.52 + i * 0.47;
    if (i === 0) box(s12, pres, 5.4, y, 7.33, 0.42, C.navy); else if (i === 1) box(s12, pres, 5.4, y, 7.33, 0.42, C.greenSoft); else box(s12, pres, 5.4, y + 0.42, 7.33, 0.01, C.line);
    r.forEach((c, j) => t(s12, c, { x: ex[j] + 0.1, y, w: ew[j] - 0.15, h: 0.42, fontSize: 11.5, bold: i === 0 || j === 0, color: i === 0 ? C.white : C.ink, valign: "middle" }));
  });
  footer(s12, "RBI credit-information compensation framework (2023); RBI TAT circular (2019); IRDAI motor timelines (Jun 2024); NRCeS NHCX FHIR profiles", 12);
  s12.addNotes("Everything in the stack is buildable in a hackathon, and every rail we mock has a real public spec: NHCX uses FHIR, DigiLocker and ABHA have sandboxes. The engine is generic: documents in, a versioned rulebook, clocks, and an escalation ladder. Our research found the same failure in lending and payments: RBI penalised all three credit bureaus in August 2026 for not paying the 100 rupees a day they owed, and failed UPI payments carry the same compensation. Each new journey needs a rulebook and tools, not a new product.");

  // ---------- Slide 13: sources ----------
  const s13 = pres.addSlide();
  s13.background = { color: C.white };
  header(s13, "APPENDIX", "Sources behind the numbers in this deck");
  const src = [
    "IRDAI Annual Report 2024-25, Table I.29 (health claims FY25)",
    "Council for Insurance Ombudsmen, Annual Report 2023-24",
    "IRDAI Master Circular on Health Insurance Business, 29 May 2024",
    "IRDAI/HLT/REG/CIR/151/06/2020, proportionate deductions",
    "Arogya Sanjeevani policy wording, UIN UNIHLIP20171V011920",
    "Lok Sabha reply on cashless authorisation, 1 Dec 2025 (via Upstox)",
    "LocalCircles health insurance surveys, Jan 2025 and Mar 2026",
    "CoverSure policy-literacy survey, via Business Today, Jun 2025",
    "Business Standard, FY24 disallowed claims, Dec 2024",
    "Insurance Business Asia, 27 Jul 2026 and 13 Feb 2026",
    "The Federal, Medi Assist on discharge billing, Nov 2024",
    "Microsoft AI First Movers: ICICI Lombard claims copilot",
    "Angel One, Star Health AI claims target, Mar 2026",
    "Paytm Q1 FY27 earnings release, 20 Jul 2026",
    "Medianama, Paytm Intelligence, Sep 2026",
    "RBI FREE-AI Committee report, 13 Aug 2025",
    "Moffatt v. Air Canada, BC Civil Resolution Tribunal, Feb 2024",
    "Gartner customer-service AI survey, Jul 2024",
    "Moneylife, RBI penalises credit bureaus, Sep 2026",
    "RBI TAT harmonisation circular, 20 Sep 2019",
  ];
  [src.slice(0, 10), src.slice(10)].forEach((col, ci) => {
    t(s13, col.map((s, j) => ({ text: s, options: { bullet: true, breakLine: j < col.length - 1 } })), { x: 0.6 + ci * 6.2, y: 1.85, w: 5.9, h: 4.9, fontSize: 14, color: C.body, paraSpaceAfter: 12 });
  });
  footer(s13, "Full source list with URLs and dates: 02-sources.md and research/ (about 230 sources)", 13);
  s13.addNotes("Full URLs and dates are in the sources file handed in with the deck. Figures we could not verify in a primary or reputable source were kept out of the deck.");

  await pres.writeFile({ fileName: "Haq_team_SGS.pptx" });
  console.log("written");
}

main().catch(e => { console.error(e); process.exit(1); });
