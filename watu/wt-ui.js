/* Watu concept: screens as functions of state. Shared by the prototype, the film and the deck.
   "Before" screens are rebuilt from Watu's live app (Play Store screenshots, Oct 2026). Customer data is made up. */
(function (G) {
  const P = (d) => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const I = {
    home: P('<path d="M4 10.5 12 4l8 6.5V20H4z"/><path d="M10 20v-5h4v5"/>'),
    txn: P('<path d="M6 3h12v18l-6-4-6 4z"/>'),
    pay: P('<ellipse cx="9" cy="7" rx="5" ry="2.3"/><path d="M4 7v3.5c0 1.3 2.2 2.3 5 2.3M4 10.5V14c0 1.3 2.2 2.3 5 2.3"/><circle cx="16" cy="14.5" r="4.6"/>'),
    msg: P('<path d="M4 5h16v11H9l-5 4z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>'),
    help: P('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5"/>'),
    bell: P('<path d="M18 9a6 6 0 0 0-12 0c0 7-3 8.5-3 8.5h18S18 16 18 9"/><path d="M13.7 20.5a2 2 0 0 1-3.4 0"/>'),
    phone: P('<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>'),
    bike: P('<circle cx="5.5" cy="16" r="3.2"/><circle cx="18.5" cy="16" r="3.2"/><path d="M5.5 16l3.5-6h5l2 6M9 10l-1-2.5H6M14 10l2.5-3h2"/>'),
    tv: P('<rect x="3" y="5" width="18" height="12" rx="1.8"/><path d="M9 20.5h6"/>'),
    refresh: P('<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4.5V11h-6.5"/>'),
    dl: P('<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M4.5 16.5v3h15v-3"/>'),
    lock: P('<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
    unlock: P('<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V7.5a4 4 0 0 1 7.6-1.7"/>'),
    check: P('<polyline points="20 6 9 17 4 12"/>'),
    chev: P('<polyline points="9 18 15 12 9 6"/>'),
    back: P('<line x1="20" y1="12" x2="4.5" y2="12"/><polyline points="11 19 4.5 12 11 5"/>'),
    x: P('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    copy: P('<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5v-3a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5V14A1.5 1.5 0 0 0 6 15.5h2.5"/>'),
    bank: P('<path d="M3 9.5h18L12 4z"/><path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M3 20.5h18"/>'),
    call: P('<path d="M21 16.6v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.6 1.9 1.9 0 0 1 4 2.5h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.6a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.8.3 1.7.6 2.6.7a1.9 1.9 0 0 1 1.6 1.9z"/>'),
    wa: P('<path d="M4 20l1.2-3.8A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-1.8-.9-.9.8a4 4 0 0 1-2-2l.8-.9-.9-1.8z"/>'),
    info: P('<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="11.5"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
    clock: P('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>'),
    hour: P('<path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>'),
    alert: P('<path d="M12 3.5 2.5 20h19z"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
    burger: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    wifi: P('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><line x1="12" y1="19.5" x2="12.01" y2="19.5"/><path d="M1.5 9a15 15 0 0 1 21 0"/>'),
    doc: P('<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h5"/>'),
    trash: P('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    shield: P('<path d="M12 21s8-3.6 8-10V5.5L12 3 4 5.5V11c0 6.4 8 10 8 10z"/><polyline points="8.8 12 11 14.2 15.4 9.8"/>'),
    tag: P('<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>'),
    spark: P('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'),
    card: P('<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18"/>'),
    ussd: P('<rect x="6" y="2.5" width="12" height="19" rx="2.2"/><path d="M9.5 7.5h.01M12 7.5h.01M14.5 7.5h.01M9.5 10.5h.01M12 10.5h.01M14.5 10.5h.01M9.5 13.5h.01M12 13.5h.01M14.5 13.5h.01"/>'),
    emerg: P('<path d="M12 3v18M3 12h18"/>'),
    star: P('<polygon points="12 3 14.8 8.8 21 9.6 16.5 13.9 17.6 20 12 17 6.4 20 7.5 13.9 3 9.6 9.2 8.8"/>'),
  };
  const ic = (n, cls = 'ic') => `<span class="${cls}">${I[n]}</span>`;
  const LOGO = `<svg class="logo" viewBox="0 0 111 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.4493 0V23.2974C71.4493 24.7585 71.6594 26.0384 72.0676 27.1302C72.8221 29.1619 74.2492 30.5467 76.2258 31.3046C77.4293 31.7711 78.8419 32 80.4383 32C81.6824 32 83.1221 31.7919 84.7668 31.4364V26.8735C83.3262 27.0261 82.2795 27.1302 81.5325 27.1302C78.3524 27.1302 76.7145 26.0107 76.7145 22.804V11.1297H84.0867V6.25987H76.7145V0H71.4493ZM47.0723 6.31559C44.8455 7.11425 42.9942 8.5714 41.6343 10.4802C40.0155 12.7499 39.1069 15.6451 39.1069 18.8104C39.1069 21.9765 40.0155 24.8709 41.6343 27.1405C42.9942 29.0494 44.8455 30.5074 47.0723 31.3069C48.3088 31.7577 49.6687 32 51.1172 32C52.5657 32 53.924 31.7577 55.1613 31.3069C56.8755 30.6882 58.3716 29.681 59.5817 28.377V31.3069H64.8963V6.31559H59.5817V9.24459C58.3716 7.93973 56.8755 6.93254 55.1613 6.31559C53.924 5.86477 52.5657 5.62162 51.1172 5.62162C49.6687 5.62162 48.3088 5.86477 47.0723 6.31559ZM44.4155 18.8104C44.4155 14.2079 47.4692 10.4802 51.9986 10.4802C56.528 10.4802 59.5817 14.2079 59.5817 18.8104C59.5817 23.4129 56.528 27.1405 51.9986 27.1405C47.4692 27.1405 44.4155 23.4129 44.4155 18.8104ZM105.04 6.27027V21.973C105.04 25.0536 102.589 27.1321 99.5648 27.1321C96.5403 27.1321 94.0893 25.0536 94.0893 21.973V6.27027H88.7832V21.8404C88.7832 25.8666 90.9142 29.0313 94.0893 30.6998C95.6927 31.5406 97.5641 32 99.5648 32C101.564 32 103.435 31.5406 105.04 30.6998C108.215 29.0313 110.345 25.8666 110.345 21.8404V6.27027H105.04ZM32.6287 6.27027L26.9428 24.8585L22.1737 12.6273C21.6578 11.3124 20.4086 10.443 19.025 10.443C17.6405 10.443 16.3922 11.3124 15.8771 12.6273L11.1004 24.8585L5.4136 6.27027H0L7.63959 29.5453C7.87724 30.2751 8.33817 30.8948 8.92258 31.3256C9.50529 31.7495 10.2242 32 10.9777 32C12.4434 32 13.7535 31.0682 14.2685 29.664L19.025 16.7081L23.7747 29.6571C24.0318 30.3592 24.4868 30.9434 25.0636 31.3534C25.6404 31.7634 26.3322 31.9931 27.0654 31.9931C28.5785 31.9931 29.9224 31.0058 30.4027 29.5392L38.0499 6.27027H32.6287Z"/></svg>`;
  const naira = (n) => '₦' + n.toLocaleString('en-NG');

  // ---------- scenario (made-up customer; amounts illustrative) ----------
  const D = {
    name: 'Halima Yusuf', first: 'Halima', ini: 'HY', device: 'Samsung A17 128GB', deviceShort: 'Samsung A17',
    daily: 1375, total: 250250, paid: 156750, bal: 93500, paid2: 158125, bal2: 92125, pct: 63, weeks: 26,
    today: 'Tuesday, 13 October', lockedOn: '13 - 10 - 2026', acct: '99 1234 5678', ref: 'WT-2610-0941',
    phoneNum: '0803 ••• 4521', until1: 'Wed 14 Oct, 9:00 AM', until2: 'Thu 15 Oct, 9:00 AM', ownBy: 'Sun 20 Dec',
  };
  G.WT_DATA = D;

  // Illustrations drawn in Watu's own line style (the bank, mobile-transfer and 3rd-party icons on its payment screen)
  const ILL = {
    owned: `<svg viewBox="0 0 160 160" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="52" y="22" width="56" height="104" rx="10" stroke="#37ADAF" stroke-width="3"/><path d="M72 32h16" stroke="#37ADAF" stroke-width="3"/><rect x="60" y="44" width="40" height="58" rx="4" stroke="#5A5960" stroke-width="2"/><circle cx="108" cy="110" r="22" fill="#000" stroke="#9BD13A" stroke-width="3"/><path d="M98 110l7 7 13-14" stroke="#9BD13A" stroke-width="3.4"/><path d="M28 56l6 0M31 53v6M132 40l5 0M134.5 37.5v5M36 112l4 0M38 110v4" stroke="#F4A866" stroke-width="2.4"/><path d="M68 76l8 8 16-17" stroke="#37ADAF" stroke-width="3" opacity=".55"/></svg>`,
    cert: `<svg viewBox="0 0 64 64" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8h28l10 10v38H14z" stroke="#37ADAF" stroke-width="2.4"/><path d="M42 8v10h10" stroke="#37ADAF" stroke-width="2.4"/><path d="M21 26h22M21 32h16" stroke="#5A5960" stroke-width="2.4"/><circle cx="40" cy="44" r="7" stroke="#9BD13A" stroke-width="2.4"/><path d="M36 50l-2 8 6-3 6 3-2-8" stroke="#9BD13A" stroke-width="2.4"/></svg>`,
    pause: `<svg viewBox="0 0 64 64" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="6" width="26" height="50" rx="5" stroke="#37ADAF" stroke-width="2.4"/><path d="M29 12h8" stroke="#37ADAF" stroke-width="2.4"/><circle cx="44" cy="44" r="12" fill="#000" stroke="#F4A866" stroke-width="2.4"/><path d="M41 39v10M47 39v10" stroke="#F4A866" stroke-width="2.6"/></svg>`,
    landed: `<svg viewBox="0 0 64 64" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 26h30M8 26l6-6M8 26l6 6" stroke="#5A5960" stroke-width="2.4" transform="translate(64 0) scale(-1 1)"/><rect x="34" y="10" width="22" height="42" rx="5" stroke="#37ADAF" stroke-width="2.4"/><circle cx="17" cy="42" r="9" stroke="#9BD13A" stroke-width="2.4"/><path d="M13 42h8M17 38v8" stroke="#9BD13A" stroke-width="2.2"/></svg>`,
  };
  const ILLS = (n, s) => `<span class="ill" style="width:${s}px;height:${s}px">${ILL[n]}</span>`;

  // Android status bar (Samsung One UI) and 3-button nav, as in Watu's store screenshots
  const asb = (t = '9:41') => `<div class="asb"><span>${t}</span><span class="r">
    <svg width="15" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 11.5 .4 3.6a11 11 0 0 1 15.2 0z" opacity=".95"/></svg>
    <svg width="13" height="12" viewBox="0 0 14 12" fill="currentColor"><path d="M13 .5v11H1z"/></svg>
    <span class="bat">100</span></span></div>`;
  const anav = `<div class="anav"><svg viewBox="0 0 24 24"><path d="M7 6v12M12 6v12M17 6v12"/></svg><svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="4"/></svg><svg viewBox="0 0 24 24"><polyline points="15 5 8 12 15 19"/></svg></div>`;
  const tabs = (on = 'Home') => `<div class="wtabs">${[['home', 'Home'], ['txn', 'Transactions'], ['pay', 'Payments'], ['msg', 'Notifications'], ['help', 'Support']].map(([i, l]) => l === 'Payments'
    ? `<div class="mid" data-go="pay"><span class="c">${I.pay}</span><span>${l}</span></div>`
    : `<div class="${on === l ? 'on' : ''}">${I[i]}<span>${l}</span>${on === l ? '<span class="dot"></span>' : ''}</div>`).join('')}</div>`;
  const wmark = `<div class="wmark"><span class="burger">${I.burger}</span>${LOGO}</div>`;
  const hello = `<div class="top" style="padding-top:8px"><div class="av">${D.ini}</div><div class="hello"><small>Hello</small><b>${D.name}</b></div><span class="sp"></span><span class="bell">${I.bell}</span></div>`;
  const appbar = (t, go = '') => `<div class="appbar"><span class="ib" ${go ? `data-go="${go}"` : ''}>${I.back}</span><span class="t">${t}</span></div>`;
  const devrow = `<div class="devs"><div class="dev on">${I.phone}</div><div class="dev">${I.bike}</div><div class="dev">${I.tv}</div></div><div class="chips"><span class="chip lime">${D.deviceShort}</span></div>`;
  const shell = (inner, { nav = true, cls = '' } = {}) => `<div class="scr ${cls}">${asb()}${inner}${nav ? anav : ''}</div>`;
  const hot = (o, k) => (o.hot === k || o.hot === 1 && k === 1) ? ' hot' : '';

  const S = {};

  // ================= BEFORE: Watu's live app, rebuilt =================
  S.bhome = (o = {}) => shell(`${wmark}${hello}
    <div class="body" style="gap:0">
      <div class="row" style="margin-top:6px"><div><div class="h2">Account Details</div><div class="sub">See your account details</div></div><span class="sp"></span><div class="refresh${hot(o, 'refresh')}">Refresh${I.refresh}</div></div>
      ${devrow}
      <div class="card" style="margin-top:14px;padding:12px"><div class="sub" style="text-align:center;font-size:11.5px;display:flex;gap:6px;justify-content:center;align-items:center"><span class="ic" style="width:13px;height:13px;color:var(--chiplime)">${I.lock}</span>Your device will be active for</div>
        <div class="timer"><div><b>0</b><i>DAYS</i></div><span class="c">:</span><div><b>23</b><i>HOURS</i></div><span class="c">:</span><div><b>18</b><i>MINUTES</i></div><span class="c">:</span><div><b>42</b><i>SECONDS</i></div></div></div>
      <div class="daily" style="margin-top:14px;padding-top:26px"><span class="tip">Tips on how to make payments ${ic('info')}</span><div style="flex:1"><small>Daily Amount</small><b>NGN. ${D.daily.toLocaleString()}</b></div><button class="btn sm" style="background:#3BA7AE;padding:0 20px">${ic('pay')}Pay Now</button></div>
      <div class="prog"><div class="h2">Payment Progress</div><div class="pct"><span>${D.pct}%</span></div><div class="bar"><i style="width:${D.pct}%"></i></div>
        <div class="kv"><div>Amount Paid<span>NGN ${D.paid.toLocaleString()}</span></div><div>Your Balance<span>is NGN ${D.bal.toLocaleString()}</span></div></div></div>
      <div class="card2" style="margin-top:12px;padding:8px 14px 10px"><div class="lp"><span>Last Payment:</span><span>As of 12 Oct 2026</span></div><div class="lp"><span>Device Acquired:</span><span>11 Jun 2026</span></div><div class="outline">${ic('dl')}Download Loan Agreement</div></div>
    </div>${tabs('Home')}`);

  S.blocked = (o = {}) => shell(`${wmark}${hello}
    <div class="body">
      <div class="row" style="margin-top:6px"><div><div class="h2">Account Details</div><div class="sub">See your account details</div></div><span class="sp"></span><div class="refresh">Refresh${I.refresh}</div></div>
      <div class="row" style="margin:14px 0 4px"><div class="dev on" style="width:44px;height:44px">${I.phone}</div><span class="chip lime">${D.device}</span></div>
      <div class="card" style="margin-top:12px"><div class="sub" style="display:flex;gap:6px;align-items:center;justify-content:center;font-size:12px;color:#C9C9CF"><span class="ic" style="width:14px;height:14px;color:var(--orange)">${I.lock}</span>Your device was locked on<span class="sp"></span><span class="ic" style="width:16px;height:16px;color:#bbb">${I.info}</span></div>
        <div class="row" style="margin-top:10px;gap:8px"><div style="flex:1;background:#1B1A1F;border-radius:8px;padding:10px 6px;text-align:center;font:500 24px Poppins;color:#E7675A;letter-spacing:.02em">${D.lockedOn}</div><button class="btn sm orange${hot(o, 'temp')}" style="height:48px;padding:0 12px;font-size:13px">${ic('hour')}Temp Unlock</button></div></div>
      <div class="daily" style="margin-top:14px;padding-top:26px"><span class="tip">How to make payments ${ic('info')}</span><div style="flex:1"><small style="font-weight:600;font-size:11px">Amount To Unlock</small><b style="font-size:20px">NGN ${D.daily.toLocaleString()}</b></div><button class="btn sm coral${hot(o, 'pay')}" style="padding:0 26px">${ic('pay')}Pay</button></div>
      <div class="prog"><div class="h2">Payment Progress</div><div class="pct"><span>${D.pct}%</span></div><div class="bar"><i style="width:${D.pct}%"></i></div>
        <div class="kv"><div>Amount Paid<span>NGN ${D.paid.toLocaleString()}</span></div><div>Your Balance is<span>NGN ${D.bal.toLocaleString()}</span></div></div></div>
      <div class="card2" style="margin-top:12px;padding:8px 14px"><div class="lp"><span>Last Payment</span><span style="font-weight:600">12 Oct, 2026 08:12:40</span></div></div>
    </div>${tabs('Home')}`);

  S.bpay = (o = {}) => shell(`${appbar('Make Payments', 'blocked')}
    <div class="body" style="gap:12px">
      <div><div class="sub" style="margin-bottom:6px">Pay for</div><div class="card" style="text-align:center;font:500 17px Poppins;padding:12px">${D.device}</div></div>
      <div class="card" style="padding:16px"><div style="font:500 14px Poppins">Slide to select days to pay</div><div style="text-align:right;font:500 18px Poppins;margin-top:8px"><span style="font-size:11px;color:#bbb">NGN.</span> ${D.daily.toLocaleString()}</div>
        <div style="position:relative;margin:22px 0 14px"><span style="position:absolute;left:12px;top:-30px;background:#9CC43B;color:#14200A;font:500 11px Poppins;padding:3px 8px;border-radius:5px">1 day</span><div style="height:12px;border-radius:9px;background:#EDEDF0"><div style="width:12%;height:100%;background:#E9A35E;border-radius:9px"></div></div><span style="position:absolute;left:10%;top:-5px;width:22px;height:22px;border-radius:50%;background:#7DC2C7;border:3px solid #E9A35E"></span></div>
        <div style="display:flex;justify-content:flex-end"><span style="border:1px solid #bbb;border-radius:7px;padding:5px 10px;font:400 11px Poppins">Pay For 28 Days</span></div></div>
      <div><div style="font:500 14px Poppins;margin-bottom:6px">Enter Amount</div><div style="height:50px;border-radius:9px;border:1.5px solid #CFCFD4;background:#2A2A2E;padding:0 16px;display:flex;align-items:center;font:400 17px Poppins">${D.daily.toLocaleString()}.00</div></div>
      <div style="font:500 13.5px Poppins">Select A Payment Method</div>
      <div class="card" style="text-align:center;padding:16px"><span class="ic" style="width:34px;height:34px;color:#6FB7AA;margin:0 auto 6px;display:block">${I.bank}</span><div style="font:400 13px Poppins">Bank transfer</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="card" style="text-align:center"><span class="ic" style="width:30px;height:30px;color:#C2C25A;margin:0 auto 6px;display:block">${I.phone}</span><div style="font:400 12px Poppins">Mobile transfer</div></div><div class="card" style="text-align:center"><span class="ic" style="width:30px;height:30px;color:#E39A5B;margin:0 auto 6px;display:block">${I.card}</span><div style="font:400 12px Poppins">3rd Party</div></div></div>
    </div>${tabs('')}`);

  // Rebuilt from reviews: after the last payment the app still asks for payment
  S.bdone = (o = {}) => shell(`${wmark}${hello}
    <div class="body">
      <div class="row" style="margin-top:6px"><div><div class="h2">Account Details</div><div class="sub">See your account details</div></div><span class="sp"></span><div class="refresh">Refresh${I.refresh}</div></div>
      ${devrow}
      <div class="banner${hot(o, 1)}" style="margin-top:14px">${ic('lock')}<span>Complete your payment to unlock new features.</span></div>
      <div class="daily" style="margin-top:12px;opacity:.9"><div style="flex:1"><small>Daily Amount</small><b>NGN. 0</b></div><button class="btn sm" style="background:#3BA7AE">${ic('pay')}Pay Now</button></div>
      <div class="prog"><div class="h2">Payment Progress</div><div class="pct"><span>100%</span></div><div class="bar"><i style="width:100%"></i></div>
        <div class="kv"><div>Amount Paid<span>NGN ${D.total.toLocaleString()}</span></div><div>Your Balance<span>is NGN 0</span></div></div></div>
      <div class="card2" style="margin-top:12px;padding:8px 14px 10px"><div class="lp"><span>Last Payment:</span><span>As of 20 Dec 2026</span></div><div class="lp"><span>Device Acquired:</span><span>11 Jun 2026</span></div><div class="outline">${ic('dl')}Download Loan Agreement</div></div>
    </div>${tabs('Home')}`);

  // ================= FIX 1: the lock screen is the payment screen =================
  S.lock = (o = {}) => shell(`<div class="lockscr"></div>
    <div class="body" style="position:relative;z-index:2;padding:0 18px">
      <div class="lt"><div class="clk">9:41</div><div class="dt">${D.today}</div></div>
      <div class="sheet" style="margin-top:44px">
        <div class="row" style="gap:12px;align-items:flex-start">${ILLS('pause', 50)}<div style="flex:1"><div style="font:600 19px/1.25 Poppins">Your phone is paused</div><div class="p" style="font-size:12.5px;margin-top:3px">Pay <b style="color:#fff">${naira(D.daily)}</b> and it switches back on until ${D.until1}.</div></div></div>
        <button class="btn orange${hot(o, 'temp')}" style="margin-top:14px" data-go="1">${ic('hour')}Unlock for 1 hour to pay</button>
        <div class="p" style="font-size:11px;text-align:center;margin-top:6px;color:#A9A9B0">Opens your bank app. Watu's Temp Unlock, now on this screen.</div>
        <div style="margin-top:12px">
          <div class="opt"><span class="oi">${I.bank}</span><div style="flex:1"><b>Transfer from any bank or agent</b><small>Account ${D.acct} · in your name</small></div></div>
          <div class="opt"><span class="oi">${I.call}</span><div style="flex:1"><b>Call Watu</b><small>Calls to Watu still go through while paused</small></div></div>
        </div>
      </div>
      <div class="note teal" style="margin-top:12px">${ic('wifi')}<span>Nothing owed? Your phone may have been offline too long. Connect to Wi-Fi or data and it switches back on by itself.</span></div>
      <span class="sp"></span>
      <div class="row" style="justify-content:center;margin-bottom:12px"><span class="chip" style="background:#1F1E24;height:34px;line-height:34px;padding:0 18px">Emergency call</span></div>
    </div>`);

  // Pay inside the 1-hour window, dates named
  S.pay = (o = {}) => {
    const sel = o.sel ?? 0;
    const C = [['1 day', 1375, D.until1], ['2 days', 2750, D.until2], ['1 week', 9625, 'Tue 20 Oct, 9:00 AM'], ['28 days', 38500, 'Tue 10 Nov, 9:00 AM']];
    return shell(`<div style="background:#3A2A10;color:#F9D7B5;font:500 11.5px Poppins;padding:7px 20px;display:flex;gap:8px;align-items:center">${ic('hour')}Unlocked for 58 min to pay</div>${appbar('Make payment', 'lock')}
    <div class="body" style="gap:14px">
      <div><div class="sub" style="margin-bottom:8px">How many days?</div><div class="dchips">${C.map(([l, a], i) => `<div class="dchip${i === sel ? ' on' : ''}"><b>${l}</b><small>${naira(a)}</small></div>`).join('')}</div></div>
      <div class="card" style="text-align:center;padding:16px"><div class="sub">You pay</div><div class="big" style="margin:4px 0">${naira(C[sel][1])}</div><div class="sub">Your phone stays on until <b style="color:var(--lime1)">${C[sel][2]}</b></div></div>
      <div><div class="sub" style="margin-bottom:6px">Transfer to your Watu account</div>
        <div class="card row" style="padding:12px 14px"><div style="flex:1"><div class="acct">${D.acct}</div><div class="sub" style="font-size:11.5px;color:var(--mute)">Watu · ${D.name}</div></div><span class="chip" style="display:flex;gap:6px;align-items:center;background:#1F1E24">${ic('copy')}Copy</span></div></div>
      <div class="note green">${ic('shield')}<span>This number is only yours. Pay from your bank app, an agent or anyone's phone.</span></div>
      <span class="sp"></span>
      <button class="btn${hot(o, 1)}" style="margin-bottom:14px" data-go="1">I've sent it</button>
    </div>`);
  };

  // ================= FIX 2: one tracker, so nobody pays twice =================
  S.track = (o = {}) => {
    const done = !!o.done;
    return shell(`${appbar('Payment', 'pay')}
    <div class="body">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-top:18px">${ILLS('landed', 96)}<div class="eyebrow" style="margin-top:14px">${done ? 'All done' : 'Payment received'}</div><div class="h1" style="margin-top:6px">We've got your ${naira(D.daily)}</div></div>
      ${done ? `<div class="note green" style="margin-top:14px">${ic('check')}<span>Your phone is on until ${D.until1}. Nothing else to do.</span></div>`
             : `<div class="note teal${hot(o, 1)}" style="margin-top:14px">${ic('info')}<span><b style="color:#fff">Please don't pay again.</b> It's on its way. Your phone switches on by itself.</span></div>`}
      <div class="card" style="margin-top:14px;padding:16px"><div class="steps">
        <div class="st done"><span class="dot">${I.check}</span><div><b>Received from your bank</b><small>9:41 AM · Ref ${D.ref}</small></div></div>
        <div class="st ${done ? 'done' : 'done'}"><span class="dot">${I.check}</span><div><b>Added to your plan</b><small>9:41 AM · ${naira(D.bal - D.daily)} left to own it</small></div></div>
        <div class="st ${done ? 'done' : 'now'}"><span class="dot">${done ? I.check : ''}</span><div><b>Phone switches on</b><small>${done ? '9:42 AM · On' : 'Usually under 2 minutes'}</small></div></div>
      </div></div>
      ${done ? '' : `<div class="opt" style="margin-top:6px;border:0"><span class="oi" style="color:var(--orange)">${I.alert}</span><div style="flex:1"><b>Still paused after 15 minutes?</b><small>Report it. We send your reference to support for you.</small></div><span class="ic chev">${I.chev}</span></div>`}
      <span class="sp"></span>
      <button class="btn${done ? '' : ' dark'}" style="margin-bottom:14px" ${done ? 'data-go="1"' : ''}>${done ? 'Back to home' : 'Waiting for your phone…'}</button>
    </div>`);
  };

  // New home: live status, no Refresh, the date it stays on
  S.home = (o = {}) => shell(`${wmark}${hello}
    <div class="body">
      ${devrow.replace('<div class="devs">', '<div class="devs" style="margin-top:6px">')}
      <div class="card${hot(o, 'until')}" style="margin-top:14px"><div class="until"><small>Your phone stays on until</small><b>${D.until1}</b></div><div class="live" style="margin-top:8px"><i></i>Last payment received 2 min ago</div></div>
      <div class="daily" style="margin-top:14px"><div style="flex:1"><small>Today's payment</small><b>NGN ${D.daily.toLocaleString()}</b><small style="font-size:10.5px;margin-top:2px;opacity:.8">Keeps you on until Thu, 9:00 AM</small></div><button class="btn sm" style="background:#111;color:#fff" data-go="pay">${ic('pay')}Pay now</button></div>
      <div class="prog"><div class="row"><div class="h2">Payment progress</div><span class="sp"></span><span style="font:600 13px Poppins;color:var(--teal)">${D.pct}%</span></div><div class="bar" style="margin-top:10px"><i style="width:${D.pct}%"></i></div>
        <div class="kv"><div>Paid<span>NGN ${D.paid2.toLocaleString()}</span></div><div>Left to own it<span>NGN ${D.bal2.toLocaleString()}</span></div></div>
        <div class="rec" style="margin-top:12px">${ic('star')}Pay daily and it's yours on ${D.ownBy}</div></div>
      <div style="margin-top:16px"><div class="row"><div class="h2">Recent payments</div><span class="sp"></span><span style="font:500 12px Poppins;color:var(--teal)">See all</span></div>
        <div class="list2" style="margin-top:4px">${[['Today, 9:41 AM', 'Bank transfer', 1375], ['Mon 12 Oct, 8:12 AM', 'Bank transfer', 1375], ['Sat 10 Oct, 7:55 PM', 'Agent', 2750]].map(([d, m, a]) => `<div style="border-top:1px solid var(--line);line-height:1.5;padding:9px 0"><span><b>${naira(a)}</b><small style="display:block;color:var(--mute);font-size:11px">${d} · ${m}</small></span><span class="tag teal" style="align-self:center">${I.check.replace('<svg', '<svg width="12" height="12" style="stroke:currentColor;fill:none;stroke-width:3;margin-right:4px"')}Counted</span></div>`).join('')}</div></div>
    </div>${tabs('Home')}`);

  // ================= FIX 3: a finish line that feels like one =================
  const CONF = (() => { const c = ['#37ADAF', '#9BD13A', '#F4A866', '#E1CE12', '#ffffff']; let s = ''; for (let i = 0; i < 34; i++) { const x = (i * 37) % 100, y = (i * 23) % 15, r = (i * 47) % 180; s += `<i style="left:${x}%;top:${y}%;background:${c[i % 5]};transform:rotate(${r}deg)"></i>`; } return `<div class="confetti">${s}</div>`; })();
  S.done = (o = {}) => shell(`${CONF}
    <div class="body" style="position:relative;z-index:2">
      <div style="display:flex;justify-content:center;margin-top:18px">${ILLS('owned', 150)}</div>
      <div style="text-align:center"><div class="eyebrow" style="color:var(--timer)">Final payment received</div><div class="big" style="margin-top:8px">It's yours, ${D.first}.</div><div class="p" style="margin-top:8px">You've paid off your ${D.deviceShort}. No more locks, no more daily payments.</div></div>
      <div class="stat2" style="margin-top:16px"><div><small>Paid in total</small><b>${naira(D.total)}</b></div><div><small>Paid over</small><b>${D.weeks} weeks</b></div></div>
      <div class="card" style="margin-top:10px;padding:4px 14px">
        <div class="opt"><span class="oi" style="color:var(--timer)">${I.unlock}</span><div style="flex:1"><b>Locks removed</b><small>Reset it, sell it, give it away. It's your phone.</small></div></div>
        <div class="opt"><span class="oi">${I.trash}</span><div style="flex:1"><b>You can delete the Watu app</b><small>We'll show you how</small></div><span class="ic chev">${I.chev}</span></div>
      </div>
      <span class="sp"></span>
      <button class="btn" style="margin-bottom:10px">${ic('dl')}Download ownership certificate</button>
      <button class="btn dark${hot(o, 1)}" style="margin-bottom:14px" data-go="1">What's next with Watu</button>
    </div>`, {});

  S.next = (o = {}) => shell(`${appbar('What\'s next', 'done')}
    <div class="body" style="gap:12px">
      <div><div class="rec">${ic('star')}26 weeks with Watu · every payment made</div><div class="h1" style="margin-top:12px">You've proved you pay.<br>Here's what that opens.</div></div>
      <div class="offer"><img src="img/a26.webp" alt=""><div style="flex:1"><b>Your next Samsung</b><small>Galaxy A26 5G and up, at a Watu partner store</small></div><span class="tag teal">For you</span></div>
      <div class="offer"><img src="img/taba9.webp" alt=""><div style="flex:1"><b>A tablet for your business</b><small>Galaxy Tab A9+, pay small small</small></div></div>
      <div class="card" style="padding:12px 14px"><div class="row" style="gap:10px;align-items:flex-start"><span class="ic" style="color:var(--orange);width:18px;height:18px">${I.info}</span><div><b style="font:600 13px Poppins">Looking for a cash loan?</b><div class="p" style="font-size:12px;margin-top:2px">It's not something Watu offers right now. If that changes, you'll hear it here first.</div></div></div></div>
      <span class="sp"></span>
      <button class="btn" style="margin-bottom:14px">Find a Watu store near me</button>
    </div>`);

  // ================= QUICK WIN: a login code that always arrives =================
  S.code = (o = {}) => shell(`${appbar('Log in', '')}
    <div class="body">
      <div class="h1" style="margin-top:6px">Enter the code we sent</div><div class="p" style="margin-top:6px">To ${D.phoneNum} by SMS.</div>
      <div class="code" style="margin-top:20px"><div class="on"></div><div></div><div></div><div></div></div>
      <div class="sub" style="margin-top:12px">Resend SMS in <b style="color:#fff">0:00</b></div>
      <div class="card${hot(o, 1)}" style="margin-top:20px;padding:6px 14px"><div class="sub" style="padding:8px 0 2px;color:var(--mute)">Didn't get it?</div>
        <div class="opt"><span class="oi">${I.call}</span><div style="flex:1"><b>Call me with the code</b><small>An automated call reads it out. Works on any network.</small></div><span class="ic chev">${I.chev}</span></div>
        <div class="opt"><span class="oi">${I.wa}</span><div style="flex:1"><b>Send it on WhatsApp</b><small>If this number has WhatsApp</small></div><span class="ic chev">${I.chev}</span></div>
      </div>
    </div>
    <div class="kb">${['1','2','3','4','5','6','7','8','9','','0','⌫'].map(k => `<span${k ? '' : ' class="e"'}>${k}</span>`).join('')}</div>`);

  // ================= iPhone Duo (bike customers pay from their own phone) =================
  const duoSb = (c = '#fff') => `<div class="duo-sb" style="color:${c}"><span>9:41</span><svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2.4"/><path d="M11 2a9 9 0 0 1 8.5 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></div>`;
  const B = { rider: 'Brian Otieno', ini: 'BO', bike: 'Boxer BM150', daily: 430, until: 'Sat 17 Oct, 9:00 AM', pct: 71, paid: 'KSh 88,150', left: 'KSh 36,000' };
  S.duoBike = () => `<div class="scr" style="flex-direction:row;background:#000">${duoSb()}
    <div style="width:445px;padding:44px 34px 30px;display:flex;flex-direction:column;gap:14px;border-right:1px solid #111">
      <div class="row"><div class="av" style="width:40px;height:40px;font-size:13px">${B.ini}</div><div class="hello"><small>Hello</small><b>${B.rider}</b></div><span class="sp"></span><svg class="logo" viewBox="0 0 111 32" style="height:14px;fill:#fff"><path fill-rule="evenodd" d="M71.4493 0V23.2974C71.4493 24.7585 71.6594 26.0384 72.0676 27.1302C72.8221 29.1619 74.2492 30.5467 76.2258 31.3046C77.4293 31.7711 78.8419 32 80.4383 32C81.6824 32 83.1221 31.7919 84.7668 31.4364V26.8735C83.3262 27.0261 82.2795 27.1302 81.5325 27.1302C78.3524 27.1302 76.7145 26.0107 76.7145 22.804V11.1297H84.0867V6.25987H76.7145V0H71.4493ZM47.0723 6.31559C44.8455 7.11425 42.9942 8.5714 41.6343 10.4802C40.0155 12.7499 39.1069 15.6451 39.1069 18.8104C39.1069 21.9765 40.0155 24.8709 41.6343 27.1405C42.9942 29.0494 44.8455 30.5074 47.0723 31.3069C48.3088 31.7577 49.6687 32 51.1172 32C52.5657 32 53.924 31.7577 55.1613 31.3069C56.8755 30.6882 58.3716 29.681 59.5817 28.377V31.3069H64.8963V6.31559H59.5817V9.24459C58.3716 7.93973 56.8755 6.93254 55.1613 6.31559C53.924 5.86477 52.5657 5.62162 51.1172 5.62162C49.6687 5.62162 48.3088 5.86477 47.0723 6.31559ZM44.4155 18.8104C44.4155 14.2079 47.4692 10.4802 51.9986 10.4802C56.528 10.4802 59.5817 14.2079 59.5817 18.8104C59.5817 23.4129 56.528 27.1405 51.9986 27.1405C47.4692 27.1405 44.4155 23.4129 44.4155 18.8104ZM105.04 6.27027V21.973C105.04 25.0536 102.589 27.1321 99.5648 27.1321C96.5403 27.1321 94.0893 25.0536 94.0893 21.973V6.27027H88.7832V21.8404C88.7832 25.8666 90.9142 29.0313 94.0893 30.6998C95.6927 31.5406 97.5641 32 99.5648 32C101.564 32 103.435 31.5406 105.04 30.6998C108.215 29.0313 110.345 25.8666 110.345 21.8404V6.27027H105.04ZM32.6287 6.27027L26.9428 24.8585L22.1737 12.6273C21.6578 11.3124 20.4086 10.443 19.025 10.443C17.6405 10.443 16.3922 11.3124 15.8771 12.6273L11.1004 24.8585L5.4136 6.27027H0L7.63959 29.5453C7.87724 30.2751 8.33817 30.8948 8.92258 31.3256C9.50529 31.7495 10.2242 32 10.9777 32C12.4434 32 13.7535 31.0682 14.2685 29.664L19.025 16.7081L23.7747 29.6571C24.0318 30.3592 24.4868 30.9434 25.0636 31.3534C25.6404 31.7634 26.3322 31.9931 27.0654 31.9931C28.5785 31.9931 29.9224 31.0058 30.4027 29.5392L38.0499 6.27027H32.6287Z"/></svg></div>
      <div class="row" style="gap:10px"><div class="dev on" style="width:42px;height:42px">${I.bike}</div><span class="chip lime">${B.bike}</span></div>
      <div class="card"><div class="until"><small>Your bike stays on until</small><b>${B.until}</b></div><div class="live" style="margin-top:8px"><i></i>M-Pesa payment received 1 min ago</div></div>
      <div class="card" style="padding:14px 16px"><div class="steps">
        <div class="st done"><span class="dot">${I.check}</span><div><b>Received from M-Pesa</b><small>9:40 AM · Ref TJD4K2LQ8P</small></div></div>
        <div class="st done"><span class="dot">${I.check}</span><div><b>Added to your plan</b><small>9:40 AM</small></div></div>
        <div class="st done"><span class="dot">${I.check}</span><div><b>Bike switched on</b><small>9:41 AM · Ready to ride</small></div></div></div></div>
      <div><div class="row"><div class="h2">Recent payments</div><span class="sp"></span><span style="font:500 12px Poppins;color:var(--teal)">See all</span></div>
        <div class="list2" style="margin-top:2px">${[['Today, 9:40 AM', 'KSh 430'], ['Thu 15 Oct, 7:58 AM', 'KSh 860']].map(([d, a]) => `<div style="border-top:1px solid var(--line);padding:8px 0;line-height:1.5"><span><b>${a}</b><small style="display:block;color:var(--mute);font-size:11px">${d} · M-Pesa</small></span><span class="tag teal" style="align-self:center">Counted</span></div>`).join('')}</div></div>
    </div>
    <div style="width:445px;padding:72px 34px 30px;display:flex;flex-direction:column;gap:14px">
      <div class="h2" style="font-size:17px">Pay ahead</div>
      <div class="dchips">${[['1 day', 'KSh 430'], ['2 days', 'KSh 860'], ['1 week', 'KSh 3,010'], ['Month', 'KSh 12,900']].map(([l, a], i) => `<div class="dchip${i === 2 ? ' on' : ''}"><b>${l}</b><small>${a}</small></div>`).join('')}</div>
      <div class="card" style="text-align:center"><div class="sub">KSh 3,010 keeps you riding until</div><div style="font:600 22px Poppins;color:var(--lime1);margin-top:4px">Sat 24 Oct, 9:00 AM</div></div>
      <div class="prog" style="margin-top:2px"><div class="row"><div class="h2">Payment progress</div><span class="sp"></span><span style="font:600 13px Poppins;color:var(--teal)">${B.pct}%</span></div><div class="bar" style="margin-top:10px"><i style="width:${B.pct}%"></i></div><div class="kv"><div>Paid<span>${B.paid}</span></div><div>Left to own it<span>${B.left}</span></div></div>
        <div class="rec" style="margin-top:12px">${ic('star')}Pay daily and the bike is yours on Sat 9 Jan</div></div>
      <div class="card" style="padding:12px 14px"><div class="sub" style="color:var(--mute);font-size:11.5px">No data? Pay from any M-Pesa menu</div><div class="row" style="margin-top:6px;gap:18px"><div><small class="sub" style="font-size:11px;color:var(--mute)">Paybill</small><div style="font:600 17px Poppins">650880</div></div><div><small class="sub" style="font-size:11px;color:var(--mute)">Account</small><div style="font:600 17px Poppins">Your ID number</div></div></div></div>
      <span class="sp"></span>
      <button class="btn">Pay KSh 3,010 with M-Pesa</button>
    </div></div>`;

  S.duoDone = () => `<div class="scr" style="flex-direction:row;background:#000">${duoSb()}
    <div style="width:445px;padding:40px 34px 30px;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;z-index:2;border-right:1px solid #111">${CONF}
      ${ILLS('owned', 150)}
      <div class="eyebrow" style="color:var(--timer);margin-top:6px">Final payment received</div><div class="big" style="margin-top:8px">It's yours, Brian.</div>
      <div class="p" style="margin-top:8px">Your Boxer BM150 is paid off. The tracker lock is off for good.</div>
      <div class="stat2" style="margin-top:16px;width:100%;text-align:left"><div><small>Paid in total</small><b>KSh 124,150</b></div><div><small>Paid over</small><b>41 weeks</b></div></div>
      <div class="card" style="margin-top:10px;padding:2px 14px;width:100%;text-align:left">
        <div class="opt"><span class="oi" style="color:var(--timer)">${I.unlock}</span><div style="flex:1"><b>Tracker lock removed</b><small>Ride it, sell it, lend it. It's your bike.</small></div></div>
        <div class="opt"><span class="oi">${I.trash}</span><div style="flex:1"><b>You can delete the Watu app</b><small>We'll show you how</small></div><span class="ic chev">${I.chev}</span></div></div>
    </div>
    <div style="width:445px;padding:72px 34px 30px;display:flex;flex-direction:column;gap:12px;position:relative;z-index:2">
      <div class="h2" style="font-size:17px">Your logbook</div>
      <div class="card" style="padding:14px 16px"><div class="steps">
        <div class="st done"><span class="dot">${I.check}</span><div><b>Loan closed</b><small>Today, 9:41 AM</small></div></div>
        <div class="st now"><span class="dot"></span><div><b>e-Logbook transfer to you</b><small>Started on NTSA. We'll text you when it's done.</small></div></div>
        <div class="st"><span class="dot"></span><div><b>Bike in your name</b><small>We'll text you at each step</small></div></div></div></div>
      <div class="cert">${ILLS('cert', 46)}<div style="flex:1;text-align:left"><b style="font:600 13.5px Poppins">Ownership certificate</b><div class="sub" style="font-size:11.5px">PDF · ready to download</div></div><span class="ic" style="color:var(--teal)">${I.dl}</span></div>
      <div class="h2" style="font-size:15px;margin-top:4px">What's next with Watu</div>
      <div class="offer"><span class="oi" style="width:46px;height:46px;border-radius:10px;background:#1F1E24;display:grid;place-items:center;color:var(--teal)">${I.bike}</span><div style="flex:1"><b>A second bike, or a tuk tuk</b><small>Financed within 2 hours at Watu dealers</small></div><span class="tag teal">For you</span></div>
      <div class="offer"><span class="oi" style="width:46px;height:46px;border-radius:10px;background:#1F1E24;display:grid;place-items:center;color:var(--teal)">${I.phone}</span><div style="flex:1"><b>A Samsung for the family</b><small>Financed within 30 minutes</small></div></div>
      <span class="sp"></span>
    </div></div>`;

  G.WT = { S, I, D, ILL };
})(window);
