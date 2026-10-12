# Quote Request: usability test and analytics kit

Goal: replace "how I'll know it works" in the case study with numbers we measured ourselves.
Two tracks: **A. Usability test** (you can start today, no permission needed) and **B. PostHog analytics** on the live product (needs your PM's OK).

---

## A. Usability test

### What we want to learn
1. Can a first-time user post a request without help? How long does it take?
2. After submitting, do they understand what happens next?
3. Can a vendor pick a plan and get to payment by bank transfer?

### Participants: 8 people
- **5 customers:** have hired a plumber, cleaner, caterer, electrician or similar in the last 6 months, and **have never used Quote Request**.
- **3 vendors:** run a small service business (tailor, cleaner, caterer, solar, barber…), have never used Quote Request.
- Mix of Android and iPhone. Not designers, not ConnectNigeria staff.

**Recruiting message (WhatsApp / X / LinkedIn):**
> Hi! I'm testing a Nigerian app that helps people get quotes from service providers. I need 20 minutes of your time on a video call this week. You just use the app and think out loud. There are no right or wrong answers; I'm testing the app, not you. Interested? 🙏

**Screener (ask before booking):**
1. When did you last pay someone for a service like plumbing, cleaning, catering or repairs? *(Must be within 6 months.)*
2. Have you used Quote Request before? *(Must be no.)*
3. Do you run a business that offers a service? *(Yes = vendor group.)*
4. Android or iPhone?

### How to run it (moderated, on a video call)
- Google Meet, WhatsApp video or Zoom. Ask them to **share their phone screen**. Record **only with permission**.
- Customers use the **live app** (install from Play Store or App Store). Vendors use the live app's plans page and stop **before paying**.
- You only read tasks and watch. If they ask "what do I do?", say "what would you try?" Don't help unless they've been stuck for 2 minutes. That counts as a fail.

**Opening script (read it as written):**
> Thanks for doing this. I'll give you a few small tasks on an app called Quote Request. Please think out loud: say what you're looking at, what you expect, and anything confusing. You can't do anything wrong. If something is hard, that's the app's fault and exactly what I need to know. Is it OK if I record the screen for my notes only?

### Tasks

**Customers**

| # | Task (read aloud) | Success = | Time limit |
|---|---|---|---|
| C1 | "Your kitchen tap has been leaking for two days. Use this app to get quotes from plumbers near you. You want it fixed this Saturday morning and can spend about ₦20,000." | Request submitted (or, as a guest, all 4 steps done and they reach the sign-up prompt) | 5 min |
| C2 | "You've just sent your request. What happens now, and how will you hear back?" | Mentions review → vendors notified → quotes arrive → they compare | 1 min |
| C3 | "Where would you go later to check whether anyone has replied?" | Finds Quotes / My Requests | 2 min |

**Vendors**

| # | Task (read aloud) | Success = | Time limit |
|---|---|---|---|
| V1 | "You run a cleaning business. Find out how much it costs to get customer requests on this app." | Reaches Plans | 2 min |
| V2 | "Choose a plan that gives you about 40 requests a month and go to the point where you'd pay by bank transfer. Stop before paying." | Standard plan in cart, bank transfer chosen | 4 min |

**After each task, ask:**
> "On a scale of 1 to 7, how easy or difficult was that? 1 is very difficult, 7 is very easy."
(This is the Single Ease Question, a standard measure.)

**At the end:**
1. "What, if anything, would stop you from using this for real?"
2. "If you could change one thing, what would it be?"
3. "Would you trust a provider you found here? Why or why not?"

### What to record (one row per person per task)
Make a Google Sheet with these columns. You can also just send me your notes and I'll fill it in.

| participant | group | phone | task | success (Y / partial / N) | time (sec) | ease 1–7 | where they got stuck | quote (their exact words) |

### What it gives the case study
Once all 8 are done, send me the sheet (or your notes and recordings). I'll write:
- **Task success rate**, e.g. "7 of 8 posted a request unaided"
- **Median time** to post a request
- **Average ease score** per task
- **Top 3 problems found, and what I changed**: the strongest part of any case study
- 2–3 real quotes from participants

Rule: we report whatever comes out, even if it's bad. "3 of 5 couldn't find X, so I fixed it" is **more** hireable than a perfect score.

### Optional: Maze (unmoderated)
Maze's free plan works with Figma prototypes. If you have the request flow prototyped in Figma:
1. Sign up at maze.co (you create the account).
2. New study → Import Figma prototype → paste the prototype link.
3. Add tasks C1 and V2 above as "Prototype test" blocks. Set the success screen to "Request Submitted" for C1 and "bank transfer selected" for V2.
4. After each task, add an "Opinion scale" block (1–7) with the ease question.
5. End with an "Open question" block: "If you could change one thing, what would it be?"
6. Share the link with 10–15 people. Maze calculates success rate, time on task and misclicks for you.

---

## B. PostHog analytics on the live product

This needs approval because it's ConnectNigeria's production app and users' data. **Don't add tracking without your PM's OK.** Nigeria's Data Protection Act 2023 applies, so ask whether the privacy policy covers product analytics.

**Message to your PM:**
> Hi [Name], I'd like to add product analytics to Quote Request so we can see where requests drop off: started → submitted → first quote → hired → reviewed. Right now we only hear growth numbers in stakeholder meetings, and I want to use data to decide what to improve next. PostHog has a free tier and can mask personal data in session replays. Can I get your OK, and can the team add the events below? Happy to walk you through it in 10 minutes.

**Events to track** (names are a suggestion; engineering can adjust):

| Event | When it fires | Properties |
|---|---|---|
| `request_started` | First step of the request opens | `service`, `platform` (ios/android/web), `is_guest` |
| `request_step_completed` | Each step's Continue | `step` (details/datetime/budget/location), `service` |
| `request_signup_prompted` | Guest taps Submit | `service` |
| `request_submitted` | Request created | `service`, `budget_band`, `state`, `was_guest` |
| `request_approved` | Admin approves the request | `service`, `minutes_to_approve` |
| `quote_received` | A vendor sends a quote | `service`, `minutes_since_request` |
| `quote_accepted` | Customer accepts a quote | `service`, `quotes_seen` |
| `job_completed_confirmed` | Customer confirms completion | `service` |
| `review_left` | Customer leaves a rating | `rating` |
| `vendor_plan_checkout_started` | Vendor adds a plan to the cart | `plan` |
| `vendor_payment_method_selected` | Card or bank transfer | `method` |
| `vendor_plan_paid` | Payment success | `plan`, `used_points`, `used_discount` |

**Dashboards to build:**
1. **Customer funnel:** request_started → request_submitted → quote_received → quote_accepted → review_left
2. **Guest conversion:** request_signup_prompted → request_submitted where was_guest = true (this measures Decision 1)
3. **Time to first quote:** median of minutes_since_request on the first quote_received (Decision 3)
4. **Vendor checkout:** checkout_started → method_selected → paid, split by method (Decision 5)

**Privacy settings:** mask all text inputs in session replay (request descriptions can contain addresses and phone numbers), and don't send names, phone numbers or emails as event properties.

Once data comes in, send me screenshots of the funnels and I'll add the real numbers to the case study.
