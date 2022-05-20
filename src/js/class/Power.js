export default class PowerOperators {
    constructor() { }

    pow(base, exponent) {
        if (isNaN(base) || isNaN(exponent)) {
            throw new Error("Type numbers only")
        }
        return (base ** (exponent))
    }

    squared(base) {

        if (isNaN(base)) {
            throw new Error("Type numbers only")
        }

        return (base * base)
    }

    cubed(base) {

        if (isNaN(base)) {
            throw new Error("Type numbers only")
        }

        return (base * base * base)
    }

    sqrt(radicand) {
        let rootValue = radicand;

        if (isNaN(radicand)) {
            throw new Error("Type numbers only")
        }

        return (rootValue ** (1 / 2))
    }

    root(radicand, index) {
        if (isNaN(radicand) || isNaN(index)) {
            throw new Error("Type numbers only")
        }
        return (radicand ** (1 / index))
    }

    cubicRoot(radicand) {
        if (isNaN(radicand)) {
            throw new Error("Type numbers only")
        }
        return (radicand ** (1 / 3))
    }

    inverse(base) {
        if (isNaN(base)) {
            throw new Error("Type numbers only")
        }
        return (1 / base)
    }

    log(base, argument) {
        if (isNaN(base) || isNaN(argument)) {
            throw new Error("Type numbers only")
        }
        return (1 / base)
    }

}

