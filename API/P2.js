export const P2 = {
    run(core){
        return {
            id: "P3:P2",
            phase: "vectorize",
            vector: {
                h: Math.random(),
                d: Math.random(),
                g: Math.random()
            },
            ready: true,
            core
        };
    }
};
