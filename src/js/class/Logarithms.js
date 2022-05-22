export default class LogarithmicOperations {
    constructor(){}
    
    BaseLog(x, y) {
        if (isNaN(x) || isNaN(y)) {
            throw new Error("Type numbers only")
        }
        if (x < 0 || y < 0) {
            throw new Error("Nor the base of the logarithm or the argument should be negative or 0")
        }
        return Math.log(y) / Math.log(x);
    }

    Log10(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        if (x<0) {
            throw new Error("The logarithm argument should be a positive number")
        }
        return Math.log10(x);
    }
    
}

