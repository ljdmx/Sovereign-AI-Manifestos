---
name: design-driven-frontend-manifesto
description: AI-powered frontend design system with aesthetic sovereignty
trigger_keywords: ["create component", "design system", "frontend component", "brand design", "UI development"]
auto_activate: true
---

## 📚 Documentation
 
 **Component Patterns**: [React](docs/MANIFEST.md#1-state-chain-mastery) | [State](docs/MANIFEST.md#1-state-chain-mastery) | [Vue](docs/MANIFEST.md#1-state-chain-mastery) | [Responsive](docs/MANIFEST.md#2-hardware-aware-rendering)
 **Sovereign Aesthetic**: [Tokens](docs/MANIFEST.md#2-phi-based-spacing) | [Library](docs/MANIFEST.md#🎨-surgical-aesthetics) | [A11y](docs/MANIFEST.md#1-color-sovereignty-oklch) | [Kinetic](docs/MANIFEST.md#⚡-kinetic-velocity-vak)
 **Sentient UI**: [Evolution](docs/MANIFEST.md#🛡️-visual-self-evolution) | [Performance](docs/MANIFEST.md#2-hardware-aware-rendering) | [XState](docs/MANIFEST.md#1-state-chain-mastery)

# Design-Driven Frontend Manifesto (DDFM)
## From Craft to Creation: Design-Led Frontend Paradigm

> [!IMPORTANT]
> **Aesthetic Sovereignty**: Deliver "Surgical UI" by default. 
> **Functional Fidelity**: UI must be 100% functional. Every card, button, and chart must be connected to real data streams. Non-functional placeholders are a critical failure.
> **Full State Spectrum**: Every view must handle: [Empty], [Loading], [Error], [Partial Data], and [Success] states natively.
> **Language Purity**: NEVER mix Chinese and English. If user language = Chinese → 100% Chinese UI. If English → 100% English. NO hardcoded brand names (e.g., "AI Powered Agriculture v4.0") or decorative emojis in production code. Use i18n pattern for all text.

## 🤖 AI Execution Protocol

### Activation Conditions
Automatically apply this skill when user:
- Requests React/Vue/Svelte component creation
- Asks for "branded design" or "unique aesthetic"
- Uploads design files and asks for implementation
- Mentions: design system, component library, UI kit

### Execution Workflow

**PRE-FLIGHT** (Before ANY component):
```bash
□ Load context cache → Check framework/deps
□ Smart file access (use digest if recent)
□ Verify Tailwind config
```

**CACHE-AWARE ACCESS**:
```typescript
// Smart file viewing:
IF file in cache AND recent AND AI-modified → Use digest
ELSE IF error → Partial view (error context only)
ELSE → Full view + cache
```

**COGNITIVE LOAD (Design Engine)**:
```typescript
// At start of task:
1. Load .agent/skills/_global/memory/*.json
2. Apply Design DNA:
   - Colors: user.style_guide.colors (e.g., 'oklch')
   - Framework: user.preferences.css_framework (e.g., 'Tailwind')
3. Check Evolution:
   - "User always modifies Sidebar width to 64px" → Apply patch automatically
```

**Phase 1: Context (Silent)**
1. Load cached project context (or build once)
2. Infer brand → Select aesthetic → Init OKLCH

**Phase 2: Component Generation**
1. **Template First**: Check cache for matching template (score > 0.7)
   - IF match → Customize template (2 min vs 15 min manual)
   - ELSE → Build from scratch
2. TS types → CVA variants → OKLCH colors → ARIA
3. **Import Chain**: Create → IMMEDIATE import → tsc check
4. Tailwind v4 adapt + [Micro-Interactions](templates/animations/micro-interactions.md)

**Phase 3: Quality Gate (MANDATORY)**
```bash
□ Renders without errors
□ All states: Empty/Loading/Error/Success
□ Screenshot captured
□ No console errors
□ Update cache digest
```

**Phase 4: Delivery** → Zero-error `.tsx` + 3-line comments + Commercial layouts

**Token Optimization**: Template reuse + cache = 80% token reduction

---

## ✨ DDFM Pillars
| Pillar | Focus | Requirement |
|---|---|---|
| **Aesthetic** | Brand Sovereignty | OKLCH / Phi-based Spacing |
| **Kinetic** | Life-like Motion | Spring Physics (Magnetic/Ghost) |
| **Precision** | Geometric Harmony | Aspect-Ratio / Zero-CLS |
| **Seamless** | 100ms Standard | Skeleton / Optimistic UI |
| **Logic** | Functional Fidelity | 100% Data Bind (No Mocks) |
| **Scaling** | Hardware-Aware | Auto-degrade heavy CSS |
| **Evolution**| Self-Visual Audit | [Self-Evolution](docs/MANIFEST.md#🛡️-visual-self-evolution) |
| **Sentient** | Emotional Kinetics| [Emotion-Aware](docs/MANIFEST.md#1-emotional-kinetics) |

---

## 🧩 Visual Decision Tree
```typescript
const forgeA = (D: 1-10, M: 1-10, H: 'hi'|'lo') => ({
  type: D > 8 && H === 'hi' ? 'Industrial' : (M > 8 ? 'Minimal' : 'Glass'),
  kinetic: (i: string) => i === 'mag' ? { s: 450, d: 25 } : (i === 'gst' ? { s: 150, d: 40 } : { s: 400, d: 30 })
});
```

---

## 📦 [Technical Implementation Library](docs/technical-spec.md)
*Includes: Dependencies, `cn()` utility, and Component Templates.*

---
---
 
 ## 🔧 System BIOS
 - **Color**: OKLCH Mastery [Manifest](docs/MANIFEST.md#1-color-sovereignty-oklch)
 - **Adaptive**: Hardware-Aware [Manifest](docs/MANIFEST.md#2-hardware-aware-rendering)

---

## ✅ [DDFM Mastery Manifest](docs/MANIFEST.md)
*Unified documentation for Aesthetics, Kinetic Velocity, and Sentient UI protocols.*

---

---

---

## 🔧 [Troubleshooting & BIOS](docs/MANIFEST.md#2-hardware-aware-rendering)
*System BIOS, adaptive rendering logic, and common fix-patterns.*

---

## 📊 [Sovereign Audit Scale](docs/MANIFEST.md#🛡️-visual-self-evolution)
*Standardized 180-pt audit for Visual, Logic, and Surgical excellence.*

---

## 📦 Component Libraries & Templates

Enterprise-grade UI resources:
- [Micro-Interactions Library](templates/animations/micro-interactions.md) - 558 lines of production-ready interaction patterns
- [Premium Dark Theme](templates/ui-kits/premium-dark-theme.md) - Glassmorphism + fluid animations
- [Minimalist Luxury](templates/ui-kits/minimalist-luxury.md) - Clean, sophisticated aesthetics
- [Multi-Step Checkout Form](templates/forms/multi-step-checkout.md) - XState-powered complex workflows 🆕

---

### 3. 🛡️ Sovereign Resilience Protocols
- **Self-Healing Assets**:
    - **Rule**: Never reference a static asset (img/video) that doesn't exist.
    - **Action**: If a file is missing, *automatically* generate a lightweight SVG placeholder or fetch a stock resource before rendering.
    - **Outcome**: Zero "Red Box" 404 errors in the UI.
- **Config Supervisor**:
    - **Rule**: Detect the exact version of the styling engine (e.g., Tailwind v4).
    - **Action**: Enforce the correct configuration strategy (e.g., CSS Variables in `globals.css` vs `tailwind.config.ts`) to prevent "Invisible UI" bugs.

---

### 🛠️ Sovereign Abstraction Gate
- [ ] **State-Chain Enforcement**: Logic driven by XState Machines; Zero-boolean status flags.
- [ ] **VAK Integration**: Interaction motion uses predictive velocity physics.
- [ ] **Zero-Leakage**: No API URLs, network logic, or domain formatting in UI components.
- [ ] **Testability**: 100% of business state logic can be tested without a browser.
