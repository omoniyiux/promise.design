// Watu case study: review chart and decision switcher
(function () {
  const DATA = [
    ["Can't get into the app", 41, false, 'Login codes that never arrive, installs that fail, crashes after updates. Mostly engineering: SMS delivery and app stability.'],
    ['Paying and unlocking', 34, true, 'Phones that stay locked after paying, payments that take a day to show, no way to reach M-Pesa or the app while locked, and people paying twice.'],
    ['Wants a cash loan after paying', 32, false, 'Customers who finish paying ask for a cash loan next. A product decision, not a design one.'],
    ['Finished, but the app disagrees', 19, true, 'Fully paid, yet still seeing "complete your payment", unable to remove the app, and no word that the phone is now theirs.'],
    ['Price and interest', 15, false, 'The total paid compared with the cash price. A business decision.'],
    ['Customer support', 10, false, 'Slow or unhelpful replies, mostly about the problems above.'],
  ];
  const chart = document.getElementById('mpChart');
  const note = document.getElementById('mpNote');
  const max = Math.max(...DATA.map((d) => d[1]));
  DATA.forEach(([label, n, focus], i) => {
    const b = document.createElement('button');
    b.className = 'mp-bar' + (focus ? ' is-focus' : '');
    b.innerHTML = `<span class="mp-bar__label">${label}</span><span class="mp-bar__track"><span class="mp-bar__fill" style="--w:${(n / max) * 100}%"></span></span><span class="mp-bar__n">${n}</span>`;
    b.addEventListener('click', () => show(i));
    chart.appendChild(b);
  });
  function show(i) {
    chart.querySelectorAll('.mp-bar').forEach((b, j) => b.classList.toggle('is-active', j === i));
    note.innerHTML = `<strong>${DATA[i][0]} · ${DATA[i][1]} of 337 reviews.</strong> ${DATA[i][3]}`;
  }
  show(1);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { chart.classList.add('is-in'); o.disconnect(); } }), { threshold: 0.3 }).observe(chart);
  } else chart.classList.add('is-in');

  const MOMENTS = [
    {
      title: 'Pay from the lock screen',
      evidence: 'Watu’s model depends on customers paying while the phone is locked, yet Kenyan reviewers say the app won’t open then ("it tells me app not installed"), and one Kenyan reviewer had to move their SIM to another phone to reach M-Pesa. It was still being reported on 17 September 2026, three weeks after Watu’s latest update.',
      decision: 'The lock screen becomes the payment screen: one button sends an M-Pesa prompt (no app, no data), the real Paybill (650880) and account (your ID number) sit underneath as a backup, and the temporary unlock Watu already offers is visible instead of buried.',
      shots: [['images/wt-lock.webp', 'The lock screen says what is owed and offers three ways back, none of which need the app.'], ['images/wt-mpesa.webp', 'The standard M-Pesa prompt: the customer only types their PIN.']],
      gave: 'Sending an M-Pesa prompt from a locked phone needs engineering work and Safaricom’s payment request API. If that isn’t possible, the Paybill and ID number on the lock screen still remove the dead end on day one.',
    },
    {
      title: 'One tracker, so nobody pays twice',
      evidence: 'Reviewers describe payments taking over 24 hours to show, phones staying locked after paying, and paying more than once because nothing confirmed the first payment. Watu’s own app has a manual “Refresh” button, and its support FAQ doesn’t mention locked devices at all.',
      decision: 'Every payment opens the same three-step tracker (received from M-Pesa, added to your plan, phone switches on) with the M-Pesa reference and an expected time. “Please don’t pay again” comes first. After 15 minutes, a report button sends the reference to support automatically.',
      shots: [['images/wt-track.webp', 'Received and processing, with the M-Pesa reference and an expected time.'], ['images/wt-trackdone.webp', 'Done: the phone switched on by itself and the new date is confirmed.']],
      gave: 'Showing an expected time is a promise. It has to come from real unlock times by hour of day, which is the first number I would ask Watu’s data team for.',
    },
    {
      title: 'Make the finish line feel like one',
      evidence: '19 reviews come from people who finished paying: still told to “complete your payment”, unable to remove the app, and never told the phone is theirs. One wrote that they expected a message of completion and congratulations.',
      decision: 'The last payment ends on a celebration with the facts that matter: total paid, how long it took, locks removed, an ownership certificate, and permission to delete the app. That moment matters commercially too: 32 reviews ask what they can get next, so finishers are ready to buy again.',
      shots: [['images/wt-done.webp', 'It’s yours: the payoff, the proof, and the locks gone.'], ['images/wt-home.webp', 'Before the finish: progress and what is left to own it, always visible.']],
      gave: 'I left cash loans out of this screen. Whether to offer them is a credit decision; the design only needs to be honest about what comes next.',
    },
  ];
  const box = document.getElementById('mpMoment');
  const tabs = document.querySelectorAll('.mp .qr-tab');
  function render(i) {
    const m = MOMENTS[i];
    box.innerHTML =
      `<h3 class="mp-moment__title">${m.title}</h3>` +
      `<p class="cs-body"><strong>The evidence:</strong> ${m.evidence}</p>` +
      `<p class="cs-body"><strong>The decision:</strong> ${m.decision}</p>` +
      `<div class="mp-shots">${m.shots.map(([src, cap]) => `<figure><img src="${src}" alt="${cap}" /><figcaption>${cap}</figcaption></figure>`).join('')}</div>` +
      `<div class="cs-impact"><div class="cs-impact__row" style="grid-template-columns:1fr"><div><span class="cs-impact__label">What it depends on</span><span class="cs-impact__text">${m.gave}</span></div></div></div>`;
  }
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', x === t); });
    render(+t.dataset.m);
  }));
  render(0);
})();
