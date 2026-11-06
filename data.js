/*
  Aion $10K in 30 Days Challenge: board data
  ------------------------------------------------------------
  This is the ONLY file you need to edit each day (copy the numbers over from Notion).
  Everything lives in window.BOARD_DATA below. It is JSON shaped (quoted keys), so a JSON export from Notion can be pasted straight in.
  Day 1 is Mon 2 Nov (launch 00:00 Tbilisi) and day 30 is Tue 1 Dec. The countdown runs to 23:59 Tbilisi time on 1 Dec (endTimeISO), the deadline for verified banked money. Everything before 2 Nov is prep and scores nothing. (Window moved to Mon 2 Nov by Tyrone on 26 Oct 2026.) AED money counts only at the USD that lands in Bank of Georgia after fees (Tyrone, 4 Nov).

  Rules
  1. "payments" only holds verified, settled money that has actually landed. That is what "banked" means.
  2. Anything not yet paid lives in "pipeline". Pipeline always counts $0 toward the goal.
  3. Never put client names on screen. Use a generic label like "Dubai logistics firm" or "Warm contact 3".
  4. Dates are YYYY-MM-DD in Tbilisi time.

  Points
  daily challenge done = 10, call booked = 25, proposal sent = 50, verified payment = 1 point per $10.
*/
window.BOARD_DATA = {
  "meta": {
    "title": "$10K in 30 Days",
    "series": "Can our AI agents make our company $10K in 30 days?",
    "company": "Aion",
    "site": "aiondevs.io",
    "goal": 10000,
    "currencySymbol": "$",
    "startDate": "2026-11-02",
    "endDate": "2026-12-01",
    "days": 30,
    "timeZone": "Asia/Tbilisi",
    "endTimeISO": "2026-12-01T23:59:59+04:00",
    "launchTimeISO": "2026-11-02T00:00:00+04:00",
    "lastUpdated": "2026-11-06",
    "milestones": [
      { "amount": 750,   "label": "First sale" },
      { "amount": 2500,  "label": "$2.5K" },
      { "amount": 5000,  "label": "$5K" },
      { "amount": 10000, "label": "$10K goal" }
    ]
  },

  "players": [
    { "id": "tyrone",   "name": "Tyrone Hammond", "short": "Tyrone",    "role": "CEO",     "initials": "TH", "avatar": "assets/tyrone.png",   "color": "mint" },
    { "id": "tyberger", "name": "Ty Berger",      "short": "Ty Berger", "role": "Partner", "initials": "TB", "avatar": "assets/tyberger.png", "color": "sky" }
  ],

  /* Verified, settled payments only. Example row (do not add until the money has cleared):
     { "date": "2026-10-30", "amount": 750, "offer": "Starter", "player": "tyrone", "label": "Warm contact 1" } */
  "payments": [],

  /* Pipeline cards from the Notion plan. stage is one of: lead, call, proposal, invoiced.
     When the money clears, remove the card here and add a row to "payments". Payments show in the Paid and verified column automatically.
     { "id": "p1", "label": "Warm contact 1", "offer": "Starter", "value": 750, "stage": "lead", "owner": "tyrone", "next": "Personal ask", "due": "2026-10-21" } */
  "pipeline": [],

  /* Scoring events that are not payments or daily challenges. type is "call_booked" or "proposal_sent"
     { "date": "2026-10-22", "player": "tyrone", "type": "call_booked", "label": "Scope call, warm contact 2" } */
  "scoreEvents": [],

  /* Daily challenges done, as recorded in Notion. Ticks on the board itself are also saved in this browser.
     { "date": "2026-10-19", "player": "tyrone" } */
  "challengeLog": [
    { "date": "2026-11-02", "player": "tyberger" }
  ],
  /* 20 Oct tick by Ty Berger removed: 20 and 21 Oct are prep days and do not score. */

  /* Challenge for each day. Index 0 is day 1 (Mon 2 Nov). If a list is shorter than 30 it repeats. */
  "challenges": {
    "tyrone": [
      "Run the Dubai route review with Ty Berger at 10:00",
      "Send 10 personal LinkedIn messages",
      "Ship the Kai booking wording and the new Dubai video ad",
      "Film the shoot-day update and price every reply the same day",
      "Book 1 call from a cold email or LinkedIn reply",
      "Send 3 follow ups to open conversations",
      "Ask 2 past clients for a referral",
      "Book 1 call",
      "Send 1 proposal or a clear next step to a warm lead",
      "Reply to every comment and DM within 2 hours"
    ],
    "tyberger": [
      "Give the go on the Dubai clinic emails and answer the UAE licence question",
      "Message the Dubai coworking lead and get the call booked",
      "Send the coworking lead the aiondevs.io/book link with the demo pack",
      "Send the booking link, message 6 new LinkedIn accepts, WhatsApp one past client",
      "Book 1 call",
      "Send 3 follow ups to open conversations",
      "Message every new LinkedIn accept with the booking link",
      "Book 1 call",
      "Send 1 priced offer to a warm lead",
      "Reply to every comment and DM within 2 hours"
    ]
  },

  /* Top 3 moves this week. Step ticks are saved in this browser; set "done": true here to lock them in from Notion. */
  "moves": [
    {
      "title": "Price and book the two 511 leads",
      "summary": "Two Dubai WhatsApp leads landed on 511 today and are still unpriced. First contact with Front Desk Team at 899 AED and the booking link is the fastest path to cash.",
      "steps": [
        { "id": "m1s1", "who": "tyrone", "text": "First contact both 511 leads with Front Desk Team 899 AED and aiondevs.io/book", "due": "2026-11-07", "done": false },
        { "id": "m1s2", "who": "tyrone", "text": "Log reply or book a 10-minute call", "due": "2026-11-08", "done": false },
        { "id": "m1s3", "who": "both", "text": "Invoice on a yes at the USD that lands after fees", "due": "2026-11-10", "done": false }
      ]
    },
    {
      "title": "Gulf Phase 1 close on Monday",
      "summary": "Phase 1 at $8,000 meets Mon 9 Nov 15:00. Counting as new business still needs Ty's ruling. Aim for signed scope and a deposit date in the room.",
      "steps": [
        { "id": "m2s1", "who": "both", "text": "Chief of Staff gets Ty's counting yes or no", "due": "2026-11-09", "done": false },
        { "id": "m2s2", "who": "both", "text": "Close pack ready: Phase 1 $8,000 plus deposit ask", "due": "2026-11-08", "done": false },
        { "id": "m2s3", "who": "tyrone", "text": "Ask for signed scope and a deposit date in the Mon 15:00 meeting", "due": "2026-11-09", "done": false }
      ]
    },
    {
      "title": "Turn cold email into replies",
      "summary": "268 sent since 2 Nov, 0 human yes, bounces under 2%. New opening line and delivery check before any volume step to 30 a day on Mon 9 Nov.",
      "steps": [
        { "id": "m3s1", "who": "both", "text": "Delivery check on all four inboxes plus a new opening line for Ty", "due": "2026-11-07", "done": false },
        { "id": "m3s2", "who": "tyrone", "text": "Approve the new opening line", "due": "2026-11-08", "done": false },
        { "id": "m3s3", "who": "both", "text": "30 a day per inbox only if bounces stay under 2%", "due": "2026-11-09", "done": false }
      ]
    }
  ],

  /* Completed tasks feed. Newest first is handled for you.
     { "date": "2026-10-20", "time": "10:30", "player": "tyrone", "text": "Approved v4 UAE launch copy", "tag": "Launch" } */
  "completedTasks": [
    { "date": "2026-11-04", "time": "16:47", "player": "tyrone", "text": "New Dubai Kai video ad live on WhatsApp, $10 a day to 11 Nov; old carousel paused", "tag": "Ads" },
    { "date": "2026-11-04", "time": "16:13", "player": "tyberger", "text": "11 new US leads loaded into the US cold campaign", "tag": "Outreach" },
    { "date": "2026-11-04", "time": "09:32", "player": "tyrone", "text": "Kai now offers to book the call, send reminders and manage it all", "tag": "Kai" },
    { "date": "2026-11-03", "time": "18:58", "player": "tyrone", "text": "Booking page aiondevs.io/book live and sent by Kai on every channel", "tag": "Booking" },
    { "date": "2026-11-03", "time": "15:40", "player": "tyberger", "text": "13 Dubai salons emailed with the Front Desk Team offer", "tag": "Outreach" },
    { "date": "2026-11-03", "time": "12:03", "player": "tyrone", "text": "10 personal LinkedIn messages sent", "tag": "Outreach" },
    { "date": "2026-11-03", "time": "10:50", "player": "tyberger", "text": "Front Desk Team offer sent to the Dubai coworking lead, 899 AED a month", "tag": "Pipeline" },
    { "date": "2026-11-02", "time": "20:00", "player": "tyrone", "text": "First UK and US cold emails out, 28 leads across two campaigns", "tag": "Outreach" },
    { "date": "2026-11-02", "time": "14:59", "player": "tyberger", "text": "Salon wording for 8 Dubai salons sent, salon campaign live", "tag": "Outreach" },
    { "date": "2026-11-02", "time": "09:50", "player": "tyberger", "text": "Gave the go on the Dubai clinic emails, 10 clinics loaded", "tag": "Outreach" }
  ],

  /* Social and content. Set "connected": true once the numbers come from a real source. */
  /* social: Zernio, Aion accounts only, posts from Day 1 (22 Oct) on. Checked 22 Oct 07:20 Tbilisi: no challenge-window posts yet. Clicks to the fit check are not tracked by Zernio, so they stay 0 until a link tracker is added. */
  "social": [
    { "platform": "LinkedIn",  "posts": 0, "reach": 0, "clicks": 0, "connected": true },
    { "platform": "Instagram", "posts": 0, "reach": 0, "clicks": 0, "connected": true },
    { "platform": "Facebook",  "posts": 0, "reach": 0, "clicks": 0, "connected": true },
    { "platform": "YouTube",   "posts": 0, "reach": 0, "clicks": 0, "connected": true },
    { "platform": "TikTok",    "posts": 0, "reach": 0, "clicks": 0, "connected": true }
  ],

  /* Locked prices. All plus VAT. */
  "offers": [
    { "name": "Starter",        "price": 750,  "detail": "2 days", "terms": "Paid upfront", "desc": "Staff pulse survey for up to 25 staff, plus a safe use sheet.", "highlight": true },
    { "name": "Full Review",    "price": 2500, "detail": "5 days", "terms": "50/50", "desc": "Full staff check plus a draft AI policy. Half upfront, half on delivery." },
    { "name": "Option",         "price": 3500, "detail": "",       "terms": "", "desc": "For companies whose bots take actions or that use a second channel. Adds a staff briefing and a regulator map." },
    { "name": "Staff AI Check", "price": 1500, "detail": "",       "terms": "", "desc": "" },
    { "name": "Company Brain Setup", "price": "1500-3500", "detail": "", "terms": "Fixed range", "desc": "Obsidian plus Notion brain installed for an owner. Ty-approved 19 Oct evening." },
    { "name": "Agent Team Starter", "price": "2500-5000", "detail": "", "terms": "Optional monthly fee (no price yet)", "desc": "Chief of Staff agent plus two agents, built on the brain. Ty-approved 19 Oct evening." }
  ]
};
