/*
  Aion $10K in 30 Days Challenge: board data
  ------------------------------------------------------------
  This is the ONLY file you need to edit each day (copy the numbers over from Notion).
  Everything lives in window.BOARD_DATA below. It is JSON shaped (quoted keys), so a JSON export from Notion can be pasted straight in.
  Day 1 is Mon 26 Oct (launch 00:00 Tbilisi) and day 30 is Tue 24 Nov. The countdown runs to 23:59 Tbilisi time on 24 Nov (endTimeISO), the deadline for verified banked money. 20 to 25 Oct are prep days and score nothing. (Window moved to Mon 26 Oct by Tyrone on 22 Oct 2026.)

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
    "startDate": "2026-10-26",
    "endDate": "2026-11-24",
    "days": 30,
    "timeZone": "Asia/Tbilisi",
    "endTimeISO": "2026-11-24T23:59:59+04:00",
    "launchTimeISO": "2026-10-26T00:00:00+04:00",
    "lastUpdated": "2026-10-22",
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
  /* 20 Oct tick by Ty Berger removed: 20 and 21 Oct are prep days and do not score. */

  /* Challenge for each day. Index 0 is day 1 (26 Oct). If a list is shorter than 30 it repeats. */
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
      "title": "LinkedIn push to UAE firms",
      "summary": "Ty Berger's launch post is live. Ten LinkedIn messages to UAE firms running a customer AI assistant, then a Starter ask on any reply.",
      "steps": [
        { "id": "m1s1", "who": "tyberger", "text": "Launch post live on LinkedIn (prep day 1)", "due": "2026-10-20", "done": true },
        { "id": "m1s2", "who": "tyberger", "text": "Messages 1 to 5 sent (prep day 1)", "due": "2026-10-20", "done": true },
        { "id": "m1s3", "who": "tyberger", "text": "Messages 6 to 10 sent", "due": "2026-10-21", "done": false },
        { "id": "m1s4", "who": "both", "text": "Aim for 2 scope calls booked", "due": "2026-10-23", "done": false }
      ]
    },
    {
      "title": "Fast lane for 4 strong leads",
      "summary": "Four leads with checked email addresses got a first email on 22 Oct. Follow-ups go Mon 26 Oct if nobody replies.",
      "steps": [
        { "id": "m2s1", "who": "tyrone", "text": "Tyrone approves the final messages (4 leads)", "due": "2026-10-22", "done": true },
        { "id": "m2s2", "who": "tyrone", "text": "The 4 messages go out (prep day 3)", "due": "2026-10-22", "done": true },
        { "id": "m2s4", "who": "tyrone", "text": "Follow-ups approved and ready", "due": "2026-10-26", "done": false },
        { "id": "m2s3", "who": "both", "text": "First Starter verified banked", "due": "2026-10-30", "done": false }
      ]
    },
    {
      "title": "Ready to take money",
      "summary": "Confirm how clients pay so a yes can be invoiced the same day. Cold email follows in November.",
      "steps": [
        { "id": "m3s1", "who": "tyrone", "text": "Tyrone confirms the invoicing company and payment route", "due": "2026-10-21", "done": true },
        { "id": "m3s2", "who": "tyrone", "text": "Booking page shows the new offer wording", "due": "2026-10-21", "done": true },
        { "id": "m3s3", "who": "both", "text": "First cold sends, no earlier than this date", "due": "2026-11-02", "done": false }
      ]
    }
  ],

  /* Completed tasks feed. Newest first is handled for you.
     { "date": "2026-10-20", "time": "10:30", "player": "tyrone", "text": "Approved v4 UAE launch copy", "tag": "Launch" } */
  "completedTasks": [
    { "date": "2026-10-22", "time": "18:18", "player": "tyrone", "text": "Prep day 3: referral partner call locked for launch day", "tag": "Prep" },
    { "date": "2026-10-22", "time": "10:02", "player": "tyrone", "text": "Prep day 3: first 4 cold emails sent to checked leads", "tag": "Prep" },
    { "date": "2026-10-21", "time": "08:11", "player": "tyrone", "text": "Prep day 2: booking page updated with the $750 Starter offer", "tag": "Prep" },
    { "date": "2026-10-20", "time": "19:26", "player": "tyrone", "text": "Prep day 1: confirmed how clients pay, so a yes can be invoiced the same day", "tag": "Prep" },
    { "date": "2026-10-20", "time": "08:22", "player": "tyberger", "text": "Prep day 1: published the AI Work Check launch post on LinkedIn", "tag": "Prep" },
    { "date": "2026-10-20", "time": "12:34", "player": "tyberger", "text": "Prep day 1: sent the first 5 LinkedIn messages to UAE prospects", "tag": "Prep" }
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
