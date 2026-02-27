---
name: api-driven-backend-manifesto
description: The definitive framework for AI-powered, architecturally sovereign backend systems. ADBM elevates API design from a technical task to a strategic imperative.
multi-language: ["English"]
trigger_keywords: ["create API", "backend service", "database design", "microservice", "REST API", "GraphQL", "API architecture", "backend architecture"]
auto_activate: true
---

# API-Driven Backend Manifesto (ADBM)
## Architectural Sovereignty Through API-First Design

--- [!IMPORTANT]
> **Sovereign Infrastructure**: Create systems that are secure, scalable, and commercially viable. 
> **Business Exhaustivity**: Never simplify user requirements. Implement the full semantic depth of every feature (e.g., real analytics, automated triggers, complex validations). Zero-tolerance for "mock" or "placeholder" service logic.
> **Language Purity**: NEVER mix languages. Chinese version = 100% Chinese. English version = 100% English. NO hardcoded brand names like "AI Powered Agriculture v4.0" or emoji icons in production code.

---

- [Edge-First Sovereignty](docs/MANIFEST.md#1-edge-first-sovereignty) 🆕 | [AMP Protocol](docs/MANIFEST.md#2-amp-autonomous-migration-protocol) 🆕
- [Sovereign Abstraction](docs/MANIFEST.md#🏛️-architecture--sovereignty) | [Anti-Patterns](docs/MANIFEST.md#🏛️-architecture--sovereignty)

---

## 🤖 AI Execution Protocol

### Activation
Apply when user requests: API/backend creation, enterprise architecture, database design, microservices, or high-scale systems (10K+ RPS).

### Workflow
**PRE-FLIGHT** (Before ANY code):
```bash
□ Load/build context cache
□ Smart file check (cache analysis)
□ Install missing deps
□ Run baseline build
```

**CACHE-AWARE FILE ACCESS**:
```typescript
// Before viewing ANY file:
1. Check cache: shouldReviewFile(path, reason)
2. IF cache hit (recent + AI-modified) → Use digest
3. IF error context → Partial view (error ±5 lines)
4. ELSE → Full view + update digest

// After editing file:
updateDigest(path, { lastModifiedBy: 'AI', viewedAt: now() })
```

**COGNITIVE LOAD (Global Grid)**:
```typescript
// At start of task:
1. Load .agent/skills/_global/memory/*.json
2. Apply User Preferences:
   - ORM: user.preferences.orm (e.g., 'Prisma')
   - Style: user.style_guide (e.g., 'single quotes')
3. Check Project History:
   - Reuse valid patterns from other projects
   
// Learning Loop:
4. On task completion:
   - Update project_graph.json
   - Log successful patterns
```

**EXECUTION**:
1. **Context**: Load cached project context
2. **Language Selection**:
   - Detect project stack (Node.js, Java, Python, Go)
   - OR check `user.preferences.language`
### 4. ⚔️ Sovereign Security Protocols
- **RLS Gendarme**:
    - **Mandate**: Security MUST exist at the data bucket level, not just the application level.
    - **Implementation**: Auto-generate Database Policies (Postgres RLS) or Edge Middleware (`middleware.ts`) to physically block unauthorized access.
- **API Fuzzer**:
    - **Mandate**: Resilience beyond the "Happy Path".
    - **Implementation**: Integrate a Fuzz Testing step in the CD pipeline to bombard endpoints with malformed payloads, ensuring graceful failure (400 Bad Request) instead of crashes (500 Error).
3. **Blueprint**: Match templates from `_meta.json` based on `language`
4. **Implementation Strategy**:
   - **TypeScript**: Prisma 5-Step (schema → db push → generate → tsc)
   - **Java**: Spring Boot (Controller + Service + Repository + DTO)
   - **Python**: FastAPI (Pydantic Model + Router + SQLAlchemy)
   - **Go**: Gin (Handler + GORM Model + Middleware)
5. **Quality Gate** (per module):
   - **TS**: `tsc --noEmit`
   - **Java**: `mvn verify`
   - **Python**: `mypy`
   - **Go**: `go vet`
   - **ALL**: Manual curl test
6. **Update Cache**: Mark file digests, update context
7. **Learning Loop**:
   - `updateProjectGraph(projectId, features_added)`
   - IF code modified → `logEvolution(templateId, diff)`
8. **Delivery**: Code + docker + OpenAPI + README

**Token Optimization**: File cache reduces views by 70% (~30K saved/project)

---

## 🧩 Sovereign Decision Tree
```typescript
const forge = (S: 1-10, C: 1-10, P?: string) => ({
  arch: S > 8 ? 'm-srv' : (C > 7 ? 'mod-mono' : 'serverless'),
  db: P || (S < 3 ? 'supabase' : 'mysql'),
  stack: S > 8 ? 'Go/gRPC' : (C > 7 ? 'Nest' : 'FastAPI')
});
```

---

| Pillar | Focus | Reference |
|---|---|---|
| **Contract** | OpenAPI Mandatory | [api-evolution](docs/MANIFEST.md#📦-fulfillment--handoff) |
| **Logic** | DDD + GoF Patterns | [patterns](docs/MANIFEST.md#3-tactical-ddd--gof) |
| **Resilience** | P95 < 100ms | [performance](docs/MANIFEST.md#📊-ops--observability) |
| **Ops** | Prometheus + OTLP | [observability](docs/MANIFEST.md#📊-ops--observability) |
| **Predictive**| 10x Load Simulation | [predictive](docs/MANIFEST.md#📊-ops--observability) |
| **Sentient**  | Security Red Team Audit| [security](docs/MANIFEST.md#🛡️-sentient-security-security-swarm) |

---

---
 
 ## ✅ [ADBM Mastery Manifest](docs/MANIFEST.md)
 *Unified documentation for Architecture, Security, Persistence, and Sentient protocols.*
 
 ---
 
 ### 🛠️ Abstraction Gate
 - [ ] **Security Swarm**: Trigger Red Team audit before finalize.
 - [ ] **Edge**: Auth/Limit at edge.
 - [ ] **AMP**: Zero-Downtime expansion.

---

## 📦 Blueprints & Production Templates

Ready-to-deploy architectural blueprints:
- [NestJS Modular Monolith](blueprints/nestjs-modular-monolith/README.md) - Growth-stage (< 10K users)
- [FastAPI Serverless](blueprints/python-fastapi-serverless/README.md) - MVP rapid validation
- [Go Microservice](blueprints/go-microservice/README.md) - Enterprise scale (> 100K users)
- [Spring Boot Enterprise](blueprints/java-spring-boot/README.md) - Java ecosystem
- [RBAC Security](blueprints/enterprise-rbac/README.md) - Role-based access control
- [Payment Integration](blueprints/payment-integrations/README.md) - Stripe subscription & billing 🆕

> **ADBM: Production-grade backends by default. Built for resilience, optimized for performance.**
