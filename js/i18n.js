// js/i18n.js
// Language switch logic for EN ↔ VI.
// Depends on: content.js (window.SITE_META, TIMELINE, SKILLS, PROJECTS)
//             i18n.js    (window.I18N_VI)
//             main.js    (renderTimeline, renderSkills, renderProjects helpers exposed via window)

(function () {
  var STORAGE_KEY = 'portfolio-lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'vi';

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------
  window.getLang = function () { return currentLang; };

  window.setLang = function (lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
    applyLang();
    syncSwitcher();
  };

  // -------------------------------------------------------------------------
  // Init — called after DOMContentLoaded
  // -------------------------------------------------------------------------
  window.initI18n = function () {
    buildSwitcher();
    document.documentElement.lang = currentLang === 'vi' ? 'vi' : 'en';
    applyLang();
    syncSwitcher();
    bindDropdownDismiss();
  };

  // -------------------------------------------------------------------------
  // Build the language switcher button and inject into nav
  // -------------------------------------------------------------------------
  function buildSwitcher() {
    // Desktop index.html — append AFTER Download CV (at the very end)
    var desktopNav = document.querySelector('.hidden.lg\\:flex');
    if (desktopNav) {
      desktopNav.appendChild(makeSwitcher('lang-switcher-desktop'));
    }

    // Mobile menu index.html — append after Download CV
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.appendChild(makeSwitcher('lang-switcher-mobile'));
    }

    // Case study pages (viora.html, habitu.html) — inject into nav actions bar
    var caseStudyNav = document.getElementById('case-study-nav-actions');
    if (caseStudyNav && !caseStudyNav.querySelector('.lang-switcher')) {
      caseStudyNav.appendChild(makeSwitcher('lang-switcher-casestudy'));
    }
  }

  function makeSwitcher(id) {
    var wrap = document.createElement('div');
    wrap.id = id;
    wrap.className = 'lang-switcher';

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'lang-trigger';
    trigger.setAttribute('aria-haspopup', 'menu');
    trigger.setAttribute('aria-expanded', 'false');

    var flagSlot = document.createElement('span');
    flagSlot.className = 'lang-trigger-flag';
    trigger.appendChild(flagSlot);

    var chevron = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    chevron.setAttribute('class', 'lang-trigger-chevron');
    chevron.setAttribute('viewBox', '0 0 12 12');
    chevron.setAttribute('width', '12');
    chevron.setAttribute('height', '12');
    chevron.setAttribute('aria-hidden', 'true');
    chevron.innerHTML = '<path fill="currentColor" d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    trigger.appendChild(chevron);

    var menu = document.createElement('div');
    menu.className = 'lang-menu';
    menu.setAttribute('role', 'menu');
    menu.hidden = true;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = wrap.classList.contains('lang-switcher-open');
      closeAllDropdowns();
      if (!open) {
        wrap.classList.add('lang-switcher-open');
        trigger.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
      }
    });

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
    return wrap;
  }

  function makeMenuOption(lang) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-option';
    btn.setAttribute('data-lang', lang);
    btn.setAttribute('role', 'menuitem');

    var flagWrap = document.createElement('span');
    flagWrap.className = 'lang-option-flag';
    flagWrap.appendChild(createFlagIcon(lang));
    btn.appendChild(flagWrap);

    var label = document.createElement('span');
    label.className = 'lang-option-label';
    label.textContent = lang === 'en' ? 'English' : 'Tiếng Việt';
    btn.appendChild(label);

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      window.setLang(lang);
      closeAllDropdowns();
    });
    return btn;
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.lang-switcher-open').forEach(function (wrap) {
      wrap.classList.remove('lang-switcher-open');
      var trigger = wrap.querySelector('.lang-trigger');
      var menu = wrap.querySelector('.lang-menu');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      if (menu) menu.hidden = true;
    });
  }

  var dropdownDismissBound = false;
  function bindDropdownDismiss() {
    if (dropdownDismissBound) return;
    dropdownDismissBound = true;
    document.addEventListener('click', closeAllDropdowns);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllDropdowns();
    });
  }

  function createFlagIcon(lang) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'lang-flag');
    svg.setAttribute('viewBox', '0 0 24 16');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '16');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('overflow', 'visible');

    if (lang === 'en') {
      // United Kingdom — padded viewBox so edge strokes are not clipped
      svg.setAttribute('viewBox', '-1 -1 26 18');
      svg.innerHTML =
        '<rect x="0" y="0" width="24" height="16" fill="#012169"/>' +
        '<path d="M0 0l24 16M24 0L0 16" stroke="#fff" stroke-width="3"/>' +
        '<path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.5"/>' +
        '<path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5"/>' +
        '<path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="3"/>';
    } else {
      // Vietnam — star centered in 24×16 (previous path extended past y=16 and was clipped)
      svg.innerHTML =
        '<rect width="24" height="16" fill="#DA251D"/>' +
        '<path fill="#FFCD00" d="M12 4.4L12.81 6.88L15.42 6.89L13.31 8.43L14.12 10.91L12 9.38L9.88 10.91L10.69 8.43L8.58 6.89L11.19 6.88Z"/>';
    }

    return svg;
  }

  function syncSwitcher() {
    var altLang = currentLang === 'vi' ? 'en' : 'vi';
    var triggerLabel =
      currentLang === 'vi'
        ? 'Ngôn ngữ: Tiếng Việt. Mở danh sách ngôn ngữ'
        : 'Language: English. Open language menu';

    document.querySelectorAll('.lang-switcher').forEach(function (wrap) {
      var trigger = wrap.querySelector('.lang-trigger');
      var flagSlot = wrap.querySelector('.lang-trigger-flag');
      var menu = wrap.querySelector('.lang-menu');

      if (trigger) trigger.setAttribute('aria-label', triggerLabel);
      if (flagSlot) {
        flagSlot.innerHTML = '';
        flagSlot.appendChild(createFlagIcon(currentLang));
      }
      if (menu) {
        menu.innerHTML = '';
        menu.appendChild(makeMenuOption(altLang));
      }
    });

    closeAllDropdowns();
  }

  // -------------------------------------------------------------------------
  // Apply translations to the DOM
  // -------------------------------------------------------------------------
  function applyLang() {
    var t = (currentLang === 'vi') ? window.I18N_VI : null;

    // Nav links
    setText('[data-i18n="nav.about"]',    t ? t.nav.about    : 'About');
    setText('[data-i18n="nav.skills"]',   t ? t.nav.skills   : 'Skills');
    setText('[data-i18n="nav.projects"]', t ? t.nav.projects : 'Projects');
    setText('[data-i18n="nav.contact"]',  t ? t.nav.contact  : 'Contact');
    setAll('[data-i18n="nav.downloadCv"]', t ? t.nav.downloadCv : 'Download CV');

    // Hero
    setText('[data-i18n="hero.eyebrow"]',      t ? t.hero.eyebrow    : 'Frontend Developer');
    setText('[data-i18n="hero.subtitle"]',     t ? t.hero.subtitle   : 'Frontend Developer & UI/UX-Oriented IT Graduate');
    setText('[data-i18n="hero.subheadline"]',  t ? t.hero.subheadline : window.SITE_META.subheadline);
    setText('[data-i18n="hero.viewProjects"]', t ? t.hero.viewProjects : 'View Projects');
    setText('[data-i18n="hero.downloadCv"]',   t ? t.hero.downloadCv  : 'Download CV');
    setText('[data-i18n="hero.contactMe"]',    t ? t.hero.contactMe   : 'Contact Me →');

    // About
    setText('[data-i18n="about.eyebrow"]', t ? t.about.eyebrow : 'About');
    setText('[data-i18n="about.heading"]', t ? t.about.heading : 'Building things that work and feel right.');
    setText('[data-i18n="about.timeline"]', t ? t.about.timelineLabel : 'Timeline');

    var bioEls = document.querySelectorAll('[data-i18n^="about.bio"]');
    if (t) {
      bioEls.forEach(function (el, i) {
        if (t.about.bio[i] !== undefined) el.textContent = t.about.bio[i];
      });
    } else {
      var enBio = [
        "I'm an Information Technology student at Trà Vinh University, specialising in frontend development with a strong eye for UI/UX. I care about the full picture — from how a page feels on a phone to how the API is structured behind it.",
        "My graduation project VIORA brought together Flutter, Node.js, MySQL, and Gemini AI into a single working product. Before that, HABITU taught me PHP full-stack development and real-world team collaboration.",
        "I'm looking for a frontend or full-stack role where I can keep shipping things I'm proud of and grow alongside people who care about craft."
      ];
      bioEls.forEach(function (el, i) {
        if (enBio[i] !== undefined) el.textContent = enBio[i];
      });
    }

    // Skills
    setText('[data-i18n="skills.eyebrow"]', t ? t.skills.eyebrow : 'Skills');
    setText('[data-i18n="skills.heading"]', t ? t.skills.heading : 'What I work with');

    // Projects
    setText('[data-i18n="projects.eyebrow"]', t ? t.projects.eyebrow : 'Featured Projects');
    setText('[data-i18n="projects.heading"]', t ? t.projects.heading : "Things I've built");

    // Contact
    setText('[data-i18n="contact.eyebrow"]',  t ? t.contact.eyebrow  : 'Contact');
    setText('[data-i18n="contact.heading"]',  t ? t.contact.heading  : "Let's work together");
    setText('[data-i18n="contact.subtext"]',  t ? t.contact.subtext  : "I'm open to frontend and full-stack opportunities. Reach out and let's talk.");
    setText('[data-i18n="contact.downloadCv"]', t ? t.contact.downloadCv : 'Download CV');

    // Footer
    var footerEl = document.getElementById('footer-copy');
    if (footerEl) {
      var year = new Date().getFullYear();
      var name = window.SITE_META ? window.SITE_META.name : 'Thạch Thị Huệ Trinh';
      var builtWith = t ? t.footer.builtWith : 'Built with care.';
      footerEl.innerHTML = '\u00A9 ' + year + ' ' + name + '. ' + builtWith;
    }

    // Re-render dynamic sections that need translated content
    rerenderTimeline(t);
    rerenderProjects(t);
    applyVioraPage(t);
  }

  function applyVioraPage(t) {
    if (!document.getElementById('viora-sections')) return;

    var en = {
      skipLink: 'Skip to main content',
      backPortfolio: '\u2190 Back to Portfolio',
      heroEyebrow: 'Case Study 01',
      heroSubtitle: 'Graduation Project \u2014 Healthy Lifestyle App',
      heroRole: 'Role: Full Stack Developer & UI/UX Designer',
      stackAria: 'Technology stack',
      heroAria: 'VIORA case study hero',
      docTitle: 'VIORA Case Study \u2014 Th\u1ea1ch Th\u1ecb Hu\u1ec7 Trinh',
      docDescription:
        'Deep dive into VIORA \u2014 a mobile healthy lifestyle app built with Flutter, Node.js, and Gemini AI. Graduation project by Th\u1ea1ch Th\u1ecb Hu\u1ec7 Trinh.',
    };
    var c = (t && t.viora && t.viora.chrome) ? t.viora.chrome : en;

    setText('[data-i18n="viora.skipLink"]', c.skipLink || en.skipLink);
    setAll('[data-i18n="viora.backPortfolio"]', c.backPortfolio || en.backPortfolio);
    setText('[data-i18n="viora.heroEyebrow"]', c.heroEyebrow || en.heroEyebrow);
    setText('[data-i18n="viora.heroSubtitle"]', c.heroSubtitle || en.heroSubtitle);
    setText('[data-i18n="viora.heroRole"]', c.heroRole || en.heroRole);

    var stackList = document.getElementById('viora-stack-list');
    if (stackList) stackList.setAttribute('aria-label', c.stackAria || en.stackAria);
    var heroSection = document.getElementById('viora-hero');
    if (heroSection) heroSection.setAttribute('aria-label', c.heroAria || en.heroAria);

    document.title = c.docTitle || en.docTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', c.docDescription || en.docDescription);

    if (typeof window.renderVioraCaseStudy === 'function') {
      window.renderVioraCaseStudy();
      if (typeof window.initReveal === 'function') window.initReveal();
    }
  }

  // -------------------------------------------------------------------------
  // Re-render timeline with translated labels
  // -------------------------------------------------------------------------
  function rerenderTimeline(t) {
    var container = document.getElementById('timeline-container');
    if (!container || !window.TIMELINE) return;

    container.innerHTML = '';
    window.TIMELINE.forEach(function (item, index) {
      var div = document.createElement('div');
      div.className = 'timeline-item reveal visible reveal-delay-' + (Math.min(index + 1, 3));

      var yearEl = document.createElement('div');
      yearEl.className = 'timeline-year';
      yearEl.textContent = item.year;

      var labelEl = document.createElement('div');
      labelEl.className = 'timeline-label';
      labelEl.textContent = (t && t.timeline[index]) ? t.timeline[index].label : item.label;

      div.appendChild(yearEl);
      div.appendChild(labelEl);

      var desc = (t && t.timeline[index]) ? t.timeline[index].description : item.description;
      if (desc) {
        var descEl = document.createElement('div');
        descEl.className = 'timeline-desc';
        descEl.textContent = desc;
        div.appendChild(descEl);
      }

      container.appendChild(div);
    });
  }

  // -------------------------------------------------------------------------
  // Re-render project cards with translated content
  // -------------------------------------------------------------------------
  function rerenderProjects(t) {
    var container = document.getElementById('projects-container');
    if (!container || !window.PROJECTS) return;

    container.innerHTML = '';
    window.PROJECTS.forEach(function (project, index) {
      var isEven  = index % 2 === 0;
      var vi      = (t && t.projectList[index]) ? t.projectList[index] : null;
      var roleLabel    = t ? t.projects.roleLabel    : 'Role';
      var viewLabel    = t ? t.projects.viewCaseStudy : 'View Case Study \u2192';
      var comingSoon   = t ? t.projects.comingSoon    : 'Coming Soon';

      var card = document.createElement('div');
      card.className = 'card card-hover-accent reveal visible border border-[#E5E7EB]';
      card.setAttribute('style', 'transition: box-shadow 250ms ease, border-top-color 250ms ease;');

      var inner = document.createElement('div');
      inner.className = 'flex flex-col lg:flex-row' + (isEven ? '' : ' lg:flex-row-reverse');

      var imgWrap = document.createElement('div');
      imgWrap.className = 'project-placeholder lg:w-5/12 flex-shrink-0';
      imgWrap.setAttribute('style', 'background: ' + project.placeholder.value + ';');
      imgWrap.setAttribute('aria-hidden', 'true');
      var imgLabel = document.createElement('span');
      imgLabel.className = 'text-white font-display font-bold tracking-widest text-sm uppercase opacity-80';
      imgLabel.textContent = project.name + ' / ' + comingSoon;
      imgWrap.appendChild(imgLabel);

      var content = document.createElement('div');
      content.className = 'p-8 flex flex-col justify-between lg:w-7/12';

      var numberEl = document.createElement('span');
      numberEl.className = 'text-accent font-display font-extrabold text-4xl opacity-20 select-none';
      numberEl.textContent = project.number;

      var nameEl = document.createElement('h3');
      nameEl.className = 'font-display font-bold text-[#0F0F0F] mt-1';
      nameEl.style.fontSize = 'var(--text-h3)';
      nameEl.textContent = project.name;

      var taglineEl = document.createElement('p');
      taglineEl.className = 'text-[#4B5563] font-medium mt-1 mb-3';
      taglineEl.textContent = vi ? vi.tagline : project.tagline;

      var descEl = document.createElement('p');
      descEl.className = 'text-[#4B5563] mb-4 text-sm leading-relaxed';
      descEl.textContent = vi ? vi.description : project.description;

      var roleEl = document.createElement('p');
      roleEl.className = 'text-sm mb-4';
      roleEl.innerHTML = '<span class="font-semibold text-[#0F0F0F]">' + roleLabel + ':</span> ' +
                         '<span class="text-[#4B5563]">' + (vi ? vi.role : project.role) + '</span>';

      var stackWrap = document.createElement('div');
      stackWrap.className = 'flex flex-wrap gap-2 mb-5';
      project.stack.forEach(function (tech) {
        var tag = document.createElement('span');
        tag.className = 'text-xs font-medium px-2.5 py-1 rounded-full';
        tag.setAttribute('style', 'background-color:#EEF2FF; color:#6366F1;');
        tag.textContent = tech;
        stackWrap.appendChild(tag);
      });

      var highlights = vi ? vi.highlights : project.highlights;
      var ul = document.createElement('ul');
      ul.className = 'highlights-list space-y-1 mb-6';
      highlights.forEach(function (h) {
        var li = document.createElement('li');
        li.className = 'text-sm text-[#4B5563] flex items-start gap-2';
        li.innerHTML = '<span class="text-accent font-bold flex-shrink-0">\u2726</span><span>' + h + '</span>';
        ul.appendChild(li);
      });

      var ctaLink = document.createElement('a');
      ctaLink.href = project.caseStudyUrl;
      ctaLink.className = 'btn-primary self-start';
      ctaLink.textContent = viewLabel;

      content.appendChild(numberEl);
      content.appendChild(nameEl);
      content.appendChild(taglineEl);
      content.appendChild(descEl);
      content.appendChild(roleEl);
      content.appendChild(stackWrap);
      content.appendChild(ul);
      content.appendChild(ctaLink);

      inner.appendChild(imgWrap);
      inner.appendChild(content);
      card.appendChild(inner);
      container.appendChild(card);
    });
  }

  // -------------------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------------------
  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setAll(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = value;
    });
  }

})();
