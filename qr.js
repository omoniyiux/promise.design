// Quote Request case study: product tour, screen-size switch, funnel

(function () {
  const TOURS = {
    request: {
      src: 'images/qr-tour-request.mp4',
      poster: 'images/qr-tour-request-poster.webp',
      wide: false,
      chapters: [
        [0, 'Search first', 'Start typing "barb" and the right services appear. No menus to dig through.'],
        [7, 'Describe the job', 'One question per screen, with a line explaining why vendors need it.'],
        [13, 'Date and time', "The phone's own pickers. Nobody types a date."],
        [33, 'Budget in naira', 'The number pad opens straight away.'],
        [37, 'Location', 'Suggestions as you type, so the request reaches the right vendors.'],
        [43, 'What happens next', 'Four plain steps, so waiting for quotes feels like progress.'],
      ],
    },
    webapp: {
      src: 'images/qr-tour-webapp.mp4',
      poster: 'images/qr-tour-webapp-poster.webp',
      wide: true,
      chapters: [
        [0, 'Dashboard', 'Active requests and their budgets at a glance.'],
        [3, 'Quotes and responses', 'Every vendor quote with price and rating, ready to accept or decline.'],
        [12, 'Pick a service', 'Categories break down into specific jobs.'],
        [15, 'Four-step request', 'The same flow as the app, laid out for a laptop.'],
        [45, 'Submitted', 'The same "what happens next" steps as on mobile.'],
        [48, 'Track every request', 'Statuses and a flag on anything waiting for you.'],
      ],
    },
    plans: {
      src: 'images/qr-tour-plans.mp4',
      poster: 'images/qr-tour-plans-poster.webp',
      wide: false,
      chapters: [
        [0, 'Choose a plan', 'Each plan says how many matched requests it includes.'],
        [8, 'Cart', 'Change quantity, then pay by card or bank transfer.'],
        [14, 'Payment breakdown', 'Discount codes and referrals are part of checkout.'],
        [18, 'Loyalty points', 'Points come straight off the total.'],
        [24, 'Paid', 'The plan is active and requests start arriving.'],
      ],
    },
  };

  const FUNNEL = [
    ['Guests can fill in the whole request before an account is needed, and the search-first home gets them typing fast.', 'Share of visitors who start a request, and where in the four steps they stop.'],
    ['Four short steps with thumb-friendly inputs, and an account ask that keeps the draft.', 'Share of started requests that get submitted, including guests who sign up to submit.'],
    ['Requests go only to confirmed vendors in the right area, and the confirmation screen sets expectations.', 'Time to first quote, and share of requests with at least one quote.'],
    ['Quotes compared on the same facts, with ratings beside each one.', 'Share of requests that end in a hire, and how many quotes a customer looks at first.'],
    ['Jobs close with a confirmation that asks for a rating, and good vendors get a one-tap rebook.', 'Share of completed jobs that get reviewed, and the rebook rate.'],
  ];

  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  // Tour
  const video = document.getElementById('tourVideo');
  const list = document.getElementById('tourChapters');
  const stage = document.querySelector('.qr-tour__stage');
  const tabs = document.querySelectorAll('.qr-tab');
  let current = TOURS.request;

  function renderChapters() {
    list.innerHTML = '';
    current.chapters.forEach(([t, title, text], i) => {
      const li = document.createElement('li');
      li.innerHTML =
        `<button class="qr-chapter" data-i="${i}">` +
        `<span class="qr-chapter__time">${fmt(t)}</span>` +
        `<span class="qr-chapter__title">${title}</span>` +
        `<span class="qr-chapter__text">${text}</span>` +
        `<span class="qr-chapter__bar"></span></button>`;
      list.appendChild(li);
    });
  }

  function load(key, autoplay) {
    current = TOURS[key];
    stage.classList.toggle('is-wide', current.wide);
    video.src = current.src;
    video.poster = current.poster;
    renderChapters();
    if (autoplay) video.play().catch(() => {});
  }

  tabs.forEach((tab) =>
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      load(tab.dataset.tour, true);
    })
  );

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.qr-chapter');
    if (!btn) return;
    video.currentTime = current.chapters[btn.dataset.i][0] + 0.05;
    video.play().catch(() => {});
  });

  video.addEventListener('timeupdate', () => {
    const t = video.currentTime;
    const ch = current.chapters;
    let idx = 0;
    ch.forEach(([start], i) => { if (t >= start) idx = i; });
    const end = idx + 1 < ch.length ? ch[idx + 1][0] : video.duration || t + 1;
    list.querySelectorAll('.qr-chapter').forEach((b, i) => {
      b.classList.toggle('is-active', i === idx);
      const bar = b.querySelector('.qr-chapter__bar');
      bar.style.width = i === idx ? `${Math.min(100, ((t - ch[idx][0]) / (end - ch[idx][0])) * 100)}%` : '0';
    });
  });

  // Play the tour only while it's on screen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.35 }).observe(video);
  }

  renderChapters();

  // Desktop / mobile switch
  const switches = document.querySelectorAll('.qr-switch__btn');
  const views = document.querySelectorAll('.qr-view');
  switches.forEach((btn) =>
    btn.addEventListener('click', () => {
      switches.forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', b === btn);
      });
      views.forEach((v) => v.classList.toggle('is-active', v.dataset.view === btn.dataset.view));
    })
  );

  // Funnel
  const steps = document.querySelectorAll('.qr-funnel__step');
  const panel = document.getElementById('qrFunnelPanel');
  function showStep(i) {
    steps.forEach((s, j) => s.classList.toggle('is-active', j === i));
    panel.innerHTML =
      `<div><h4>What I designed here</h4><p>${FUNNEL[i][0]}</p></div>` +
      `<div><h4>The number to watch</h4><p>${FUNNEL[i][1]}</p></div>`;
  }
  steps.forEach((s, i) => s.addEventListener('click', () => showStep(i)));
  showStep(0);
})();
