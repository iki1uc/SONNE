export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE3",
            axis: obj.axis || "vertical",
            depth: obj.depth || 0,
            ready: !!obj.ready,
            time: Date.now(),
            keys: Object.keys(obj)
        };
    }
};
