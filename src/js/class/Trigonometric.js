export default class TrigonometricOperations {
    constructor() { }

    sin(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.sin(x);
    }

    cos(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.cos(x);
    }

    tan(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.tan(x);
    }

    hyptan(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.tanh(x);
    }

    hypcos(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.cosh(x);
    }

    hypsin(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.sinh(x);
    }

    arcsin(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.asin(x);
    }

    arccos(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.acos(x);
    }

    arctan(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.atan(x);
    }

    hyparcsin(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.asinh(x);
    }

    hyparccos(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.acosh(x);
    }

    hyparctan(x) {
        if (isNaN(x)) {
            throw new Error("Type numbers only")
        }
        return Math.atanh(x);
    }
}

