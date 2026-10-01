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

  // Publications tabs. "Selected" shows cards for entries marked class="pub selected";
  // "Full" lists every entry by year. Selected is the default.
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  var selectedList = document.getElementById('pub-selected');
  if (tabs.length && selectedList) {
    Array.prototype.forEach.call(document.querySelectorAll('#panel-full .pub.selected'), function (pub) {
      var card = pub.cloneNode(true);
      var title = card.querySelector('h4.pub-title');
      if (title) {  // no year headings in this view, so titles sit one level higher
        var h3 = document.createElement('h3');
        h3.className = title.className;
        h3.innerHTML = title.innerHTML;
        title.parentNode.replaceChild(h3, title);
      }
      selectedList.appendChild(card);
    });

    var select = function (tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in keys)) return;
        e.preventDefault();
        var next = tabs[(keys[e.key] + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
    select(tabs[0]);
    document.querySelector('.tabs').hidden = false;
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
