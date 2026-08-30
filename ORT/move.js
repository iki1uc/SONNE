// move.js – us(e)ability Kernel
// neutral, frei, selbsterklärend, kompatibel mit iki1uc

// ─── SCAN ────────────────────────────────────────────────
export function scan(f){
    return {
        len: f.length,
        phi: f.includes("Φ") || f.includes("φ"),
        ax: f.includes("AX") || f.includes("XA"),
        p: /P[0-4e]/.test(f)
    };
}

// ─── ORBIT ────────────────────────────────────────────────
export function orbit(f){
    if (f.includes("Φ")) return "IKI";
    if (f.includes("φ∞")) return "MA³";
    if (f.includes("φ²")) return "UC";
    if (f.includes("φ")) return "BIR";
    return "none";
}

// ─── OPERATOR ─────────────────────────────────────────────
export function operator(f){
    if (f.includes("AX")) return "AX";
    if (f.includes("XA")) return "XA";
    return "none";
}

// ─── RUN ──────────────────────────────────────────────────
export function run(f){
    if (f.includes("P4")) return "Start";
    if (f.includes("P0")) return "Wake";
    if (f.includes("P1")) return "Melt";
    if (f.includes("P2")) return "Merge";
    if (f.includes("Pe")) return "End";
    return "none";
}

// ─── MATH ─────────────────────────────────────────────────
export function math(f){
    return {
        X: f.length % 7,
        Y: f.length % 11,
        Z: f.length % 13,
        MASS: f.length * 3,
        POS: f.length % 12
    };
}

// ─── FLÄCHE 48 ────────────────────────────────────────────
export function flaeche48(f, side){
    const len = f.length;
    const pos = (len + (side === 'A' ? 3 : 7)) % 16;
    const mass = len * (side === 'A' ? 2 : 4);

    return {
        POS: pos,
        MASS: mass,
        ORBIT: orbit(f),
        OP: operator(f),
        RUN: run(f)
    };
}

// ─── US(E)ABILITY ─────────────────────────────────────────
export function usability(user, input){
    return {
        user: {
            name: user.name,
            level: user.level,
            status: user.status
        },
        scan: scan(input),
        orbit: orbit(input),
        operator: operator(input),
        run: run(input),
        math: math(input),
        flaecheA: flaeche48(input, 'A'),
        flaecheB: flaeche48(input, 'B'),
        result: "us(e)ability"
    };
}
