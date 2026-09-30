(function () {
  // Highlight the nav link for the section currently in view.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = links.map(function (a) { return document.getElementById(a.hash.slice(1)); });

  function updateNav() {
    var offset = 120;
    var current = 0;
    sections.forEach(function (s, i) {
      if (s && s.getBoundingClientRect().top <= offset) current = i;
    });
    var doc = document.documentElement;
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) current = sections.length - 1;
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () { updateNav(); ticking = false; });
    }
  }, { passive: true });
  updateNav();

  // Filter publications by topic tag. Chips map to tag classes, e.g. data-filter="genai" -> .tag.genai
  var filter = document.querySelector('.pub-filter');
  if (filter) {
    var chips = Array.prototype.slice.call(filter.querySelectorAll('.chip'));
    var pubs = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));

    chips.forEach(function (chip) {
      var topic = chip.getAttribute('data-filter');
      var n = topic === 'all' ? pubs.length : pubs.filter(function (p) { return p.querySelector('.tag.' + topic); }).length;
      var count = document.createElement('span');
      count.className = 'count';
      count.textContent = n;
      chip.appendChild(count);

      chip.addEventListener('click', function () {
        var pressed = chip.getAttribute('aria-pressed') === 'true';
        var active = pressed ? 'all' : topic;
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === active));
        });
        pubs.forEach(function (p) {
          p.hidden = active !== 'all' && !p.querySelector('.tag.' + active);
        });
        years.forEach(function (y) {
          y.hidden = !y.querySelector('.pub:not([hidden])');
        });
      });
    });
    filter.hidden = false;
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
