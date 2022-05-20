export default class AccumulativeOperations {

    summation(start, end, number) {
        if (isNaN(start) || isNaN(end) || isNaN(number)) {
            throw new Error("Type numbers only")
        }
        let sum = 0;
        for (let i = start; i < end; i++) {
            sum += number;
        }
        return sum
    }

    secProduct(start, end, number) {
        if (isNaN(start) || isNaN(end) || isNaN(number)) {
            throw new Error("Type numbers only")
        }
        let pro = 1;
        for (let i = start; i < end; i++) {
            pro *= number;
        }
        return pro
    }

    fact(number) {
        if (isNaN(number)) {
            throw new Error("Type numbers only")
        }
        var total = 1;
        for (let i = 1; i <= number; i++) {
            total = total * i;
        }
        return total;
    }

    recFac(number) {
        if (isNaN(number)) {
            throw new Error("Type numbers only")
        }
        if (number == 0){ 
            return 1; 
        }
        return number * this.recFac (number-1); 
    }

}

