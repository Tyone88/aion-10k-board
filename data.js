/*
  Aion $10K in 30 Days Challenge: board data
  ------------------------------------------------------------
  This is the ONLY file you need to edit each day (copy the numbers over from Notion).
  Everything lives in window.BOARD_DATA below. It is JSON shaped (quoted keys), so a JSON export from Notion can be pasted straight in.
  Day 1 is Tue 20 Oct and day 30 is Wed 18 Nov. The countdown runs to 23:59 Tbilisi time on 18 Nov (endTimeISO), the deadline for verified banked money. (Window changed by Tyrone on 19 Oct 2026.)

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
    "startDate": "2026-10-20",
    "endDate": "2026-11-18",
    "days": 30,
    "timeZone": "Asia/Tbilisi",
    "endTimeISO": "2026-11-18T23:59:59+04:00",
    "launchTimeISO": "2026-10-20T16:34:00+04:00",
    "lastUpdated": "2026-10-19",
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
  "challengeLog": [],

  /* Challenge for each day. Index 0 is day 1 (20 Oct). If a list is shorter than 30 it repeats. */
  "challenges": {
    "tyrone": [
      "Send 5 personal LinkedIn notes to LinkedIn prospects (Ty Berger)",
      "Approve the v4 UAE launch copy",
      "LinkedIn prospects outreach (Ty Berger owns; warm contacts dropped)",
      "Ask 2 past clients for a referral",
      "Book 1 scope call",
      "Review and approve the cold email drafts",
      "Post one AI Work Check LinkedIn post",
      "Send 3 follow ups to open conversations",
      "Record a 60 second Loom on what our team found this week",
      "Book 1 scope call",
      "Send 5 personal LinkedIn notes to LinkedIn prospects (Ty Berger)",
      "Ask 2 past clients for a referral",
      "Send 1 proposal or a clear next step to a LinkedIn prospect",
      "Post one AI Work Check LinkedIn post",
      "Reply to every comment and DM within 2 hours"
    ],
    "tyberger": [
      "Post one AI Work Check LinkedIn post",
      "Finish the v4 UAE launch copy",
      "Post the UAE launch and send 10 LinkedIn DMs",
      "Send 5 personal LinkedIn notes to LinkedIn prospects (Ty Berger)",
      "Share one short case style post with no client names",
      "Book 1 scope call",
      "Comment on 10 posts from UAE founders",
      "Ask 2 past clients for a referral",
      "Send 10 LinkedIn DMs to new connections",
      "Post one AI Work Check LinkedIn post",
      "Book 1 scope call",
      "Cut one short video clip for Instagram and TikTok",
      "Send 3 follow ups to open conversations",
      "Post one AI Work Check LinkedIn post",
      "Run the cold sending health check"
    ]
  },

  /* Top 3 moves this week. Step ticks are saved in this browser; set "done": true here to lock them in from Notion. */
  "moves": [
    {
      "title": "Ship the UAE launch",
      "summary": "Tyrone OKs the v4 copy, then Ty Berger posts it and starts the DMs.",
      "steps": [
        { "id": "m1s1", "who": "tyrone",   "text": "Tyrone OKs Ty Berger's v4 UAE launch copy", "due": "2026-10-20", "done": false },
        { "id": "m1s2", "who": "tyberger", "text": "Ty Berger posts the launch and sends 10 LinkedIn DMs", "due": "2026-10-21", "done": false }
      ]
    },
    {
      "title": "LinkedIn prospects (Ty Berger)",
      "summary": "Warm-contacts move dropped 19 Oct 17:55. Ty Berger runs LinkedIn prospects for Starter asks.",
      "steps": [
        { "id": "m2s1", "who": "tyberger", "text": "Ty Berger runs LinkedIn prospects (replaces warm contacts)", "due": "2026-10-21", "done": false },
        { "id": "m2s2", "who": "both",   "text": "Aim for 2 scope calls booked", "due": "2026-10-23", "done": false },
        { "id": "m2s3", "who": "both",   "text": "First Starter verified banked", "due": "2026-10-30", "done": false }
      ]
    },
    {
      "title": "Cold outreach, done safely",
      "summary": "Approve the 27 drafts, check sending health, then first sends.",
      "steps": [
        { "id": "m3s1", "who": "both", "text": "The 27 cold drafts approved at the Friday review", "due": "2026-10-23", "done": false },
        { "id": "m3s2", "who": "both", "text": "Sending health check", "due": "2026-10-30", "done": false },
        { "id": "m3s3", "who": "both", "text": "First sends, no earlier than this date", "due": "2026-11-02", "done": false }
      ]
    }
  ],

  /* Completed tasks feed. Newest first is handled for you.
     { "date": "2026-10-20", "time": "10:30", "player": "tyrone", "text": "Approved v4 UAE launch copy", "tag": "Launch" } */
  "completedTasks": [],

  /* Social and content. Set "connected": true once the numbers come from a real source. */
  "social": [
    { "platform": "LinkedIn",  "posts": 0, "reach": 0, "clicks": 0, "connected": false },
    { "platform": "Instagram", "posts": 0, "reach": 0, "clicks": 0, "connected": false },
    { "platform": "Facebook",  "posts": 0, "reach": 0, "clicks": 0, "connected": false },
    { "platform": "YouTube",   "posts": 0, "reach": 0, "clicks": 0, "connected": false },
    { "platform": "TikTok",    "posts": 0, "reach": 0, "clicks": 0, "connected": false }
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
