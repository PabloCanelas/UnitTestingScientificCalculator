export default class ArithmeticOperators {
    constructor() { }

    sum(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Type numbers only")
        }
        return (a + b)
    }

    sub(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Type numbers only")
        }
        
        return (a - b)
    }

    mult(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Type numbers only")
        }
        return (a * b)
    }

    div(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Type numbers only")
        }
        if(b===0){
            return undefined
        }
        return (a / b)
    }

    res(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Type numbers only")
        }
        return (a % b)
    }

}

