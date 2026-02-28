---
name: design-driven-frontend-manifesto
description: AI-powered frontend design system with world-class aesthetic sovereignty and methodology
version: "9.0"
trigger_keywords: ["create component", "design system", "frontend component", "brand design", "UI development", "visual design", "dashboard", "landing page", "responsive layout", "dark mode", "animation", "mobile UI", "UI/UX", "color scheme", "accessibility"]
auto_activate: true
---

# Design-Driven Frontend Manifesto (DDFM)
## 🌐 World-Class Visual Design Handbook (Methodology Edition)

---

## 🧘 Design Soul Constitution (10 Laws & Master Keys)

AI MUST evaluate every generated UI against these ten laws before handoff:
1. **Innovative**: Frontier tech for new solutions, not trends. BLOCK: copy-pasting patterns.
2. **Useful**: Solve core pain points; efficient, durable, reliable. BLOCK: buried actions.
3. **Aesthetic**: Beauty from function, emotional connection. BLOCK: meaningless decoration.
4. **Understandable**: Intuitive, self-explanatory, zero-learning curve. BLOCK: ambiguous states.
5. **Unobtrusive**: Tool recedes, focus is on content. BLOCK: heavy chrome/borders.
6. **Honest**: No exaggerated features or dark patterns. BLOCK: fake urgency.
7. **Long-lasting**: Timeless over transient trends. BLOCK: "Neon/Web3" fads.
8. **Thorough**: Every pixel, micro-interaction, and edge case crafted. BLOCK: only success paths.
9. **Eco-conscious**: Mindful of digital carbon footprint. BLOCK: 3MB hero/idle compute.
10. **Minimal**: Less, but better. Extreme restraint. BLOCK: elements that don't earn their place.

> **[Aesthetic Overrides - Master Keys]** AI MUST reference at least ONE in the Design Brief:
> - **Jony Ive (Materiality)**: Absolute simplicity, physical emotional resonance ("felt" design).
> - **Kenya Hara (Void)**: Emptiness as an active element, awakening the senses.
> - **Don Norman (Cognition)**: Visceral (instinct), Behavioral (frictionless), Reflective (memory).
> - **Paradigm Lineage**: Borrow from Figma (canvas freedom), Notion (block uniformity), Arc (immersive spatiality), Linear (hyper-speed/keyboard-first), Superhuman (zero-friction triage).

---

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

**Skill Kickoff Card** (AI MUST output immediately after §0, UNLESS activated by FSPC):
> **[SILENT MODE]**: If activated via FSPC, SUPPRESS this output entirely. Run silently.
```
🎨 [DDFM v9.0 Activated]
├─ UI Grade: [Consumer | Enterprise | Compliance]
├─ Locale: [LTR | RTL] | Dark Mode: First-Class Citizen
├─ Active: OKLCH + Spring 400/30 + Bento Grid + Stagger Cascade
├─ Soul Scorecard Baseline (Target: 7.0/10):
│  ├─ Understand: /10 | Respect: /10 | Companion: /10 | Delight: /10 | Ethics: /10
└─ Zero-AI Taste Protocol active. Describe your UI requirement.
```
- **Failure Protocol**: If Overall Soul Score < 7.0, propose design intervention BEFORE coding.

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
  - **Spring Physics (Visceral)**: Use spring animations (`stiffness: 400, damping: 30`) ONLY for immediate visceral physical actions like button presses.
  - **Breathing Curve (Inner Peace)**: For loading, state transitions, and background shifts, MUST use a "Breathing Curve" (`cubic-bezier(0.4, 0, 0.2, 1)`, duration ~600ms). Animations must mimic human breathing—calm, slow, and anxiety-reducing. Reject hyper-fast synthetic flashes.
- **Reduced Motion (A11y)**: All kinetic animations MUST respect `@media (prefers-reduced-motion: reduce)`. When active, transitions/animations MUST be instantaneous or fade-only to protect vestibular-sensitive users.
- **Micro-interaction Vocabulary (Norman's 3 Levels of Psychology)**:
  - **Instinct (Visceral)**: Speed and satisfaction. Buttons scale down instantly via spring to grant control.
  - **Behavior (Behavioral)**: Clarity without anxiety. Errors provide an immediate "understanding" and clear resolution paths, never just red shaking text.
  - **Reflection (Reflective)**: Meaningful completion. After long flows, give a restrained but profound sense of completion.
  
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

**Spring Physics Reference & Choreography Constraints** (MUST apply):
- **Stiffness/Damping Override**: `spring(stiffness: 400, damping: 30)` for snappy, confident responses (native feel).
- **Hard Limit**: No spatial motion may exceed `250ms`. Breathing/color transitions may use 600ms ease.
- **Violation**: Using `transition: all 0.3s ease` for structural layout shifts is a **HARD BLOCK**. Use framer-motion, Popmotion, or CSS `linear()`.

**Frustration-Aware Kinetics** (SHOULD for consumer-grade products): When `≥ 3 rapid clicks` are detected on the same element within 1s (rage-click pattern), AI MUST implement: (1) Slow animation speed to `0.6×` for 2s to signal "processing", (2) Display a contextual helper tooltip (e.g. "Processing… please wait"). This pattern measurably reduces user churn from UI confusion.

**Hardware-Aware Degradation** (MUST): Detect `navigator.hardwareConcurrency < 4` OR `prefers-reduced-motion` media query. When triggered, automatically disable: `backdrop-filter: blur()`, `box-shadow` animations, and 3D CSS transforms. Target: maintain ≥ 60FPS on mid-range devices at all times.

**Eco-Rendering & Idle Conservation (Environmental Respect)**: Monitor user activity. If the user is idle for > 3 seconds, the UI MUST drop its rendering footprint: pause all breathing gradients, halt unnecessary polling, and enter a "low-power" visual state. Code for planetary constraints.

## 6️⃣ Skeleton Screen Protocol
- **Mandate**: Eliminate Cumulative Layout Shift (CLS) on load.
- **Implementation**: The `[Loading]` state MUST NEVER rely solely on a generic spinning indicator. All data-driven modules MUST render an exact-dimension skeleton placeholder during initial data fetch.

## 7️⃣ Micro-Surfaces & Lighting (Premium Aesthetic)
- **Suggested Tiers:** Card (Light) -> Hover (Medium) -> Premium Block (Deep/Diffuse)
- **Principle**: Soft, restrained, conveying a sense of physical elevation using multi-layered soft shadows (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), ...`).
- **Dark Mode Lighting Rule**: Premium designs rely on light, not just darkness. Implement subtle Radial Background Glows beneath primary cards.
- **Glassmorphism Detail**: Use 1px inner highlights on cards (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.1)`) over solid borders. Apply fine-grained Noise Overlays (`mix-blend-mode: overlay`, `opacity: 0.03`) to eliminate flat "color banding" and add cinematic texture.

## 8️⃣ UI Layout, Typography & Premium Layout Patterns
- **Premium Layout Patterns** (MUST for Consumer/Marketing bounds): DO NOT default to symmetric grids. Implement:
  1. **Void/Emptiness (空无)**: Design for silence. If a border, shadow, or dividing line is not structurally required, REMOVE it. Use ultra-subtle background contrasts (`rgba(0,0,0,0.02)`) and pure spacing to separate elements.
  2. **Immersive Spatial UI (Arc Paradigm)**: Eliminate hard containers. Use "Ambient Absorption" (acrylic blurs, frosted glass) and infinite soft shadows so the UI feels like it is floating in a calm, boundless space rather than trapped in boxes.
  3. **Block-Fluidity (Notion Paradigm)**: Treat all content as uniform "Blocks". Enforce strict left-to-right reading alignment and identical vertical rhythm (line-heights/margins) so any combination of elements feels inherently calm and harmonious.
  4. **Bento Box Grids**: Use asymmetric grid-template-areas for space-efficient feature highlights.
  5. **Kinetic Typography**: Oversized titles with extremely tight tracking (`letter-spacing: -0.04em`) and extremely slow gradient shifts.
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

## 1️⃣3️⃣ Hyper-Realism Data Mocking & Zero-State Conversion
- **Mock-First Components (Storybook Ready)**: If the backend API is pending/failing, the UI MUST NOT white-screen. Components MUST include `defaultMockData` to render a high-fidelity static state.
- **Hyper-Realism Data Rule**: NEVER use lazy mock data like "Item 1", "Test Text", or gray empty rectangles. AI MUST populate placeholders with high-fidelity, contextual data (e.g., real Unsplash URLs `<img src="https://images.unsplash.com/photo-..." />`, realistic copywriting matching the domain, formatted dates, contextual avatars). The mockup must look like a living product, not a wireframe.
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

## 2️⃣2️⃣ Texture & Depth Sovereignty (Material Realism)
- **Mandate**: AI MUST never use flat, single-value color fills for large background surfaces. Flat color is the hallmark of low-quality AI-generated UI.
- **Noise Texture Protocol**: All large background panels (hero sections, card backgrounds, modal backdrops) MUST include an ultra-fine SVG noise texture overlay:
  ```css
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence noise */
  mix-blend-mode: overlay;
  opacity: 0.025; /* 0.02–0.04 range */
  ```
  This eliminates flat "color banding" and creates cinematic material depth.
- **Multi-Stop Gradient Mandate**: Simple two-stop linear gradients are FORBIDDEN for hero and premium sections. AI MUST use at minimum a **3-stop radial gradient** or **mesh gradient** to simulate directional light sources.
  ```css
  /* ✅ CORRECT — Directional light gradient */
  background: radial-gradient(ellipse at 20% 30%, oklch(55% 0.18 280 / 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, oklch(60% 0.15 200 / 0.3) 0%, transparent 60%),
              oklch(12% 0.02 260); /* base layer */
  /* ❌ FORBIDDEN */
  background: linear-gradient(#000, #111);
  ```
- **Inner Highlight Rule**: Premium cards in dark mode MUST apply a 1px top-edge inner highlight:
  ```css
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 24px rgba(0,0,0,0.35);
  ```

## 2️⃣3️⃣ Asymmetric Bento Grid Mandate (Anti-Generic Layouts)
- **Mandate**: Symmetric equal-column grids (e.g., 3×3, 4×4 identical card layouts) are FORBIDDEN for landing pages, dashboards, and feature showcases. Equal grids are the top signal of generic AI-generated layouts.
- **Implementation**: AI MUST implement non-uniform `grid-template-areas` creating visual tension through size contrast:
  ```css
  /* ✅ CORRECT — Bento asymmetric grid */
  .bento-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto;
    gap: var(--spacing-md);
  }
  .feature-hero  { grid-column: 1; grid-row: 1 / 3; } /* Large anchor block */
  .feature-stat  { grid-column: 2; grid-row: 1; }     /* Small supplemental */
  .feature-chart { grid-column: 2 / 4; grid-row: 2; } /* Wide supporting block */
  ```
- **Size Contrast Ratio**: The largest grid cell MUST be at minimum **2× the area** of the smallest adjacent cell.
- **Diagonal Breathing**: At least one grid cell must span 2 columns or 2 rows to create non-linear reading paths. Pure row-by-row grids are NOT acceptable for hero content sections.

## 2️⃣4️⃣ Cinematic Typography System
- **Mandate**: AI MUST use a dual-role font system. Using the same font-size scale for both display headlines and body text is an automatic failure.
- **Font Role Segregation**:
  - **Display Role** (Hero headings, stat numbers, pull quotes): `font-family: 'Inter', 'SF Pro Display', system-ui`; `letter-spacing: -0.03em` to `-0.05em`; `line-height: 1.05` to `1.15`; weight `700–900`.
  - **Body Role** (Paragraphs, labels, table cells): `letter-spacing: 0em` to `0.01em`; `line-height: 1.55` to `1.7`; weight `400–500`.
- **Minimum Scale Steps**: Font-size system MUST define at minimum **6 named scale steps** (not just `sm`/`md`/`lg`):
  ```css
  --text-xs: clamp(0.65rem, 1.2vw, 0.75rem);
  --text-sm: clamp(0.8rem, 1.5vw, 0.875rem);
  --text-base: clamp(0.9rem, 1.8vw, 1rem);
  --text-lg: clamp(1rem, 2.2vw, 1.125rem);
  --text-xl: clamp(1.2rem, 3vw, 1.5rem);
  --text-display: clamp(2rem, 6vw, 4.5rem); /* Hero / Stat number */
  ```
- **Number Typography**: Large stat numbers and KPI values MUST use `font-variant-numeric: tabular-nums` and `font-feature-settings: "tnum"` to prevent layout shifts during live data updates.
- **Text Hierarchy Enforcement**: If the AI generates a page with fewer than 3 distinct visual weight levels (e.g., everything appears at the same weight), it is a **HARD BLOCK**. Rebalance before handoff.

## 2️⃣5️⃣ Zero-AI-Aesthetic Protocol (Ruthless De-emphasis)
- **Mandate**: AI-generated UIs are often "uniformly important" — everything competes for attention simultaneously. This is the primary AI tell. This section enforces opinionated de-emphasis as a first-class design value.
- **Single CTA Law**: On any given screen, ONLY ONE element may be a solid-fill primary button (the most critical action). ALL other buttons MUST be demoted to `ghost` (border-only), `text` (link-style), or `subtle` (low-opacity fill) variants.
  ```
  [Primary: solid fill CTA] ← max 1 per screen
  [Secondary: ghost border button] ← competitor actions
  [Tertiary: text/link button] ← navigation, cancel actions
  ```
- **Opacity-Based Secondary Text**: Secondary labels, metadata, timestamps, and helper text MUST use opacity layering (`opacity: 0.45` to `0.65`) rather than hardcoded gray hex values. This ensures legibility adapts automatically across different background materials (dark glass, light paper, gradient).
- **Whitespace as Content Rule**: At least **25% of any hero or feature section** must be deliberate void (empty space). Removing a decorative element is ALWAYS the right choice if its absence creates calm. This directly embodies the `虚空/Void` philosophy of §8.
- **Forbidden AI Tells** (HARD BLOCK on all of these):
  - `border-radius: 50%` on non-circular avatar elements (over-rounding)
  - Generic floating action buttons with shadow halos in B2B dashboards
  - Gradient text applied to body copy (only acceptable for 1-word display titles)
  - Blue/purple + pink gradient combos without explicit brand justification
  - Icon + label combinations that repeat the same word (e.g., home icon + "Home" label in a minimal nav)

## 2️⃣6️⃣ Brand Magnetic Field System
- **Mandate**: World-class products are recognizable from a single screenshot, without their logo visible. This requires a deliberate "Brand Magnetic Field" — a unique constellation of design decisions that make the product unmistakable. Without this, AI generates capable but generic UIs.
- **Brand Magnetic Field Declaration**: AI MUST output the following immediately after §0 classification, before generating any token or component:
  ```
  🧲 [Brand Magnetic Field Declared]
  ├─ Core Visual Metaphor: {e.g., "Arctic calm meets industrial precision"}
  ├─ 3 Forbidden Visual Clichés: {e.g., "blue-purple sci-fi gradients", "confetti celebrations", "rounded 3D icons"}
  ├─ Tone of Voice: {e.g., "authoritative but warm", "playful but efficient"}
  └─ Design Peer Reference: {e.g., "Linear's speed + Notion's calm + 10% of Arc's personality"}
  ```
- **Consistency Enforcement**: Every component generated AFTER the declaration MUST be checked against the Magnetic Field. If a component contradicts the declared metaphor (e.g., generating a rounded playful card for an "industrial precision" brand), it is a HARD BLOCK. Regenerate before handoff.
- **Anti-Amnesia Rule**: In long generation sessions, AI MUST re-read the Brand Magnetic Field declaration every 3 component generations to prevent style drift.

## 2️⃣7️⃣ Multi-Stage Motion Choreography (Stagger Cascade)
- **Mandate**: Elements MUST arrive in intentional sequence, not simultaneously. Use the Breathing Curve (`cubic-bezier(0.4, 0, 0.2, 1)`, 400ms).

| Group | Delay | Curve / Exit Pattern |
|---|---|---|
| Nav / Header | 0ms | `cubic-bezier` 400ms |
| Hero / H1 | 50ms | *same* |
| Primary CTA | 100ms | *same* |
| Support Blocks | 150ms | *same* |
| Secondary Cards | 200ms | *same* |
| Footer | 250ms | *same* |

- **Exit**: Reverse sequence, 60% shorter duration. 
- **Rage-Click Guard**: `<300ms` repeat click → skip all motion to final state.

## 2️⃣8️⃣ Contextual Color Semantics (Emotion-Accurate Tokens)
- **Mandate**: Standard `success=green`, `error=red` semantic colors are blunt instruments. World-class products use color to communicate nuanced emotional states, not just binary outcomes. The color system must match the emotional register of the moment.
- **Emotion-Accurate Semantic Token Table** (AI MUST define these tokens, not use raw named CSS colors):

  | Token | Emotional Intent | OKLCH Range | Anti-Pattern to Avoid |
  |---|---|---|---|
  | `--semantic-success` | Calm confirmation, not celebration | `oklch(62% 0.15 145–160)` (warm jade, not neon green) | `#00FF00`, `green` |
  | `--semantic-caution` | Gentle alertness, not alarm | `oklch(75% 0.14 70–85)` (warm amber, not orange) | `#FF8C00`, `orange` |
  | `--semantic-destructive` | Firm but not aggressive | `oklch(52% 0.16 20–30)` (desaturated brick red, not fire engine) | `#FF0000`, `red` |
  | `--semantic-info` | Curious, neutral guidance | `oklch(60% 0.12 230–250)` (muted slate blue) | `#0000FF`, `blue` |
  | `--semantic-delight` | Surprise and warmth | `oklch(70% 0.14 300–320)` (soft violet, for delight moments only) | Any persistent use of purples |
  | `--semantic-empty` | Quiet invitation, not emptiness | `oklch(82% 0.04 60–80)` (warm parchment, for empty states) | Pure gray, `#F5F5F5` |

- **Contextual Palette Switching**: On dark mode, each semantic token MUST shift L value (lightness) while keeping the same hue and chroma. Never just invert — always re-derive for the dark environment.
- **Emotion Forbiddance**: NEVER use `--semantic-success` for a promotional/marketing highlight. `--semantic-delight` is the only acceptable choice for moments of reward or celebration.



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
   | Anti-Gimmick Gate (No unnecessary 3D/animations hiding bad UX) | 🛑 HARD BLOCK |
   | Mock-First fallback (`defaultMockData`) present | ⚠️ WARN |
   | Data-Vis chart type matches decision tree | ⚠️ WARN |
   | i18n keys used (no hardcoded user-facing strings) | ⚠️ WARN |
6. `Aesthetic & A11y Audit` → Run `node [Aesthetic Scorer](tools/aesthetic-scorer.js)`. **The script's output score is the canonical authority for Design Coherence Score (§19) — its rubric identically mirrors the three-axis protocol (Layout Rhythm, Color Harmony, Spatial Hierarchy) defined in §19.** Run Lighthouse `--accessibility` or `npx axe-core`. Run contrast ratio check **separately** for light mode AND dark mode token sets — both MUST pass WCAG 4.5:1 for normal text and 3:1 for large text. **All checks must score ≥ 90. Block handoff if any fails.**
7. `Visual Regression Gate` → Run `npx playwright screenshot` on all modified pages and compare pixel diffs against baseline snapshots (`pixelmatch` or `Chromatic`). If pixel diff > 0.1% on unintended areas → **BLOCK** handoff, output diff report, await explicit approval.

## �️ Admin Protocols (Ecosystem, Health, Evolution)
1. **Routing & Health**: Use `tools/aesthetic-scorer.js` for quantification. Use `templates/` for boilerplate. If missing, apply fallback rules inline.
2. **Evolution**: If a rule fails 3+ times, a UI pattern is obsolete, or a tool >18mo old, generate `skill-amendment-proposal.md`.
