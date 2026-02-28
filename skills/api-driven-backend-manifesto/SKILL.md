---
name: api-driven-backend-manifesto
description: The definitive framework for AI-powered, architecturally sovereign backend systems. ADBM elevates API design from a technical task to a strategic imperative.
version: "8.0"
multi-language: ["English"]
trigger_keywords: ["create API", "backend service", "database design", "microservice", "REST API", "GraphQL", "API architecture", "backend architecture", "authentication", "authorization", "caching", "deployment", "CI/CD", "observability", "rate limiting", "webhooks", "event-driven", "queue", "build backend", "server-side", "Node.js", "NestJS", "FastAPI", "Express", "Django", "Spring Boot", "Prisma"]
auto_activate: true
---

# API-Driven Backend Manifesto (ADBM)
## Architectural Sovereignty Through API-First Design & Enterprise Resiliency

> [!IMPORTANT]
> **Sovereign Infrastructure**: Create systems that are secure, scalable, and commercially viable. 
> **Business Exhaustivity**: Never simplify user requirements. Implement the full semantic depth of every feature. Zero-tolerance for "mock" or "placeholder" service logic.
> **Language Purity**: NEVER mix languages. UI and comments adapt to user locale.
> **Enterprise Resiliency by Default**: Treat every backend as if it handles 10K+ RPS from Day 1.

---

## 0️⃣ Intent Disambiguation Layer (Activate First)

> [!IMPORTANT]
> AI MUST classify the project on **three axes** BEFORE applying any rule. Output classification explicitly: `[Scale: Growth | Security: Regulated | Complexity: Modular Monolith]`

| Axis | Startup | Growth | Enterprise |
|---|---|---|---|
| **Scale Tier** | < 1K RPS, single region | 1K–10K RPS, multi-AZ | > 10K RPS, multi-region |
| **Security Tier** | Standard | Regulated (SOC2/ISO27001) | Critical (HIPAA/PCI-DSS/Gov) |
| **Complexity Tier** | Monolith | Modular Monolith | Microservices / Event-Driven |

**Activation Rules**:
- `Scale = Startup` → Mark as `[DEFERRED]`: Read Replica, Saga Pattern, TimescaleDB dual-storage, Kafka. Use local transactions + BullMQ.
- `Scale = Growth/Enterprise` → All rules apply with full fidelity.
- `Security = Regulated` → Enforce: Audit Fields, RLS, PII Encryption, API Fuzzer, SOC2 structured logging.
- `Security = Critical` → Enforce ALL above + Field-Level Encryption + JWT rotation ≤ 15min + Pen Test stub generation.
- `Complexity = Monolith` → Replace cross-service Saga with local DB transactions + BullMQ.

**Conflict Arbitration** (when axes produce contradictory rules): `Security Tier > Scale Tier > Complexity Tier`.
- `Scale = Startup` AND `Security = Critical` (e.g., early-stage healthcare startup) → **Security wins**. Scale deferrals apply to performance/architecture rules ONLY; NEVER to security rules.
- `Complexity = Monolith` AND `Scale = Enterprise` → Complexity wins on architecture shape; Scale wins on observability & resiliency requirements.

**Classification Confirmation Protocol**: After outputting the classification tag, AI MUST explicitly state: `"→ Classified as [Scale: X | Security: Y | Complexity: Z]. Confirm or correct before proceeding."` and await user confirmation before applying rules.
- **Confirmation Timeout**: If no user response within 2 minutes, AI MUST default to the most conservative classification (`Security = Critical, Scale = Growth`) and proceed, notifying the user of the assumption.
- **Mid-Session Reclassification**: If the user reveals new context mid-conversation (e.g., "This will handle medical records"), AI MUST immediately re-run the Classification step, update the active rule set, and output a **Reclassification Notice** before continuing.

**Skill Kickoff Card** (AI MUST output immediately after classification confirmation, UNLESS activated by FSPC):
> **[SILENT MODE]**: If activated via FSPC, SUPPRESS this output entirely. Run silently.
```
🛡️ [ADBM v8.0 Activated]
├─ Classification: [Scale: X | Security: Y | Complexity: Z]
├─ Active Rules: §1–§26 full | [DEFERRED]: {list or ‘none’}
├─ Runtime: {Node.js | Python | Go}
└─ Ready. Describe your backend requirements.
```

---

## 📏 Rule Compliance Levels (RFC 2119)

| Level | Meaning | Consequence of Violation |
|---|---|---|
| **MUST / MUST NOT** | Non-negotiable requirement | HARD BLOCK — do not proceed |
| **SHOULD / SHOULD NOT** | Strongly recommended | Deviation requires explicit justification in ADR |
| **MAY** | Context-dependent, optional | Apply based on project scale & needs |

---

## 1️⃣ API Versioning Contract & Rate Limiting (Rams Law 2: Useful/Reliable)
- **Mandate**: API endpoints MUST NOT break existing consumers, ensuring durability and reliability.
- **Versioning**: All public APIs MUST enforce versioning via URI (`/api/v1/...`) or Header (`Accept: vnd.api+json;version=1`). Deprecations require a `Deprecation` Header for 2 minor versions.
- **Backend Feature Flags**: New core business endpoints during initial rollout MUST be safeguarded by API-level Feature Flag routing (e.g., `X-Feature-Flag: new-billing-engine`) to prevent dual-write conflicts and allow safe dark launching.
- **Rate Limiting**: ALL public routes MUST be protected by a Token Bucket or Leaky Bucket algorithm (usually via Redis). Return `429 Too Many Requests` when thresholds are breached.
- **Differentiated Rate Limiting Tiers** (MUST apply per endpoint category, not globally):

  | Endpoint Category | Strategy | Limit | Window |
  |---|---|---|---|
  | Auth / Login / Password Reset | Strict Per-IP | 10 req | 1 min |
  | Payment / Critical Mutations | Per-User + Per-IP | 30 req | 1 min |
  | Standard CRUD APIs | Per-Tenant Token Bucket | 1,000 req | 1 min |
  | Reporting / Export (heavy) | Per-User Leaky Bucket | 10 req | 1 hour |
  | Webhooks / Public Ingestion | Per-Source IP | 500 req | 1 min |

## 2️⃣ Empathetic Error Contract (RFC 7807+) (Rams Law 6: Honest)
- **Mandate**: API responses MUST never leak internal stack traces, nor should they use dark patterns or robotic, deceptive language. Mistakes must be admitted honestly.
- **Implementation**: Adopt **RFC 7807 (Problem Details for HTTP APIs)** globally, but inject empathy.
- **Structure**: Every HTTP 4XX and 5XX response MUST return: `type`, `title`, `status`, `detail`, and `instance`.
- **Empathy Injection**: Responses MUST additionally include `human_readable_cause` (explaining the "Why" gently) and `suggested_action` (providing the user's immediate next step, empowering them instead of confusing them).

## 3️⃣ Idempotency Protocol (Distributed Ready)
- **Mandate**: Core non-safe state mutations MUST be immune to duplicate submissions, even under extreme concurrent race conditions.
- **Implementation**: All POST/PUT/PATCH endpoints for critical flows (e.g., payments, resource creation) MUST accept an `Idempotency-Key` Request Header.
- **Execution**: The backend caches the initial response in Redis against the key. **Crucially** in distributed environments, this MUST use an atomic Check-Then-Set mechanism (e.g., Redis Lua script or `SETNX`) to prevent Time-of-Check to Time-of-Use (TOCTOU) vulnerabilities during concurrent identical requests.
- **Key Expiry Management**: Idempotency Key TTL MUST be set to `max(24h, expected_operation_duration × 2)`. Configure Redis with `maxmemory-policy = allkeys-lru` to prevent OOM from key accumulation. For environments with > 10K mutations/day, implement a scheduled cleanup job purging keys older than 72h.

## 4️⃣ Task-Based API & Anti-Naked-CRUD Protocol
- **Anti-Naked-CRUD**: NEVER expose generic CRUD APIs for core business entities (except for admin dictionaries). APIs MUST be modeled as explicit business verbs (e.g., `POST /devices/:id/report-fault` instead of `PUT /devices/:id`).
- **Read Model Analysis (CQRS lite)**: For dashboards and reporting, AI MUST preemptively design optimized Read-Models or Materialized Views (e.g., "Top 3 faulting zones this month") and explicit aggregation APIs. Do not force the frontend to calculate heavy aggregates from raw data.

## 5️⃣ Enterprise Data Model, Domain-Driven Design & ORM
- **Aggregate Root Analysis (Pre-Schema)**: DO NOT output flat schemas. AI MUST output an Aggregate Root hierarchy in **Mermaid `classDiagram` format** to guarantee machine-readable, documentation-grade output:
  ```mermaid
  classDiagram
    Farm <|-- Zone : contains
    Zone <|-- SensorNode : hosts
    SensorNode <|-- Telemetry : emits
  ```
  If Mermaid is unavailable, use strict inline comment tree (`// Root → Child → Leaf`). Plain prose descriptions are NOT acceptable.
- **State Machine Mandate**: ALL non-trivial, non-text business entities (e.g., IoT gateways, orders, batches) MUST have a `status` field constrained by a strict `enum` (e.g., `OFFLINE | ACTIVE | FAULT`). The schema comments MUST document the valid state transition paths.
- **Time-Series / Telemetry Isolation**: If the project involves high-frequency data (IoT telemetry, tracking, heavy logs), AI MUST isolate OLTP relational tables from Time-Series tables, recommending dual-storage strategies (e.g. Postgres + ClickHouse/TimescaleDB) where applicable.
- **Read Replica Routing (CQRS)**: All read-heavy operations (e.g., Reports, Dashboards) MUST be routed to a Read Replica instance to protect the Primary Database's write throughput. The ORM configuration MUST implement explicit read/write dual pools.
- **Ecosystem Reconnaissance (Mandatory)**: Before ANY database integration, AI MUST detect the major version of the ORM/Driver (e.g., Prisma v7 vs v5). AI MUST explicitly search for breaking changes (e.g., "Prisma v7 migration guide", adapter requirements, engine changes) to prevent runtime compatibility catastrophes.
- **Connection Governor & Health Standards**: ORM configurations MUST enforce a connection pool upper limit (`pool.max`) and timeout. Expose structured Health Checks: `/health/live` (always 200 OK) and `/health/ready` (validates DB/Redis/Queue connections, returning structured JSON or 503 if ANY dependency is degraded: `{ "status": "ok", "checks": { "db": "ok" } }`).
- **Universal Audit Fields**: EVERY table MUST include `id` (UUIDv7/Snowflake), `created_at`, `updated_at`, `created_by`.
- **Soft Deletion Protocol**: Add `is_deleted` and NEVER physically DELETE records in core transactional tables.
- **Optimistic Locking**: Add a `version` (INT) field for concurrent write protection.
- **Cursor Pagination Protocol**: For datasets anticipated to exceed 10K rows, NEVER use `OFFSET/LIMIT`. You MUST use Cursor-based pagination (e.g., `?cursor=last_seen_id`) to prevent deep-pagination DB timeouts.

## 6️⃣ Distributed / Async Protocol & Saga Pattern
- **Synchronous Boundary**: HTTP Request lifecycle MUST NOT exceed 200ms (p95).
- **Rule**: Any operation > 500ms or interacting with external volatile APIs MUST be offloaded to Message Queues (RabbitMQ/BullMQ).
- **DLQ Mandate**: ALL production queues MUST configure a Dead Letter Queue (DLQ). Jobs failing beyond max retries MUST be routed to the DLQ and trigger a Pager/Prometheus alert. Silent job dropping is strictly prohibited.
- **Job Progress Reporting Protocol**: For asynchronous jobs expected to take > 5s, the system MUST emit progress via SSE or expose a `GET /jobs/:id/status` endpoint (returning `{status: "processing", progress: 0.6}`). Do NOT leave the client blind after a `202 Accepted` response.
- **Saga / Compensating Transactions**: In distributed microservice environments, cross-domain mutations (e.g., deducting balance AND creating an order) MUST use the Saga pattern with explicit **Compensating Actions** (rollbacks) to guarantee Eventual Consistency.
- **Saga ID Traceability**: Every Saga MUST carry a globally unique `saga_id` (UUIDv7). All steps MUST write to a `saga_log` table: `{ saga_id, step_name, status, payload_hash, compensated_at }`. A **Saga Reconciliation Job** MUST run every hour, scan for incomplete Sagas older than `2 × expected_duration`, and emit `CRITICAL` alerts for manual intervention. Compensation failures themselves MUST be logged to `saga_log.compensation_error`.
- **Graceful Shutdown**: Microservices MUST listen to `SIGTERM`/`SIGINT`. On signal, stop accepting new requests, drain existing in-flight HTTP requests and queue workers, and safely close database connection pools before process exit.

## 7️⃣ Cache Penetration & Stampede Defense
- **Mandate**: Protect the database under extreme duress.
- **Defensive Tactics**:
  - **Anti-Penetration**: Cache NULL values (short TTL) or use Bloom Filters.
  - **Anti-Stampede**: Add jitter to cache TTLs (`baseTTL + Math.random() * jitter`).
  - **Mutex Locks**: Use Redis Distributed Locks (`SETNX`) to ensure only one request regenerates heavy cache.

## 8️⃣ Observability Trinity
- **Mandate**: Theoretical gates are insufficient—production systems MUST emit telemetry.
- **Implementation**: Every module MUST include:
  1. **Logs**: JSON Structured Logging only.
  2. **Traces**: OpenTelemetry Trace IDs injected into all request contexts.
  3. **Metrics**: Expose key business/technical metrics via Prometheus gauges/counters.
  4. **Slow Query Analysis**: In development, ORM slow query logs MUST be enabled. Any SQL execution > 200ms MUST emit a `WARN` log containing the parameterized query to prevent deployment of silent N+1 queries.
  5. **Alerting Rules Codegen**: AI MUST generate `alerts.yaml` (Prometheus AlertManager format) mapping SLO breach conditions to pager alerts. Minimum required rules: `error_rate > 0.001 for 5m → PagerDuty (P1)`, `p99_latency_ms > 200 for 10m → Slack (P2)`, `DLQ_depth > 100 for 5m → PagerDuty (P1)`, `DB_connection_pool_exhausted → PagerDuty (P1)`.

## 9️⃣ Sovereign Security Protocols
- **AuthN/AuthZ**: Use short-lived JWT Access Tokens combined with Redis-blacklisted Refresh Tokens. NEVER store long-lived tokens on the server.
- **Device Fingerprint Binding** (`Security = Critical` only — MUST): Refresh Token requests MUST validate a `device_fingerprint` (deterministic hash of `User-Agent + Accept-Language + IP /24 subnet`). Fingerprint mismatch MUST force full re-authentication and emit a `SECURITY_ANOMALY` event to the audit log.
- **CORS & SSRF**: Explicitly whitelist CORS origins (no `*` in production). Protect against SSRF by strictly filtering internal IP ranges for any user-provided webhooks/URLs.
- **PII Handling & Log Redaction**: Personally Identifiable Information (PII) like passwords or payment tokens MUST use strong hashing (e.g., bcrypt/Argon2) or encryption (AES-256-GCM). Structural JSON logs and error responses MUST aggressively mask/redact PII before serialization.
- **Payload Size Limit**: All endpoints MUST enforce request body size limits (e.g., `express.json({ limit: '1mb' })`). File upload endpoints MUST use streaming processing to prevent in-memory OOM.
- **RLS Gendarme**: Security MUST exist at the data bucket level (e.g., Postgres RLS).
- **API Fuzzer Resilience**: APIs must fail gracefully (400) via strict validation layers (Zod, Pydantic).
- **Edge-First Sovereignty** (SHOULD for Growth/Enterprise): Offload Auth, Rate Limiting, and Geofencing to the network edge (Cloudflare Workers / Lambda@Edge) before traffic reaches origin servers. Benefit: eliminates ~90% of malicious traffic at the perimeter; reduces p95 latency by ~40ms.
- **Service Mesh & mTLS** (SHOULD for Enterprise Microservices): All service-to-service communication MUST use mTLS (mutual TLS) or short-lived inter-service JWTs (`exp ≤ 5min`). Plain HTTP between microservices in production is NOT acceptable. Use Istio / Linkerd / Envoy for automated certificate rotation.

## 1️⃣0️⃣ Real-Time Data Channels (WebSocket / SSE)
- **Mandate**: For IoT telemetry or live dashboards, AI MUST explicitly choose the right protocol.
- **Execution**: Use **WebSocket** for bi-directional needs (control commands) or **Server-Sent Events (SSE)** for uni-directional firehose streams (telemetry). The backend MUST implement Heartbeats/Ping-Pong, automatic reconnection logic, and Backpressure handling.

## 1️⃣1️⃣ API Contract Testing & E2E Business Flow Verification
- **Mandate**: API documentation (Swagger/OpenAPI) is not enough; contracts must be executable.
- **Implementation**: Service dependencies MUST be verified using Consumer-Driven Contract Testing (e.g., Pact or Dredd) in CI/CD.
- **E2E Business Flow**: Generated integration tests MUST traverse complete business lifecycles (e.g., Register Device -> Send OK Telemetry -> Send Fault -> Trigger Alert -> Clear Alert), NOT just isolated endpoint tests.
- **Contract Version Locking**: Consumer Contract files MUST be namespaced by API version (`tests/contracts/v1/`, `tests/contracts/v2/`). Contracts for deprecated versions MUST be **frozen** (read-only, enforced via CI file-change guard). Only `sunset_date` metadata may be appended. This ensures backward-compatibility verification remains executable throughout the deprecation window.

## 1️⃣2️⃣ GraphQL Governance (When Applicable)
- **N+1 Prevention**: ALL GraphQL resolvers MUST use `DataLoader` to batch and deduplicate database calls.
- **Persisted Queries**: In production, disable arbitrary ad-hoc queries. Use Persisted Queries only to limit attack surface.
- **Introspection Off**: Disable Schema Introspection in production environments to prevent API enumeration attacks.
- **Complexity Limits**: Enforce query depth and complexity limits to prevent DoS via deeply nested or aliased queries.

## 1️⃣3️⃣ Breaking Change Detector Protocol
- **Trigger**: Fires when AI modifies any of: endpoint path, HTTP method, request schema, response schema, status codes, or auth requirements.
- **Mandatory Actions (before committing)**:
  1. Scan codebase: `grep -rn "old_endpoint_path" ./` → enumerate all callers (frontend, tests, other services).
  2. Output **Breaking Change Impact Report**: `{ endpoint, change_type, affected_files[], migration_action }`.
  3. If callers found without migration path → **HARD BLOCK**. Propose backward-compatible alternative (e.g., add `/v2/` alongside `/v1/`).
- **Contract Registration**: Document in `tests/contracts/` (Pact/Dredd) before merging to `main`.

## 1️⃣4️⃣ DLQ Governance & Replay Protocol
- **Alert Threshold**: Emit `CRITICAL` alert if DLQ depth > 100 messages persists for > 5 minutes.
- **Triage Decision Tree**:
  - `transient error` (network, timeout) → **Replay** with exponential backoff + jitter. Max 3 replays.
  - `data corruption / schema mismatch` → **Quarantine** (move to `dlq.poison`), notify data team. NEVER auto-replay.
  - `downstream outage` → **Hold** replay, activate circuit breaker, page on-call engineer.
- **Replay Safety**: All replayed messages MUST carry original `Idempotency-Key`. Max replay rate = 50 messages/min.
- **Ownership Mandate**: Every DLQ MUST carry a `DLQ_OWNER` tag. Ownerless DLQs are a deploy blocker.

## 1️⃣5️⃣ LLM-Driven Application Protocol (AI-Native)
- **Streaming by Default (UX Protection)**: ANY endpoint calling an LLM MUST default to Server-Sent Events (SSE) or WebSockets to stream tokens incrementally. A synchronous HTTP wait blocking for > 5 seconds is an automatic architecture failure.
- **Async GenAI Task Offload**: For long-generation tasks (Images, Search, complex Agents), the core endpoint MUST respond `202 Accepted` and offload generation to a Celery/BullMQ worker loop, enabling client-side long-polling or WebSocket notification.
- **Business Routing Constraint (Billing/Quota lock)**: Isolated AI endpoints without commerce routing are technically orphaned. ANY heavy generative API MUST have an explicit `Quota Middleware` (decrementing DB credits or Redis rate-limiters) executing *before* the expensive LLM execution.
- **Prompt & Abuse Firewall**: Backend middleware MUST implement an explicit sanitization layer to block Prompt Injection (Jailbreaks) and enforce strict Token/Length constraints upstream of the LLM parser.

## 1️⃣6️⃣ Digital Carbon Footprint & Occam's Razor
- **Mandate**: Respect computing resources. Do not use Kafka or Kubernetes for a 100-request-per-day system.
- **Execution**: Apply Occam's Razor. Always propose the simplest, lowest-carbon architecture first (e.g., Serverless Scale-to-Zero, or single Postgres + SQLite). The architecture brief MUST state: "This architecture minimizes idle compute resources in compliance with Digital Carbon Footprint protocols."

## 1️⃣7️⃣ Long-Lasting Clean Architecture
- **Mandate**: Do not intertwine core business logic with framework-specific magic (e.g., Next.js App Router handlers or Express middleware layers).
- **Execution**: Implement Hexagonal Architecture. Core domain handlers MUST be pure functions, agnostic of the HTTP transport or specific cloud vendor, ensuring the code outlives the framework by 10+ years. Reject "hype-driven" over-coupling.

## 1️⃣8️⃣ Local-First & Frictionless Privacy (Rewind Paradigm)
- **Mandate**: The user's data belongs to the user. If data does not NEED to be shared across a network, it MUST NOT be persisted to the server.
- **Execution**: Drafts, personal history, and deep reflection data MUST be stored in the client's `IndexedDB` or OPFS. The backend should operate strictly as a dumb, End-to-End Encrypted (E2EE) sync channel. Refuse to be a data-surveillance panopticon.

## 1️⃣9️⃣ Zero-Friction Graph Aggregation (Linear Paradigm)
- **Mandate**: Eliminate waiting. The user must never see a loading spinner when reading their own workspace.
- **Execution**: Implement a **Sync Engine** pattern initialization. The backend pushes a highly compressed, incremental state payload via WebSocket or GraphQL immediately upon connection. All subsequent CRUD operations are executed synchronously in the client's memory graph while the backend syncs silently in the background.

## 2️⃣0️⃣ Right to be Forgotten by Default
- **Mandate**: A clean database is a calm database. Digital hoarding is a toxic anti-pattern.
- **Execution**: Implement strict Database TTLs. Any intermediate state, error log, draft, or unused asset MUST have an automatic TTL (e.g., 7 days) to dissolve back into nothingness. The schema must enforce ephemeral data hygiene at the SQL layer.

## 2️⃣1️⃣ View-Model Transformation Layer (UI-Driven BFF)
- **Mandate**: The primary role of a backend is NOT to expose raw DB row arrays to the frontend. Serving raw relational data and expecting the frontend to compute charts, aggregates, and stat cards causes main-thread blockage, visible jank, and ruined UX.
- **Implementation**: For every dashboard panel, chart, or KPI stat card identified in the PRD or UI wireframe, AI MUST generate a dedicated, aggregated **View-Model endpoint** alongside the base CRUD API:
  ```typescript
  // ❌ GET /api/v1/telemetry (returns 10k raw rows) → 🛑 BLOCK
  // ✅ GET /api/v1/metrics/trend-chart (returns pre-aggregated series) 
  ```
- **Naming Convention**: View-Model endpoints MUST live under `/metrics/`, `/analytics/`, or `/summaries/` namespaces to distinguish them from standard CRUD endpoints.
- **Caching Mandate**: All View-Model endpoints MUST be cached in Redis with a sensible TTL (`60s` for real-time dashboards, `1h` for daily reports). Cache invalidation MUST be triggered by the corresponding mutation events (not just TTL expiry).
- **Anti-Pattern Enforcement**: Any frontend component that iterates a large array (> 100 items) purely for aggregation purposes (`.reduce()`, `.filter().length`, `_.groupBy()`) is a HARD BLOCK signal — refactor into a server-side View-Model endpoint instead.

## 2️⃣2️⃣ Cinematic Database Seeding (Production Demo Fidelity)
- **Mandate**: A database seeded with `User 1`, `Product 2`, `Test Title` is a failed product. The seed data is the product's first impression. It MUST be indistinguishable from real production data at first glance.
- **Hyper-Realistic Data Constraints**:
  1. **Names & Identities**: Use culturally diverse, real-sounding full names (not `John Doe`). Avatars MUST use specific, high-quality Unsplash photo IDs (e.g., `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop`) — never use generated avatars or placeholder squares.
  2. **Content & Copy**: Article titles, product descriptions, and notification messages MUST be domain-accurate. For a SaaS product: use realistic feature names, changelog entries, and user feedback. For IoT: use real device model names, realistic sensor readings within plausible ranges (e.g., temperature: `18.5°C–27.3°C`).
  3. **Data Volume & Distribution**: Seed data MUST represent a realistic usage curve (e.g., 20% power users with 500+ items, 60% average users with 10–50 items, 20% new users with < 5 items). A flat distribution is not realistic.
  4. **Timestamps**: MUST be backfilled realistically (e.g., `created_at` values distributed over the past 6 months, not all within 1 second).
- **Execution**: The `seed.ts` / `seed.py` script MUST be runnable via `npm run seed` / `python seed.py` in ONE command from a fresh clone, with no manual configuration required.

## 2️⃣3️⃣ First-Class Object Storage Mandate (S3/R2 Presigned URLs)
- **Mandate**: Any feature involving user-uploaded files (avatars, cover images, documents, media) MUST use a cloud object storage provider (AWS S3, Cloudflare R2, or equivalent) via Presigned URLs. Storing binary file data in the primary database or on the application server filesystem is a **HARD BLOCK**.
- **Presigned URL Upload Flow** (MUST implement exactly):
  ```
  1. Client POSTs {filename, size, type} → 2. Server validates & returns S3 PUT url & upload_id → 3. Client PUTs to S3 directly → 4. Client POSTs confirm {upload_id} → 5. Server saves CDN URL.
  ```
- **Security Requirements**: The presigned URL endpoint MUST require authentication. The `content_type` MUST be strictly validated against an allowlist (`image/jpeg`, `image/png`, `image/webp`, etc.). File `size_bytes` MUST be validated server-side before presign generation — client-side claims are not trusted.
- **CDN Delivery**: All public assets MUST be served via a CDN (CloudFront, Cloudflare) — never via a direct S3 bucket URL. The `public_cdn_url` stored in the DB is always the CDN URL.
- **Fallback Rule (Startup Tier)**: If the project is classified as `Scale = Startup` with no cloud budget, AI MUST use `Cloudflare R2` as default (generous free tier, S3-compatible API). Do NOT use local filesystem storage as a temporary shortcut.

## 2️⃣4️⃣ OpenAPI Spec-First Protocol (“Contract Before Controller”)
- **Mandate**: Writing controller code before defining the API contract is architectural malpractice. The OpenAPI 3.1 specification is the single source of truth — all code is derived from it, not the reverse.
- **Execution Order** (MUST follow exactly):
  ```
  Step A → Generate `.openapi/api.yaml` (OpenAPI 3.1) for ALL endpoints
  Step B → Run `npx @stoplight/spectral-cli lint .openapi/api.yaml` — HARD BLOCK on errors
  Step C → Generate server-side type definitions from spec (`openapi-typescript` / `fastapi-codegen`)
  Step D → Write controller code, referencing ONLY the generated types — no freehand type declarations
  Step E → Validate running implementation: `dredd .openapi/api.yaml http://localhost:3000`
  ```
- **Spec Quality Rules**: The `.openapi/api.yaml` MUST define, for every endpoint: `operationId`, all possible response schemas (including `4XX` and `5XX`), `security` requirements, and at least 1 `example` per request/response body.
- **Reverse Engineering Prohibition**: If a project is inherited with existing controllers but no spec, AI MUST generate the spec FIRST by reading the codebase (`reverse-spec`), validate it, and make the spec authoritative BEFORE touching any controller logic.
- **Breaking Change Lock**: Once the spec is published (tagged in git), any change that would alter an existing `operationId`'s request or response schema triggers the ADBM §13 Breaking Change Detector Protocol.

## 2️⃣5️⃣ Panic-Recovery Paradigm (Bulletproof Process)
- **Mandate**: The Node/Python/Go process MUST NEVER crash or `exit(1)` due to an unhandled exception in a route handler, async worker, or third-party API timeout.
- **Execution**: AI MUST wrap the entire top-level application router, all queue workers, and event subscribers in a universal `Catch-All / Panic-Recovery` middleware.
- **Reporting**: When a panic is caught, it MUST return a 500 RFC 7807 error to the user (with `human_readable_cause: "Our servers experienced a temporary structural anomaly..."`), log the stack trace to structured JSON, and trigger an alert hook. The process MUST stay alive.

## 2️⃣6️⃣ Technical Debt Quantification Protocol
- **Mandate**: `[DEFERRED]` architectural items as internal engineering notes are invisible to business stakeholders and create silent risk accumulation. Every deferred item MUST be expressed in business-language cost terms, making the trade-off decision explicit.
- **Updated `[DEFERRED]` Format** (MUST use this format, no exceptions):
  ```
  [DEFERRED: {component}]
  ├─ What: {brief technical description}
  ├─ Trigger: {measurable condition when this becomes urgent, e.g., "MAU > 10K" or "DB read QPS > 500"}
  ├─ Business Risk: {consequence in user-facing terms, e.g., "p95 API latency exceeds 500ms, degrading checkout conversion"}
  ├─ Resolution Cost: ~{N} engineering sprints
  └─ Priority: P{1|2|3}
  ```
- **Debt Register Integration**: All `[DEFERRED]` items MUST be auto-collected into a `docs/TECH_DEBT.md` registry at session end. This register is a first-class project artifact delivered alongside code.
- **Debt Aging Rule**: Any `[DEFERRED]` item that has been in the registry for > 3 project milestones without being resolved MUST be automatically escalated from P3 → P2 → P1. Stale debt is compounding debt.

## 2️⃣6️⃣ Multi-Tenant Migration Ladder
- **Mandate**: Most products start small (Shared Schema) and grow. Without a pre-planned migration path, tenant isolation upgrades become traumatic, data-loss-risking events that kill teams and products. This section defines the safe upgrade ladder.
- **Migration Path: Shared Schema RLS → Separate Schema**:
  ```
  Phase 1 — Dual-Write Window (Zero Downtime):
    1. Create new tenant-specific schema: CREATE SCHEMA tenant_{id}
    2. Enable dual-write: write to both shared + new schema simultaneously
    3. Backfill historical data from shared schema to new schema
    4. Verify data integrity: row count + checksum validation

  Phase 2 — Read Migration:
    5. Route read traffic to new schema for target tenant
    6. Monitor for 48h with fallback to shared schema on error

  Phase 3 — Cutover:
    7. Disable dual-write; new schema is primary
    8. Create archival copy of shared schema rows; mark deleted (soft-delete)
    9. Remove RLS policy for migrated tenant from shared schema
  ```
- **Migration Path: Separate Schema → Separate Database**:
  - Follow the same 3-phase pattern, replacing schema boundaries with full DB instance boundaries.
  - MUST use a message queue (BullMQ/Celery) to orchestrate the multi-step process as durable async jobs — never as a one-shot script that can fail mid-way.
- **Rollback Clause**: Every migration phase MUST define an explicit rollback condition and rollback procedure BEFORE execution begins. No migration proceeds without a tested rollback plan.
- **Pre-Migration Checklist**: AI MUST output this checklist before any tenant migration execution:
  ```
  ☐ Backup verified: {timestamp}
  ☐ Migration tested on staging with production data copy
  ☐ Rollback procedure documented and tested
  ☐ Customer notified (if migration requires maintenance window)
  ☐ On-call engineer designated for 4h post-migration monitoring window
  ```

---

## 🌐 Runtime Routing Matrix
AI MUST select stack based on detected runtime:
- **Node.js**: Prisma/Drizzle, BullMQ, NextAuth/Passport, ioredis, Zod, Fastify/NestJS.
- **Python**: SQLAlchemy(Async), Celery, python-jose, redis-py, Pydantic v2, FastAPI.
- **Go**: GORM/sqlc, Asynq, golang-jwt, go-redis, validator, Echo/Fiber.

## 🤖 AI Execution Protocol
Apply when user requests: API/backend creation, enterprise architecture, database design.

**EXECUTION Workflow**:

> **Multimodal Input Pre-Check** (before Step 1): If the user provides an **image** (architecture diagram, whiteboard), **audio transcript**, or **URL** as input — FIRST read `divine_interface.md` for the multimodal input handling protocol before proceeding to Step 1.

1. **Blueprint Scan**: Use `list_dir` on the `[Blueprints Directory](blueprints/)`. ALWAYS copy the blueprint scaffold. Do NOT write from scratch if a blueprint exists.
2. **DDD Pre-Schema**: Output Aggregate Root Tree → Define State Enums → Record Time-Series split strategy BEFORE writing any schema file.
3. **Schema Design**: Implement Enterprise Data Model + Connection Pool + Idempotency + Cursor Pagination rules.
4. **Controller & Router**: Implement RFC 7807 Errors, Versioning, and strict Rate Limiting middleware.
5. **Service Layer**: Identify slow ops → Auto-offload to Async Queues. Design Sagas for distributed states.
6. **Data/Cache Layer**: Inject Jitter, Mutex Locks, and Anti-Penetration logic.
7. **Telemetry & Contracts**: Setup JSON Logging, Trace IDs, Prometheus metrics, and Contract Testing definitions.
8. **Red Team Audit**: Run static dependency supply chain analysis (`npm audit --json` or `pip-audit`), block on High/Critical CVEs. Read and execute scripts in `[Red Team Tools](red_team/)` before handoff.

**⚡ FAILURE DECISION TREE**:
- Step 1-3 fail → retry×2 → human. Step 4-5 fail → isolate+retry×2. Step 6 fail → disable cache. Step 7 fail → WARN+continue. Step 8 fail → HARD BLOCK.

## 🛡️ Admin Protocols (Ecosystem, Health, Evolution)
1. **Routing & Health**: Ensure `blueprints/` and `red_team/security_audit.ts` exist. If absent, fallback to DDD rules inline.
2. **Evolution**: If a rule causes repeated Retrospective failure or tools >18mo old, generate `skill-amendment-proposal.md`.
