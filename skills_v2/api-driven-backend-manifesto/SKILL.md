---
name: api-driven-backend-manifesto
description: The definitive framework for AI-powered, architecturally sovereign backend systems. ADBM elevates API design from a technical task to a strategic imperative.
multi-language: ["English"]
trigger_keywords: ["create API", "backend service", "database design", "microservice", "REST API", "GraphQL", "API architecture", "backend architecture"]
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

## 1️⃣ API Versioning Contract & Rate Limiting
- **Mandate**: API endpoints MUST NOT break existing consumers, AND must protect themselves from abuse.
- **Versioning**: All public APIs MUST enforce versioning via URI (`/api/v1/...`) or Header (`Accept: vnd.api+json;version=1`). Deprecations require a `Deprecation` Header for 2 minor versions.
- **Rate Limiting**: ALL public routes MUST be protected by a Token Bucket or Leaky Bucket algorithm (usually via Redis). Return `429 Too Many Requests` when thresholds are breached.

## 2️⃣ Standardized Error Contract (RFC 7807)
- **Mandate**: API responses MUST never leak internal stack traces or use ad-hoc error structures.
- **Implementation**: Adopt **RFC 7807 (Problem Details for HTTP APIs)** globally.
- **Structure**: Every HTTP 4XX and 5XX response MUST return: `type`, `title`, `status`, `detail`, and `instance`.

## 3️⃣ Idempotency Protocol
- **Mandate**: Core non-safe state mutations MUST be immune to duplicate submissions.
- **Implementation**: All POST/PUT/PATCH endpoints for critical flows (e.g., payments, resource creation) MUST accept an `Idempotency-Key` Request Header.
- **Execution**: The backend caches the initial response in Redis against the key. Subsequent requests with the same key return the cached response without side-effects.

## 4️⃣ Enterprise Data Model & Connection Pooling
- **Connection Governor**: ORM configurations MUST enforce a connection pool upper limit (`pool.max`) and timeout (`connectionTimeoutMillis`). Expose pool utilization via a `/health` endpoint to defend against connection exhaustion under high concurrency.
- **Universal Audit Fields**: EVERY table MUST include `id` (UUIDv7/Snowflake), `created_at`, `updated_at`, `created_by`.
- **Soft Deletion Protocol**: Add `is_deleted` and NEVER physically DELETE records in core transactional tables.
- **Optimistic Locking**: Add a `version` (INT) field for concurrent write protection.
- **Cursor Pagination Protocol**: For datasets anticipated to exceed 10K rows, NEVER use `OFFSET/LIMIT`. You MUST use Cursor-based pagination (e.g., `?cursor=last_seen_id`) to prevent deep-pagination DB timeouts.

## 5️⃣ Distributed / Async Protocol & Saga Pattern
- **Synchronous Boundary**: HTTP Request lifecycle MUST NOT exceed 200ms (p95).
- **Rule**: Any operation > 500ms or interacting with external volatile APIs MUST be offloaded to Message Queues (RabbitMQ/BullMQ).
- **Saga / Compensating Transactions**: In distributed microservice environments, cross-domain mutations (e.g., deducting balance AND creating an order) MUST use the Saga pattern with explicit **Compensating Actions** (rollbacks) to guarantee Eventual Consistency.

## 6️⃣ Cache Penetration & Stampede Defense
- **Mandate**: Protect the database under extreme duress.
- **Defensive Tactics**:
  - **Anti-Penetration**: Cache NULL values (short TTL) or use Bloom Filters.
  - **Anti-Stampede**: Add jitter to cache TTLs (`baseTTL + Math.random() * jitter`).
  - **Mutex Locks**: Use Redis Distributed Locks (`SETNX`) to ensure only one request regenerates heavy cache.

## 7️⃣ Observability Trinity
- **Mandate**: Theoretical gates are insufficient—production systems MUST emit telemetry.
- **Implementation**: Every module MUST include:
  1. **Logs**: JSON Structured Logging only.
  2. **Traces**: OpenTelemetry Trace IDs injected into all request contexts.
  3. **Metrics**: Expose key business/technical metrics via Prometheus gauges/counters.

## 8️⃣ Sovereign Security Protocols
- **RLS Gendarme**: Security MUST exist at the data bucket level (e.g., Postgres RLS).
- **API Fuzzer Resilience**: APIs must fail gracefully (400) via strict validation layers (Zod, Pydantic).

## 9️⃣ API Contract Testing & Consumer-Driven Verification
- **Mandate**: API documentation (Swagger/OpenAPI) is not enough; contracts must be executable.
- **Implementation**: Service dependencies MUST be verified using Consumer-Driven Contract Testing (e.g., Pact or Dredd) in CI/CD. This prevents a provider from blindly deploying changes that break active consumers.

---

## 🤖 AI Execution Protocol
Apply when user requests: API/backend creation, enterprise architecture, database design.

**EXECUTION Workflow**:
1. **Schema Design**: Implement Enterprise Data Model + Connection Pool setup + Idempotency + Cursor Pagination rules.
2. **Controller & Router**: Implement RFC 7807 Errors, Versioning, and strict Rate Limiting middleware.
3. **Service Layer**: Identify slow ops → Auto-offload to Async Queues. Design Sagas for distributed states.
4. **Data/Cache Layer**: Inject Jitter, Mutex Locks, and Anti-Penetration logic.
5. **Telemetry & Contracts**: Setup JSON Logging, Trace IDs, Prometheus metrics, and Contract Testing definitions.

> **ADBM: Production-grade backends by default. Built for resilience, optimized for high concurrency, protected against system failures.**
