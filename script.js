(function () {
  var toggle = document.getElementById('lang-toggle');
  var root = document.documentElement;
  var elements = document.querySelectorAll('[data-en]');
  var isEnglish = false;

  elements.forEach(function (el) {
    el.dataset.sv = el.innerHTML;
  });

  toggle.addEventListener('click', function () {
    isEnglish = !isEnglish;
    elements.forEach(function (el) {
      el.innerHTML = isEnglish ? el.dataset.en : el.dataset.sv;
    });
    root.lang = isEnglish ? 'en' : 'sv';
    toggle.textContent = isEnglish ? 'SV' : 'EN';
    toggle.setAttribute('aria-label', isEnglish ? 'Byt till svenska' : 'Switch to English');
  });
})();

(function () {
  var reveals = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });
})();
