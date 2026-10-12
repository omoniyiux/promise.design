// Moniepoint case study: review chart and moment switcher
(function () {
  const DATA = [
    ['Can\'t get into the app', 35, true, 'Stuck behind a forced update, a face check that keeps failing, or a login lockout that lasts days. Several say they need to send money urgently and can\'t.'],
    ['Fees and charges', 30, false, 'The fee on every transfer, and monthly SMS alert charges people didn\'t expect.'],
    ['Money missing or refund stalled', 29, false, 'Debited but not credited, failed transactions, and refunds that take weeks.'],
    ['Customer support', 15, false, 'Slow replies and issues that stay open for weeks.'],
    ['Account restricted', 13, false, 'Accounts frozen with little explanation of why or how to fix it.'],
  ];
  const chart = document.getElementById('mpChart');
  const note = document.getElementById('mpNote');
  const max = Math.max(...DATA.map((d) => d[1]));
  DATA.forEach(([label, n, focus, text], i) => {
    const b = document.createElement('button');
    b.className = 'mp-bar' + (focus ? ' is-focus' : '');
    b.innerHTML = `<span class="mp-bar__label">${label}</span><span class="mp-bar__track"><span class="mp-bar__fill" style="--w:${(n / max) * 100}%"></span></span><span class="mp-bar__n">${n}</span>`;
    b.addEventListener('click', () => show(i));
    chart.appendChild(b);
  });
  function show(i) {
    chart.querySelectorAll('.mp-bar').forEach((b, j) => b.classList.toggle('is-active', j === i));
    note.innerHTML = `<strong>${DATA[i][0]} · ${DATA[i][1]} of 158 reviews.</strong> ${DATA[i][3]}`;
  }
  show(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { chart.classList.add('is-in'); o.disconnect(); } }), { threshold: 0.3 }).observe(chart);
  } else chart.classList.add('is-in');

  const MOMENTS = [
    {
      title: 'Updates that never lock you out of your money',
      problem: '14 reviews describe being forced to update before they can do anything, sometimes in the middle of an urgent transfer, sometimes with an update that then fails.',
      shots: [['images/mp-a.webp', 'Most updates download in the background. A quiet banner offers it; nothing is blocked.'], ['images/mp-b.webp', 'Only a security fix can pause transfers, and it says why, what still works, and offers USSD for urgent transfers.']],
      gave: 'Engineering has to support older versions for longer. That is a real cost, so the blocking path stays for security releases.',
    },
    {
      title: 'A face check that coaches you instead of failing you',
      problem: '9 reviews describe the face check failing again and again, often asking for a smile, and some spend five minutes or more on it.',
      shots: [['images/mp-c.webp', 'Live coaching before the photo: light, centring and distance turn green, then it captures by itself. No poses.'], ['images/mp-d.webp', 'After two misses, it says the likely reason and offers other ways in instead of a dead end.']],
      gave: 'Fallbacks like a code to your BVN phone number depend on what the regulator and the risk team allow. I designed the slot for them; which options appear is their call.',
    },
    {
      title: 'A lockout that tells you how to get back in',
      problem: '18 reviews describe being logged or locked out, with messages like "try again later" and no sense of how much later.',
      shots: [['images/mp-e.webp', 'A countdown with the exact time, reassurance that money still arrives, and a faster way out: reset the PIN.']],
      gave: 'The pause still happens. Showing the exact unlock time tells a fraudster when to try again, so the countdown appears only after a correct device check.',
    },
  ];
  const box = document.getElementById('mpMoment');
  const tabs = document.querySelectorAll('.mp .qr-tab');
  function render(i) {
    const m = MOMENTS[i];
    box.innerHTML =
      `<h3 class="mp-moment__title">${m.title}</h3>` +
      `<p class="cs-body"><strong>What people said:</strong> ${m.problem}</p>` +
      `<div class="mp-shots">${m.shots.map(([src, cap]) => `<figure><img src="${src}" alt="${cap}" /><figcaption>${cap}</figcaption></figure>`).join('')}</div>` +
      `<div class="cs-impact"><div class="cs-impact__row" style="grid-template-columns:1fr"><div><span class="cs-impact__label">What I gave up</span><span class="cs-impact__text">${m.gave}</span></div></div></div>`;
  }
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', x === t); });
    render(+t.dataset.m);
  }));
  render(0);
})();
