---
name: full-stack-product-commander
description: AI-powered product delivery orchestrator combining world-class product management, project management, frontend (DDFM), and backend (ADBM) for autonomous end-to-end product delivery
trigger_keywords: ["build app", "create product", "full-stack project", "end-to-end development", "product delivery", "MVP development", "startup project", "build platform"]
auto_activate: true
---

# Full-Stack Product Commander (FSPC)
## From Idea to Deployment: Autonomous Product Delivery

> **Project Isolation Sovereignty**: Step 0: `mkdir {project_name}` -> `cd {project_name}`. ALL files MUST be generated within this isolation layer.
> **Sentient Agent Board**: Before Phase 2, simulate a "Virtual Board" (PM, Arch, Sec) to audit the plan.
> **Self-Healing Mastery**: Autonomously patch build/dependency failures without user prompts.
> **Language Purity**: Detect user language → Generate 100% pure language output. NO mixed Chinese-English. NO hardcoded branding (e.g., "AI Powered v4.0"). Use i18n pattern for all user-facing text.

---

## 🧩 Master Orchestrator
```typescript
const orchestrate = (U, L, A) => ({
  FE: forgeA(A, L, U > 5 ? 'hi' : 'lo'),
  BE: forgeB(U, L),
  infra: U > 8 ? 'K8s' : 'Docker',
  pivot: (b, t) => b.includes('conf') ? 'alt-stack' : (t === 'tight' ? 'phase-out' : 'scale')
});
```

## 🧬 Sovereign Workflow (Commander BIOS)

**PRE-FLIGHT**:
```bash
□ mkdir {project} → cd
□ Node/DB/env check
□ Baseline build
```

**EXECUTION** (Progressive Gates):
1. Discovery → Product strategy → BFL
2. Template Scan → Match or forge
3. Planning → Arch + deploy
4. **Module-by-Module** (NOT all-at-once):
   ```
   Plan M1 → Build → Gate → M2 → ...
   ```
5. **Gate** (per module):
   ```bash
   □ build passes
   □ tsc clean
   □ renders (screenshot)
   □ API test (curl)
   ```
6. Self-Heal → Auto-patch failures
7. **Cognitive Sync**: Update global memory
8. Handoff → Docker + Swagger

---

## 🎯 Core Capabilities

### 1. 🛡️ The "Red Button" Protocol (Pre-Flight)
Before any code generation, FSPC MUST validate the operational environment:
- **Environment Check**: Detect OS (Windows/Linux) and Shell (PowerShell/Bash).
- **Toolchain Check**: Verify critical versions (e.g., Tailwind v3 vs v4, Prisma v5).
- **Constraint Enforcement**: If constraints (e.g., "No &&") are detected, they are injected into the Global Context.

### 2. 📡 Market Radar (Intelligence Phase)
FSPC does not guess properties; it benchmarks them.
- **Competitor Analysis**: Generate `market-analysis.md` comparing 3 top competitors.
- **Feature Extraction**: Identify "Table Stakes" vs "Differentiators".
- **Value Trigger Mapping**: Ensure every feature leads to a conversion event.

### 3. Product Management Intelligence

**Requirements Decomposition Engine**:
```typescript
interface ProductRequirements {
  coreFeatures: Feature[];      // MVP must-haves
  userPersonas: Persona[];      // Target users
  successMetrics: Metric[];     // KPIs to track
  constraints: Constraint[];    // Budget, timeline, tech limits
}

---
## 🎯 [Full-Stack Orchestration Specification](docs/MANIFEST.md#🚀-master-orchestration)
*Includes: PM Intelligence, Timeline Algorithms, and Parallel Generation Logic.*

---

---

## ✅ [Commander Mastery Manifest](docs/MANIFEST.md)
*Unified documentation for Product Strategy, Project Rigor, and Sentient Orchestration.*

---

---

---

## 🎨 Tech Stack Decision Matrix

### Frontend (DDFM)
| Scenario | Framework | Aesthetic | State |
|----------|-----------|-----------|-------|
| **SaaS Dashboard** | React + Vite | Industrial | Redux Toolkit |
| **E-commerce** | Next.js | Minimalist | Zustand |
| **Content Platform** | Vue 3 | Editorial | Pinia |
| **Mobile-First** | React + Tailwind | Biophilic | React Query |

### Backend (ADBM)
| Scale | Pattern | Framework | Database |
|-------|---------|-----------|----------|
| **MVP (< 1K users)** | Serverless | FastAPI | Supabase |
| **Growth (< 10K)** | Modular Monolith | NestJS | MySQL |
| **Enterprise (> 100K)** | Microservices | Go + gRPC | MySQL + Redis |

---

## 📋 Deliverable Proxy
See [Project Structure Docs](docs/MANIFEST.md#1-self-healing-mastery) for full artifact manifests.

---

## 🔧 Advanced Features

### Adaptive Complexity Scaling
```typescript
function selectComplexity(userInput: string): 'simple' | 'medium' | 'complex' {
  const featureCount = countFeatures(userInput);
  const userTypes = countUserTypes(userInput);
  const integrations = countIntegrations(userInput);
  
  if (featureCount < 5 && userTypes === 1) return 'simple';
  if (featureCount < 15 && integrations < 3) return 'medium';
  return 'complex';
}

// Simple: 1-week MVP, FastAPI + React
// Medium: 2-week product, NestJS + React/Vue
// Complex: 4-week platform, Microservices + Next.js
```

### Progressive Enhancement Strategy
```markdown
**MVP (Week 1)**: Core CRUD, basic UI, JWT auth
**V1 (Week 3)**: Advanced features, polished UI, analytics
**V2 (Week 6)**: Real-time features, advanced analytics, integrations
```

---

## 📚 Documentation & Mastery
- [Quick Start](docs/MANIFEST.md#🚀-master-orchestration) | [CLI Tool](docs/MANIFEST.md#📦-fulfillment--handoff) | [Stack Selection](docs/MANIFEST.md#🚀-master-orchestration)
- [Database Mastery](docs/MANIFEST.md#📦-fulfillment--handoff) | [Best Practices](docs/MANIFEST.md#2-trace-validation) | [Sovereign Pivot](docs/MANIFEST.md#2-sovereign-pivot-intelligence)
- [Templates](docs/MANIFEST.md#📦-fulfillment--handoff) | [Integration](docs/MANIFEST.md#1-monetization-loop) | [Quality Gates](docs/MANIFEST.md#2-trace-validation)

---

## 🌟 FSPC vs Manual Development

| Aspect | Manual (Team) | FSPC (AI) |
|--------|---------------|-----------|
| **Requirements** | 2-3 days meetings | 1 hour analysis |
| **Planning** | 3-5 days planning | 2 hours plan |
| **Frontend** | 5-10 days coding | 4 hours generation |
| **Backend** | 5-10 days coding | 4 hours generation |
| **Integration** | 3-5 days | 1 day |
| **Testing** | 3-5 days | 1 day (automated) |
| **Total** | **21-38 days** | **10-14 days** |
| **Quality** | Variable | Consistent (150/150) |

---

## 📦 Project Templates & Accelerators

Production-ready full-stack templates:
- [Product Brief Template](templates/product-brief.template.md) - Structured product definition
- [Project Plan Template](templates/project-plan.template.md) - Timeline and milestone planning
- [CI/CD Pipelines](templates/ci-cd-pipelines.md) - GitHub Actions + Docker deployment
- [React + Spring Boot](templates/react-spring-boot/README.md) - Enterprise Java stack
- [Vue + NestJS Monorepo](templates/vue-nestjs-monorepo/README.md) - Modern TypeScript stack
- [Full-Stack Monorepo](templates/monorepo-full-stack/README.md) - Turborepo + shared packages

---

> **FSPC: The ultimate AI orchestrator. From idea to deployment. Autonomous. Production-ready. World-class.**
