# FairMoney research (13 October 2026)

## The company, today
- FairMoney Microfinance Bank (CBN licensed, NDIC insured). Credit-led mobile bank. Website says 20 million users; the App Store says 5 million users and 10,000+ loans paid out daily.
- Google Play: 4.5 stars, 946K reviews, 10M+ downloads, updated 30 Sep 2026. App Store (Nigeria): 4.44 from 31,727 ratings, version 1.143.1 (25 Sep 2026).
- Products: loans (₦1,500 to ₦3,000,000, 61 days to 18 months per the blog; the help centre says up to 24 months), FlexiCredit (credit line), FairSave 14%, FairTarget 20%, FairLock 21%, cards, bills, Asset Finance, FairMoney Business (POS).
- Founders: Laurin Hainy (CEO), Matthieu Gendreau (CTO), Nicolas Berthozat (CPO). About 600 people across Lagos, Paris, Bangalore and Riga. Tiger Global, DST and Flourish Ventures among investors (about €50M raised).

### Hiring signals (Workable, 13 Oct 2026)
- **Experience Lead** (19 Aug): owns journey maps and "pain points customers keep raising"; measured on a 10% quarterly cut in repeat complaints and +5% CSAT.
- **Engineering Manager, Identity** (21 Sep): identity, KYC and onboarding squad.
- **Head of Collections, Strategy & Analytics** (6 Oct).
- **CX Optimization Specialist** (21 Sep): Freshworks, chatbot.
- **Head of Design** (Lagos and Abuja, 10 Jul; no longer listed): design across product and marketing, design systems, research, "AI-first practices", motion preferred.

## Current design (from store screenshots and the website)
- White app with near-black text (#1F1F27), black pill buttons, green brand (#00A672 in the app, #2A7E58 on the web), mint tints, coral highlight (#FF6243), cyan promo tiles (#00ABD6), blue savings card (#285DDF), dark balance card (#23222A).
- Website font: Inter (400 to 800).
- Home: "Welcome to FairMoney", masked balance card with "Account details", Transfer and Add money in light circles, "Get a loan in 5 minutes!" card with a green border and a black "Get loan" pill, recent transactions, "Do more with FairMoney" tiles with 3D illustrations (money bag, bulb, gift). Bottom tabs: Home, Loans, Savings.
- Loan offer: "Congratulations! You are eligible for loans up to ₦300,000. These offers are valid for 7 days." Then rows for amount and repayment months, and "View Repayment options".
- Marketing uses 3D objects (cash stack, money bag, alarm clock, safe, card). That's why the concept uses 3D illustration sparingly, not flat stickers.
- I couldn't see the logged-in "no offer" state, since that needs an account. The "Try again in 0 days" screen in the concept is rebuilt from customer descriptions and FairMoney's replies, and it's labelled that way.

## Reviews
### Google Play (Nigeria, "most relevant" list, 1,760 loaded; 766 from 2026)
- 2026: 766 reviews, of which 277 rated 1–3 stars (192 one-star). FairMoney replied to 264 of the 277.
- Each of the 277 was tagged by hand with one main theme:

| Theme | Reviews | Share |
|---|---|---|
| **Can't get my next loan** (countdown, rejected, offer shrank, card-link loop, loan tab errors) | **60** | 22% |
| Getting in (login, location, selfie, new device, app won't open) | 57 | 21% |
| Price (interest, fees, fixed tenure) | 40 | 14% |
| Transfers, bills, account restrictions | 27 | 10% |
| KYC, tier upgrade, card linking at onboarding | 23 | 8% |
| Repayment and loan status (paid but not updated, not closed, blocked while owing) | 21 | 8% |
| Calls and reminders | 19 | 7% |
| Savings (FairLock, FairSave) | 7 | 3% |
| Other (dark mode, rating pop-up, closing the account, support only) | 23 | 8% |

- Of the 60 "next loan" reviews, **22 say they repaid on time, early or in full**. 17 mention a countdown or waiting ("try again in 0 days", "-1 days", "after 30 days", "15 days"). 17 say the offer shrank or never grew.
- By month (Feb to Sep): 2, 2, 8, 7, 4, 10, 18, 9 (September runs only to the 18th).
- Location blocking login: 14 reviews (103 helpful votes).

### FairMoney's own replies (Play Store)
- "'0 days left' means your profile is still under review for eligibility."
- "If your loan application still shows '-1 days left,' it means your profile is still under review."
- Mismatched templates: at least 5 replies to 1–3 star reviews thank the person for "positive" or "kind" feedback, or ask for 5 stars.

### App Store (Nigeria, 29 Jun to 10 Oct 2026)
- 50 reviews rated 1–3 stars. 16 are about borrowing again: 7 about the next loan or limit, and **9 from people who opened their account on Android and can't borrow on a new iPhone** ("it insists I must login on my android").

## FairMoney's help centre (fairmoney.freshdesk.com)
- "Why was my loan rejected?": not enough information ("use your main device and grant all permissions"), wrong registration details, bad credit history, "insufficient banking information… perform more transactions… using the FairMoney App".
- "I want a higher loan amount": more transactions in the app, fewer loans elsewhere, keep the app installed, repay on the due date, keep bank alert SMS.
- "Can I get another loan immediately?": "Once your previous loan repayment is verified, you can promptly reapply."
- "Excessive calls on loan repayment": apologises for "calls and messages you received before your due date".
- "Loan renegotiation": "unable to restructure… pay in bits".
- "How do I extend my loan": extension has a fee and "underpayment or overpayment will not activate the extension".
- "Loan application stuck in offer generation": "we are aware of this issue".

**The insight:** FairMoney already knows what helps someone get their next loan, and publishes it in a help centre. The app shows a countdown instead.

## Outside the stores
- Trustpilot: 2.5 stars from 19 reviews. 2026 complaints are about locked accounts and slow support.
- Third-party explainers exist because customers don't understand eligibility: naijamoneyguide "7 reasons why FairMoney is not giving you a loan", creditnigeria, usecentry.
- Nairaland threads about account access and OTPs going to an old number.
- Regulation: FCCPC DEON Regulations 2025 (gazetted 21 Jul 2025; court affirmed the FCCPC's powers in July 2026). They require clear loan terms and transparent pricing, ban abusive recovery, and carry fines up to ₦100M or 1% of turnover, plus director disqualification.

## Mobbin references
- Mercury, application in review with time estimate and "steps to speed it up": https://mobbin.com/screens/ec7b66ef-59c2-495b-9872-7f17f40c5c52
- KOHO, actions that boost eligibility (1 of 7 done): https://mobbin.com/screens/0dab839b-0280-40be-8d35-964462d7ce65
- KOHO, not eligible yet, with tips and other options: https://mobbin.com/screens/97416436-95bf-4d43-97eb-3b183a33fc45
- Zip, "pay off 4 more on time to level up": https://mobbin.com/screens/3fb723f2-64e2-4dee-be79-e4ddbf1f4f00
- Dave, "Notify me when I am eligible": https://mobbin.com/screens/cdd77791-def0-4c6f-aa75-c7aa17013434
- N26, "can't make you an offer right now, we'll notify you": https://mobbin.com/screens/f9c28d0d-c06e-4456-b36f-0b7898b9a987
- Affirm, "Where does this number come from?": https://mobbin.com/screens/fa79fc51-fb05-46d6-9d4f-713267556220
- Affirm, purchasing power checked every 7 days: https://mobbin.com/screens/06c680ff-16e8-4e0e-802d-7c246ed3252b
- Cleo, factors helping or hurting: https://mobbin.com/screens/0adc67f5-97d0-4718-91b4-a70e34997053
- Grab Driver, "we'll get back to you within 1–2 working days via app and SMS": https://mobbin.com/screens/094b300e-f89e-480f-a72a-762788d331f9
- Wise, automatic or manual selfie check, manual is slower: https://mobbin.com/screens/f9cb26cf-4111-43c7-9bdb-68935aa2049a
- Warby Parker, "trust this device?": https://mobbin.com/screens/610c2ee4-6513-4444-9ba2-2667da9e10ce

## Sources
- https://play.google.com/store/apps/details?id=ng.com.fairmoney.fairmoney
- https://apps.apple.com/ng/app/fairmoney-loan-app-in-nigeria/id6456485223
- https://fairmoney.io , https://fairmoney.io/blog/how-to-use-fairmoney-app
- https://apply.workable.com/fairmoney/
- https://fairmoney.freshdesk.com/support/solutions
- https://www.trustpilot.com/review/fairmoney.ng
- https://naijamoneyguide.com/why-is-fairmoney-not-giving-me-loan/
- https://businessday.ng/news/article/fccpc-wins-court-battle-revives-digital-lending-rules-after-months-long-suspension/
- https://www.primebusiness.africa/?p=236419
- https://jobnow.ng/head-of-design-lagos-at-fairmoney-microfinance-bank/

## Firsthand (13 Oct 2026, live app v1.143.1 on iPhone; account first opened on Android in 2022)
- Tapping "Get loan" on Home opens a sheet: "You are logging in with a different device type. This number was registered on another device. To access Loans and FlexiCredit features, please log in from that device." A grey note follows: "We're working hard to bring you a seamless experience across all your devices. We'll let you know as soon as it's ready!" So FairMoney knows about this and is working on it.
- Home today: header with support and history icons, and a card carousel (balance, "No active loans", "Nothing saved yet") whose quick actions change per card (Transfer/Add money/Cards/Bills; Repay/Top up loan/Extend loan; Save/Withdraw/More). Below that: "Get a loan in 5 minutes! Up to ₦3,000,000 available" (mint card, green border, black pill), a KYC card ("Complete your FairMoney bank account setup… Verify BVN"), recent transactions with "View all", "Do more" tiles (cyan, green, blue, orange), and three tabs (Home, Loans, Savings with a "25% interest" badge).
- Savings: FairDollar 6%, FairLock up to 25% (7 to 365 days), FairSave 14%, FairTarget up to 20%, Savers Club (new), Referrals up to ₦500,000, Autosave.
- KYC: Level 1 means ₦50,000 daily outbound and a ₦300,000 maximum balance. "Upgrade bank account" promises "higher loans".
- Patterns: bottom sheets with a bold title, a grey panel and a black "Got it" pill; amount boxes with "View breakdown"; selected chips with a blue outline; grey disabled buttons; "Moving from" rows; heavy rounded type; flat 3D-style illustrations.
- The user's screenshots contain real personal data (name, account number, transactions). They are not stored or published; every screen uses made-up data.
