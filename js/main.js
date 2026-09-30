// main.js — navigation, scroll behavior, and DOM rendering from content.js globals

document.addEventListener('DOMContentLoaded', function () {

  // =========================================================================
  // 1. HAMBURGER TOGGLE
  // =========================================================================

  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      hamburger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    // Close menu when a link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        mobileMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================================================
  // 2. NAV SCROLLED STATE
  // =========================================================================

  var navBar = document.querySelector('.nav-bar');

  if (navBar) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // =========================================================================
  // 3. ACTIVE SECTION DETECTION via IntersectionObserver
  // =========================================================================

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('nav a[href^="#"]');

  function setActiveLink(id) {
    navLinks.forEach(function (a) {
      a.classList.remove('nav-active');
      if (a.getAttribute('href') === '#' + id) {
        a.classList.add('nav-active');
      }
    });
  }

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  // =========================================================================
  // 4. SMOOTH SCROLL POLYFILL for anchor CTAs
  // =========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // =========================================================================
  // 5. HERO PHOTO ONERROR FALLBACK
  // =========================================================================

  var heroPhoto    = document.getElementById('hero-photo');
  var heroFallback = document.getElementById('hero-fallback');

  if (heroPhoto && heroFallback) {
    heroPhoto.onerror = function () {
      heroPhoto.style.display = 'none';
      heroFallback.style.display = 'flex';
    };
  }

  // =========================================================================
  // 6. UPDATE SUBHEADLINE + FOOTER FROM window.SITE_META
  // =========================================================================

  if (window.SITE_META) {
    var subheadlineEl = document.getElementById('hero-subheadline');
    if (subheadlineEl && window.SITE_META.subheadline) {
      subheadlineEl.textContent = window.SITE_META.subheadline;
    }

    var footerCopy = document.getElementById('footer-copy');
    if (footerCopy && window.SITE_META.name) {
      var year = new Date().getFullYear();
      footerCopy.innerHTML = '\u00A9 ' + year + ' ' + window.SITE_META.name + '. Built with care.';
    }
  }

  // =========================================================================
  // 7. RENDER TIMELINE from window.TIMELINE
  // =========================================================================

  var timelineContainer = document.getElementById('timeline-container');

  if (timelineContainer && window.TIMELINE && window.TIMELINE.length) {
    // Clear any noscript fallback content
    timelineContainer.innerHTML = '';

    window.TIMELINE.forEach(function (item, index) {
      var div = document.createElement('div');
      div.className = 'timeline-item reveal reveal-delay-' + (Math.min(index + 1, 3));

      var yearEl = document.createElement('div');
      yearEl.className = 'timeline-year';
      yearEl.textContent = item.year;

      var labelEl = document.createElement('div');
      labelEl.className = 'timeline-label';
      labelEl.textContent = item.label;

      div.appendChild(yearEl);
      div.appendChild(labelEl);

      if (item.description) {
        var descEl = document.createElement('div');
        descEl.className = 'timeline-desc';
        descEl.textContent = item.description;
        div.appendChild(descEl);
      }

      timelineContainer.appendChild(div);
    });
  }

  // =========================================================================
  // 8. RENDER SKILLS from window.SKILLS
  // =========================================================================

  var skillsContainer = document.getElementById('skills-container');

  if (skillsContainer && window.SKILLS && window.SKILLS.length) {
    window.SKILLS.forEach(function (category, index) {
      var card = document.createElement('div');
      card.className = 'border border-[#E5E7EB] rounded-xl p-6 bg-white reveal' +
                       (index < 3 ? ' reveal-delay-' + (index + 1) : '');

      var titleEl = document.createElement('h3');
      titleEl.className = 'font-semibold text-[#0F0F0F] mb-4';
      titleEl.style.fontSize = 'var(--text-h4)';
      titleEl.textContent = category.category;

      var tagsWrap = document.createElement('div');
      tagsWrap.className = 'flex flex-wrap gap-2';

      category.items.forEach(function (item) {
        var tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = item;
        tagsWrap.appendChild(tag);
      });

      card.appendChild(titleEl);
      card.appendChild(tagsWrap);
      skillsContainer.appendChild(card);
    });
  }

  // =========================================================================
  // 9. RENDER PROJECTS from window.PROJECTS
  // =========================================================================

  var projectsContainer = document.getElementById('projects-container');

  if (projectsContainer && window.PROJECTS && window.PROJECTS.length) {
    window.PROJECTS.forEach(function (project, index) {
      var isEven = index % 2 === 0;

      // Card wrapper
      var card = document.createElement('div');
      card.className = 'card card-hover-accent reveal border border-[#E5E7EB]';
      card.setAttribute('style', 'transition: box-shadow 250ms ease, border-top-color 250ms ease;');

      // Inner grid — image + content
      var inner = document.createElement('div');
      inner.className = 'flex flex-col lg:flex-row' + (isEven ? '' : ' lg:flex-row-reverse');

      // Image / placeholder
      var imgWrap = document.createElement('div');
      imgWrap.className = 'project-placeholder lg:w-5/12 flex-shrink-0';
      imgWrap.setAttribute('style', 'background: ' + project.placeholder.value + ';');
      imgWrap.setAttribute('aria-hidden', 'true');

      var imgLabel = document.createElement('span');
      imgLabel.className = 'text-white font-display font-bold tracking-widest text-sm uppercase opacity-80';
      imgLabel.textContent = project.name + ' / Coming Soon';
      imgWrap.appendChild(imgLabel);

      // Text content
      var content = document.createElement('div');
      content.className = 'p-8 flex flex-col justify-between lg:w-7/12';

      // Number + name
      var header = document.createElement('div');
      var numberEl = document.createElement('span');
      numberEl.className = 'text-accent font-display font-extrabold text-4xl opacity-20 select-none';
      numberEl.textContent = project.number;

      var nameEl = document.createElement('h3');
      nameEl.className = 'font-display font-bold text-[#0F0F0F] mt-1';
      nameEl.style.fontSize = 'var(--text-h3)';
      nameEl.textContent = project.name;

      var taglineEl = document.createElement('p');
      taglineEl.className = 'text-[#4B5563] font-medium mt-1 mb-3';
      taglineEl.textContent = project.tagline;

      header.appendChild(numberEl);
      header.appendChild(nameEl);
      header.appendChild(taglineEl);

      // Description
      var descEl = document.createElement('p');
      descEl.className = 'text-[#4B5563] mb-4 text-sm leading-relaxed';
      descEl.textContent = project.description;

      // Role
      var roleEl = document.createElement('p');
      roleEl.className = 'text-sm mb-4';
      roleEl.innerHTML = '<span class="font-semibold text-[#0F0F0F]">Role:</span> ' +
                         '<span class="text-[#4B5563]">' + project.role + '</span>';

      // Stack tags
      var stackWrap = document.createElement('div');
      stackWrap.className = 'flex flex-wrap gap-2 mb-5';
      project.stack.forEach(function (tech) {
        var tag = document.createElement('span');
        tag.className = 'text-xs font-medium px-2.5 py-1 rounded-full';
        tag.setAttribute('style', 'background-color:#EEF2FF; color:#6366F1;');
        tag.textContent = tech;
        stackWrap.appendChild(tag);
      });

      // Highlights
      var highlightsList = document.createElement('ul');
      highlightsList.className = 'highlights-list space-y-1 mb-6';
      project.highlights.forEach(function (h) {
        var li = document.createElement('li');
        li.className = 'text-sm text-[#4B5563] flex items-start gap-2';
        li.innerHTML = '<span class="text-accent font-bold flex-shrink-0">\u2726</span>' +
                       '<span>' + h + '</span>';
        highlightsList.appendChild(li);
      });

      // CTA
      var cta = document.createElement('div');
      var ctaLink = document.createElement('a');
      ctaLink.href = project.caseStudyUrl;
      ctaLink.className = 'btn-primary self-start';
      ctaLink.textContent = 'View Case Study \u2192';
      cta.appendChild(ctaLink);

      content.appendChild(header);
      content.appendChild(descEl);
      content.appendChild(roleEl);
      content.appendChild(stackWrap);
      content.appendChild(highlightsList);
      content.appendChild(cta);

      inner.appendChild(imgWrap);
      inner.appendChild(content);
      card.appendChild(inner);
      projectsContainer.appendChild(card);
    });
  }

  // =========================================================================
  // 10. INITIALISE SCROLL REVEAL (after all dynamic content is rendered)
  // =========================================================================

  if (typeof window.initReveal === 'function') {
    window.initReveal();
  }

  // =========================================================================
  // 11. INITIALISE I18N (after DOM is ready and content rendered)
  // =========================================================================

  if (typeof window.initI18n === 'function') {
    window.initI18n();
  }

});
