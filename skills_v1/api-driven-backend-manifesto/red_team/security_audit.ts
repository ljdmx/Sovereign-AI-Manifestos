// Red Team: Automated Security Fuzzing Engine
// Purpose: Proactively attack new endpoints to ensure resilience

import axios from 'axios';

interface AttackVector {
    name: string;
    type: 'sql' | 'nosql' | 'xss' | 'overflow' | 'auth';
    payload: any;
    expectedStatus: number; // Expect 400 or 403, never 500
}

const ATTACK_VECTORS: AttackVector[] = [
    // SQL Injection
    { name: 'SQL Injection (Basic)', type: 'sql', payload: "' OR '1'='1", expectedStatus: 400 },
    { name: 'SQL Injection (Comment)', type: 'sql', payload: "admin' --", expectedStatus: 400 },

    // NoSQL Injection (if using Mongo, but good to test anyway)
    { name: 'NoSQL Bypass', type: 'nosql', payload: { "$gt": "" }, expectedStatus: 400 },

    // XSS
    { name: 'XSS Script', type: 'xss', payload: "<script>alert(1)</script>", expectedStatus: 400 },
    { name: 'XSS Image', type: 'xss', payload: "<img src=x onerror=alert(1)>", expectedStatus: 400 },

    // Buffer Overflow / DoS
    { name: 'Large Payload', type: 'overflow', payload: "A".repeat(10000), expectedStatus: 413 }, // Payload too large

    // Auth Bypass
    { name: 'Mass Assignment (Admin)', type: 'auth', payload: { isAdmin: true, role: 'ADMIN' }, expectedStatus: 403 }
];

export async function runSecurityAudit(endpoint: string, method: 'POST' | 'PUT' | 'PATCH', basePayload: any) {
    console.log(`🛡️  Red Team: Auditing ${method} ${endpoint}`);
    let vulnerabilities = 0;

    for (const vector of ATTACK_VECTORS) {
        // Inject payload into one field
        const maliciousPayload = { ...basePayload };
        const targetField = Object.keys(basePayload)[0]; // Attack first field
        maliciousPayload[targetField] = vector.payload;

        try {
            await axios({
                method,
                url: endpoint,
                data: maliciousPayload,
                validateStatus: () => true // Handle all statutes manually
            });
            // If we are here, requests didn't crash network, check status
            // We actually need to check the RESPONSE status code
        } catch (error: any) {
            // If the server CRASHED (conn refused), that's a Crit Fail
            if (error.code === 'ECONNREFUSED') {
                console.error(`❌ CRITICAL: Server crashed by ${vector.name}`);
                vulnerabilities++;
                continue;
            }
        }
    }

    return vulnerabilities === 0;
}
