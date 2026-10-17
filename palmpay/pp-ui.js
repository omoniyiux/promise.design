/* PalmPay concept: screens as functions of state. Shared by the prototype, the film and the deck.
   "Before" screens are rebuilt from PalmPay's live iOS app (v7.17.0, Oct 2026). Customer data and loan figures are made up and illustrative. */
(function (G) {
  const P = (d) => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const I = {
    head: P('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M19.5 19c0 1.5-2 2.5-5 2.5"/>'),
    shield: P('<path d="M12 21s8-3.6 8-10V5.5L12 3 4 5.5V11c0 6.4 8 10 8 10z"/><polyline points="8.8 12 11 14.2 15.4 9.8"/>'),
    bell: P('<path d="M18 9a6 6 0 0 0-12 0c0 7-3 8.5-3 8.5h18S18 16 18 9"/><path d="M13.7 20.5a2 2 0 0 1-3.4 0"/>'),
    eye: P('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    chev: P('<polyline points="9 18 15 12 9 6"/>'),
    back: P('<line x1="20" y1="12" x2="4.5" y2="12"/><polyline points="11 19 4.5 12 11 5"/>'),
    bank: P('<path d="M3 9.5h18L12 4z"/><path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M3 20.5h18"/>'),
    user: P('<rect x="4" y="3" width="16" height="15" rx="4"/><circle cx="12" cy="9" r="3"/><path d="M7 16a5.5 5.5 0 0 1 10 0M10 18l2 3 2-3"/>'),
    pig: P('<path d="M4 11a6 6 0 0 1 6-5h4a6 6 0 0 1 5.6 3.8L21 10v4l-2 .6-1 3.4h-3v-2h-4v2H8l-1-3.2A5 5 0 0 1 4 11z"/><circle cx="16" cy="10.5" r=".6"/>'),
    loan: P('<path d="M9 4h6l-1.5 3h-3z"/><path d="M10.5 7C7 8.5 5 11.5 5 14.5 5 18 8 20 12 20s7-2 7-5.5c0-3-2-6-5.5-7.5"/><path d="M10 13h4M10 15.5h4M12 11.5v6"/>'),
    phone: P('<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>'),
    data: P('<path d="M8 20V5M4 9l4-4 4 4M16 4v15M12 15l4 4 4-4"/>'),
    ball: P('<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/>'),
    bolt: P('<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>'),
    gift: P('<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8S9 3 6.5 4.5 8 8 12 8zM12 8s3-5 5.5-3.5S16 8 12 8z"/>'),
    umb: P('<path d="M3 12a9 9 0 0 1 18 0z"/><path d="M12 12v6a2 2 0 0 0 4 0"/>'),
    card: P('<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18"/>'),
    grid: P('<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'),
    home: P('<path d="M4 10.5 12 4l8 6.5V20H4z"/>'),
    wealth: P('<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><polyline points="7 14 10.5 10.5 13 13 17 9"/>'),
    smile: P('<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/>'),
    check: P('<polyline points="20 6 9 17 4 12"/>'),
    info: P('<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="11.5"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
    clock: P('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>'),
    cal: P('<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
    msg: P('<path d="M4 5h16v11H9l-5 4z"/>'),
    flag: P('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'),
    refund: P('<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4.5V10h5.5"/>'),
    x: P('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    lock: P('<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
    help: P('<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
    dots: P('<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>'),
  };
  const ic = (n, cls = 'pic') => `<span class="${cls}">${I[n]}</span>`;
  const N = (n) => '₦' + n.toLocaleString('en-NG');
  const D = { name: 'AMAKA', bal: '86,450.20', earn: '31.27', limit: 40000, amt: 20000, days: 28, rate: 1.0, int: 5600, total: 25600, due: 'Tue 10 Nov', late: 256 };
  G.PP_DATA = D;

  const sb = (dark) => `<div class="psb" style="color:${dark ? '#fff' : '#000'}"><span>9:41</span><span class="r">
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="7.5" width="3.2" height="4.5" rx="1"/><rect x="4.8" y="5.2" width="3.2" height="6.8" rx="1"/><rect x="9.6" y="2.8" width="3.2" height="9.2" rx="1"/><rect x="14.4" y="0" width="3.2" height="12" rx="1"/></svg>
    <svg width="16" height="12" viewBox="0 0 16 12.4" fill="currentColor"><path d="M.6 3.9a10.5 10.5 0 0 1 14.8 0l-1.5 1.7a8.3 8.3 0 0 0-11.8 0z"/><path d="M3.1 6.8a6.8 6.8 0 0 1 9.8 0l-1.5 1.7a4.6 4.6 0 0 0-6.8 0z"/><path d="M5.9 9.9a3 3 0 0 1 4.2 0L8 12.3z"/></svg>
    <svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.8" fill="none" stroke="currentColor" opacity=".38"/><rect x="2.5" y="2.5" width="19" height="8" rx="2.2" fill="currentColor"/><path d="M25 4.6v3.8a2 2 0 0 0 0-3.8z" fill="currentColor" opacity=".45"/></svg></span></div>`;
  const tabs = (on = 'Home') => `<div class="ptabs">${[['home', 'Home'], ['loan', 'Loan'], ['wealth', 'Wealth'], ['gift', 'Reward'], ['smile', 'Me']].map(([i, l]) => `<div class="${on === l ? 'on' : ''}">${I[i]}<span>${l}</span></div>`).join('')}</div>`;
  const bar = (t, go = '', right = '') => `<div class="pbar"><span class="ib" ${go ? `data-go="${go}"` : ''}>${I.back}</span><span class="t">${t}</span><span class="sp"></span>${right}</div>`;
  const hb = '<div class="phomebar"></div>';
  const hot = (o, k) => (o.hot === k || (o.hot === 1 && k === 1)) ? ' hot' : '';
  const scr = (inner, cls = '') => `<div class="pscr ${cls}">${inner}${hb}</div>`;
  const fxbar = (go = '') => `<div class="pbar" style="padding-top:2px"><span class="ib" ${go ? `data-go="${go}"` : ''}>${I.back}</span><img src="img/flexi-logo.png" alt="FlexiMFB" style="height:26px;width:auto;margin-left:2px"><span class="sp"></span><span class="ib">${I.head}</span><span class="ib" style="margin-left:8px">${I.dots}</span></div>`;
  const fxnav = (on = 'Loan') => `<div class="fxnav"><div class="${on === 'Loan' ? 'on' : ''}">${I.loan}<span>Loan</span></div><div class="${on === 'Repayment' ? 'on' : ''}">${I.smile}<span>Repayment</span></div></div>`;
  const greet = `<div class="phead"><div class="pav">A</div><div class="phi">Hi, ${D.name}</div><span class="sp"></span><span class="pibtn">${I.head}</span><span class="pibtn" style="margin-left:10px">${I.shield}</span><span class="pibtn" style="margin-left:10px">${I.bell}<span class="pdot">99+</span></span></div>`;
  const S = {};

  // ================= BEFORE: PalmPay's live app (Promise's own screenshots, personal details swapped for made-up ones) =================
  const live = (src, spot, o) => `<div class="pscr"><img src="img/live/${src}.webp" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">${spot ? `<div class="${o.hot ? 'hot ' : ''}spot" data-go="1" style="position:absolute;left:${spot[0]}px;top:${spot[1]}px;width:${spot[2]}px;height:${spot[3]}px;border-radius:${spot[4] || 14}px;cursor:pointer"></div>` : ''}</div>`;
  S.bhome = (o = {}) => live('home', [288, 225, 83, 82, 14], o);
  S.btour = (o = {}) => live('tour', [101, 298, 188, 37, 19], o);
  S.bflexi = (o = {}) => live('flexi', [105, 268, 180, 36, 18], o);
  S.bcs = (o = {}) => live('cs', [35, 527, 324, 29, 8], o);
  S.belec = (o = {}) => live('elec', null, o);
  S.brepay = (o = {}) => live('repay', null, o);

  // ================= FIX 1: a loan offer that tells the whole truth =================
  S.offer = (o = {}) => {
    const d = o.d || 28, amt = o.amt || D.amt, int = Math.round(amt * D.rate / 100 * d), tot = amt + int;
    const due = d === 14 ? 'Tue 27 Oct' : 'Tue 10 Nov';
    return scr(`${sb()}${fxbar('bflexi')}
    <div class="pbody" style="gap:14px">
      <div class="pcard" style="padding:16px"><div class="pcap" style="display:flex;gap:6px;align-items:center"><span class="pic" style="color:var(--teal);width:18px;height:18px">${I.bolt}</span>Flexi Loan · How much do you need?</div><div class="pamt" style="margin-top:8px;color:var(--teal)">${N(amt)}</div>
        <div class="pslider"><i style="width:${amt / D.limit * 100}%"></i><b style="left:${amt / D.limit * 100}%"></b></div>
        <div class="prow pcap"><span>₦2,000</span><span class="sp"></span><span>Your limit ${N(D.limit)}</span></div>
      <div class="pcap" style="margin:14px 0 8px">Pay back in</div><div class="pchips"><span class="pchip${d === 14 ? ' on' : ''}">14 days</span><span class="pchip${d === 28 ? ' on' : ''}">28 days</span></div></div>
      <div class="pcard${hot(o, 'terms')}" style="padding:6px 16px"><div class="plist">
        <div><span>You get today</span><b>${N(amt)}</b></div>
        <div><span>Cost of this loan</span><b>${N(int)} <span class="pcap">(${D.rate.toFixed(1)}% a day)</span></b></div>
        <div style="padding:14px 0"><span style="color:var(--ink);font-weight:600">You pay back</span><b style="font-size:20px">${N(tot)}</b></div>
        <div><span>Due</span><b>${due}</b></div>
        <div><span>If you're late</span><b>${N(Math.round(tot / 100))} a day</b></div>
        <div><span>Lender</span><b style="font-size:13.5px">Flexi Micro Finance Bank</b></div></div></div>
      <div class="pnote lav">${ic('info')}<span>Pay early or in parts, any time. Nothing is sent until you confirm.</span></div>
      <span class="sp"></span>
      <button class="pbtn teal${hot(o, 1)}" style="margin-bottom:34px" data-go="1">Review loan</button>
    </div>`, 'flexi');
  };

  S.review = (o = {}) => scr(`${sb()}${fxbar('offer')}
    <div class="pbody" style="gap:12px">
      <div class="pcard" style="text-align:center;padding:20px 16px"><div class="pcap">Review your Flexi Loan</div><div class="pamt" style="margin-top:6px;color:var(--teal)">${N(D.amt)}</div><div class="pp1" style="margin-top:8px">You pay back <b style="color:var(--ink)">${N(D.total)}</b> on <b style="color:var(--ink)">${D.due}</b></div></div>
      <div class="pcard" style="padding:14px 16px"><div style="font:600 15px -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;margin-bottom:10px">How it works</div>
        <div class="psteps">
          <div class="pst done"><span class="d">${I.check}</span><div><b>Today: ${N(D.amt)} lands in your balance</b><small>From Flexi Micro Finance Bank, PalmPay's lending partner</small></div></div>
          <div class="pst now"><span class="d"></span><div><b>Reminders on Fri 6 Nov and Mon 9 Nov</b><small>In the app and by SMS. Never a call to your contacts.</small></div></div>
          <div class="pst"><span class="d"></span><div><b>${D.due}: ${N(D.total)} is due</b><small>Pay from your balance, or in parts before then</small></div></div></div></div>
      <div class="prow" style="gap:10px;align-items:flex-start"><span class="pcheck">${I.check}</span><span class="pp1" style="font-size:13.5px">I've read the cost, the due date and the late fee. <span style="color:var(--teal);font-weight:600">Loan Agreement</span></span></div>
      <div class="pnote green">${ic('refund')}<span>Changed your mind? Return it within 24 hours and pay nothing extra.</span></div>
      <span class="sp"></span>
      <button class="pbtn teal${hot(o, 1)}" style="margin-bottom:34px" data-go="1">Confirm with PIN</button>
    </div>`, 'flexi');

  // ================= FIX 2: a loan that explains itself =================
  S.loan = (o = {}) => scr(`${sb()}${fxbar('review')}
    <div class="pbody" style="gap:12px">
      <div class="pcard"><div class="pcap">Outstanding Amount</div><div class="prow" style="margin-top:6px"><div class="pamt" style="font-size:36px">${N(D.total)}</div><span class="sp"></span><button class="pbtn teal sm" style="height:40px;padding:0 22px">Repay</button></div>
        <div class="pcap" style="margin-top:6px;font-size:14px">Due on ${D.due} (in 28 days)</div>
        <div class="plist" style="margin-top:10px;border-top:1px solid var(--line)"><div><span>Borrowed</span><b>${N(D.amt)}</b></div><div><span>Cost (1.0% a day)</span><b>${N(D.int)}</b></div><div><span>Late fees</span><b>₦0</b></div></div>
        <div class="pnote lav" style="margin-top:8px">${ic('info')}<span>Pay any part, any time. We only auto-repay on ${D.due}, from your PalmPay balance.</span></div></div>
      <div class="pcard${hot(o, 'time')}" style="padding:4px 16px"><div class="plist">
        <div><span style="color:var(--ink);font-weight:500;display:flex;gap:8px;align-items:center">${ic('clock')}Need more time? Ask before ${D.due}</span><span class="pic" style="width:18px;height:18px;color:var(--faint)">${I.chev}</span></div>
        <div><span style="color:var(--ink);font-weight:500;display:flex;gap:8px;align-items:center">${ic('msg')}How we remind you</span><span class="pcap">App and SMS only</span></div>
        <div><span style="color:var(--ink);font-weight:500;display:flex;gap:8px;align-items:center">${ic('flag')}Report a rude call or message</span><span class="pic" style="width:18px;height:18px;color:var(--faint)">${I.chev}</span></div></div></div>
    </div>${fxnav('Repayment')}`, 'flexi');

  // ================= FIX 3: money stuck after a debit =================
  const ring = (p, c = '#6A35EF') => { const r = 20, L = 2 * Math.PI * r; return `<svg class="ring" viewBox="0 0 46 46"><circle cx="23" cy="23" r="${r}" fill="none" stroke="#E4E1F4" stroke-width="4"/><circle cx="23" cy="23" r="${r}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${L}" stroke-dashoffset="${L * (1 - p)}" transform="rotate(-90 23 23)"/></svg>`; };
  S.track = (o = {}) => {
    const done = !!o.done;
    return scr(`${sb()}${bar('Electricity', 'bcs', `<span class="ib">${I.head}</span>`)}
    <div class="pbody" style="gap:12px">
      <div class="pcard" style="text-align:center;padding:18px 16px"><img src="img/ikeja.png" alt="Ikeja Electric" style="height:38px;margin:0 auto"><div class="pcap" style="margin-top:4px">Ikeja Electric · Prepaid</div><div class="pamt" style="margin-top:4px">₦5,000</div>
        <span class="ptag ${done ? 'green' : 'amber'}" style="margin-top:10px">${done ? 'Refunded to your balance' : 'Waiting for Ikeja Electric'}</span></div>
      ${done ? `<div class="pnote green">${ic('check')}<span><b>₦5,000 is back in your balance.</b> Ikeja Electric didn't confirm in time, so we refunded you. Nothing to do.</span></div>`
             : `<div class="ptimer${hot(o, 1)}">${ring(.35)}<div><div style="font:600 14.5px -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif">No token by 10:11 AM?</div><div class="pcap">Your ₦5,000 comes back on its own. Please don't pay again.</div></div></div>`}
      <div class="pcard" style="padding:16px"><div class="psteps">
        <div class="pst done"><span class="d">${I.check}</span><div><b>Paid from your balance</b><small>9:41 AM · Ref PP2610130941</small></div></div>
        <div class="pst ${done ? 'done' : 'now'}"><span class="d">${done ? I.check : ''}</span><div><b>${done ? 'Ikeja Electric didn\'t respond' : 'Waiting for Ikeja Electric'}</b><small>${done ? '10:11 AM' : 'Usually under 2 minutes'}</small></div></div>
        <div class="pst ${done ? 'done' : ''}"><span class="d">${done ? I.check : ''}</span><div><b>${done ? 'Refunded' : 'Token delivered'}</b><small>${done ? '10:11 AM · ₦5,000 back in your balance' : 'We\'ll text it to you too'}</small></div></div></div></div>
      <span class="sp"></span>
      ${done ? `<button class="pbtn" style="margin-bottom:34px">Try again</button>` : `<button class="pbtn ghost" style="margin-bottom:34px">Tell us something's wrong</button>`}
    </div>`);
  };

  // ================= QUICK WINS =================
  S.subs = (o = {}) => scr(`${sb()}${bar('Subscriptions', 'binsure')}
    <div class="pbody" style="gap:12px">
      <div class="pnote lav">${ic('bell')}<span>Nothing renews without a reminder 3 days before. Cancel in one tap.</span></div>
      ${[['umb', '#2F86FF', 'NEM Health Insurance', '₦1,000 a month', 'Free month ends Sat 31 Oct', 'First charge Sun 1 Nov', 'amber'], ['phone', '#4A8CFF', 'Airtime top-up plan', '₦500 every Monday', 'You set this on 2 Sep', 'Next Mon 19 Oct', 'lav'], ['data', '#16B48C', 'MTN data, 6GB', '₦2,500 every 7 days', 'Renews automatically', 'Next Wed 21 Oct', 'lav']].map(([i, c, t, p, s1, s2, tg], k) => `<div class="pcard${k === 0 ? hot(o, 1) : ''}" style="padding:14px 16px"><div class="prow"><i style="width:36px;height:36px;border-radius:10px;background:${c};display:grid;place-items:center">${I[i].replace('<svg', '<svg width="20" height="20" style="stroke:#fff;fill:none;stroke-width:2"')}</i><div style="flex:1"><div style="font:600 15px -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif">${t}</div><div class="pcap">${p}</div></div><button class="pbtn sm line" style="height:32px">${k === 1 ? 'Pause' : 'Cancel'}</button></div>
        <div class="prow" style="margin-top:10px;gap:8px"><span class="ptag ${tg}">${s2}</span><span class="pcap">${s1}</span></div></div>`).join('')}
    </div>${tabs('Me')}`);

  S.receipt = (o = {}) => scr(`${sb()}<div style="height:30px"></div>
    <div class="pbody" style="align-items:center;text-align:center">
      <div style="width:76px;height:76px;border-radius:50%;background:#E3F7F0;display:grid;place-items:center;margin-top:30px"><span class="pic" style="width:40px;height:40px;color:var(--green)">${I.check}</span></div>
      <div class="ph1" style="margin-top:18px">Transfer successful</div><div class="pamt" style="margin-top:10px">₦2,500.00</div><div class="pp1" style="margin-top:8px">to Chidi Okafor · OPay · 70•• ••• 214</div>
      <div class="pnote green" style="margin-top:18px;text-align:left;width:100%">${ic('check')}<span>Received by OPay at 9:41 AM. Chidi has been notified.</span></div>
      <span class="sp"></span>
      <button class="pbtn${hot(o, 1)}" style="margin-bottom:10px" data-go="1">Done, back to Home</button>
      <button class="pbtn ghost" style="margin-bottom:34px">Send to Chidi again</button>
    </div>`);

  // ================= iPhone Duo =================
  const duoSb = (c = '#000') => `<div class="duo-sb" style="color:${c}"><span>9:41</span><svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="2.4"/><path d="M11 2a9 9 0 0 1 8.5 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></div>`;
  S.duoLoan = () => `<div class="pscr flexi" style="flex-direction:row">${duoSb()}
    <div style="width:445px;padding:44px 34px 30px;display:flex;flex-direction:column;gap:16px;border-right:1px solid #ECEAF5">
      <div class="prow"><span class="pibtn">${I.back}</span><img src="img/flexi-logo.png" alt="FlexiMFB" style="height:26px;width:auto;margin-left:2px"></div>
      <div><div class="pcap">Flexi Loan · How much do you need?</div><div class="pamt" style="margin-top:6px;color:var(--teal)">${N(D.amt)}</div><div class="pslider"><i style="width:50%"></i><b style="left:50%"></b></div><div class="prow pcap"><span>₦2,000</span><span class="sp"></span><span>Your limit ${N(D.limit)}</span></div></div>
      <div><div class="pcap" style="margin-bottom:8px">Pay back in</div><div class="pchips"><span class="pchip">14 days</span><span class="pchip on">28 days</span></div></div>
      <div class="pnote lav">${ic('info')}<span>Pay early or in parts, any time. Nothing is sent until you confirm.</span></div>
      <div class="pcard" style="padding:14px 16px"><div style="font:600 15px -apple-system,BlinkMacSystemFont,'SF Pro Text',Inter,sans-serif;margin-bottom:10px">How it works</div><div class="psteps">
        <div class="pst done"><span class="d">${I.check}</span><div><b>Today: ${N(D.amt)} lands in your balance</b><small>From Flexi Micro Finance Bank</small></div></div>
        <div class="pst now"><span class="d"></span><div><b>Reminders on Fri 6 Nov and Mon 9 Nov</b><small>App and SMS. Never a call to your contacts.</small></div></div>
        <div class="pst"><span class="d"></span><div><b>${D.due}: ${N(D.total)} is due</b><small>Or pay in parts before then</small></div></div></div></div>
    </div>
    <div style="width:445px;padding:72px 34px 30px;display:flex;flex-direction:column;gap:14px">
      <div class="pcard" style="padding:6px 16px"><div class="plist"><div><span>You get today</span><b>${N(D.amt)}</b></div><div><span>Cost (1.0% a day)</span><b>${N(D.int)}</b></div><div style="padding:14px 0"><span style="color:var(--ink);font-weight:600">You pay back</span><b style="font-size:20px">${N(D.total)}</b></div><div><span>Due</span><b>${D.due}</b></div><div><span>If you're late</span><b>₦256 a day</b></div><div><span>Lender</span><b style="font-size:13.5px">Flexi Micro Finance Bank</b></div></div></div>
      <div class="prow" style="gap:10px;align-items:flex-start"><span class="pcheck">${I.check}</span><span class="pp1" style="font-size:13.5px">I've read the cost, the due date and the late fee. <span style="color:var(--teal);font-weight:600">Loan Agreement</span></span></div>
      <div class="pnote green">${ic('refund')}<span>Changed your mind? Return it within 24 hours and pay nothing extra.</span></div>
      <span class="sp"></span><button class="pbtn teal">Confirm with PIN</button>
    </div></div>`;
  S.duoTrack = () => `<div class="pscr" style="flex-direction:row">${duoSb()}
    <div style="width:445px;padding:44px 34px 30px;display:flex;flex-direction:column;gap:14px;border-right:1px solid #ECEAF5">
      <div class="prow"><span class="pibtn">${I.back}</span><span class="ph2">Electricity</span></div>
      <div class="pcard" style="text-align:center"><img src="img/ikeja.png" alt="Ikeja Electric" style="height:38px;margin:0 auto"><div class="pcap" style="margin-top:4px">Ikeja Electric · Prepaid</div><div class="pamt" style="margin-top:4px">₦5,000</div><span class="ptag amber" style="margin-top:10px">Waiting for Ikeja Electric</span></div>
      <div class="ptimer">${ring(.35)}<div><div style="font:600 14.5px -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif">No token by 10:11 AM?</div><div class="pcap">Your ₦5,000 comes back on its own. Please don't pay again.</div></div></div>
      <div class="pcard" style="padding:16px"><div class="psteps">
        <div class="pst done"><span class="d">${I.check}</span><div><b>Paid from your balance</b><small>9:41 AM · Ref PP2610130941</small></div></div>
        <div class="pst now"><span class="d"></span><div><b>Waiting for Ikeja Electric</b><small>Usually under 2 minutes</small></div></div>
        <div class="pst"><span class="d"></span><div><b>Token delivered</b><small>We'll text it to you too</small></div></div></div></div>
    </div>
    <div style="width:445px;padding:72px 34px 30px;display:flex;flex-direction:column;gap:12px">
      <div class="ph2" style="font-size:16px">Today</div>
      <div class="pcard" style="padding:4px 16px"><div class="plist">${[['Electricity · Ikeja', '−₦5,000', 'Waiting', 'amber'], ['To Chidi Okafor', '−₦2,500', 'Received', 'green'], ['CashBox interest', '+₦31.27', 'Paid', 'green'], ['Airtime · MTN', '−₦500', 'Delivered', 'green']].map(([t, a, s, c]) => `<div><span style="color:var(--ink)">${t}<br><span class="ptag ${c}" style="margin-top:4px">${s}</span></span><b>${a}</b></div>`).join('')}</div></div>
    </div></div>`;

  G.PP = { S, I, D };
})(window);
