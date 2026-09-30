// js/viora-page.js — VIORA case study DOM renderer (EN/VI via i18n)
(function () {

  window.VIORA_ARCH_DIAGRAM_EN =
'┌─────────────────────────────────────────────────────────┐\n' +
'│                    VIORA Architecture                   │\n' +
'├─────────────┬──────────────────────┬────────────────────┤\n' +
'│ Presentation│   Business Logic     │   Data Layer       │\n' +
'│ (Flutter)   │   (Node.js/Express)  │   (MySQL)          │\n' +
'├─────────────┼──────────────────────┼────────────────────┤\n' +
'│ UI Screens  │ REST API Routes      │ Users table        │\n' +
'│ State Mgmt  │ Auth Middleware       │ Habits table       │\n' +
'│ HTTP Client │ Controllers           │ Habit_logs table   │\n' +
'│ FCM handler │ Services              │ Streaks table      │\n' +
'│             │ Gemini AI client      │ Community table    │\n' +
'│             │ FCM push service      │ XP/Levels table    │\n' +
'└─────────────┴──────────────────────┴────────────────────┘\n\n' +
'External Services:\n' +
'  ├── Firebase Cloud Messaging\n' +
'  ├── Gemini AI API\n' +
'  └── Google OAuth 2.0';

  window.VIORA_UI_EN = {
    eyebrows: {
      overview: 'Overview',
      problem: 'Problem',
      goal: 'Goal',
      myRole: 'My Role',
      userFlow: 'User Flow',
      uiux: 'UI/UX',
      features: 'Features',
      architecture: 'Architecture',
      database: 'Database',
      backend: 'API & Backend',
      ai: 'AI Integration',
      challenges: 'Challenges',
      outcome: 'Outcome',
      reflections: 'Reflections',
    },
    designPrinciples: 'Design Principles',
    appScreens: 'VIORA — App Screens',
    layers: 'Layers',
    externalServices: 'External Services',
    patterns: 'Patterns',
    routeGroups: 'Route Groups',
    implementationNotes: 'Implementation Notes',
    challenge: 'Challenge',
    solution: 'Solution',
    deliverables: 'Deliverables',
    metrics: 'Metrics',
    metricCol: 'Metric',
    valueCol: 'Value',
    metricsAria: 'Outcome metrics',
  };

  window.getVioraBundle = function () {
    var isVi = window.getLang && window.getLang() === 'vi';
    var pack = isVi && window.I18N_VI && window.I18N_VI.viora;
    if (pack && pack.content && pack.ui) {
      return { data: pack.content, ui: pack.ui };
    }
    return { data: window.VIORA_CONTENT, ui: window.VIORA_UI_EN };
  };

  window.renderVioraCaseStudy = function () {
      function el(tag, className, html) {
        var e = document.createElement(tag);
        if (className) e.className = className;
        if (html !== undefined) e.innerHTML = html;
        return e;
      }

      function section(bgClass, content) {
        var s = el('section', 'py-16 reveal ' + bgClass);
        var inner = el('div', 'max-w-4xl mx-auto px-6');
        inner.appendChild(content);
        s.appendChild(inner);
        return s;
      }

      function eyebrow(text) {
        return el('span', 'eyebrow', text);
      }

      function sectionTitle(text) {
        var h = el('h2', 'font-display font-bold mt-2 mb-6 text-[#0F0F0F]');
        h.textContent = text;
        h.style.fontSize = 'var(--text-h2)';
        return h;
      }

      function bodyP(text) {
        var p = el('p', 'text-[#4B5563] leading-relaxed');
        p.style.lineHeight = 'var(--leading-loose)';
        p.textContent = text;
        return p;
      }

      var bundle = window.getVioraBundle();
    var data = bundle.data;
    var ui = bundle.ui;
    var container = document.getElementById('viora-sections');
    if (!container || !data) return;
    container.innerHTML = '';
    var altBg = false;

      function nextBg() {
        var cls = altBg ? 'section-alt' : 'bg-white';
        altBg = !altBg;
        return cls;
      }

      // ------------------------------------------------------------------
      // 1. Overview
      // ------------------------------------------------------------------
      (function () {
        var d = data.overview;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.overview));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.body));
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 2. Problem
      // ------------------------------------------------------------------
      (function () {
        var d = data.problem;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.problem));
        wrap.appendChild(sectionTitle(d.title));

        var pullQuote = el('blockquote',
          'border-l-4 pl-6 py-2 my-2',
          '');
        pullQuote.style.borderColor = 'var(--color-accent)';
        pullQuote.style.background = 'var(--color-accent-light)';
        pullQuote.style.borderRadius = '0 0.5rem 0.5rem 0';
        var pq = el('p', 'text-[#374151] italic leading-relaxed');
        pq.style.lineHeight = 'var(--leading-loose)';
        pq.textContent = d.body;
        pullQuote.appendChild(pq);
        wrap.appendChild(pullQuote);

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 3. Goal
      // ------------------------------------------------------------------
      (function () {
        var d = data.goal;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.goal));
        wrap.appendChild(sectionTitle(d.title));

        var ul = el('ul', 'space-y-3');
        d.items.forEach(function (item) {
          var li = el('li', 'flex items-start gap-3');
          var bullet = el('span',
            'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
            '');
          bullet.style.background = 'var(--color-accent)';
          var icon = el('svg');
          icon.setAttribute('viewBox', '0 0 12 12');
          icon.setAttribute('width', '10');
          icon.setAttribute('height', '10');
          icon.setAttribute('fill', 'none');
          icon.setAttribute('aria-hidden', 'true');
          icon.innerHTML = '<polyline points="2,6 5,9 10,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
          bullet.appendChild(icon);
          var text = el('span', 'text-[#4B5563]');
          text.style.lineHeight = 'var(--leading-normal)';
          text.textContent = item;
          li.appendChild(bullet);
          li.appendChild(text);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 4. My Role
      // ------------------------------------------------------------------
      (function () {
        var d = data.myRole;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.myRole));
        wrap.appendChild(sectionTitle(d.title));

        var meta = el('div', 'flex flex-wrap gap-3 mb-6');

        var roleBadge = el('span',
          'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold',
          '');
        roleBadge.style.background = 'var(--color-accent)';
        roleBadge.style.color = '#ffffff';
        roleBadge.textContent = d.role;

        var teamBadge = el('span',
          'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border',
          '');
        teamBadge.style.borderColor = 'var(--color-border)';
        teamBadge.style.color = 'var(--color-text-secondary)';
        teamBadge.textContent = d.teamSize;

        meta.appendChild(roleBadge);
        meta.appendChild(teamBadge);
        wrap.appendChild(meta);
        wrap.appendChild(bodyP(d.body));
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 5. User Flow
      // ------------------------------------------------------------------
      (function () {
        var d = data.userFlow;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.userFlow));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.description));

        var flowList = el('div', 'mt-6 border border-[#E5E7EB] rounded-xl overflow-hidden');
        d.flow.forEach(function (item, idx) {
          var row = el('div', 'flow-step px-4');
          var num = el('div', 'flow-step-number flex-shrink-0');
          num.textContent = String(idx + 1);
          var textWrap = el('div', 'flex-1 py-1');
          var stepName = el('p', 'font-semibold text-[#0F0F0F] text-sm mb-0.5');
          stepName.textContent = item.step;
          var stepDetail = el('p', 'text-[#4B5563] text-sm');
          stepDetail.style.lineHeight = 'var(--leading-normal)';
          stepDetail.textContent = item.detail;
          textWrap.appendChild(stepName);
          textWrap.appendChild(stepDetail);
          row.appendChild(num);
          row.appendChild(textWrap);
          flowList.appendChild(row);
        });
        wrap.appendChild(flowList);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 6. UI/UX
      // ------------------------------------------------------------------
      (function () {
        var d = data.uiux;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.uiux));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.philosophy));

        var princTitle = el('h3', 'font-display font-semibold mt-6 mb-3 text-[#0F0F0F]');
        princTitle.style.fontSize = 'var(--text-h4)';
        princTitle.textContent = ui.designPrinciples;
        wrap.appendChild(princTitle);

        var ul = el('ul', 'space-y-2');
        d.principles.forEach(function (p) {
          var li = el('li', 'flex items-start gap-2');
          var dot = el('span', 'text-accent font-bold flex-shrink-0 mt-0.5', '✦');
          dot.style.color = 'var(--color-accent)';
          var t = el('span', 'text-[#4B5563] text-sm');
          t.style.lineHeight = 'var(--leading-normal)';
          t.textContent = p;
          li.appendChild(dot);
          li.appendChild(t);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);

        // Gradient placeholder for UI screens
        var screenWrap = el('div', 'mt-8 rounded-2xl overflow-hidden flex items-center justify-center',
          '<span style="color:rgba(255,255,255,0.85);font-family:var(--font-display);font-weight:700;font-size:0.875rem;letter-spacing:0.1em;text-transform:uppercase;">' + ui.appScreens + '</span>');
        screenWrap.style.background = 'linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%)';
        screenWrap.style.height = '200px';
        wrap.appendChild(screenWrap);

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 7. Key Features
      // ------------------------------------------------------------------
      (function () {
        var d = data.keyFeatures;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.features));
        wrap.appendChild(sectionTitle(d.title));

        var grid = el('div', 'grid sm:grid-cols-2 gap-4');
        d.features.forEach(function (feat) {
          var card = el('div', 'feature-card');
          var name = el('p', 'font-semibold text-[#0F0F0F] text-sm mb-1');
          name.textContent = feat.name;
          var detail = el('p', 'text-[#4B5563] text-sm');
          detail.style.lineHeight = 'var(--leading-normal)';
          detail.textContent = feat.detail;
          card.appendChild(name);
          card.appendChild(detail);
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 8. System Architecture
      // ------------------------------------------------------------------
      (function () {
        var d = data.architecture;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.architecture));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.description));

        // ASCII diagram
        var pre = el('pre', 'arch-pre mt-6');
        pre.textContent = d.archDiagram || window.VIORA_ARCH_DIAGRAM_EN;
        wrap.appendChild(pre);

        // Tier cards
        var tiersTitle = el('h3', 'font-display font-semibold mt-8 mb-4 text-[#0F0F0F]');
        tiersTitle.style.fontSize = 'var(--text-h4)';
        tiersTitle.textContent = ui.layers;
        wrap.appendChild(tiersTitle);

        var tiersGrid = el('div', 'grid sm:grid-cols-3 gap-4');
        d.tiers.forEach(function (tier) {
          var card = el('div', 'tier-card');
          var name = el('p', 'font-semibold text-[#0F0F0F] text-sm mb-2');
          name.textContent = tier.name;
          var ul = el('ul', 'space-y-1');
          tier.components.forEach(function (c) {
            var li = el('li', 'text-[#4B5563] text-xs');
            li.style.lineHeight = 'var(--leading-normal)';
            li.textContent = '· ' + c;
            ul.appendChild(li);
          });
          card.appendChild(name);
          card.appendChild(ul);
          tiersGrid.appendChild(card);
        });
        wrap.appendChild(tiersGrid);

        // External services
        var extTitle = el('h3', 'font-display font-semibold mt-6 mb-3 text-[#0F0F0F]');
        extTitle.style.fontSize = 'var(--text-h4)';
        extTitle.textContent = ui.externalServices;
        wrap.appendChild(extTitle);

        var extUl = el('ul', 'space-y-1');
        d.externalServices.forEach(function (svc) {
          var li = el('li', 'text-[#4B5563] text-sm flex items-center gap-2');
          li.innerHTML = '<span style="color:var(--color-accent);font-weight:700;">→</span> ' + svc;
          extUl.appendChild(li);
        });
        wrap.appendChild(extUl);

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 9. Database
      // ------------------------------------------------------------------
      (function () {
        var d = data.database;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.database));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.description));

        var tableList = el('div',
          'mt-6 border border-[#E5E7EB] rounded-xl overflow-hidden divide-y divide-[#E5E7EB]');
        d.tables.forEach(function (tbl) {
          var row = el('div', 'db-table-item px-4');
          var nameEl = el('span', 'db-table-name');
          nameEl.textContent = tbl.name;
          var desc = el('span', 'text-[#4B5563] text-sm');
          desc.style.lineHeight = 'var(--leading-normal)';
          desc.textContent = tbl.description;
          row.appendChild(nameEl);
          row.appendChild(desc);
          tableList.appendChild(row);
        });
        wrap.appendChild(tableList);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 10. API / Backend
      // ------------------------------------------------------------------
      (function () {
        var d = data.backend;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.backend));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.description));

        var patternsTitle = el('h3', 'font-display font-semibold mt-6 mb-3 text-[#0F0F0F]');
        patternsTitle.style.fontSize = 'var(--text-h4)';
        patternsTitle.textContent = ui.patterns;
        wrap.appendChild(patternsTitle);

        var ul = el('ul', 'space-y-2 mb-8');
        d.patterns.forEach(function (p) {
          var li = el('li', 'flex items-start gap-2');
          var dot = el('span', 'flex-shrink-0 mt-1', '');
          dot.style.width = '6px';
          dot.style.height = '6px';
          dot.style.borderRadius = '50%';
          dot.style.background = 'var(--color-accent)';
          dot.style.marginTop = '7px';
          var t = el('span', 'text-[#4B5563] text-sm');
          t.style.lineHeight = 'var(--leading-normal)';
          t.textContent = p;
          li.appendChild(dot);
          li.appendChild(t);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);

        var routesTitle = el('h3', 'font-display font-semibold mb-4 text-[#0F0F0F]');
        routesTitle.style.fontSize = 'var(--text-h4)';
        routesTitle.textContent = ui.routeGroups;
        wrap.appendChild(routesTitle);

        d.routeGroups.forEach(function (group) {
          var rg = el('div', 'route-group');
          var hdr = el('div', 'route-group-header');
          hdr.textContent = '/api/v1' + group.prefix;
          var body = el('div', 'route-group-body');
          group.endpoints.forEach(function (ep) {
            var tag = el('span', 'route-tag');
            tag.textContent = ep;
            body.appendChild(tag);
          });
          rg.appendChild(hdr);
          rg.appendChild(body);
          wrap.appendChild(rg);
        });

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 11. AI Integration
      // ------------------------------------------------------------------
      (function () {
        var d = data.aiIntegration;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.ai));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.description));

        var featuresGrid = el('div', 'grid sm:grid-cols-2 gap-4 mt-6');

        [d.chatbot, d.behaviourAnalysis].forEach(function (feat) {
          var card = el('div', 'feature-card');
          var name = el('p', 'font-semibold text-[#0F0F0F] text-sm mb-2');
          name.textContent = feat.name;
          var detail = el('p', 'text-[#4B5563] text-sm');
          detail.style.lineHeight = 'var(--leading-normal)';
          detail.textContent = feat.detail;
          card.appendChild(name);
          card.appendChild(detail);
          featuresGrid.appendChild(card);
        });
        wrap.appendChild(featuresGrid);

        var implTitle = el('h3', 'font-display font-semibold mt-8 mb-3 text-[#0F0F0F]');
        implTitle.style.fontSize = 'var(--text-h4)';
        implTitle.textContent = ui.implementationNotes;
        wrap.appendChild(implTitle);

        var ul = el('ul', 'space-y-2');
        d.implementation.forEach(function (note) {
          var li = el('li', 'flex items-start gap-2');
          var dot = el('span', 'flex-shrink-0', '');
          dot.style.width = '6px';
          dot.style.height = '6px';
          dot.style.borderRadius = '50%';
          dot.style.background = 'var(--color-accent)';
          dot.style.marginTop = '7px';
          dot.style.flexShrink = '0';
          var t = el('span', 'text-[#4B5563] text-sm');
          t.style.lineHeight = 'var(--leading-normal)';
          t.textContent = note;
          li.appendChild(dot);
          li.appendChild(t);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 12. Challenges & Solutions
      // ------------------------------------------------------------------
      (function () {
        var d = data.challenges;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.challenges));
        wrap.appendChild(sectionTitle(d.title));

        var list = el('div', 'space-y-6 mt-2');
        d.items.forEach(function (item, idx) {
          var pair = el('div',
            'border border-[#E5E7EB] rounded-xl overflow-hidden');

          var challengeBlock = el('div', 'px-5 py-4');
          challengeBlock.style.borderBottom = '1px solid var(--color-border)';
          var cLabel = el('p', 'challenge-label', ui.challenge + ' ' + (idx + 1));
          var cText = el('p', 'text-[#0F0F0F] text-sm font-medium');
          cText.style.lineHeight = 'var(--leading-normal)';
          cText.textContent = item.challenge;
          challengeBlock.appendChild(cLabel);
          challengeBlock.appendChild(cText);

          var solutionBlock = el('div', 'px-5 py-4');
          solutionBlock.style.background = '#F0FDF4';
          var sLabel = el('p', 'solution-label', ui.solution);
          var sText = el('p', 'text-[#374151] text-sm');
          sText.style.lineHeight = 'var(--leading-normal)';
          sText.textContent = item.solution;
          solutionBlock.appendChild(sLabel);
          solutionBlock.appendChild(sText);

          pair.appendChild(challengeBlock);
          pair.appendChild(solutionBlock);
          list.appendChild(pair);
        });
        wrap.appendChild(list);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 13. Outcome
      // ------------------------------------------------------------------
      (function () {
        var d = data.outcome;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.outcome));
        wrap.appendChild(sectionTitle(d.title));
        wrap.appendChild(bodyP(d.summary));

        var delivTitle = el('h3', 'font-display font-semibold mt-6 mb-3 text-[#0F0F0F]');
        delivTitle.style.fontSize = 'var(--text-h4)';
        delivTitle.textContent = ui.deliverables;
        wrap.appendChild(delivTitle);

        var ul = el('ul', 'space-y-2 mb-8');
        d.deliverables.forEach(function (item) {
          var li = el('li', 'flex items-start gap-3');
          var bullet = el('span',
            'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
            '');
          bullet.style.background = 'var(--color-accent)';
          var icon = el('svg');
          icon.setAttribute('viewBox', '0 0 12 12');
          icon.setAttribute('width', '10');
          icon.setAttribute('height', '10');
          icon.setAttribute('fill', 'none');
          icon.setAttribute('aria-hidden', 'true');
          icon.innerHTML = '<polyline points="2,6 5,9 10,3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
          bullet.appendChild(icon);
          var t = el('span', 'text-[#4B5563] text-sm');
          t.style.lineHeight = 'var(--leading-normal)';
          t.textContent = item;
          li.appendChild(bullet);
          li.appendChild(t);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);

        var metricsTitle = el('h3', 'font-display font-semibold mb-3 text-[#0F0F0F]');
        metricsTitle.style.fontSize = 'var(--text-h4)';
        metricsTitle.textContent = ui.metrics;
        wrap.appendChild(metricsTitle);

        var tableWrap = el('div', 'border border-[#E5E7EB] rounded-xl overflow-hidden');
        var table = el('table', 'metrics-table');
        table.setAttribute('aria-label', ui.metricsAria);
        var thead = el('thead');
        var tr = el('tr');
        tr.appendChild(el('th', '', ui.metricCol));
        tr.appendChild(el('th', '', ui.valueCol));
        thead.appendChild(tr);
        table.appendChild(thead);

        var tbody = el('tbody');
        d.metrics.forEach(function (m) {
          var row = el('tr');
          var labelTd = el('td');
          labelTd.textContent = m.label;
          var valueTd = el('td');
          var valSpan = el('span', 'placeholder');
          valSpan.textContent = m.value;
          valueTd.appendChild(valSpan);
          row.appendChild(labelTd);
          row.appendChild(valueTd);
          tbody.appendChild(row);
        });
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        wrap.appendChild(tableWrap);

        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
      // 14. Lessons Learned
      // ------------------------------------------------------------------
      (function () {
        var d = data.lessonsLearned;
        var wrap = el('div');
        wrap.appendChild(eyebrow(ui.eyebrows.reflections));
        wrap.appendChild(sectionTitle(d.title));

        var grid = el('div', 'grid sm:grid-cols-2 gap-5 mt-2');
        d.items.forEach(function (item) {
          var card = el('div', 'lesson-card');
          var area = el('p',
            'text-xs font-bold uppercase tracking-widest mb-2',
            '');
          area.style.color = 'var(--color-accent)';
          area.textContent = item.area;
          var lesson = el('p', 'text-[#4B5563] text-sm');
          lesson.style.lineHeight = 'var(--leading-loose)';
          lesson.textContent = item.lesson;
          card.appendChild(area);
          card.appendChild(lesson);
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        container.appendChild(section(nextBg(), wrap));
      })();

      // ------------------------------------------------------------------
  };

})();
