---
name: design-driven-frontend-manifesto
description: AI-powered frontend design system with world-class aesthetic sovereignty and methodology
trigger_keywords: ["create component", "design system", "frontend component", "brand design", "UI development", "visual design"]
auto_activate: true
---

# Design-Driven Frontend Manifesto (DDFM)
## 🌐 World-Class Visual Design Handbook (Methodology Edition)

> [!IMPORTANT]
> **Aesthetic Sovereignty**: Deliver "Surgical UI" by default. 
> **Functional Fidelity**: UI must be 100% functional. Every card, button, and chart must be connected to real data streams.
> **Full State Spectrum**: Every view must handle: [Empty], [Loading], [Error], [Partial Data], and [Success] states natively.
> **Language Purity**: NEVER mix Chinese and English. Use i18n pattern for all text.
> **Accessibility First (A11y)**: WCAG 2.1 AA compliance by default.

---

## 1️⃣ Design Token Architecture
- **Mandate**: Do NOT scatter raw hex values or pixel numbers throughout components. 
- **Implementation**: All structural dimensions, colors, and shadows MUST be defined via CSS Custom Properties (`--color-brand-primary`, `--spacing-md`, `--radius-card`) or Tailwind configuration. 
- **Rule**: NEVER use hardcoded values like `#hex` or `16px` directly in component files. Theming MUST operate at the token level exclusively.

## 2️⃣ Color System & Dark Mode First
- **Dark Mode First-Class Citizenship**: Dark mode is NOT an afterthought. Every component MUST use an inverted or dual-token variable set mapping to `prefers-color-scheme: dark`. 
- **Core Color Proportion**: ≤ 5%. The less used, the higher the recognition. Used ONLY for Logos or key CTAs.
- **Foundation Colors**: Low-interference, warm or cool grays depending on the mode.
- **Accessible Contrast (WCAG 2.1 AA)**: Text vs Background MUST meet at least 4.5:1 ratio for normal text.

## 3️⃣ Offline-First & Optimistic UI
- **Mandate**: Users should never feel blocked by network latency.
- **Implementation**: Core mutations (e.g., liking a post, submitting a form) MUST mutate the UI **optimistically** assuming success, rolling back only if the server responds with an error. 
- **Network Resilience**: Check `navigator.onLine`. If offline, queue mutations and serve cached reads via Service Workers or IndexedDB.

## 4️⃣ State Machine Sovereignty
- **Mandate**: Prevent "impossible states" (e.g., `isLoading === true` AND `data != null` due to boolean overlap).
- **Implementation**: For complex components (multi-step forms, payment flows, heavy interactions), AI MUST use explicit Finite State Machines (e.g., XState) or strictly typed reducers (`{ status: 'idle' | 'loading' | 'success' | 'error' }`). 

## 5️⃣ Kinetic Physics, Interactivity & Core Web Vitals
- **Core Web Vitals Target**: Ensure **INP (Interaction to Next Paint) < 200ms** by delegating heavy JS to Web Workers and keeping main thread unblocked. Ensure **LCP (Largest Contentful Paint)** by using `rel="preload"` for hero assets.
- **Kinetic Parameters**: 
  - **Spring Physics**: Default to spring animations (e.g., `stiffness: 400, damping: 30`) for scale/press effects to emulate physical weight.
  - **Cubic-Bezier**: For CSS transitions, use Apple-grade curves like `cubic-bezier(0.25, 1, 0.5, 1)`.

## 6️⃣ Skeleton Screen Protocol
- **Mandate**: Eliminate Cumulative Layout Shift (CLS) on load.
- **Implementation**: The `[Loading]` state MUST NEVER rely solely on a generic spinning indicator. All data-driven modules MUST render an exact-dimension skeleton placeholder during initial data fetch.

## 7️⃣ Shadow & Depth Design
- **Suggested Tiers:** Card (Light) -> Hover (Medium) -> Premium Block (Deep/Diffuse)
- **Principle**: Soft, restrained, conveying a sense of physical elevation using multi-layered soft shadows (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), ...`).

## 8️⃣ UI Layout, Typography & Fluidity
- **Fluid Formula Formula**: Utilize `clamp(min_size, preferred_vw, max_size)` for font-sizes and structural paddings to ensure stepless scaling across viewports.
- **Keyboard Navigation**: MUST show clear `:focus-visible` rings. NEVER use `outline: none` without fallback.

## 9️⃣ Image & Media Pipeline Sovereignty
- **Mandate**: Visuals must never degrade Core Web Vitals (CLS/LCP).
- **Execution**: All user-visible `<img>` elements MUST:
  1. Use modern formats (`WebP/AVIF`).
  2. Define explicit `width` and `height` attributes to prevent layout shifts.
  3. Use `loading="lazy"` for below-fold content, and `fetchpriority="high"` for the LCP hero image.

## 🔟 Component-Level XSS Guard
- **Mandate**: The UI layer must autonomously defend against malicious payloads.
- **Execution**: NEVER use APIs like `dangerouslySetInnerHTML` or `v-html` with raw user input. If rich text rendering is unavoidable, AI MUST integrate a strict HTML sanitizer (e.g., `DOMPurify`) before injection.

---

## 8️⃣ Visual Proportion & Layout Blueprint

### Proportion Table
| Element | Coverage Range |
| --- | --- |
| Background | 60–70% |
| Main Content | 20–30% |
| Premium/High-Value | 5–15% |
| Core Brand Color | ≤ 5% |

## 🧠 AI Execution Protocol & Methodology Summary

**When creating UI/UX for ANY product:**
1. **Define Tokens & States** → Create CSS variables for Day/Night, model states with explicit strings (not booleans).
2. **Apply Kinetic & Vitals** → Inject Spring/Cubic-Bezier, preload LCP logic and strict image properties.
3. **Optimistic Operations** → Write mutation logic that anticipates success.
4. **Embed Skeleton Interfaces** → Build identical loading outlines to eliminate CLS.
5. **Auditing Accessibility & Security** → Verify WCAG 2.1 contrast, `aria-live`, keyboard focus, and strictly zero unprotected innerHTML.

### Workflow:
1. `Load Tokens` → Follow proportions (Brand <=5%, Background 60-70%).
2. `Generate Component` → Use strict semantic HTML. Sanitize all rich text inputs. Optimize images (`loading`, `width`, `height`).
3. `Quality Gate` → Verify 5-state spectrum (Skeleton Empty/Loading/Error/Success/Partial), spacing (24-48px), optimistic UI behavior, XSS safety, and kinetic feels.

*Relying on this master methodology guarantees world-class, premium visual outputs with physical, fluid, resilient, secure, and accessible traits.*
