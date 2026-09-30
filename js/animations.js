// animations.js — scroll reveal using IntersectionObserver
// Shared across index.html, viora.html, and habitu.html
// Called via window.initReveal() from main.js after dynamic content is rendered.

window.initReveal = function () {
  var revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: make all reveal elements visible immediately
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
};
