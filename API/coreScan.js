export function coreScan(){
    return {
        id: "CORE3",
        axis: "vertical",
        depth: 1.0,

        vector: {
            h: 0,      // Höhe
            d: 0,      // Tiefe
            g: 0       // Geo
        },

        respo360: {
            id: "RESPO3",
            active: true,
            level: 360,
            pulse: Date.now()
        },

        stamp: Date.now()
    };
}
