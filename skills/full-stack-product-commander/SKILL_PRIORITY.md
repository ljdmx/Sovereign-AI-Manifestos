# SKILL_PRIORITY.md — Cross-Skill Conflict Arbitration

> **Purpose**: When ADBM (backend) and DDFM (frontend) rules produce contradictory requirements for the same code layer (e.g., BFF, API Gateway, SSR route handlers), this document is the authoritative tiebreaker. FSPC orchestrates both and MUST consult this file when conflicts arise.

---

## ⚖️ Global Priority Hierarchy

```
1. Compliance / Regulatory  (HIPAA, GDPR, PCI-DSS — non-negotiable, always wins)
2. Security                 (ADBM §9 + DDFM §10 — safety before function)
3. Product Correctness      (Business logic integrity, no data loss)
4. Performance              (SLO targets, latency budgets)
5. Aesthetics / UX          (Visual quality, animation fidelity)
6. Developer Experience     (Clean code, DX ergonomics)
```

> **Rule**: In any conflict between two skills, apply the rule from the higher-ranked priority category. If both rules belong to the same priority tier, prefer the ADBM rule for server-side layers and the DDFM rule for client-side layers.

---

## 🔀 Known Conflict Scenarios

| Conflict Zone | ADBM Rule | DDFM Rule | Resolution |
|---|---|---|---|
| **BFF Response Shape** | RFC 7807 error body (`type`, `title`, `status`, `detail`) | User-friendly error message with localized string | Include BOTH: RFC 7807 body for machine parsing + `user_message` field for UI display |
| **CSP vs Dynamic Imports** | Strict `script-src` CSP (no unsafe-inline) | Dynamic `import()` for heavy libs | Use CSP nonces (`script-src 'nonce-{random}'`) instead of wildcard to satisfy both |
| **Image Optimization** | Binary asset streaming (OOM prevention) | WebP/AVIF + `fetchpriority` on client | Use streaming upload on server; serve optimized formats via CDN/image proxy |
| **Auth Token Storage** | JWT in HttpOnly cookie (ADBM §9) | Optimistic UI reads token client-side | Store JWT in HttpOnly cookie; expose non-sensitive claims in a separate readable cookie |
| **Rate Limiting + UI** | 429 response on burst | Optimistic UI assumes success | UI MUST handle 429 gracefully: rollback optimistic state + show retry countdown |
| **SSR + RLS** | Postgres RLS via server session | `"use client"` component isolation | Server Components perform RLS-gated DB queries; pass safe data as props to Client Components |

---

## 🧬 Layer Ownership Matrix

| Code Layer | Owning Skill | Notes |
|---|---|---|
| Database Schema / Migrations | **ADBM** | DDD, audit fields, soft delete, cursors |
| API Controllers / Routes | **ADBM** | RFC 7807, versioning, rate limiting |
| Service / Business Logic | **ADBM** | Sagas, queues, idempotency |
| BFF / API Gateway | **ADBM** primary, DDFM for response shaping | RFC 7807 body shape; DDFM adds `user_message` |
| Server Components (RSC) | **ADBM** for data-fetching logic, **DDFM** for render | Treat as boundary layer |
| Client Components | **DDFM** | State machines, animations, a11y |
| CSS / Design Tokens | **DDFM** | Token system, dark mode, RTL |
| CI/CD Pipeline | **FSPC** | Orchestrates both skill gates |

---

## 🔄 Conflict Resolution Process

1. **Identify** the conflict zone (which layer is contested).
2. **Look up** the Layer Ownership Matrix above.
3. **If ambiguous**, apply the Global Priority Hierarchy.
4. **If still ambiguous**, default to the ADBM rule server-side and DDFM rule client-side.
5. **Document** the resolution in `docs/adr/` as an Architecture Decision Record.

---

## � RFC 2119 Compliance Standard

All rules across ADBM, DDFM, and FSPC use the following compliance levels. When a conflict resolution resolution produces a rule, classify it here:

| Level | Meaning | Enforcement |
|---|---|---|
| **MUST / MUST NOT** | Non-negotiable | HARD BLOCK — do not proceed |
| **SHOULD / SHOULD NOT** | Strongly recommended | Justification required in ADR |
| **MAY** | Context-dependent | Apply based on scale & needs |

> **Inter-skill conflicts inherit the higher compliance level.** If ADBM MUST and DDFM SHOULD conflict, the resolution MUST also be MUST.

---

## 🔁 Cross-Session Context Handoff Protocol

For multi-session projects, AI MUST maintain a `session_state.json` artifact per project containing:

```json
{
  "project": "project-name",
  "classification": { "scale": "Growth", "security": "Regulated", "complexity": "Modular Monolith" },
  "deferred_rules": ["ADBM-§5-ReadReplica", "ADBM-§6-Saga"],
  "applied_rules": ["ADBM-§1", "ADBM-§3", "DDFM-§19"],
  "completed_phases": ["PRE-FLIGHT", "EXECUTION-Step1"],
  "open_decisions": ["Tenant isolation model TBD"],
  "last_updated": "ISO-8601-timestamp"
}
```

At the start of each new session on the same project, AI MUST read `session_state.json` to restore context before proceeding.

---

## �📋 Changelog

| Version | Date | Summary |
|---|---|---|
| v1.1 | 2026-02-28 | Added: RFC 2119 Compliance Standard reference, Cross-Session Context Handoff Protocol |
| v1.0 | 2026-02-28 | Initial — Global priority hierarchy, 6 conflict scenarios, Layer Ownership Matrix, Resolution Process |
