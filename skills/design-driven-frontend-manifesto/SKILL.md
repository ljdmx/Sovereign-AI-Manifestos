---
name: design-driven-frontend-manifesto
description: AI-powered frontend design system with world-class aesthetic sovereignty and methodology
version: "3.2"
trigger_keywords: ["create component", "design system", "frontend component", "brand design", "UI development", "visual design", "dashboard", "landing page", "responsive layout", "dark mode", "animation", "mobile UI", "UI/UX", "color scheme", "accessibility"]
auto_activate: true
---

# Design-Driven Frontend Manifesto (DDFM)
## 🌐 World-Class Visual Design Handbook (Methodology Edition)

> [!IMPORTANT]
> **Aesthetic Sovereignty**: Deliver "Surgical UI" by default. 
> **Functional Fidelity**: UI must be 100% functional. Every card, button, and chart must be connected to real data streams.
> **Business Edge-Case Mapping**: Do not stop at [Empty/Loading/Error]; explicitly model Business Edge-Cases (e.g., [Payment Timeout], [Device Offline]).
> **Language Purity**: NEVER mix Chinese and English. Use i18n pattern for all text.
> **Accessibility First (A11y)**: WCAG 2.1 AA compliance by default.

---

## 0️⃣ Intent Disambiguation Layer (Activate First)

> [!IMPORTANT]
> AI MUST classify the UI project on **three axes** BEFORE applying any rule. Output classification explicitly: `[Grade: Enterprise | Locale: LTR+RTL | Compliance: Standard]`

| Axis | Consumer | Enterprise/Tool | Compliance |
|---|---|---|---|
| **UI Grade** | Marketing, B2C, Landing Pages | B2B SaaS, Dashboards, Admin Panels | Regulated: Healthcare, Finance, Gov |
| **Localization** | Single language / LTR only | Multi-language / LTR | Multi-language + RTL (Arabic, Hebrew, Persian) |
| **Interaction Density** | Airy, parallax, emotional animations | Dense datagrids, bulk actions, keyboard-only | Accessibility-first, forced Reduced Motion |

**Activation Rules**:
- `Grade = Consumer` → Prioritize: Spring animations, glassmorphism, hero imagery, emotional saturated palettes.
- `Grade = Enterprise` → Prioritize: data density, sortable table headers, keyboard-only flows, print stylesheets.
- `Localization = RTL` → Enforce: `dir="rtl"` on `<html>`, replace all directional CSS (e.g., `margin-left` → `margin-inline-start`), audit icon mirroring (arrows, back/forward icons), test with Arabic/Hebrew dummy content.
- `Compliance` active → Enforce: WCAG 2.1 AAA for critical actions (contrast ≥ 7:1), forced `prefers-reduced-motion` support, skip-navigation links.

**Skill Kickoff Card** (AI MUST output immediately after §0 classification, before any component generation):
```
🎨 [DDFM v3.2 Activated]
├─ UI Grade: [Consumer | Enterprise | Compliance]
├─ Locale: [LTR | RTL] | Dark Mode: First-Class Citizen
├─ Active: OKLCH Color Model + Spring Physics 400/30 + XState Mandate
└─ Ready. Describe your UI component or design system requirement.

---

## 1️⃣ Design Token Architecture
- **Mandate**: Do NOT scatter raw hex values or pixel numbers throughout components. 
- **Implementation**: All structural dimensions, colors, and shadows MUST be defined via CSS Custom Properties (`--color-brand-primary`, `--spacing-md`, `--radius-card`) or Tailwind configuration. 
- **Rule**: NEVER use hardcoded values like `#hex` or `16px` directly in component files. Theming MUST operate at the token level exclusively.
- **Token Linting**: Enforce token usage with a `stylelint` config that forbids raw hex/pixel values outside the token system. CI MUST fail on violations.
- **Z-Index Governance**: Z-index values MUST be defined as categorical tokens (`--z-dropdown: 10`, `--z-sticky: 40`, `--z-modal: 50`) limited to 5 explicit layers. NEVER use arbitrary magic numbers like `z-index: 9999`.

## 2️⃣ Color System & Dark Mode First
- **Dark Mode First-Class Citizenship**: Dark mode is NOT an afterthought. Every component MUST use an inverted or dual-token variable set mapping to `prefers-color-scheme: dark`.
- **Core Color Proportion**: ≤ 5%. The less used, the higher the recognition. Used ONLY for Logos or key CTAs.
- **Foundation Colors**: Low-interference, warm or cool grays depending on the mode.
- **Accessible Contrast (WCAG 2.1 AA)**: Text vs Background MUST meet at least 4.5:1 ratio for normal text.
- **OKLCH Color Model** (SHOULD for premium products): Use OKLCH instead of HSL/HEX for perceptual linearity. OKLCH ensures equal perceived brightness across all hues — critical for dark mode accuracy. Example: `--color-brand: oklch(55% 0.2 240)`. Light-mode `L` ≥ 60; dark-mode `L` ≤ 40. This eliminates the need for manual dark-mode contrast correction entirely.

## 3️⃣ Offline-First, Optimistic UI & URL State Sync
- **URL State Sovereignty**: All filterable, sortable, or paginated views (e.g., dashboards, data tables) MUST synchronize their state to URL search parameters (`?page=2&status=fault`). This ensures deep-linkability and safe browser back/forward navigation.
- **Mandate**: Users should never feel blocked by network latency.
- **Implementation Strategy**:
  - **REST API Path**: Mutate UI optimistically assuming success, manually rolling back only if the server responds with an error.
  - **Server Action Path (Next.js 15+)**: MUST use the `useOptimistic()` hook wrapped in `startTransition()` for native optimistic updates.
- **Network Resilience**: Check `navigator.onLine`. If offline, queue mutations and serve cached reads via Service Workers or IndexedDB.

## 4️⃣ State Machine Sovereignty
- **Mandate**: Prevent "impossible states" (e.g., `isLoading === true` AND `data != null` due to boolean overlap).
- **Implementation**: For complex components (multi-step forms, payment flows, heavy interactions), AI MUST use explicit Finite State Machines (e.g., XState) or strictly typed reducers (`{ status: 'idle' | 'loading' | 'success' | 'error' }`).
- **XState Mandate** (MUST for workflows with ≥ 6 state combinations, per §20 threshold): Auth flows, checkout wizards, and multi-step form sequences MUST use XState or equivalent state machine library. Zero boolean spaghetti (`isLoading && isError && hasData`) is acceptable — replace with explicit named states.

## 5️⃣ Kinetic Physics, Interactivity & Core Web Vitals
- **Core Web Vitals Target**: Ensure **INP (Interaction to Next Paint) < 200ms** by delegating heavy JS to Web Workers and keeping main thread unblocked. Ensure **LCP (Largest Contentful Paint)** by using `rel="preload"` for hero assets.
- **Performance Budget**: Initial JS payload MUST NOT exceed 200KB (gzipped). Prohibit heavy legacy libraries (e.g., use `date-fns` instead of `moment.js`).
- **List Virtualization Protocol**: Any data list traversing > 200 rows MUST utilize DOM virtualization (`@tanstack/react-virtual`, `vue-virtual-scroller`) to prevent disastrous main-thread blocking and UI unresponsiveness. NEVER render massive raw DOM tables.
- **Code Splitting (Dynamic Imports)**: Heavy dependencies (e.g., ECharts, PDF renderers, Map SDKs) MUST be dynamically imported (`import()`) and wrapped in Suspense with Skeleton fallbacks to avoid blocking the main bundle.
- **Kinetic Parameters**: 
  - **Spring Physics**: Default to spring animations (e.g., `stiffness: 400, damping: 30`) for scale/press effects to emulate physical weight.
  - **Cubic-Bezier**: For CSS transitions, use Apple-grade curves like `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Reduced Motion (A11y)**: All kinetic animations MUST respect `@media (prefers-reduced-motion: reduce)`. When active, transitions/animations MUST be instantaneous or fade-only to protect vestibular-sensitive users.
- **Micro-interaction Vocabulary** (enforce globally for design consistency):

  | Trigger | Animation Spec | Duration |
  |---|---|---|
  | Button press / tap | Scale down to 0.96 via spring (`stiffness: 400, damping: 30`) | ~80ms |
  | Form submit success | Checkmark SVG path-draw + element fade-in | 300ms ease-out |
  | Item delete / dismiss | Slide-out (translateX 100%) + height collapse to 0 | 250ms cubic-bezier(0.4, 0, 1, 1) |
  | Toast / notification appear | Slide-in from bottom + fade from 0→1 | 200ms spring |
  | Modal open | Scale from 0.95→1.0 + backdrop fade 0→0.6 | 200ms cubic-bezier(0.25, 1, 0.5, 1) |
  | Skeleton → content swap | Cross-fade opacity 0→1 | 150ms ease-in |
  | Form validation error | Input border → red + element shake (`translateX ±4px × 3`) | 400ms ease |
  | API error / toast | Red pulse ring expand from element center + fade-out | 500ms ease-out |
  | Permission denied / disabled | Shade to 40% opacity + `cursor: not-allowed` (no animation — instant) | Instant |
  | Network offline banner | Slide-in from top + pulsing amber dot (`opacity 1→0.4` loop) | 300ms spring |
  | Drag & Drop — drag start | Item scale 1.05 + opacity 0.7; siblings animate gap open (`translateY`) | 150ms spring |
  | Drag & Drop — drop success | Item snap to slot + siblings settle; brief 1.0→1.02→1.0 scale pulse | 200ms spring |

  AI MUST reference this vocabulary for every interactive element. Deviations require explicit justification.

**Spring Physics Reference** (apply to all `spring` timing entries above):
| Parameter | Value | Rationale |
|---|---|---|
| `stiffness` | **400** | Snappy, confident response — matches premium native app feel |
| `damping` | **30** | Natural settle without wobble or overshoot |
| Implement via | `framer-motion spring` / CSS `linear()` / Popmotion |

**Frustration-Aware Kinetics** (SHOULD for consumer-grade products): When `≥ 3 rapid clicks` are detected on the same element within 1s (rage-click pattern), AI MUST implement: (1) Slow animation speed to `0.6×` for 2s to signal "processing", (2) Display a contextual helper tooltip (e.g. "Processing… please wait"). This pattern measurably reduces user churn from UI confusion.

**Hardware-Aware Degradation** (MUST): Detect `navigator.hardwareConcurrency < 4` OR `prefers-reduced-motion` media query. When triggered, automatically disable: `backdrop-filter: blur()`, `box-shadow` animations, and 3D CSS transforms. Target: maintain ≥ 60FPS on mid-range devices at all times.

## 6️⃣ Skeleton Screen Protocol
- **Mandate**: Eliminate Cumulative Layout Shift (CLS) on load.
- **Implementation**: The `[Loading]` state MUST NEVER rely solely on a generic spinning indicator. All data-driven modules MUST render an exact-dimension skeleton placeholder during initial data fetch.

## 7️⃣ Shadow & Depth Design
- **Suggested Tiers:** Card (Light) -> Hover (Medium) -> Premium Block (Deep/Diffuse)
- **Principle**: Soft, restrained, conveying a sense of physical elevation using multi-layered soft shadows (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), ...`).

## 8️⃣ UI Layout, Typography & Fluidity
- **Fluid Formula**: Utilize `clamp(min_size, preferred_vw, max_size)` for font-sizes and paddings for stepless scaling.
- **Mobile-First Breakpoints**: Adopt Mobile-First `@media (min-width: ...)` strategy. Define standard breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`. Never invert to desktop-first.
- **Data Density Protocol**: AI MUST explicitly classify the UI as **Consumer-Grade** (airy, parallax) or **Enterprise/Tool-Grade** (dense datagrids, sortable headers, bulk actions). A CMS or IoT dashboard MUST NEVER be styled as a marketing card layout.
- **Keyboard Navigation**: MUST show clear `:focus-visible` rings. NEVER use `outline: none` without fallback.
- **Print Stylesheets (`@media print`)**: For Enterprise views (e.g., Reports, Invoices, Dashboards), AI MUST implement print styles: hiding sidebars, removing background colors, utilizing pure black-and-white layouts, and enforcing `page-break-inside: avoid` on core blocks.

## 9️⃣ Image & Media Pipeline Sovereignty
- **Mandate**: Visuals must never degrade Core Web Vitals (CLS/LCP).
- **Execution**: All user-visible `<img>` elements MUST:
  1. Use modern formats (`WebP/AVIF`).
  2. Define explicit `width` and `height` attributes to prevent layout shifts.
  3. Use `loading="lazy"` for below-fold content, and `fetchpriority="high"` for the LCP hero image.

## 🔟 Component-Level XSS Guard & CSP
- **Mandate**: The UI layer must autonomously defend against malicious payloads.
- **Execution**: NEVER use APIs like `dangerouslySetInnerHTML` or `v-html` with raw user input. If rich text rendering is unavoidable, AI MUST integrate a strict HTML sanitizer (e.g., `DOMPurify`) before injection.
- **CSP Headers**: For BFF frameworks (Next.js/Nuxt) or Nginx, AI MUST explicitly inject a `Content-Security-Policy` HTTP header that disables `unsafe-inline` scripts and sets strict `script-src` policies. This operates as the ultimate browser-level firewall against XSS.

---

## 1️⃣1️⃣ Component Error Boundaries & Hydration Stability
- **Error Boundaries**: Every independent business module (data table, sidebar, modal) MUST be wrapped in a React/Vue Error Boundary. JS runtime errors MUST trigger a localized Fallback UI (e.g., "Widget failed to load")—a single component failure MUST NEVER crash the entire page (global white screen).
- **SSR/RSC Hydration stability**: Zero-tolerance for Hydration Mismatch errors. ANY component rendering dynamic client-side state (timestamps, random numbers, `window` objects, `localStorage`) MUST be explicitly labeled with `"use client"` and MUST NOT render these dynamic values directly during the initial server pass.

## 1️⃣2️⃣ Rendering Islands Protocol
- **Performance Threshold**: For heavily static pages (>75% static content), AI MUST prioritize Partial Hydration / Islands Architecture (e.g., Astro or React Server Components) over full Client-Side Rendering to maximize Lighthouse scores.

## 1️⃣3️⃣ Mock-First & Zero-State Conversion
- **Mock-First Components (Storybook Ready)**: If the backend API is pending/failing, the UI MUST NOT white-screen. Components MUST include `defaultMockData` to render a high-fidelity static state.
- **Zero-State Conversion (No Empty Rooms)**: When a list is genuinely empty (e.g., a new user with no sensors), NEVER just show "No Data". AI MUST draw an **Empty State with Call-to-Action (CTA)** (e.g., an illustration with a "[+ Add First Device]" button) to drive business conversion.

## 1️⃣4️⃣ Data Visualization Sovereignty (Data-Vis)
- **Mandate**: Dashboards require strict charting rules. AI MUST select the correct chart type before implementation.
- **Chart Type Decision Tree**:
  | Data Pattern | Correct Chart | Anti-Pattern |
  |---|---|---|
  | Trend over time | Line / Area Chart | Pie chart |
  | Part-to-whole comparison | Donut (≤ 5 segments) / Stacked Bar | 3D Pie |
  | Distribution / outliers | Box Plot / Scatter | Bar chart |
  | Categorical comparison | Horizontal Bar | Vertical bar (> 6 cats) |
  | Geo / spatial density | Choropleth / Heatmap | Table |
  | KPI single value | Stat card + sparkline | Full chart |
- **Visual Rules**: Use low-interference palette (monochrome base + 1 semantic highlight). Auto-scale Y-axis from `data_min * 0.9` to `data_max * 1.1`—never force zero baseline for non-zero datasets.
- **Empty State**: Charts MUST display a styled empty state illustration (not blank axes) when data is absent.
- **Real-Time Anti-Flicker**: For live-updating charts (WebSocket / SSE), throttle re-renders to max 2 fps and use smooth interpolation (`d3.transition` or equivalent) to prevent visual jitter under high-frequency data.
- **Table Rules**: Complex data tables MUST support pagination, sortable headers (with sort direction indicator), column resizing, row selection, and text truncation with tooltip fallback by default.

---

## 1️⃣5️⃣ Visual Proportion & Layout Blueprint

### Desktop Proportion Table
| Element | Coverage Range |
| --- | --- |
| Background | 60–70% |
| Main Content | 20–30% |
| Premium/High-Value | 5–15% |
| Core Brand Color | ≤ 5% |

### Mobile Proportion Variant (viewport width ≤ 768px)
| Element | Coverage Range |
| --- | --- |
| Background | 40–50% |
| Main Content | 45–55% |
| Premium/High-Value | 3–8% |
| Core Brand Color | ≤ 5% |

> On narrow screens, background naturally contracts and content expands. AI MUST apply mobile proportions when generating mobile-first layouts or standalone mobile components.

## 1️⃣6️⃣ Internationalization (i18n) Engineering
- **Mandate**: Language Purity is not just visual; it is structural.
- **Execution**: NEVER hardcode user-facing strings in components. AI MUST generate `locales/en.json` (and others) and use i18n keys (e.g., `t('device.status.offline')`).
- **RTL / Bidirectional Support**: When `Localization = RTL` (see §0):
  1. Set `<html dir="rtl" lang="ar">` at the document root.
  2. Replace ALL directional CSS properties with logical equivalents: `margin-left` → `margin-inline-start`, `padding-right` → `padding-inline-end`, `border-left` → `border-inline-start`, `text-align: left` → `text-align: start`.
  3. Mirror directional icons (arrows, chevrons, back-button icons) using `transform: scaleX(-1)` or SVG variants.
  4. Test layout with Arabic placeholder text (`أبجد هوز`) to detect text-overflow and RTL flex/grid issues.

## 1️⃣7️⃣ Form UX Golden Rules
- **Mandate**: B2B forms must be fault-tolerant and highly communicative.
- **Rules**:
  1. **Inline Validation**: Errors MUST appear inline instantly on blur/change, never waiting for full form submission.
  2. **A11y Linkage**: Error text MUST be linked to inputs via `aria-describedby` or `aria-errormessage`.
  3. **Stepper Pattern**: Any form > 5 steps MUST be broken into a Wizard/Stepper flow with draft auto-saving capabilities.

## 1️⃣8️⃣ Public Page SEO Mandate
- **Mandate**: SEO is not an afterthought; it is structural to all public routes.
- **Execution**: Every public-facing page MUST:
  1. Define unique `<title>` and `<meta name="description">`.
  2. Implement Open Graph tags (`og:title`, `og:image`, `og:url`).
  3. Emit a `robots.txt` and `sitemap.xml` at the root.
  4. Inject JSON-LD `Schema.org` structured data for rich content (articles, products).

## 1️⃣9️⃣ Design Coherence Score Protocol
- **Mandate**: AI MUST self-score the delivered UI on three coherence axes before handoff.
- **Scoring Axes**:
  | Axis | Criteria | Min Score |
  |---|---|---|
  | **Layout Rhythm** | Consistent spacing scale, alignment grid, whitespace proportion | ≥ 8/10 |
  | **Color Harmony** | Token-compliant palette, contrast ratios, ≤5% brand color usage | ≥ 8/10 |
  | **Spatial Hierarchy** | Clear visual weight progression (H1→H2→Body→Caption), shadow tiers | ≥ 8/10 |
- **Enforcement**: If any axis scores < 8/10 → AI MUST apply `Color Role Rebalancing` (adjust brand color proportion) or `Spacing Normalization` (realign to token scale) before handoff.
- **Quantifiable Anchors** (objective pass/fail criteria per axis):
  - **Layout Rhythm ≥ 8**: ≥ 95% of spacing values originate from the token system; zero raw pixel magic-numbers detected outside token definition files.
  - **Color Harmony ≥ 8**: All color values map to named tokens; brand color ≤ 5% of total rendered surface area; all text/bg pairs ≥ WCAG 4.5:1.
  - **Spatial Hierarchy ≥ 8**: Font-size scale uses ≥ 4 distinct named steps; shadow depth increases monotonically from `card → hover → modal → overlay`.

## 2️⃣0️⃣ Component State Matrix (State × Role × Data)
- **Mandate**: For every complex interactive component, AI MUST declare a **State Matrix** before implementation.
- **Activation Threshold** (auto-computed before implementation):
  - Condition A: `State × Role` intersection combinations ≥ 6, OR
  - Condition B: Any Role produces a different rendered output (e.g., hidden vs. visible button).
  - AI MUST count combinations and output: `[State Matrix Required: Yes/No — N combinations detected]` before coding.
- **Three Axes**:
  - **State**: `idle | loading | success | error | empty | disabled`
  - **Role**: `viewer | editor | admin | guest`
  - **Data**: `populated | partial | empty | overflowed`
- **Execution**: Map axis intersections that produce unique UI variants. Unhandled intersections are bugs. Example for an approval button:
  ```
  [State: idle] × [Role: viewer]  → Hidden
  [State: idle] × [Role: editor]  → Active "Submit" button
  [State: loading] × [Role: editor] → Disabled + spinner
  [State: success] × [Role: admin] → "Approved" badge + audit link
  ```

## 2️⃣1️⃣ Design Drift Detector
- **Mandate**: AI MUST perform a **Token Diff** before delivering any new component.
- **Execution**:
  1. Extract all CSS Custom Properties, spacing values, and typography scales used in the **new** component.
  2. Compare against the values used in the **3 most recently delivered** components. **If fewer than 3 components exist in the project**, use the `templates/` directory baseline components as the Token Comparison Reference.
  3. If any NEW raw value (not in the token system) is introduced → **BLOCK** delivery, replace with token equivalent.
  4. Output a `Design Drift Report`: `{ new_component, drifted_properties[], corrected_to_tokens[] }`.
- **Goal**: Guarantee zero design drift accumulation across a project's lifetime.

---

## 🧠 AI Execution Protocol — Unified Delivery Workflow

**Execute in strict order for EVERY product:**
0. `Clean Slate` → Delete default framework boilerplate (e.g., `page.tsx`). Wipe default `globals.css` before applying DDFM tokens.
1. `Classify & Define Tokens` → Classify UI as Consumer-Grade or Enterprise/Tool-Grade. Create CSS Day/Night variables. Model states as explicit strings (not booleans).
2. `Load Proportions` → Follow Brand ≤5%, Background 60-70% rule. Scan `[UI Templates](templates/)` to avoid reinventing components.
3. `Generate Component` → Strict semantic HTML. Sanitize rich text (`DOMPurify`). Optimize images (`loading`, `width`, `height`, `fetchpriority`). Apply Spring/Cubic-Bezier animations. Preload LCP logic. Dynamic import heavy libs.
4. `Embed Skeleton & Optimistic Logic` → Build exact-dimension loading skeletons. Write optimistic mutations (`useOptimistic` or manual rollback).
5. `Quality Gate` → Verify all items below. Items marked **🛑 HARD BLOCK** must pass before handoff. Items marked **⚠️ WARN** must be logged and resolved before final delivery but do not block component handoff:

   | Check | Level |
   |---|---|
   | XSS safety (no raw `dangerouslySetInnerHTML`) | 🛑 HARD BLOCK |
   | SSR hydration isolation (`"use client"` where needed) | 🛑 HARD BLOCK |
   | Business Edge-Cases (payment timeout, offline) modeled | 🛑 HARD BLOCK |
   | Mobile-First breakpoints applied | 🛑 HARD BLOCK |
   | Mock-First fallback (`defaultMockData`) present | ⚠️ WARN |
   | Data-Vis chart type matches decision tree | ⚠️ WARN |
   | i18n keys used (no hardcoded user-facing strings) | ⚠️ WARN |
6. `Aesthetic & A11y Audit` → Run `node [Aesthetic Scorer](tools/aesthetic-scorer.js)`. **The script's output score is the canonical authority for Design Coherence Score (§19) — its rubric identically mirrors the three-axis protocol (Layout Rhythm, Color Harmony, Spatial Hierarchy) defined in §19.** Run Lighthouse `--accessibility` or `npx axe-core`. Run contrast ratio check **separately** for light mode AND dark mode token sets — both MUST pass WCAG 4.5:1 for normal text and 3:1 for large text. **All checks must score ≥ 90. Block handoff if any fails.**
7. `Visual Regression Gate` → Run `npx playwright screenshot` on all modified pages and compare pixel diffs against baseline snapshots (`pixelmatch` or `Chromatic`). If pixel diff > 0.1% on unintended areas → **BLOCK** handoff, output diff report, await explicit approval.

## 🗂️ Ecosystem Routing Protocol (Core Assets)
The following resources MUST be accessed via `view_file` or executed during generation:
- **[Aesthetic Scorer Tool](tools/aesthetic-scorer.js)**: MANDATORY JS script to quantify UI visual metric quality.
- **[UI Templates](templates/)**: Production-ready component boilerplate definitions.
- **[System Specs](docs/)**: DDFM technical documentation.

*Relying on this master methodology guarantees world-class, premium visual outputs with physical, fluid, resilient, secure, and accessible traits.*

---

## 🩺 Skill Health Check Protocol

At activation, AI MUST verify the following asset paths exist. If missing, emit `⚠️ [DDFM Asset Missing]: {path}` and apply inline fallback.

| Asset | Path | Fallback Behavior |
|---|---|---|
| Aesthetic Scorer | `tools/aesthetic-scorer.js` | Apply Design Coherence Score protocol (§19) inline |
| UI Templates | `templates/` | Generate component from DDFM rules with mock data |
| System Specs / Docs | `docs/` | Apply DDFM rules directly |

## 🔄 Evolution Triggers

When any of the following conditions occur, AI MUST generate `skill-amendment-proposal.md` for the DDFM maintainer:

| Trigger | Condition | Proposed Action |
|---|---|---|
| Design pattern obsolescence | A UI pattern (e.g., hamburger menu) is flagged as UX anti-pattern by 2+ accessibility audits | Add deprecation note + replacement guidance |
| Micro-interaction gap | An interaction scenario not in the Vocabulary is encountered 3+ times | Add new row to Micro-interaction table |
| Tech decay | A recommended tool (e.g., pixelmatch) is superseded | Update Visual Regression Gate |
| Score anchor mismatch | Design Coherence Score anchors repeatedly produce false positives | Tighten or loosen quantifiable anchor thresholds |
| **Time-Based Decay** | Any referenced framework/tool version is > 18 months old relative to the current date | AI SHOULD flag the rule as `[STALE]` and generate `skill-amendment-proposal.md` proposing a review sprint |

## 📋 Changelog

| Version | Date | Summary |
|---|---|---|
| v3.2 | 2026-02-28 | Fixed: §19/AI-Step-6 axis name unified to `Spatial Hierarchy`; Added Skill Kickoff Card to §0; bump version |
| v3.1 | 2026-02-28 | Added: `aesthetic-scorer.js` canonical authority declaration (AI Step 6), Time-Based Decay in Evolution Triggers |
| v3.0 | 2026-02-28 | Added: OKLCH Color Model (§2), Spring Physics 400/30 Reference Table + Frustration-Aware Kinetics + Hardware-Aware Degradation (§5), XState Mandate (§4) |
| v2.2 | 2026-02-28 | Added: Drag & Drop Micro-interaction Spec (§5), Mobile Proportion Variant (§15), State Matrix Activation Threshold (§20), Design Drift Initial Baseline (§21), Quality Gate HARD BLOCK vs WARN split (AI Step 5) |
| v2.1 | 2026-02-28 | Added: Expanded trigger_keywords, Error-State Animations (§5), Chart Type Decision Tree + Anti-Flicker Rules (§14), Quantifiable Coherence Anchors (§19), Dark Mode Contrast Gate (§AI Step 6), Evolution Triggers |
| v2.0 | 2026-02-28 | Added: Intent Disambiguation Layer (§0), RTL/Bidirectional Support (§16), Micro-interaction Vocabulary (§5), Design Coherence Score (§19), Component State Matrix (§20), Design Drift Detector (§21), Visual Regression Gate (§AI Step 7), Skill Health Check |
| v1.0 | 2025-Q4 | Initial DDFM release with 18 core design protocols |
