# Thạch Thị Huệ Trinh — Personal Portfolio

Personal portfolio website for Thạch Thị Huệ Trinh, Frontend Developer & UI/UX-Oriented IT Graduate.

## Project Structure

```
portfolio/
├── index.html              ← Main page (Hero, About, Skills, Projects, Contact)
├── viora.html              ← VIORA case study (14 sections)
├── habitu.html             ← HABITU case study (6 sections)
├── css/
│   └── style.css           ← Custom CSS (design tokens, animations, components)
├── js/
│   ├── main.js             ← Navigation, scroll behavior, DOM rendering
│   └── animations.js       ← Scroll reveal (IntersectionObserver)
├── data/
│   └── content.js          ← All site content as window globals
└── portfolio/
    ├── cv.png              ← Personal photo
    └── 1_CV_ThachThiHueTrinh.pdf
```

## How to Open Locally

No build step required. Open `index.html` directly in any modern browser:

- Double-click `index.html`, or
- Right-click → "Open with" → browser of your choice, or
- Use VS Code Live Server extension for hot reload

## How to Update Content

All content is in `data/content.js`. Edit that file — no need to touch any HTML.

### Update personal info / links
```js
window.SITE_META = {
  name: "...",
  email: "...",
  github: "...",
  linkedin: "...",
  // etc.
};
```

### Update timeline
```js
window.TIMELINE = [
  { year: "2021", label: "Enrolled at Trà Vinh University", description: "..." },
  // add or edit milestones
];
```

### Update skills
```js
window.SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "..."] },
  // add categories or items
];
```

### Update projects
Edit `window.PROJECTS` — each project has: `id`, `number`, `name`, `tagline`, `description`, `role`, `stack`, `highlights`, `placeholder`, `caseStudyUrl`.

## How to Add Project Screenshots

1. Add screenshot files to the `portfolio/` folder (e.g., `portfolio/viora-screenshot.png`)
2. In `data/content.js`, update the project's `placeholder` field:
```js
// Before (gradient placeholder):
placeholder: { type: "gradient", value: "linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%)" }

// After (real screenshot):
placeholder: { type: "image", value: "portfolio/viora-screenshot.png" }
```
3. Update the rendering in `js/main.js` to handle `type: "image"` if not already done — or simply replace the gradient style with an `<img>` tag.

## How to Update CV

Replace `portfolio/1_CV_ThachThiHueTrinh.pdf` with the new file. If the filename changes, update it in `data/content.js`:
```js
window.SITE_META = {
  cv: "portfolio/NEW_FILENAME.pdf",
  // ...
};
```

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 semantic |
| Styling | Tailwind CSS (CDN) + custom `css/style.css` |
| Logic | Vanilla JavaScript ES6+ |
| Fonts | Google Fonts (Plus Jakarta Sans + Inter) |
| Data | `data/content.js` (window globals, no build step) |

## Design Tokens

Primary design tokens are in `css/style.css` under `:root`:

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#6366F1` | Buttons, links, highlights |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-alt` | `#F9F9F7` | Alternating section background |
| `--color-text-primary` | `#0F0F0F` | Headings |
| `--color-text-secondary` | `#4B5563` | Body text |

To change the accent color, update `--color-accent` and `--color-accent-hover` in `css/style.css`.
