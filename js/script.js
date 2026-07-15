// Highlight the current section's nav link while scrolling.
(function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  var linkMap = {};
  navLinks.forEach(function (link) {
    linkMap[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
