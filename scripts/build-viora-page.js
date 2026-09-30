const fs = require('fs');
const lines = fs.readFileSync('d:/portfolio/viora.html', 'utf8').split(/\r?\n/);
const start = lines.findIndex((l) => l.includes('function el(tag, className, html)'));
const end = lines.findIndex((l) => l.includes('// Init scroll reveal'));
let body = lines.slice(start, end).join('\n');

const reps = [
  ["eyebrow('Overview')", 'eyebrow(ui.eyebrows.overview)'],
  ["eyebrow('Problem')", 'eyebrow(ui.eyebrows.problem)'],
  ["eyebrow('Goal')", 'eyebrow(ui.eyebrows.goal)'],
  ["eyebrow('My Role')", 'eyebrow(ui.eyebrows.myRole)'],
  ["eyebrow('User Flow')", 'eyebrow(ui.eyebrows.userFlow)'],
  ["eyebrow('UI/UX')", 'eyebrow(ui.eyebrows.uiux)'],
  ["eyebrow('Features')", 'eyebrow(ui.eyebrows.features)'],
  ["eyebrow('Architecture')", 'eyebrow(ui.eyebrows.architecture)'],
  ["eyebrow('Database')", 'eyebrow(ui.eyebrows.database)'],
  ["eyebrow('API & Backend')", 'eyebrow(ui.eyebrows.backend)'],
  ["eyebrow('AI Integration')", 'eyebrow(ui.eyebrows.ai)'],
  ["eyebrow('Challenges')", 'eyebrow(ui.eyebrows.challenges)'],
  ["eyebrow('Outcome')", 'eyebrow(ui.eyebrows.outcome)'],
  ["eyebrow('Reflections')", 'eyebrow(ui.eyebrows.reflections)'],
  ["princTitle.textContent = 'Design Principles'", 'princTitle.textContent = ui.designPrinciples'],
  ["'>VIORA — App Screens</span>'", "'>' + ui.appScreens + '</span>'"],
  ["tiersTitle.textContent = 'Layers'", 'tiersTitle.textContent = ui.layers'],
  ["extTitle.textContent = 'External Services'", 'extTitle.textContent = ui.externalServices'],
  ["patternsTitle.textContent = 'Patterns'", 'patternsTitle.textContent = ui.patterns'],
  ["routesTitle.textContent = 'Route Groups'", 'routesTitle.textContent = ui.routeGroups'],
  ["implTitle.textContent = 'Implementation Notes'", 'implTitle.textContent = ui.implementationNotes'],
  ["'Challenge ' + (idx + 1)", "ui.challenge + ' ' + (idx + 1)"],
  ["'solution-label', 'Solution'", "'solution-label', ui.solution"],
  ["delivTitle.textContent = 'Deliverables'", 'delivTitle.textContent = ui.deliverables'],
  ["metricsTitle.textContent = 'Metrics'", 'metricsTitle.textContent = ui.metrics'],
  ["el('th', '', 'Metric')", "el('th', '', ui.metricCol)"],
  ["el('th', '', 'Value')", "el('th', '', ui.valueCol)"],
  ["setAttribute('aria-label', 'Outcome metrics')", "setAttribute('aria-label', ui.metricsAria)"],
];

for (const [from, to] of reps) {
  body = body.split(from).join(to);
}

body = body.replace(
  "var container = document.getElementById('viora-sections');\n      var data = window.VIORA_CONTENT;\n      var altBg = false;",
  "var bundle = window.getVioraBundle();\n    var data = bundle.data;\n    var ui = bundle.ui;\n    var container = document.getElementById('viora-sections');\n    if (!container || !data) return;\n    container.innerHTML = '';\n    var altBg = false;"
);

body = body.replace(
  /pre\.textContent =[\s\S]*?'  └── Google OAuth 2\.0';/,
  'pre.textContent = d.archDiagram || window.VIORA_ARCH_DIAGRAM_EN;'
);

const header = `// js/viora-page.js — VIORA case study DOM renderer (EN/VI via i18n)
(function () {

  window.VIORA_ARCH_DIAGRAM_EN =
'┌─────────────────────────────────────────────────────────┐\\n' +
'│                    VIORA Architecture                   │\\n' +
'├─────────────┬──────────────────────┬────────────────────┤\\n' +
'│ Presentation│   Business Logic     │   Data Layer       │\\n' +
'│ (Flutter)   │   (Node.js/Express)  │   (MySQL)          │\\n' +
'├─────────────┼──────────────────────┼────────────────────┤\\n' +
'│ UI Screens  │ REST API Routes      │ Users table        │\\n' +
'│ State Mgmt  │ Auth Middleware       │ Habits table       │\\n' +
'│ HTTP Client │ Controllers           │ Habit_logs table   │\\n' +
'│ FCM handler │ Services              │ Streaks table      │\\n' +
'│             │ Gemini AI client      │ Community table    │\\n' +
'│             │ FCM push service      │ XP/Levels table    │\\n' +
'└─────────────┴──────────────────────┴────────────────────┘\\n\\n' +
'External Services:\\n' +
'  ├── Firebase Cloud Messaging\\n' +
'  ├── Gemini AI API\\n' +
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
`;

const out = header + body + '\n  };\n\n})();\n';
fs.writeFileSync('d:/portfolio/js/viora-page.js', out);
console.log('Wrote js/viora-page.js', out.length, 'bytes');
