import AccumulativeOperations from '../js/class/Accumulative'
const acc = new AccumulativeOperations();

/*SUMMATION TEST*/

test('Summation of 5 from 1 to 5 equals 20', () => {
    expect(acc.summation(1,5,5)).toBe(20);
});

test('Summation of -1 from 1 to 10 equals -9', () => {
    expect(acc.summation(1,10,-1)).toBe(-9);
});

test('Summation of 1 from 10 to 1 throws an error', () => {
    function summStartBiggerThanEnd() {
        acc.summation(10,1,1);
    }
    try {
        summStartBiggerThanEnd();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Invalid parameters");
    }
});

test('Summation of 1 from -1 to 10 throws an error', () => {
    function summStartBiggerThanEnd() {
        acc.summation(-1,10,1);
    }
    try {
        summStartBiggerThanEnd();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Invalid parameters");
    }
});

test('Summation of 1 from 4 to 4 equals 0', () => {
    expect(acc.summation(4,4,1)).toBe(0);
});

test('Summation c and 6 throws an error', () => {
    function summChar() {
        acc.summation('c',1);
    }
    try {
        summChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*PRODUCTORY TESTS*/

test('Productory of 5 from 1 to 5 equals 625', () => {
    expect(acc.secProduct(1,5,5)).toBe(625);
});

test('Productory of 0 from 1 to 10 equals 0', () => {
    expect(acc.secProduct(1,10,0)).toBe(0);
});

test('Productory of -2 from 1 to 10 equals -512', () => {
    expect(acc.secProduct(1,10,-2)).toBe(-512);
});

test('Productory of 4 from 1 to 20 equals 274877906944', () => {
    expect(acc.secProduct(1,20,4)).toBe(274877906944);
});


test('Productory of 5 from 5 to 2 throws an error', () => {
    function productoryChar() {
        acc.secProduct(5,2,5);
    }
    try {
        productoryChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Invalid parameters");
    }
});

test('Productory c and 6 throws an error', () => {
    function productoryChar() {
        acc.secProduct(2,'c',1);
    }
    try {
        productoryChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*FACTORIAL TESTS*/

test('Factorial of 22 is 1.1240007277776077e+21', () => {
    const acc = new AccumulativeOperations();
    expect(acc.fact(22)).toBe(1.1240007277776077e+21);
});

test('Factorial of 0 is 1', () => {
    const acc = new AccumulativeOperations();
    expect(acc.fact(0)).toBe(1);
});


test('Factorial of -2 throws an error', () => {
    function factOfNegative() {
        acc.fact(-2);
    }
    try {
        factOfNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Factorial of a negative number doesn't exists");
    }
});

test('Factorial of 5 is 120', () => {
    const acc = new AccumulativeOperations();
    expect(acc.fact(5)).toBe(120);
});

test('Factorial of c throws an error', () => {
    function factChar() {
        acc.fact('c');
    }
    try {
        factChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*RCURSIVE FACTORIAL TESTS*/

test('Recursive factorial of 5 is 120', () => {
    const acc = new AccumulativeOperations();
    expect(acc.recFac(5)).toBe(120);
});

test('Recursive factorial of 0 is 1', () => {
    const acc = new AccumulativeOperations();
    expect(acc.recFac(0)).toBe(1);
});

test('Recursive factorial of 22 is 1.1240007277776077e+21', () => {
    const acc = new AccumulativeOperations();
    expect(acc.recFac(22)).toBe(1.1240007277776077e+21);
});

test('Recursive factorial of -4 throws an error', () => {
    function recursiveFactOfNegative() {
        acc.recFac(-4);
    }
    try {
        recursiveFactOfNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Factorial of a negative number doesn't exists");
    }
});

test('Recursive facorial of c throws an error', () => {
    function recFacChar() {
        acc.recFac('c');
    }
    try {
        recFacChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});