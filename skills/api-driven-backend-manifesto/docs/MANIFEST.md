# ADBM Sentient Manifest v5.0

## 🏛️ Architecture & Sovereignty
### 1. Edge-First Sovereignty
- **Protocol**: Offload Auth, Rate-Limiting, and Geofencing to the network edge (Cloudflare Workers/Lambda@Edge).
- **Benefit**: Protects origin servers from 90% of malicious traffic; reduces P95 latency by 40ms.

### 2. AMP (Autonomous Migration Protocol)
- **Zero-Downtime**: Schema changes must be additive. 
- **Expansion**: Use "Shadow Writes" when migrating between different database engines (e.g., PostgreSQL to MySQL).

### 3. Tactical DDD & GoF
- **Aggregates**: Ensure strict consistency boundaries.
- **Patterns**: Use Strategy for multi-payment providers, Adapter for legacy API integration.

## 🛡️ Sentient Security (Security Swarm)
### 1. AI Red Team Audit
- **Protocol**: Before delivery, ADBM simulates an adversarial attack on all `POST/PUT` endpoints.
- **Checks**: IDOR, SQLi (even with ORM), and PII leakage in logs.

### 2. Zero-Trust Interaction
- **Principle**: Service-to-service communication must use mTLS or short-lived JWTs.
- **RBAC/RLS**: Database-level security (Row Level Security) is mandatory for multi-tenant apps.

## 📦 Persistence Mastery
### 1. Autonomous Engine Selection
- **MySQL**: Default for Growth/Enterprise (ACID, complex JOINS).
- **Supabase**: Default for MVP/Serverless (Speed, Real-time).
- **Redis**: Mandatory for Session/Cache/Idempotency.

### 2. ORM Alignment
- **Prisma/Drizzle**: Type-safety is secondary to performance. Always audit the generated SQL for N+1 issues.

## 📊 Ops & Observability
- **Performance**: Standard P95 < 100ms.
- **Predictive Infra**: 10x Load Simulation protocol for critical path testing.
- **Telemetry**: OpenTelemetry (OTLP) + Prometheus for real-time saturation metrics.