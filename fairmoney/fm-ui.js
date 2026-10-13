/* FairMoney concept: screens as functions of state. Shared by the prototype, the film and the deck. */
(function (G) {
  const P = (d) => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const I = {
    send: P('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'),
    plus: P('<circle cx="12" cy="12" r="9.5"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>'),
    card: P('<rect x="2" y="5" width="20" height="14" rx="2.5"/><line x1="2" y1="10" x2="22" y2="10"/>'),
    bill: P('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
    home: P('<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V13h6v9"/>'),
    loans: P('<rect x="2" y="6" width="20" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>'),
    save: P('<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="12" cy="12" r="3.2"/><path d="M7 20v1.5M17 20v1.5"/>'),
    user: P('<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="10" r="3"/><path d="M6.3 18.4a7 7 0 0 1 11.4 0"/>'),
    hist: P('<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5"/><path d="M3.5 3.5v5h5"/><path d="M12 7.5V12l3 2"/>'),
    eye: P('<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'),
    back: P('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'),
    x: P('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    help: P('<circle cx="12" cy="12" r="9.5"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
    check: P('<polyline points="20 6 9 17 4 12"/>'),
    chev: P('<polyline points="9 18 15 12 9 6"/>'),
    bell: P('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'),
    phone: P('<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
    sms: P('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    call: P('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
    chat: P('<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>'),
    moon: P('<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>'),
    pin: P('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    shield: P('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'),
    up: P('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
    down: P('<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>'),
    dl: P('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),
    zap: P('<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>'),
    clock: P('<circle cx="12" cy="12" r="9.5"/><polyline points="12 7 12 12 15.5 14"/>'),
    info: P('<circle cx="12" cy="12" r="9.5"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
    lock: P('<rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    bank: P('<path d="M3 10h18L12 4z"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>'),
    face: P('<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9.5v1M15 9.5v1M9.5 15a3.5 3.5 0 0 0 5 0"/>'),
    homeF: '<svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 0 1 4 20z" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    bag: P('<path d="M9 3h6l-1.6 3.2h-2.8z"/><path d="M10.6 6.2C6.8 8 4.5 11.4 4.5 15c0 3.6 3 6 7.5 6s7.5-2.4 7.5-6c0-3.6-2.3-7-6.1-8.8"/><path d="M10 13h4M10 15.5h4M12 11.5v6"/>'),
    coins: P('<ellipse cx="9" cy="6" rx="5.5" ry="2.5"/><path d="M3.5 6v4c0 1.4 2.5 2.5 5.5 2.5M3.5 10v4c0 1.4 2.5 2.5 5.5 2.5M3.5 14v3.5C3.5 18.9 6 20 9 20"/><circle cx="16" cy="15" r="5"/>'),
    headset: P('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M19.5 19c0 1.5-2 2.5-5 2.5"/><path d="M9.5 10.5v1M14.5 10.5v1M10 14a2.8 2.8 0 0 0 4 0"/>'),
    wifi: P('<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><line x1="12" y1="19.5" x2="12.01" y2="19.5"/><path d="M1.5 9a15 15 0 0 1 21 0"/>'),
  };
  const ic = (n, cls = 'ic') => `<span class="${cls}">${I[n]}</span>`;
  const ck = (on) => `<span class="ck${on ? ' on' : ''}">${I.check}</span>`;
  const MAP = { 'hourglass-not-done': 'hourglass', 'party-popper': 'bag', 'mobile-phone': 'phone', 'check-mark-button': 'check', 'round-pushpin': 'pin', 'receipt': 'receipt', 'light-bulb': 'bulb', 'locked': 'safe', 'mobile-phone-with-arrow': 'phone' };
  const IMG = (n, s, extra = '') => `<span class="ill" ${extra.replace('style="', 'style="width:' + s + 'px;height:' + s + 'px;').includes('style=') ? extra.replace('style="', 'style="width:' + s + 'px;height:' + s + 'px;') : 'style="width:' + s + 'px;height:' + s + 'px"'}>${G.FM_ILL[MAP[n] || n]}</span>`;
  const naira = (n) => '₦' + n.toLocaleString('en-NG');

  // iOS status bar (iPhone with Dynamic Island)
  const sb = (dark) => `<div class="ios-sb" style="color:${dark ? '#fff' : '#000'}"><span>9:41</span><span class="r">
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="7.5" width="3.2" height="4.5" rx="1"/><rect x="4.8" y="5.2" width="3.2" height="6.8" rx="1"/><rect x="9.6" y="2.8" width="3.2" height="9.2" rx="1"/><rect x="14.4" y="0" width="3.2" height="12" rx="1"/></svg>
    <svg width="16" height="12" viewBox="0 0 16 12.4" fill="currentColor"><path d="M.6 3.9a10.5 10.5 0 0 1 14.8 0l-1.5 1.7a8.3 8.3 0 0 0-11.8 0z"/><path d="M3.1 6.8a6.8 6.8 0 0 1 9.8 0l-1.5 1.7a4.6 4.6 0 0 0-6.8 0z"/><path d="M5.9 9.9a3 3 0 0 1 4.2 0L8 12.3z"/></svg>
    <svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.8" fill="none" stroke="currentColor" opacity=".38"/><rect x="2.5" y="2.5" width="19" height="8" rx="2.2" fill="currentColor"/><path d="M25 4.6v3.8a2 2 0 0 0 0-3.8z" fill="currentColor" opacity=".45"/></svg></span></div>`;
  const tabbar = (on) => `<div class="tab3">${[['homeF', 'Home'], ['bag', 'Loans'], ['coins', 'Savings']].map(([i, l]) => `<div class="${on === l ? 'on' : ''}" ${l === 'Loans' ? 'data-go="wait"' : ''}>${ic(i)}<span>${l}</span>${l === 'Savings' ? '<span class="bdg">25% interest</span>' : ''}</div>`).join('')}</div>`;
  const appbar = (title, left = 'back', right = 'help', go = '') => `<div class="appbar"><span class="ib" ${go ? `data-go="${go}"` : ''}>${left ? I[left] : ''}</span><span>${title}</span><span class="sp"></span><span class="ib">${right ? I[right] : ''}</span></div>`;
  const homebar = '<div class="homebar"></div>';

  // ---------- scenario data (illustrative figures) ----------
  const D = {
    lastLoan: 30000, lastRepaid: 38400, repaidOn: 'Thu 9 Oct', daysEarly: 3,
    reviewBy: 'Sun 19 Oct', offer: 20000, prevOffer: 30000, months: 2, monthly: 12800, total: 25600,
    firstDue: '15 Nov', lastDue: '15 Dec', validTo: 'Wed 22 Oct', phoneOld: 'Tecno Spark 20', phoneNum: '0803 ••• 4521',
  };
  G.FM_DATA = D;


  // Illustrations drawn in FairMoney's own style: thick dark outline, flat fills (see the money bag, safe and two-phones art in the live app)
  const K = '#23232B', W = 'stroke="#23232B" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"';
  const ILL = {
    hourglass: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="108" rx="30" ry="5" fill="#E7EEF0"/><rect x="30" y="14" width="60" height="11" rx="5" fill="#FFB27A" ${W}/><rect x="30" y="93" width="60" height="11" rx="5" fill="#FFB27A" ${W}/><path d="M38 25h44c0 18-16 24-16 34s16 16 16 34H38c0-18 16-24 16-34S38 43 38 25z" fill="#E3F4FA" ${W}/><path d="M46 33h28c-2 8-10 13-14 17-4-4-12-9-14-17z" fill="#FFD25A"/><path d="M60 59v20" stroke="#E0A800" stroke-width="2.6" stroke-dasharray="3 4"/><path d="M44 89c4-8 10-11 16-11s12 3 16 11z" fill="#FFD25A"/></svg>`,
    bag: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="110" rx="34" ry="5" fill="#E7EEF0"/><path d="M44 16l8 9 8-11 8 11 8-9-3 18H47z" fill="#FFD25A" ${W}/><path d="M48 34h24l-4 9h-16z" fill="#F7B54A" ${W}/><path d="M52 43c-20 8-30 26-30 42 0 14 12 21 38 21s38-7 38-21c0-16-10-34-30-42z" fill="#FFCF6B" ${W}/><path d="M50 66v24M70 66v24M50 66l20 24M45 74h30M45 82h30" stroke="#23232B" stroke-width="3.4" stroke-linecap="round" fill="none"/></svg>`,
    pin: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="104" rx="26" ry="7" fill="#E3F4FA" ${W}/><path d="M60 98S30 68 30 46a30 30 0 0 1 60 0c0 22-30 52-30 52z" fill="#FF7A5C" ${W}/><circle cx="60" cy="46" r="11" fill="#fff" ${W}/></svg>`,
    receipt: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="110" rx="30" ry="5" fill="#E7EEF0"/><path d="M30 12h52v88l-6.5-5-6.5 5-6.5-5-6.5 5-6.5-5-6.5 5-6.5-5L30 100z" fill="#fff" ${W}/><path d="M40 28h32M40 40h32M40 52h20" stroke="#23232B" stroke-width="3.4" stroke-linecap="round"/><circle cx="80" cy="76" r="17" fill="#3AA676" ${W}/><path d="M72 76l6 6 10-11" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    check: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="110" rx="30" ry="5" fill="#E7EEF0"/><path d="M60 10l12 8 14-1 5 13 12 8-4 14 4 14-12 8-5 13-14-1-12 8-12-8-14 1-5-13-12-8 4-14-4-14 12-8 5-13 14 1z" fill="#3AA676" ${W}/><path d="M43 58l12 12 23-24" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    phone: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="110" rx="26" ry="5" fill="#E7EEF0"/><rect x="34" y="10" width="52" height="94" rx="9" fill="#6B6F7A" ${W}/><rect x="40" y="18" width="40" height="72" rx="4" fill="#2EB5E8"/><circle cx="60" cy="97" r="3" fill="#23232B"/><path d="M50 52h20M50 62h12" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><circle cx="84" cy="30" r="12" fill="#FF7A5C" ${W}/><path d="M84 24v7M84 36v.5" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></svg>`,
    bulb: `<svg viewBox="0 0 120 120"><path d="M60 14a30 30 0 0 0-18 54c4 3 6 8 6 12v6h24v-6c0-4 2-9 6-12a30 30 0 0 0-18-54z" fill="#FFE36B" ${W}/><rect x="48" y="86" width="24" height="10" rx="3" fill="#B9C2CC" ${W}/><path d="M52 104h16" ${W}/><path d="M52 58l8 8 8-8M60 66v20" fill="none" ${W}/></svg>`,
    safe: `<svg viewBox="0 0 120 120"><rect x="18" y="20" width="84" height="76" rx="8" fill="#C9CDD6" ${W}/><rect x="28" y="30" width="64" height="56" rx="5" fill="#EEF0F4" ${W}/><circle cx="62" cy="58" r="15" fill="#2EB5E8" ${W}/><circle cx="62" cy="58" r="5" fill="#fff" ${W}/><path d="M34 46v24" ${W}/><path d="M30 96v6M90 96v6" ${W}/></svg>`,
    rocket: `<svg viewBox="0 0 120 120"><rect x="30" y="12" width="44" height="88" rx="8" fill="#fff" ${W}/><rect x="36" y="22" width="32" height="62" rx="3" fill="#2EB5E8"/><path d="M62 70l26-26c6-6 14-8 18-8 0 4-2 12-8 18L72 80z" fill="#fff" ${W}/><circle cx="90" cy="54" r="5" fill="#FF7A5C" ${W}/><path d="M64 78l-8 10 4-12M70 72l10-8-12 4" fill="#FF7A5C" ${W}/></svg>`,
  };
  ILL.twophones = '';
  G.FM_ILL = ILL;
  const TWO = `<div class="twophones"><svg width="92" height="70" viewBox="0 0 92 70"><rect x="8" y="6" width="32" height="58" rx="5" fill="#fff" stroke="#2B2B33" stroke-width="2.5"/><rect x="12" y="13" width="24" height="38" rx="2" fill="#2EB5E8"/><circle cx="24" cy="57" r="2.4" fill="none" stroke="#2B2B33" stroke-width="2"/><rect x="52" y="6" width="32" height="58" rx="6" fill="#6B6F7A" stroke="#2B2B33" stroke-width="2.5"/><rect x="55.5" y="10" width="25" height="50" rx="3.5" fill="#2EB5E8"/><path d="M28 35h36M34 28l-8 7 8 7M58 28l8 7-8 7" stroke="#2B2B33" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 35h36M34 28l-8 7 8 7M58 28l8 7-8 7" stroke="#9BE36A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
  // ---------- screens ----------
  const S = {};

  // Current home, rebuilt from the live app (v1.143.1, Oct 2026). `next` shows the concept's loan status.
  S.home = (o = {}) => `<div class="scr">${sb()}
    <div class="appbar" style="height:64px">${ic('user', 'ib')}<div style="line-height:1.12"><div style="font-size:14px;font-weight:600;color:#45454F">Welcome to</div><div style="font-size:19px;font-weight:900;letter-spacing:-.01em">FairMoney</div></div><span class="sp"></span>${ic('headset', 'ib')}${ic('hist', 'ib')}</div>
    <div class="body" style="padding-top:6px">
      <div class="car">${o.next
        ? `<div class="cc ${o.hot ? 'hot' : ''}" data-go="wait" style="background:#3AA676;border-radius:22px"><span style="position:absolute;right:12px;top:10px">${G.FM_RING(3, 5, 78)}</span><div class="big" style="padding-right:84px;font-size:22px;line-height:26px">Next loan:<br>on its way</div><div class="sm">Expect it by ${D.reviewBy}</div><span class="u">See status</span></div>`
        : `<div class="cc" style="background:var(--fm-card)"><span style="position:absolute;right:20px;top:18px;width:24px;height:24px;color:#fff">${I.eye}</span><div class="big">₦ ••••••</div><div class="sm">Account balance</div><span class="u">Account details</span></div>`}
        <div class="cc" style="background:${o.next ? 'var(--fm-card)' : '#3AA676'}"></div></div>
      <div class="dots"><i class="${o.next ? '' : 'on'}"></i><i class="${o.next ? 'on' : ''}"></i><i></i></div>
      <div class="qa2">${(o.next ? [['send', 'Repay'], ['plus', 'Top up loan'], ['clock', 'Extend loan']] : [['send', 'Transfer'], ['plus', 'Add money'], ['card', 'Cards'], ['bill', 'Bills']]).map(([i, l]) => `<div><span class="iconc">${ic(i)}</span>${l}</div>`).join('')}</div>
      ${o.next
        ? `<div class="mcard" style="margin-top:18px"><div style="flex:1"><b>Boost your next offer: 3 of 5 done</b><span>Pay a bill or link a card to finish</span></div><span class="btn sm" data-go="wait">Boost</span></div>`
        : `<div class="mcard ${o.hot ? 'hot' : ''}" data-go="${o.before ? 'bwait' : 'wait'}" style="margin-top:18px"><div style="flex:1"><b>Get a loan in 5 minutes!</b><span>Up to ₦3,000,000 available</span></div><span class="btn sm">Get loan</span></div>`}
      <div class="sec"><b>Recent transactions</b><a>View all</a></div>
      <div class="row" style="padding-top:10px"><span class="iconc" style="background:#FFF1E4;color:#F39A2E">${ic('loans')}</span><div class="t"><b>Loan repayment</b><span>${D.repaidOn}, 10:12 AM</span></div><b class="num" style="font-size:15px">-${naira(D.lastRepaid)}</b></div>
      <div class="sec" style="margin-top:14px"><b>Do more with FairMoney</b></div>
      <div class="tiles2">${[['#00ABD6', 'bag', 'Enjoy unlimited free transfers', 'Send money with ₦0 charges'], ['#3AA676', 'rocket', 'Buy airtime and data', 'Enjoy a 3% discount'], ['#2C5BDB', 'safe', 'Save and earn up to 30% p.a.', 'On new FairLock plans']].map(([c, im, t1, t2]) => `<div class="tile" style="background:${c}">${IMG(im, 36)}${t1}<div class="s2">${t2}</div></div>`).join('')}</div>
    </div>${tabbar('Home')}${homebar}</div>`;

  // BEFORE: rebuilt from customer descriptions ("try again in 0 days") and FairMoney's replies.
  S.bwait = () => `<div class="scr">${sb()}${appbar('Loans', '', 'help')}
    <div class="body" style="display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:70px">
      ${IMG('hourglass-not-done', 112)}
      <p class="h2" style="margin-top:22px">You are not eligible for a loan at the moment</p>
      <p class="p" style="margin-top:10px">Please try again in</p>
      <div style="font-size:44px;font-weight:700;letter-spacing:-.03em;margin-top:6px">0 days</div>
      <p class="cap" style="margin-top:28px;max-width:280px">Keep using FairMoney for your transactions to increase your chances.</p>
    </div>
    <div class="foot"><button class="btn">Okay</button></div>${tabbar('Loans')}${homebar}</div>`;

  // AFTER: a readiness ring instead of a countdown (Zopa "Borrowing Power", Rocket Money goals), a Revolut-style tracker, and boosts from FairMoney's own help centre.
  const ring = (done, total, size = 116) => { const r = size / 2 - 7, C = 2 * Math.PI * r, ticks = Array.from({ length: 40 }, (_, i) => { const a = i / 40 * 2 * Math.PI - Math.PI / 2, on = i / 40 < done / total; return `<line x1="${size / 2 + Math.cos(a) * (r - 2)}" y1="${size / 2 + Math.sin(a) * (r - 2)}" x2="${size / 2 + Math.cos(a) * (r + 4)}" y2="${size / 2 + Math.sin(a) * (r + 4)}" stroke="${on ? '#fff' : 'rgba(255,255,255,.28)'}" stroke-width="3" stroke-linecap="round"/>`; }).join('');
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${ticks}<text x="50%" y="47%" text-anchor="middle" font-family="Mulish" font-weight="900" font-size="${size * .27}" fill="#fff">${done}/${total}</text><text x="50%" y="66%" text-anchor="middle" font-family="Mulish" font-weight="700" font-size="${size * .1}" fill="rgba(255,255,255,.85)">boosts done</text></svg>`; };
  G.FM_RING = ring;
  S.wait = (o = {}) => {
    const act = o.acts ?? 1;
    const items = [
      ['Repaid on time', `${D.daysEarly} days early. Nice one.`, true],
      ['Bank SMS alerts on', 'So we can see your income', true],
      ['On your main phone', 'Your loans live here', true],
      ['Pay bills with FairMoney', `${act} of 3 this month`, act >= 3, 'Buy airtime', 'air'],
      ['Link a card or bank account', 'Where your next loan lands', o.card, 'Link', 'card'],
    ];
    const done = items.filter((x) => x[2]).length;
    return `<div class="scr">
    <div style="background:linear-gradient(180deg,#2F9767 0%,#3AA676 100%);color:#fff;flex:none;padding-bottom:30px">
      ${sb(true)}<div class="appbar" style="color:#fff"><span>Loans</span><span class="sp"></span><span class="ib" style="color:#fff">${I.help}</span></div>
      <div style="display:flex;align-items:center;gap:14px;padding:4px 20px 0">
        <div style="flex:1"><span class="chip" style="background:rgba(255,255,255,.18);color:#fff"><span class="dot"></span>In review</span>
          <p style="font-size:25px;line-height:30px;font-weight:900;letter-spacing:-.02em;margin:10px 0 6px">Your next loan is on its way</p>
          <p style="font-size:13.5px;line-height:19px;font-weight:600;margin:0;opacity:.92">Expect it by ${D.reviewBy}.<br>We'll ping you the moment it's ready.</p></div>
        ${ring(done, 5)}
      </div></div>
    <div class="body" style="margin-top:-18px;background:#fff;border-radius:22px 22px 0 0;padding-top:20px;z-index:2">
      <div class="tl">
        <div class="st done"><span class="dotc">${I.check}</span><b>Loan repaid</b><span>${naira(D.lastRepaid)} on ${D.repaidOn}</span></div>
        <div class="st now"><span class="dotc"></span><b>Checking your profile</b><span>est. by ${D.reviewBy}</span></div>
        <div class="st"><span class="dotc"></span><div style="display:flex;align-items:center;gap:12px"><div style="flex:1"><b>Offer ready</b><span>Push notification and SMS</span></div><span class="tog on"></span></div></div>
      </div>
      <a class="link ${o.hot === 'why' ? 'hot' : ''}" data-sheet="why" style="display:inline-flex;align-items:center;gap:6px;font-size:13.5px;margin-top:12px;border-radius:8px;padding:2px 0;font-weight:800">${ic('info', 'ic" style="width:16px;height:16px')}Why does a review take time?</a>
      <div class="hr" style="margin:16px 0 14px"></div>
      <div style="display:flex;align-items:baseline;justify-content:space-between"><p class="h3" style="font-size:16px;font-weight:900">Boost your next offer</p><span class="cap num" style="font-weight:800;color:var(--fm-green-d)">${done} of 5</span></div>
      ${items.map(([tt, s, on, a, k]) => `<div class="row" style="padding:10px 0">${ck(on)}<div class="t"><b style="font-size:14px">${tt}</b><span>${s}</span></div>${!on && a ? `<span class="btn sm ghost ${o.hot === k ? 'hot' : ''}" data-go="${k === 'air' ? 'air' : 'wait'}" data-act="${k}">${a}</span>` : ''}</div>`).join('')}
      <p class="cap" style="margin-top:8px;font-weight:600">Boosts help us know you. They don't guarantee an offer.</p>
    </div>
    ${tabbar('Loans')}${homebar}
    ${o.toast ? `<div class="toast">${ck(true)}<div><b>Airtime bought. That's 2 of 3!</b><br>One more bill this month to complete the boost.</div></div>` : ''}
    ${o.sheet === 'why' ? S._why() : ''}</div>`;
  };

  S._why = () => `<div class="scrim" data-close="1"></div><div class="sheet"><div class="grab"></div>
    <p class="h2">What we check, and why it takes time</p>
    <p class="p" style="margin-top:8px">Every time you repay, we take a fresh look before making your next offer:</p>
    <div style="margin-top:6px">
      ${[['loans', 'How you repaid', 'On time, early or late'], ['bank', 'Your activity', 'Transfers, bills and savings on FairMoney'], ['shield', 'Credit bureau records', 'Loans with other lenders (CRC, FirstCentral)']].map(([i, b, s]) => `<div class="row" style="padding:11px 0"><span class="iconc" style="width:38px;height:38px">${ic(i)}</span><div class="t"><b style="font-size:14px">${b}</b><span>${s}</span></div></div>`).join('')}
    </div>
    <div class="panel" style="margin-top:12px;display:flex;gap:10px;align-items:flex-start;padding:14px">${ic('clock')}<p class="cap" style="color:var(--fm-ink-2);font-size:13px;line-height:18px">Most reviews finish within 10 days. Longer than that? This screen tells you why, and you can ask us to check it. No screen recordings needed.</p></div>
    <button class="btn" style="margin-top:18px" data-close="1">Got it</button></div>`;

  // Airtime, a quick in-app action that counts toward eligibility
  S.air = () => `<div class="scr">${sb()}${appbar('Buy airtime', 'back', '', 'wait')}
    <div class="body">
      <div class="field" style="margin-top:6px"><label>Phone number</label><div>0803 512 4521</div></div>
      <div style="display:flex;gap:8px;margin-top:14px">${['MTN', 'Airtel', 'Glo', '9mobile'].map((n, i) => `<span class="chip ${i ? 'grey' : ''}" style="height:34px;padding:0 14px;font-size:13px">${n}</span>`).join('')}</div>
      <p class="h3" style="margin-top:22px">Amount</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px">${[200, 500, 1000, 2000, 5000, 10000].map((a) => `<div class="panel ${a === 1000 ? 'mint' : ''}" style="padding:14px 0;text-align:center;font-weight:600;font-size:15px;${a === 1000 ? 'box-shadow:inset 0 0 0 2px var(--fm-green)' : ''}">${naira(a)}</div>`).join('')}</div>
      <div class="panel mint" style="margin-top:16px;padding:12px 14px;display:flex;gap:10px;align-items:center"><span class="chip" style="background:#fff">3% off</span><span class="cap" style="color:var(--fm-ink-2)">You pay ₦970. Counts toward your next loan offer.</span></div>
    </div>
    <div class="foot"><button class="btn hot" data-go="wait" data-act="airdone">Pay ₦970</button></div>${homebar}</div>`;

  // Lock-screen push when the offer is ready
  S.push = () => `<div class="scr"><div class="lock">${sb(true)}<div class="time">9:41</div><div class="date">Wednesday, 15 October</div>
    <div class="push hot" data-go="offer"><img class="app" src="${G.FM_IMG || 'img/'}fm-appicon.webp" width="38" height="38" alt="" style="border-radius:9px;flex:none"><div style="flex:1"><span class="w">now</span><b>FairMoney</b><p>Good news! Your next loan is ready: up to ${naira(D.offer)}. Tap to see it.</p></div></div>
    </div>${homebar}</div>`;

  // Offer, in FairMoney's current offer layout, plus the full cost and the reason for the amount
  S.offer = (o = {}) => `<div class="scr">${sb()}${appbar('Loan offer', 'x', 'help')}
    <div class="body">
      <p class="h2" style="margin-top:2px">${naira(D.offer)} is ready for you</p>
      <p class="cap" style="margin-top:4px">This offer is valid until ${D.validTo}</p>
      <div class="row" style="margin-top:14px;padding:14px 0"><div class="t"><span style="margin:0 0 3px">Loan amount</span><b class="num" style="font-size:22px;line-height:28px">${naira(D.offer)}</b></div>${ic('chev', 'ic mute')}</div>
      <div class="row" style="padding:14px 0"><div class="t"><span style="margin:0 0 3px">Pay back over</span><b style="font-size:18px">${D.months} months</b></div>${ic('chev', 'ic mute')}</div>
      <div class="panel line ${o.hot === 'explain' ? 'hot' : ''}" data-sheet="explain" style="margin-top:16px;display:flex;gap:12px;align-items:center;padding:14px">
        <span class="iconc mint" style="width:38px;height:38px">${ic('info')}</span><div style="flex:1"><b style="font-size:14px;display:block">Lower than last time?</b><span class="cap">Here's why, and how to unlock more</span></div>${ic('chev', 'ic mute')}</div>
      <div class="panel" style="margin-top:18px;background:#F6F7F9;padding:16px 16px 4px">
        <div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px;font-weight:800">Total to repay</b><span class="num" style="background:#fff;border-radius:999px;padding:8px 14px;font-size:20px;font-weight:900">${naira(D.total)}</span></div>
        ${[['Monthly repayment', naira(D.monthly)], ['Interest and fees', naira(D.total - D.offer)], ['First payment', D.firstDue]].map(([a, b]) => `<div style="display:flex;justify-content:space-between;padding:8px 0;font-size:14px;font-weight:600"><span class="mute">${a}</span><span class="num">${b}</span></div>`).join('')}
        <div class="hr" style="margin-top:6px"></div><div style="text-align:center;padding:12px 0;font-size:14px;font-weight:800">View breakdown ›</div>
      </div>
    </div>
    <div class="foot"><button class="btn ${o.hot === 'accept' ? 'hot' : ''}" data-go="got">Get ${naira(D.offer)} now</button></div>${homebar}
    ${o.sheet === 'explain' ? S._explain() : ''}</div>`;

  S._explain = () => `<div class="scrim" data-close="1"></div><div class="sheet" style="padding-bottom:30px"><div class="grab"></div>
    <p class="h2">Why ${naira(D.offer)} this time</p>
    <div class="cmp" style="margin-top:14px"><div class="c old"><div class="cap">Last offer</div><div class="v">${naira(D.prevOffer)}</div></div><div class="c"><div class="cap">This offer</div><div class="v">${naira(D.offer)}</div></div></div>
    <div class="hr" style="margin:14px 0 2px"></div>
    <div class="why"><span class="wi up">${I.up}</span><div><b>You repaid on time</b><span>${D.daysEarly} days early on your last loan. This helped.</span></div></div>
    <div class="why"><span class="wi dn">${I.down}</span><div><b>Less activity on FairMoney</b><span>Fewer transfers and bills in the last 60 days</span></div></div>
    <div class="why"><span class="wi dn">${I.down}</span><div><b>A new loan elsewhere</b><span>Your credit report shows a loan from another lender</span></div></div>
    <div class="panel mint" style="margin-top:8px;padding:14px"><b style="font-size:14px;display:block">Unlock more next time</b><span class="cap" style="display:block;margin-top:4px;color:var(--fm-ink-2);line-height:19px">Repay this loan by ${D.lastDue} · Use FairMoney for bills and transfers · Keep bank SMS alerts on</span></div>
    <p class="cap" style="margin-top:12px">We look again every time you repay. Offers aren't guaranteed.</p>
    <button class="btn" style="margin-top:14px" data-close="1">Got it</button></div>`;

  S.got = () => `<div class="scr">${sb()}<div class="appbar"></div>
    <div class="body" style="text-align:center;padding-top:40px">
      ${IMG('party-popper', 120, 'style="margin:0 auto"')}
      <p class="h1" style="margin-top:20px">${naira(D.offer)} just landed</p>
      <p class="p" style="margin-top:10px">It's in your FairMoney account. First repayment: ${naira(D.monthly)} on ${D.firstDue}.</p>
      <div class="panel" style="margin-top:28px;text-align:left;padding:14px 16px">
        <div style="display:flex;gap:12px;align-items:center">${ic('bell')}<div style="flex:1"><b style="font-size:14px;display:block">We'll nudge, never nag</b><span class="cap">App and SMS, 3 days before and on the day. No calls before your due date.</span></div></div>
      </div>
      <a class="link" data-go="rem" style="display:inline-block;margin-top:14px;font-size:14px">Change reminders</a>
    </div>
    <div class="foot"><button class="btn" data-go="home">Done</button></div>${homebar}</div>`;

  // ---------- new phone ----------
  // BEFORE: the live app's sheet, word for word (seen on an Android-registered account opened on an iPhone, Oct 2026).
  S.bdevice = () => `<div class="scr">${S.home({}).replace(/^<div class="scr">/, '<div class="scr" style="filter:none">').replace(/<\/div>$/, '')}
    <div class="scrim"></div><div class="sheet" style="text-align:center;padding-bottom:34px"><div class="grab"></div>
      ${TWO}
      <p class="h2" style="font-size:21px;line-height:26px;margin-top:18px">You are logging in with a different device type</p>
      <p class="p" style="margin-top:8px;font-size:15px;line-height:22px;font-weight:600;color:#5D6470">This number was registered on another device. To access Loans and FlexiCredit features, please log in from that device.</p>
      <div class="panel" style="margin-top:14px;padding:12px 14px;background:#F6F7F9;box-shadow:inset 0 0 0 1px #ECEDF1"><p class="cap" style="color:#5D6470;font-size:13px;line-height:18px;font-weight:600">We're working hard to bring you a seamless experience across all your devices. We'll let you know as soon as it's ready!</p></div>
      <button class="btn" style="margin-top:16px">Got it</button></div></div>`;

  // AFTER: same sheet, same illustration, but with a way forward.
  S.device = (o = {}) => `<div class="scr">${S.home({}).replace(/^<div class="scr">/, '<div class="scr">').replace(/<\/div>$/, '')}
    <div class="scrim"></div><div class="sheet" style="padding-bottom:30px"><div class="grab"></div>
      <div style="text-align:center">${TWO}</div>
      <p class="h2" style="font-size:21px;line-height:26px;margin-top:16px;text-align:center">Bring your loans to this iPhone</p>
      <p class="p" style="margin-top:6px;text-align:center;font-weight:600;color:#5D6470">They live on your ${D.phoneOld}. Move them here in 2 minutes. No old phone needed.</p>
      <div style="margin-top:8px">${[['bank', 'Confirm your BVN'], ['face', 'Take a quick selfie'], ['sms', `Enter the code sent to ${D.phoneNum}`]].map(([i, b], k) => `<div class="row" style="padding:9px 0"><span class="iconc" style="width:36px;height:36px">${ic(i)}</span><div class="t"><b style="font-size:14px">${k + 1}. ${b}</b></div></div>`).join('')}</div>
      <p class="cap" style="margin-top:6px;font-weight:600">For your safety, loans work on one phone at a time, so your ${D.phoneOld} will be signed out.</p>
      <button class="btn ${o.hot ? 'hot' : ''}" style="margin-top:14px" data-go="bvn">Move my loans here</button><button class="btn text" style="margin-top:2px">Not now</button></div></div>`;

  S.bvn = (o = {}) => `<div class="scr">${sb()}${appbar('Step 1 of 3', 'back', '', 'device')}
    <div class="body"><div class="bar" style="margin:2px 0 22px"><i style="width:33%"></i></div>
      <p class="h1">First, your BVN</p><p class="p" style="margin-top:8px">The 11 digits linked to this FairMoney account.</p>
      <div class="field f" style="margin-top:22px"><label>BVN</label><div>${(o.v || '2234 5678 901')}<span class="caret"></span></div></div>
      <p class="cap" style="margin-top:10px">Forgot it? Dial *565*0# from the SIM linked to your BVN.</p>
    </div>
    <div class="foot"><button class="btn hot" data-go="selfie">Continue</button></div>${homebar}</div>`;

  // Selfie with a real camera feed (stock video, Pexels licence). Phases: backlit -> coached -> captured.
  S.selfie = (o = {}) => {
    const ph = o.phase || 'lit', p = o.p ?? 0.7;
    const col = ph === 'dark' ? '#FFB547' : '#3DDC97';
    const ticks = Array.from({ length: 64 }, (_, i) => { const a = i / 64 * 2 * Math.PI - Math.PI / 2, on = ph === 'dark' ? true : i / 64 < p; const rx = 132, ry = 172, cx = 195, cy = 330;
      return `<line x1="${cx + Math.cos(a) * rx}" y1="${cy + Math.sin(a) * ry}" x2="${cx + Math.cos(a) * (rx + 12)}" y2="${cy + Math.sin(a) * (ry + 12)}" stroke="${on ? col : 'rgba(255,255,255,.35)'}" stroke-width="3.2" stroke-linecap="round" opacity="${ph === 'dark' ? 0.9 : 1}"/>`; }).join('');
    const media = o.still ? `<img src="${G.FM_IMG || 'img/'}selfie-${ph === 'dark' ? 'dark' : 'lit'}.jpg" class="camv" alt="">`
      : `<video class="camv" src="${G.FM_IMG || 'img/'}selfie.mp4" muted playsinline ${o.film ? '' : 'autoplay loop'} poster="${G.FM_IMG || 'img/'}selfie-dark.jpg"></video>`;
    const msg = ph === 'dark' ? ['Light is behind you', 'Turn to face a window or a lamp'] : ph === 'done' ? ['Got it!', 'Matching you to your BVN photo…'] : ['Hold still', 'Looking good. Almost there'];
    return `<div class="scr" style="background:#000">
      <div class="cam2">${media}<svg class="mask" viewBox="0 0 390 844" preserveAspectRatio="none"><defs><mask id="ov"><rect width="390" height="844" fill="#fff"/><ellipse cx="195" cy="330" rx="128" ry="168" fill="#000"/></mask></defs><rect width="390" height="844" fill="rgba(10,12,14,.72)" mask="url(#ov)"/>${ticks}
        ${ph === 'done' ? `<circle cx="195" cy="510" r="26" fill="#3DDC97"/><path d="M183 510l8 8 16-17" stroke="#0E3B28" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : ''}</svg></div>
      <div style="position:relative;z-index:3;color:#fff">${sb(true)}<div class="appbar" style="color:#fff"><span class="ib" data-go="device">${I.back}</span><span style="font-size:15px">Step 2 of 3 · Selfie</span><span class="sp"></span><span class="lmeter ${ph === 'dark' ? 'low' : 'ok'}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>${ph === 'dark' ? 'Too dark' : 'Good light'}</span></div></div>
      <div class="coach ${ph}"><b>${msg[0]}</b><span>${msg[1]}</span></div>
      <div style="position:absolute;left:0;right:0;bottom:38px;text-align:center;z-index:3;color:#fff"><span style="font-size:13px;opacity:.75;font-weight:600">Not working after a few tries?</span><br><a class="${o.hot ? 'hot' : ''}" data-go="otp" style="display:inline-block;margin-top:6px;color:#7FE3BE;font-weight:800;font-size:14px;border-radius:8px;padding:2px 6px">Ask for a manual check (about 24 hours)</a></div>
      ${homebar}</div>`;
  };

  S.otp = (o = {}) => {
    const v = (o.v ?? '4829').split('');
    return `<div class="scr">${sb()}${appbar('Step 3 of 3', 'back', '', 'selfie')}
    <div class="body"><div class="bar" style="margin:2px 0 22px"><i style="width:100%"></i></div>
      <p class="h1">Last step: the code</p><p class="p" style="margin-top:8px">We just sent 4 digits to ${D.phoneNum}.</p>
      <div class="code">${[0, 1, 2, 3].map((i) => `<i class="${v[i] ? '' : i === v.length ? 'f' : ''}">${v[i] || ''}</i>`).join('')}</div>
      <p class="cap" style="text-align:center;margin-top:16px">Resend code in 0:42</p>
    </div>
    <div class="foot"><button class="btn hot" data-go="moved">Verify</button></div>${homebar}</div>`;
  };

  S.moved = () => `<div class="scr">${sb()}<div class="appbar"></div>
    <div class="body" style="text-align:center;padding-top:40px">
      ${IMG('check-mark-button', 108, 'style="margin:0 auto"')}
      <p class="h1" style="margin-top:20px">Welcome back to Loans</p>
      <p class="p" style="margin-top:10px">Your loans now live on this iPhone, and your ${D.phoneOld} has been signed out. Wasn't you? Tap Help right away.</p>
    </div>
    <div class="foot"><button class="btn hot" data-go="offer">See my loan offer</button></div>${homebar}</div>`;

  // ---------- quick wins ----------
  S.blogin = () => `<div class="scr">${sb()}<div class="appbar"></div>
    <div class="body" style="padding-top:20px"><p class="h1">Welcome back</p><p class="p" style="margin-top:6px">Enter your password to log in</p>
      <div class="field" style="margin-top:24px"><label>Password</label><div>••••••••</div></div></div>
    <div class="scrim"></div><div class="sheet" style="text-align:center"><div class="grab"></div>${IMG('round-pushpin', 70, 'style="margin:6px auto 0"')}
      <p class="h2" style="margin-top:12px">Unable to fetch location</p><p class="p" style="margin-top:6px">Please turn on your location to continue.</p>
      <button class="btn" style="margin-top:20px">Try again</button></div>${homebar}</div>`;

  S.loc = () => `<div class="scr">${sb()}${appbar('Loan offer', 'x', 'help')}
    <div class="body" style="opacity:.35"><p class="h2">Your next loan is ready</p></div>
    <div class="scrim"></div><div class="sheet"><div class="grab"></div>
      ${IMG('round-pushpin', 64)}
      <p class="h2" style="margin-top:12px">Location? Only for loans.</p>
      <p class="p" style="margin-top:8px">We ask only when you borrow, to confirm it's really you. Logging in, sending money and paying bills never need it.</p>
      <div class="panel" style="margin-top:14px;padding:12px 14px;display:flex;gap:10px">${ic('info')}<span class="cap" style="color:var(--fm-ink-2)">Location is on but not found? Step outside or near a window for a few seconds.</span></div>
      <button class="btn" style="margin-top:18px">Allow location</button><button class="btn text" style="margin-top:4px">Not now</button></div>${homebar}</div>`;

  S.rem = () => `<div class="scr">${sb()}${appbar('Loan reminders', 'back', '', 'got')}
    <div class="body"><p class="p">Your money, your rules. Pick how we remind you.</p>
      <p class="over" style="margin-top:20px">Remind me by</p>
      ${[['bell', 'App notification', 1], ['sms', 'SMS', 1], ['chat', 'WhatsApp', 0]].map(([i, l, on]) => `<div class="row" style="padding:12px 0"><span class="iconc" style="width:38px;height:38px">${ic(i)}</span><div class="t"><b style="font-size:14.5px">${l}</b></div><span class="tog ${on ? 'on' : ''}"></span></div>`).join('')}
      <div class="row" style="padding:12px 0"><span class="iconc" style="width:38px;height:38px">${ic('call')}</span><div class="t"><b style="font-size:14.5px">Phone calls</b><span>Only after a missed due date</span></div>${ic('lock', 'ic mute')}</div>
      <p class="over" style="margin-top:20px">When</p>
      <div class="row" style="padding:12px 0"><span class="iconc" style="width:38px;height:38px">${ic('clock')}</span><div class="t"><b style="font-size:14.5px">3 days before, and on the day</b></div>${ic('chev', 'ic mute')}</div>
      <div class="row" style="padding:12px 0"><span class="iconc" style="width:38px;height:38px">${ic('moon')}</span><div class="t"><b style="font-size:14.5px">Quiet hours</b><span>No reminders 8pm to 8am</span></div><span class="tog on"></span></div>
    </div>${homebar}</div>`;

  S.closed = () => `<div class="scr">${sb()}${appbar('Loan details', 'back', 'help')}
    <div class="body">
      <div style="text-align:center;padding-top:16px">${IMG('receipt', 84, 'style="margin:0 auto"')}
        <div class="chip" style="margin-top:14px"><span class="dot"></span>Closed</div>
        <div class="amt" style="margin-top:10px"><small>₦</small>0.00</div><p class="cap">Balance on this loan</p></div>
      <div style="margin-top:20px">${[['Borrowed', naira(D.lastLoan)], ['Total repaid', naira(D.lastRepaid)], ['Closed on', D.repaidOn + ', 10:12 AM'], ['Reference', 'FM-LN-8841-2207']].map(([a, b]) => `<div style="display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--fm-line);font-size:14px"><span class="mute">${a}</span><span class="num" style="font-weight:600">${b}</span></div>`).join('')}</div>
      <div class="row" style="margin-top:6px"><span class="iconc mint" style="width:38px;height:38px">${ic('dl')}</span><div class="t"><b style="font-size:14px">Letter of non-indebtedness</b><span>PDF, signed by FairMoney MFB</span></div>${ic('chev', 'ic mute')}</div>
    </div>
    <div class="foot"><button class="btn ghost" data-go="wait">See my next loan status</button></div>${homebar}</div>`;


  // ---------- iPhone Duo (open, 890 x 626): two panes either side of the fold ----------
  // iPhone Duo status: time over a connection ring in the top-right corner (as in Apple's product shots)
  const duoSb = (c) => `<div class="duo-sb" style="color:${c}"><span>9:41</span><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="15.5" stroke="currentColor" stroke-width="1.6" stroke-dasharray="70 4 2 4 2 4 2 30" opacity=".9"/><g fill="currentColor"><path d="M9.6 14a10.4 10.4 0 0 1 14.8 0l-1.5 1.6a8.2 8.2 0 0 0-11.8 0z"/><path d="M12.1 16.9a6.8 6.8 0 0 1 9.8 0l-1.5 1.6a4.6 4.6 0 0 0-6.8 0z"/><path d="M14.9 19.9a3 3 0 0 1 4.2 0L17 22.3z"/></g></svg></div>`;
  const SBGAP = '<div style="height:30px;flex:none"></div>';
  const SBGAPR = '<div style="height:84px;flex:none"></div>';
  const boosts = (act = 1) => { const items = [['Repaid on time', `${D.daysEarly} days early. Nice one.`, 1], ['Bank SMS alerts on', 'So we can see your income', 1], ['On your main phone', 'Your loans live here', 1], ['Pay bills with FairMoney', `${act} of 3 this month`, act >= 3, 'Buy airtime'], ['Link a card or bank account', 'Where your next loan lands', 0, 'Link']];
    return items.map(([tt, s, on, a]) => `<div class="row" style="padding:10px 0">${ck(on)}<div class="t"><b style="font-size:14px">${tt}</b><span>${s}</span></div>${!on && a ? `<span class="btn sm ghost">${a}</span>` : ''}</div>`).join(''); };
  const tracker = () => `<div class="tl"><div class="st done"><span class="dotc">${I.check}</span><b>Loan repaid</b><span>${naira(D.lastRepaid)} on ${D.repaidOn}</span></div><div class="st now"><span class="dotc"></span><b>Checking your profile</b><span>est. by ${D.reviewBy}</span></div><div class="st"><span class="dotc"></span><div style="display:flex;align-items:center;gap:12px"><div style="flex:1"><b>Offer ready</b><span>Push notification and SMS</span></div><span class="tog on"></span></div></div></div>`;
  const pane = (side, inner, style = '') => `<div style="position:absolute;top:0;bottom:0;${side === 'l' ? 'left:0' : 'right:0'};width:445px;display:flex;flex-direction:column;overflow:hidden;${style}">${inner}</div>`;

  S.duoWait = () => `<div class="scr" style="background:#fff">${duoSb('#000')}
    ${pane('l', `<div style="background:linear-gradient(180deg,#2F9767,#3AA676);color:#fff;padding-bottom:34px">${SBGAP}
      <div style="display:flex;align-items:center;gap:18px;padding:14px 30px 0"><div style="flex:1"><span class="chip" style="background:rgba(255,255,255,.18);color:#fff"><span class="dot"></span>In review</span><p style="font-size:28px;line-height:33px;font-weight:900;letter-spacing:-.02em;margin:12px 0 8px">Your next loan is on its way</p><p style="font-size:14px;font-weight:600;margin:0;opacity:.92">Expect it by ${D.reviewBy}. We'll ping you the moment it's ready.</p></div>${G.FM_RING(3, 5, 138)}</div></div>
      <div style="flex:1;margin-top:-20px;background:#fff;border-radius:22px 22px 0 0;padding:24px 30px 0">${tracker()}
        <div class="hr" style="margin:22px 0 16px"></div><p class="h3" style="font-weight:900">While you wait</p>
        <div class="row" style="padding:12px 0"><span class="iconc mint" style="width:40px;height:40px">${ic('zap')}</span><div class="t"><b style="font-size:14px">Buy airtime, get 3% off</b><span>Counts toward your next offer</span></div>${ic('chev', 'ic mute')}</div>
        <div class="row" style="padding:12px 0"><span class="iconc mint" style="width:40px;height:40px">${ic('save')}</span><div class="t"><b style="font-size:14px">Park cash in FairSave at 14%</b><span>Earn while your offer is prepared</span></div>${ic('chev', 'ic mute')}</div></div>`)}
    ${pane('r', `${SBGAPR}<div style="padding:22px 30px 0"><div style="display:flex;align-items:baseline;justify-content:space-between"><p class="h2" style="font-size:21px">Boost your next offer</p><span class="cap" style="font-weight:800;color:var(--fm-green-d)">3 of 5</span></div><div class="bar" style="margin:12px 0 4px"><i style="width:60%"></i></div>${boosts(1)}
      <div class="panel" style="margin-top:14px;padding:12px 14px;display:flex;gap:10px;align-items:flex-start;background:#F6F7F9">${ic('info')}<span class="cap" style="color:#45454F;font-weight:600;line-height:18px">We check how you repaid, your activity on FairMoney and credit bureau records. Most reviews finish within 10 days.</span></div></div>`)}
  </div>`;

  S.duoOffer = () => `<div class="scr" style="background:#fff">${duoSb('#000')}
    ${pane('l', `${SBGAP}<div class="appbar" style="padding:0 30px">${ic('x', 'ib')}<span>Loan offer</span><span class="sp"></span>${ic('help', 'ib')}</div>
      <div style="padding:6px 30px 0;flex:1;display:flex;flex-direction:column"><p class="h1" style="font-size:28px">${naira(D.offer)} is ready for you</p><p class="cap" style="margin-top:4px;font-weight:600">Valid until ${D.validTo}</p>
      <div class="row" style="margin-top:10px"><div class="t"><span style="margin:0 0 3px">Loan amount</span><b class="num" style="font-size:22px;line-height:28px">${naira(D.offer)}</b></div>${ic('chev', 'ic mute')}</div>
      <div class="row"><div class="t"><span style="margin:0 0 3px">Pay back over</span><b style="font-size:18px">${D.months} months</b></div>${ic('chev', 'ic mute')}</div>
      <div class="panel" style="margin-top:14px;background:#F6F7F9;padding:14px 16px 6px"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px;font-weight:800">Total to repay</b><span class="num" style="background:#fff;border-radius:999px;padding:7px 14px;font-size:19px;font-weight:900">${naira(D.total)}</span></div>${[['Monthly repayment', naira(D.monthly)], ['Interest and fees', naira(D.total - D.offer)]].map(([a, b]) => `<div style="display:flex;justify-content:space-between;padding:7px 0;font-size:14px;font-weight:600"><span class="mute">${a}</span><span class="num">${b}</span></div>`).join('')}</div>
      <div style="margin-top:auto;padding-bottom:26px"><button class="btn">Get ${naira(D.offer)} now</button></div></div>`)}
    ${pane('r', `${SBGAPR}<div style="padding:18px 30px 0"><span class="chip amber"><span class="dot"></span>Lower than last time</span><p class="h2" style="font-size:22px;margin-top:12px">Why ${naira(D.offer)} this time</p>
      <div class="cmp" style="margin-top:14px"><div class="c old"><div class="cap">Last offer</div><div class="v">${naira(D.prevOffer)}</div></div><div class="c"><div class="cap">This offer</div><div class="v">${naira(D.offer)}</div></div></div><div class="hr" style="margin:12px 0 2px"></div>
      <div class="why"><span class="wi up">${I.up}</span><div><b>You repaid on time</b><span>${D.daysEarly} days early on your last loan. This helped.</span></div></div>
      <div class="why"><span class="wi dn">${I.down}</span><div><b>Less activity on FairMoney</b><span>Fewer transfers and bills in the last 60 days</span></div></div>
      <div class="why"><span class="wi dn">${I.down}</span><div><b>A new loan elsewhere</b><span>Your credit report shows a loan from another lender</span></div></div>
      <div class="panel mint" style="margin-top:8px;padding:13px 14px"><b style="font-size:14px;display:block">Unlock more next time</b><span class="cap" style="display:block;margin-top:4px;color:#45454F;line-height:19px;font-weight:600">Repay by ${D.lastDue} · Pay bills with FairMoney · Keep bank SMS alerts on</span></div></div>`, 'background:#FBFBFC')}
  </div>`;

  S.duoHome = () => `<div class="scr" style="background:#fff">${duoSb('#fff')}
    ${pane('l', `${SBGAP}<div class="appbar" style="height:60px;padding:0 30px">${ic('user', 'ib')}<div style="line-height:1.12"><div style="font-size:14px;font-weight:600;color:#45454F">Welcome to</div><div style="font-size:19px;font-weight:900">FairMoney</div></div><span class="sp"></span>${ic('headset', 'ib')}${ic('hist', 'ib')}</div>
      <div style="padding:6px 30px 0"><div class="car" style="margin:0"><div class="cc" style="background:var(--fm-card);width:385px;padding:18px 20px"><span style="position:absolute;right:20px;top:18px;width:24px;height:24px;color:#fff">${I.eye}</span><div class="big">₦ ••••••</div><div class="sm">Account balance</div><span class="u">Account details</span></div></div>
      <div class="qa2">${[['send', 'Transfer'], ['plus', 'Add money'], ['card', 'Cards'], ['bill', 'Bills']].map(([i, l]) => `<div><span class="iconc">${ic(i)}</span>${l}</div>`).join('')}</div>
      <div class="sec"><b>Recent transactions</b><a>View all</a></div>
      <div class="row" style="padding-top:10px"><span class="iconc" style="background:#FFF1E4;color:#F39A2E">${ic('loans')}</span><div class="t"><b>Loan repayment</b><span>${D.repaidOn}, 10:12 AM</span></div><b class="num" style="font-size:15px">-${naira(D.lastRepaid)}</b></div>
      <div class="sec" style="margin-top:12px"><b>Do more with FairMoney</b></div><div class="tiles2" style="margin:12px 0 0;padding:0">${[['#00ABD6', 'bag', 'Enjoy unlimited free transfers'], ['#2C5BDB', 'safe', 'Save and earn up to 30% p.a.'], ['#3AA676', 'rocket', 'Buy airtime with 3% off']].map(([c, im, t1]) => `<div class="tile" style="background:${c};height:118px;width:122px">${IMG(im, 32)}${t1}</div>`).join('')}</div></div>`)}
    ${pane('r', `<div style="background:linear-gradient(180deg,#2F9767,#3AA676);color:#fff;padding-bottom:30px">${SBGAPR}<div style="display:flex;align-items:center;gap:16px;padding:12px 30px 0"><div style="flex:1"><span class="chip" style="background:rgba(255,255,255,.18);color:#fff"><span class="dot"></span>Loans · In review</span><p style="font-size:24px;line-height:29px;font-weight:900;margin:10px 0 6px">Next loan: on its way</p><p style="font-size:13.5px;font-weight:600;margin:0;opacity:.92">Expect it by ${D.reviewBy}</p></div>${G.FM_RING(3, 5, 112)}</div></div>
      <div style="flex:1;margin-top:-18px;background:#fff;border-radius:22px 22px 0 0;padding:20px 30px 0">${tracker()}<div class="mcard" style="margin-top:18px"><div style="flex:1"><b>Boost your next offer</b><span>Pay a bill or link a card</span></div><span class="btn sm">Boost</span></div></div>`)}
  </div>`;

  G.FM = { S, I, ic, D, ILL };
})(window);
