// All visible copy lives here, verbatim from the approved 29 September 2026 mock-up,
// so the compliance read (r 36 ASCR, ACL) can be done against one file.

export const PHONE = "(02) 8076 8090";
export const PHONE_HREF = "tel:+61280768090";

// 1 July 2027, 00:00 in Sydney (AEST, UTC+10).
export const DEADLINE = new Date("2027-06-30T14:00:00Z");
// Calendar months (0-based) of ASIC's interim stop orders and of the deadline, for the month rail.
export const RAIL_START = { year: 2024, month: 1 };
export const RAIL_END = { year: 2027, month: 6 };

export const nav = [
  { label: "When we can help", href: "#when" },
  { label: "How it works", href: "#how" },
  { label: "Fees", href: "#fees" },
  { label: "Questions", href: "#faq" },
];

export const hero = {
  eyebrow: "Shield Master Fund (Keystone Asset Management)",
  title: { lead: "Lost superannuation in the ", mark: "Shield Master Fund?" },
  sub: "Make sure your complaint to AFCA is complete, correct and made in time. We will assess your position free of charge, and act for you on a no win, no fee basis where our help will make a difference.",
  primary: "Get a free assessment",
  secondary: "Or complain yourself, for free",
  ticks: ["Free assessment", "Nothing to pay upfront", "No win, no fee"],
};

export const deadline = {
  label: "The date that matters",
  date: "1 July 2027",
  body: "If your adviser's business has collapsed, the Compensation Scheme of Last Resort can pay an AFCA award up to $150,000. For investors whose capital Macquarie has repaid, the Scheme has said it will generally not cover the lost returns that remain on complaints made on or after 1 July 2027. For many Macquarie investors, lost returns are most of what is left.",
  fine: "Source: CSLR, Shield and First Guardian resources, 10 September 2026. The Government has also proposed limiting Scheme payments to actual losses for complaints made after 30 June 2027.",
};

export const free = {
  title: "You can complain to AFCA yourself, and it is free",
  body: "AFCA does not charge you, and you do not need a lawyer to use it. ASIC has funded a free online tool to help you prepare a complaint. If your situation is straightforward, we will tell you so and point you to these resources rather than act for you.",
  links: [
    { label: "afca.org.au", note: "Australian Financial Complaints Authority", href: "https://www.afca.org.au" },
    { label: "takeyoursuperback.com", note: "Take Your Super Back", href: "https://takeyoursuperback.com" },
  ],
};

export const when = {
  title: "Some complaints are not straightforward",
  lead: "These are the situations where a lawyer is most likely to change the outcome for Shield investors. If one of them applies to you, ask us for a free assessment.",
  items: [
    { title: "Macquarie repaid your capital", body: "You may still be owed the returns you would have earned in your old fund. AFCA has awarded these even after Macquarie's repayment." },
    { title: "You invested through Equity Trustees", body: "Members of AMG Super and Super Simplifier have not been repaid. ASIC is suing the trustee, but that case will not be heard before 2027." },
    { title: "Your adviser was with MWL", body: "MWL Financial Services is in liquidation. If AFCA decides in your favour, the Compensation Scheme of Last Resort can pay, up to $150,000." },
    { title: "You were advised through InterPrac", body: "AFCA has paused decisions on InterPrac complaints while InterPrac's court case against AFCA runs. We keep your complaint on track." },
    { title: "More than one adviser or platform", body: "Every responsible firm needs to be identified and included in your complaint, or you may leave compensation behind." },
    { title: "You used an SMSF", body: "Your fund is the complainant, and the cost of winding up the SMSF can form part of the claim." },
    { title: "Your loss is over $150,000, or you lost insurance", body: "The Scheme's cap is $150,000, and life, TPD or trauma cover lost on the switch can be part of the claim. We look at what else can be recovered." },
    { title: "You are in a class action or offered a deed", body: "We check how the Macquarie class action affects your complaint, and whether any deed or settlement asks you to give up other rights." },
  ],
};

export const status = {
  title: "What has happened with Shield",
  updated: "Last updated 29 September 2026. Sources: ASIC, AFCA and CSLR publications and court records.",
  items: [
    { when: "February 2024", title: "ASIC stops new investment", body: "ASIC made interim stop orders halting new offers of Shield." },
    { when: "June to August 2024", title: "Assets frozen, receivers appointed", body: "The Federal Court froze Shield's assets and appointed receivers. Keystone has since gone into liquidation." },
    { when: "August 2025", title: "ASIC sues Equity Trustees", body: "ASIC is suing Equity Trustees over about $160 million invested in Shield, seeking compensation for members." },
    { when: "September 2025", title: "Macquarie repays capital", body: "Macquarie repaid about $321 million invested in Shield by its members, less withdrawals." },
    { when: "June 2026", title: "ASIC sues Keystone's directors", body: "ASIC alleges about $305 million was moved to related entities without proper safeguards." },
    { when: "Now", title: "AFCA and the Scheme", body: "AFCA is deciding complaints against most advisers, but InterPrac complaints are paused until at least February 2027, and the Scheme is waiting for funding." },
  ],
};

export const steps = {
  eyebrow: "How it works",
  title: "Five steps",
  items: [
    { title: "Tell us about it", body: "Complete the form and upload any statements, advice documents or letters you have." },
    { title: "Free assessment", body: "We tell you whether you need us. If you do not, we say so and point you to free help." },
    { title: "We prepare your complaint", body: "If we act, we identify every responsible firm and prepare and lodge your complaint with AFCA." },
    { title: "We deal with AFCA", body: "We respond to the firms and to AFCA and check AFCA's loss calculation." },
    { title: "The Scheme, if needed", body: "If your adviser cannot pay, we make your claim to the Compensation Scheme of Last Resort." },
  ],
};

export const fees = {
  title: "No win, no fee",
  big: "Nothing to pay upfront.",
  // Each entry is split into [plain, strong, plain] runs to keep the emphasis of the original.
  items: [
    ["", "Free", " initial assessment."],
    ["A ", "fixed fee of $5,000, including GST", ", agreed in writing before we start."],
    ["Payable ", "only from compensation", " you receive. If you receive nothing, you pay nothing."],
    ["You have ", "five business days", " to change your mind after signing."],
  ] as [string, string, string][],
  eyebrow: "About our fees",
  noteTitle: "What you are paying for",
  notes: [
    "AFCA and the Compensation Scheme of Last Resort do not charge you. Our fee is for our work on your complaint, not for access to AFCA.",
    "Where a complaint is complex, we will ask AFCA to order the financial firm to contribute to your legal costs. AFCA usually caps a contribution at $5,000 and does not always make one. Any contribution reduces what you pay us.",
    "We only take on a complaint where the likely compensation is well above our fee. Before you sign anything we will give you a written costs agreement and disclosure explaining the fee, when it is payable and your rights.",
  ],
};

export const classActions = {
  title: "Class actions already filed",
  lead: "Other law firms have started these class actions against Macquarie. We are not acting in them. If you are a group member, we will check how it affects your complaint. No class action has been filed for Equity Trustees members.",
  cases: [
    { name: "Dessent v Macquarie Investment Management Ltd", court: "Supreme Court of Victoria", number: "S ECI 2026 06235", firm: "Gordon Legal", covers: "Macquarie Superannuation Plan members who invested in Shield between 1 March 2022 and 5 June 2023", active: true },
    { name: "Buttgieg v Macquarie Bank Limited", court: "Federal Court of Australia", number: "QUD425/2026", firm: "AG Edwards", covers: "The applicant has applied to discontinue this proceeding", active: false },
  ],
  fine: "Current at 29 September 2026, from court records and the firms' published information.",
};

export const scam = {
  title: "Beware of recovery scams",
  body: 'ASIC has warned about people offering to recover lost superannuation in return for money paid in advance or a share of your compensation. We will never ask you for an upfront payment, a deposit, a bond or a “tax”. Banton Group is a law practice regulated in New South Wales. If you are unsure whether a message is from us, call our office on (02) 8076 8090.',
};

export const register = {
  eyebrow: "Free assessment",
  title: "Tell us about your Shield investment",
  leads: [
    "It takes about five minutes. We will review what you send and contact you within five business days. Sending us your details does not commit you to anything.",
    "If you have already complained to AFCA, include your AFCA complaint number and we will review where it has got to.",
  ],
  submit: "Send for free assessment",
  consent: "I agree to Banton Group contacting me about my investment and complaint.",
  privacy: "I have read the Privacy Collection Statement.",
  upload: "Upload statements, statements of advice or letters (optional)",
};

export const faq = {
  title: "Common questions",
  items: [
    { q: "Do I need a lawyer to complain to AFCA?", a: "No. AFCA is free and designed to be used without a lawyer. We act only where your circumstances make our involvement worthwhile, and we will tell you if they do not." },
    { q: "Macquarie repaid my money. Do I still have a claim?", a: "Possibly. AFCA has ordered advisers to pay the returns investors would have earned in their previous fund, after allowing for Macquarie's repayment. The 1 July 2027 date matters for these claims." },
    { q: "I invested through Equity Trustees and have not been repaid.", a: "You can complain to AFCA about your adviser now. ASIC's case against Equity Trustees seeks compensation for members, but it will not be heard before 2027." },
    { q: "My adviser was with MWL. What happens?", a: "MWL is in liquidation. If AFCA decides in your favour and MWL cannot pay, you can apply to the Compensation Scheme of Last Resort, which pays up to $150,000 including interest." },
    { q: "My adviser was with InterPrac. What now?", a: "AFCA is still accepting and investigating InterPrac complaints, but will not make decisions until InterPrac's case against AFCA ends. Make your complaint now so it is in the queue." },
    { q: "How much will it cost me?", a: "Nothing upfront, and nothing if your complaint does not succeed. If you receive compensation, our fixed fee is $5,000 including GST, paid from that compensation. AFCA itself is free." },
  ],
};

export const footer = {
  address: ["Level 12, 60 Martin Place", "Sydney NSW 2000"],
  help: [
    { label: "Australian Financial Complaints Authority", site: "afca.org.au", href: "https://www.afca.org.au" },
    { label: "Take Your Super Back", site: "takeyoursuperback.com", href: "https://takeyoursuperback.com" },
    { label: "Compensation Scheme of Last Resort", site: "cslr.org.au", href: "https://www.cslr.org.au" },
  ],
  site: ["Privacy Collection Statement", "Terms of use", "Last updated 29 September 2026"],
  legal: "This site is operated by Banton Group, an incorporated legal practice. It gives general information only and is not legal advice about your circumstances. Banton Group is not ASIC, AFCA or the Compensation Scheme of Last Resort, and is not affiliated with Keystone, Macquarie, Equity Trustees or any adviser or licensee. Past outcomes do not guarantee future results. Liability limited by a scheme approved under Professional Standards Legislation.",
};
