# Frontend Developer Tools — Reference v1.6

*A curated list of tools, resources, and references for frontend development. Organized by purpose.*

*Aligned with Stack Charter v1.5 — every tool here has a place in the phases.*

---

## 🎯 Quick Reference (Read First)

**What this document is:** A lookup, not a curriculum.
**What it's aligned with:** Stack Charter v1.5.
**Current Phase:** Phase 1 — Vanilla JS → Node → React/TS
**What to focus on right now:** JavaScript.info chapters, CodeWars, Project 6

**Rule:** Use this reference when you need something specific. Not as a reading list.

---

## 🎨 Design Inspiration

*When you need to see what "good" looks like.*

| Tool | URL | Phase | Best For |
|---|---|---|---|
| **Godly** | godly.website | All | Animations, hover effects, interactive experiences |
| **Awwwards** | awwwards.com | All | Benchmarking against world-class design |
| **Codrops** | tympanus.net/codrops | All | Advanced interaction tutorials |
| **Minimal Gallery** | minimal.gallery | All | Clean, minimalist references |
| **CSS Design Awards** | cssdesignawards.com | All | Understanding "polished" |
| **Lazyweb** | Via MCP in Cursor/Claude Code | All | 257,000+ real product screenshots |

**Dropped:** Killer Portfolio, Hover States, Landbook — too narrow or defunct.

---

## 📚 Learning Resources

*Where to learn and practice.*

| Resource | URL | Phase | Purpose |
|---|---|---|---|
| **JavaScript.info** | javascript.info | Phase 1 | Structured JS tutorial. Primary reference |
| **MDN Web Docs** | developer.mozilla.org | All | Exact syntax, browser behavior |
| **CodeWars** | codewars.com | Phase 1 | Pattern practice |
| **Tour of Go** | go.dev/tour | Phase 2 | Interactive Go tutorial |
| **Scrimba Node.js** | scrimba.com | Phase 1 | Interactive Node.js |
| **TypeScript Handbook** | typescriptlang.org/docs/handbook | Phase 1 | Official TypeScript |
| **roadmap.sh** | roadmap.sh | All | Visual roadmaps |
| **Frontend Masters** | frontendmasters.com | All | Paid expert courses |
| **The Odin Project** | theodinproject.com | Phase 1 | Full-stack curriculum |

---

## 🛠️ Development Tools

*What you use while building.*

| Tool | Phase | Purpose |
|---|---|---|
| **VS Code** | All | Primary code editor |
| **Chrome DevTools** | All | Debugging, DOM inspection, network, performance |
| **Git** | All | Version control |
| **GitHub** | All | Remote repos, collaboration, portfolio |
| **Vite** | Phase 1+ | Fast build tool and dev server |
| **npm / pnpm** | Phase 1+ | Package managers |
| **Postman / Insomnia** | Phase 1+ | API testing |
| **Excalidraw** | All | Wireframes, diagrams |
| **Figma** | All | High-fidelity design, prototyping |

---

## 🎬 Animation & Motion

*Phase 3 — Spatial Computing.*

| Library | Phase | Purpose |
|---|---|---|
| **GSAP** | Phase 3 | Industry-standard timeline animations |
| **Framer Motion** | Phase 3 (optional) | React animation. Declarative |
| **Three.js** | Phase 3 | 3D graphics, WebGL |
| **React Three Fiber** | Phase 3 | Three.js for React |
| **A-Frame** | Phase 3 (optional) | HTML-based WebXR |
| **animate.css** | Any (light use) | Drop-in CSS animations |
| **Velocity.js** | Skip unless legacy | Fast jQuery-compatible animations |

**Note:** No animation libraries in Phase 1. CSS transitions and hover effects only.

---

## 🧩 CSS Frameworks & Systems

| Tool | Phase | Purpose |
|---|---|---|
| **Tailwind CSS** | Phase 1 | Primary styling system |
| **CSS Modules** | Phase 1+ | Component-scoped CSS when needed |
| **Sass / SCSS** | When required | Familiarity only. Legacy codebases |
| **PostCSS** | Phase 2+ | CSS transformation |
| **Styled Components / Emotion** | Phase 2+ | CSS-in-JS for React |
| **Bootstrap** | Skip unless legacy | Older component framework |

---

## ⚛️ JavaScript Frameworks & Libraries

| Framework | Phase | Purpose |
|---|---|---|
| **Node.js** | Phase 1 | JS runtime for backend |
| **Express** | Phase 1 | Node API framework |
| **PostgreSQL** | Phase 1 | Relational database |
| **React** | Phase 1 | Component-based frontend |
| **TypeScript** | Phase 1 | Type-safe JavaScript |
| **Next.js** | Phase 1 | React meta-framework |
| **Astro** | Phase 2+ (optional) | Content-focused, performance-first |
| **Vue / Svelte / Angular** | Skip unless paid | Not my path |

---

## 🧪 Testing Tools

| Tool | Phase | Purpose |
|---|---|---|
| **Vitest** | Phase 1+ | Unit and integration testing |
| **Playwright** | Phase 1+ | End-to-end testing |
| **Jest** | When required | Unit testing (legacy/React) |
| **Cypress** | Skip unless required | E2E (alternative to Playwright) |
| **Testing Library** | Phase 1+ | Component testing for React |

---

## 🚀 Deployment & Hosting

| Tool | Phase | Purpose |
|---|---|---|
| **Vercel** | Phase 1 | Frontend and Next.js |
| **Netlify** | Phase 1 | Static frontend |
| **Railway** | Phase 1+ | Full-stack with databases |
| **Render** | Phase 1+ | APIs and frontends |
| **GitHub Pages** | Phase 1 | Free static hosting, portfolios |
| **Cloudflare Pages** | Phase 1+ | Fast static hosting |

---

## 🧩 Backend & Databases

| Tool | Phase | Purpose |
|---|---|---|
| **Node.js** | Phase 1 | Backend runtime |
| **Express** | Phase 1 | API framework |
| **PostgreSQL** | Phase 1 | Relational database |
| **Prisma / Drizzle** | Phase 2+ | ORMs (after knowing raw SQL) |
| **Redis** | Phase 3+ | Caching, sessions |
| **MongoDB** | Skip unless project requires | Document DB |

---

## 🐹 Go Stack (Phase 2)

| Tool | Purpose |
|---|---|
| **Tour of Go** | Primary learning resource |
| **Standard library** | `net/http`, `fmt`, `os`, `encoding/json` |
| **Goroutines / Channels** | Concurrency |
| **Gin / Chi** | Web frameworks (only when needed) |
| **Testing** | Built-in `testing` package |

---

## 🐍 Python & AI Stack (Phase 2)

| Tool | Purpose |
|---|---|
| **Python 3** | Core language |
| **NumPy** | Numerical computing |
| **Pandas** | Data manipulation |
| **Jupyter** | Interactive experimentation |
| **scikit-learn** | Classical ML |
| **PyTorch** | Deep learning |
| **Hugging Face** | Pretrained models, NLP |
| **Qiskit / PennyLane** | Quantum (Phase 4) |

---

## 🥽 Spatial Computing (Phase 3)

| Tool | Purpose |
|---|---|
| **Three.js** | 3D graphics |
| **WebGL** | Low-level 3D API |
| **GSAP** | Timeline animations |
| **WebXR** | Browser AR/VR |
| **React Three Fiber** | Declarative 3D for React |

---

## 🎨 Design & Assets

| Tool | Purpose |
|---|---|
| **Google Fonts** | Web fonts |
| **Lucide** | Open-source icon set (primary) |
| **Heroicons** | Alternative icon set |
| **Font Awesome** | Alternative icon set |
| **Unsplash** | Free high-res images |
| **Coolors** | Color palette generation |
| **Realtime Colors** | Preview palettes on real UI |
| **TinyPNG** | Image compression |

---

## 📊 Data Visualization

*Phase 2+ depending on project needs.*

| Tool | Phase | Purpose |
|---|---|---|
| **Chart.js** | Phase 2+ | Simple, flexible charts |
| **D3.js** | Phase 3+ | Low-level visualization |
| **Recharts** | Phase 2+ | React charting |
| **Three.js** | Phase 3 | 3D visualization |

---

## 🔍 Accessibility

*Phase 1+ — part of normal development.*

| Tool | Purpose |
|---|---|
| **Lighthouse** | Accessibility, performance, SEO |
| **axe DevTools** | Browser accessibility testing |
| **WAVE** | Accessibility evaluation |
| **Pa11y** | Automated testing |

---

## 📖 Documentation & Style Guides

| Resource | Purpose |
|---|---|
| **MDN Web Docs** | Web platform reference |
| **DevDocs** | Multi-documentation reader |
| **TypeScript Handbook** | TypeScript reference |
| **JavaScript.info** | JavaScript learning |
| **Google Style Guides** | HTML, CSS, JS conventions |
| **Airbnb JS Style Guide** | Community style guide |

---

## 🧭 Inspiration for Creative Development

| Name | Focus |
|---|---|
| **Arthur Engel** | WebGPU, Three.js, real-time 3D |
| **Daniel Kiss** | Motion, interactive experiences |
| **Edoardo Lunardi** | Creative frontend, Awwwards jury |
| **Cyd Stumpel** | Creative development |
| **Robin Payot** | WebGL, animation |
| **Guillaume Lanier** | 2D/3D graphics |
| **Quentin Hocdé** | Awwwards Site of the Day |

---

## 🎯 Project 6 — Immediate Reading

*JavaScript.info chapters to read before building.*

- [ ] Array methods
- [ ] `Object.keys`, `.values`, `.entries`
- [ ] Destructuring assignment
- [ ] Map and Set
- [ ] Promises
- [ ] `async/await`
- [ ] Fetch
- [ ] Error handling with `try...catch`
- [ ] DOM manipulation
- [ ] Events — Introduction and Delegation
- [ ] LocalStorage

---

## 📌 The Rule

> **Use this as a reference. Not a checklist. Not a curriculum.**

| Situation | Go To |
|---|---|
| Need design inspiration | Design Inspiration section |
| Stuck on a JS concept | JavaScript.info |
| Need programming practice | CodeWars |
| Need exact browser behavior | MDN |
| Code isn't behaving | Chrome DevTools |
| Need design research | Lazyweb / Figma |
| Building frontend | React / Next.js |
| Building backend | Node / Express |
| Need 3D in browser | Three.js |
| Need animation | GSAP |
| Need AI/ML | Python / PyTorch / Hugging Face |
| Deploying | Vercel / Netlify |

---

## ⚠️ Don't Explore Everything at Once

**Pick the next thing you actually need.**

You don't need to learn every framework, library, animation tool, testing framework, or deployment platform on this list.

The goal is not to know all the tools.

The goal is to know **where to look when you need something.**

---

## 🔗 Alignment with Stack Charter

Every tool here maps to a phase in your Stack Charter:

| Phase | Primary Tools |
|---|---|
| **Phase 1** | HTML, CSS, JS, Tailwind, Git, Node, Express, PostgreSQL, React, TypeScript, Next.js, Vite, Vitest, Playwright, Vercel, Netlify |
| **Phase 2** | Go, Python, NumPy, Pandas, scikit-learn, PyTorch, Hugging Face |
| **Phase 3** | Three.js, WebGL, GSAP, WebXR, React Three Fiber, Master's |
| **Phase 4** | Quantum optimization, Kigali, deep tech venture |

**Anything not in this list is either:** (a) not my path, (b) a paid-work exception, or (c) not needed yet.

---

## 🧾 Version History

| Version | Date | Notes |
|---|---|---|
| 1.0 | Sep 2026 | Initial tools reference |
| 1.5 | Sep 2026 | Restructured with phase alignment, expanded |
| 1.6 | Sep 2026 | Aligned with Stack Charter v1.5 — added phase columns, backend stack, Go/Python sections, spatial section, version history |

---

*Living document. Update when the Stack Charter updates.*