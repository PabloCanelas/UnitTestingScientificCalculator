export default class LogarithmicOperations {
    constructor(){}
    
    BaseLog(x, y) {
        if (isNaN(x) || isNaN(y)) {
            throw new Error("Type numbers only")
        }
        return Math.log(y) / Math.log(x);
    }

    Log10(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.log10(x);
    }
    
}

