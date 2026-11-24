(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };

  // Build elements safely (no innerHTML with data, so content can't break the page)
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function chips(target, items, hot) {
    items.forEach(function (t) { target.appendChild(el('span', 'chip' + (hot ? ' hot' : ''), t)); });
  }
  function link(href, cls, text, external) {
    var a = el('a', cls, text);
    a.href = href;
    if (external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  }

  // Document title + hero
  document.title = D.person.name + ' | ' + D.person.role;
  $('heroRole').textContent = D.person.role;
  $('heroFirst').textContent = D.person.first;
  $('heroLast').textContent = D.person.last;
  $('heroIntro').textContent = D.person.intro;
  chips($('heroSkills'), D.skills.primary, true);
  chips($('heroSkills'), D.skills.secondary.slice(0, 3), false);

  // Photo: fall back to a neutral placeholder if no photo file has been added yet
  var photo = $('heroPhoto');
  photo.src = D.person.photo;
  photo.addEventListener('error', function () {
    var initials = D.person.first.charAt(0) + D.person.last.charAt(0);
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 320'><rect width='260' height='320' fill='#161b22'/><text x='50%' y='54%' text-anchor='middle' font-family='Impact,sans-serif' font-size='96' fill='#e94560' opacity='.7'>" + initials + "</text></svg>";
    photo.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }, { once: true });

  // About
  D.person.about.forEach(function (p) { $('aboutText').appendChild(el('p', null, p)); });
  chips($('skillsPrimary'), D.skills.primary, true);
  chips($('skillsSecondary'), D.skills.secondary, false);
  chips($('skillsLearning'), D.skills.learning, false);

  // Projects
  var modal = $('projectModal');
  function openProject(p) {
    var body = $('modalBody');
    body.textContent = '';
    if (p.media) {
      var img = el('img', 'm-media');
      img.src = p.media; img.alt = p.title + ' gameplay';
      body.appendChild(img);
    }
    var wrap = el('div', 'm-body');
    wrap.appendChild(el('span', 'card-meta', p.type + ' · ' + p.year));
    wrap.appendChild(el('h3', null, p.title));
    p.description.forEach(function (t) { wrap.appendChild(el('p', null, t)); });
    if (p.role && p.role.length) {
      wrap.appendChild(el('h4', null, 'My role'));
      var ul = el('ul'); p.role.forEach(function (r) { ul.appendChild(el('li', null, r)); });
      wrap.appendChild(ul);
    }
    wrap.appendChild(el('h4', null, 'Tools & skills'));
    var tc = el('div', 'chips'); chips(tc, p.tags, false); wrap.appendChild(tc);
    if (p.links && p.links.length) {
      var ls = el('div', 'm-links');
      p.links.forEach(function (l) { ls.appendChild(link(l.url, 'btn btn-primary', l.label, true)); });
      wrap.appendChild(ls);
    }
    body.appendChild(wrap);
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
  }

  D.projects.forEach(function (p) {
    var card = el('button', 'card reveal');
    card.type = 'button';
    var media = el('div', 'card-media');
    if (p.media) { var im = el('img'); im.src = p.media; im.alt = ''; im.loading = 'lazy'; media.appendChild(im); }
    else { media.appendChild(el('div', 'ph', p.title.split(':')[0])); }
    var body = el('div', 'card-body');
    body.appendChild(el('span', 'card-meta', p.type));
    body.appendChild(el('span', 'card-title', p.title));
    body.appendChild(el('span', 'card-sum', p.summary));
    body.appendChild(el('span', 'status' + (p.status === 'In progress' ? ' live' : ''), p.status));
    card.appendChild(media); card.appendChild(body);
    card.addEventListener('click', function () { openProject(p); });
    $('projectGrid').appendChild(card);
  });

  $('modalClose').addEventListener('click', function () { modal.close(); });
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });

  // Timelines
  function timeline(target, items) {
    items.forEach(function (it) {
      var row = el('div', 'tl-item reveal');
      row.appendChild(el('div', 'tl-dates', it.dates));
      row.appendChild(el('div', 'tl-title', it.title));
      row.appendChild(el('div', 'tl-org', it.org + (it.meta ? ' · ' + it.meta : '')));
      if (it.bullets && it.bullets.length) {
        var ul = el('ul'); it.bullets.forEach(function (b) { ul.appendChild(el('li', null, b)); });
        row.appendChild(ul);
      }
      target.appendChild(row);
    });
  }
  timeline($('expList'), D.experience);
  timeline($('eduList'), D.education);

  D.achievements.forEach(function (a) {
    var box = a.url ? link(a.url, 'ach reveal', '', true) : el('div', 'ach reveal');
    box.appendChild(el('strong', null, a.title));
    box.appendChild(el('span', null, a.detail));
    $('achList').appendChild(box);
  });

  // Contact
  function contactCard(label, value, href, external) {
    var a = link(href, 'c-card reveal', '', external);
    var left = el('div');
    left.appendChild(el('span', 'c-label', label));
    left.appendChild(el('span', 'c-value', value));
    a.appendChild(left); a.appendChild(el('span', 'accent', '→'));
    $('contactCards').appendChild(a);
  }
  contactCard('Email', D.person.email, 'mailto:' + D.person.email, false);
  contactCard('LinkedIn', D.person.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), D.person.linkedin, true);
  if (D.person.github) contactCard('GitHub', D.person.github.replace(/^https?:\/\/(www\.)?/, ''), D.person.github, true);
  var cv = contactCard('Download CV', 'Nathan_Cassidy_CV.pdf', D.person.cv, true);

  // Footer
  $('footerName').textContent = '© ' + new Date().getFullYear() + ' ' + D.person.name;
  var d = new Date(D.lastUpdated + 'T00:00:00');
  $('footerUpdated').textContent = 'Last updated ' + d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  // Mobile nav
  var toggle = $('navToggle'), links = $('navLinks');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Active nav link on scroll + reveal on scroll
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a'));
  var sections = navAnchors.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var i = sections.indexOf(en.target);
          navAnchors.forEach(function (a, j) { a.classList.toggle('active', i === j); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });

    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (n) { rev.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); });
  }
})();
