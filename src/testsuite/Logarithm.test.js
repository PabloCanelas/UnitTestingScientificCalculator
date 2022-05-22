import LogarithmicOperations from "../js/class/Logarithms"
const logOp = new LogarithmicOperations();
/*BASELOG TESTS*/

test('BaseLog of 5 base 10 equals equals aprox 0.69', () => {
    expect(logOp.BaseLog(10,5)).toBeCloseTo(0.69,1);
});

test('BaseLog of 10 base 2 equals aprox 3.32', () => {
    expect(logOp.BaseLog(2,10)).toBeCloseTo(3.32,1);
});

test('BaseLog of 30 base 6 equals aprox 1.89', () => {
    expect(logOp.BaseLog(6,30)).toBeCloseTo(1.89,1);
});

test('BaseLog of -5 base 10 equals error', () => {
    function logWBaseNegative() {
        logOp.BaseLog(10,-5);
    }
    try {
        logWBaseNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Nor the base of the logarithm or the argument should be negative or 0");
    }
});


test('BaseLog of 2000 base -2 equals error', () => {
    function logWBaseNegative() {
        logOp.BaseLog(-2,2000);
    }
    try {
        logWBaseNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Nor the base of the logarithm or the argument should be negative or 0");
    }
});


test('BaseLog of -20 base -2 equals error', () => {
    function baseLogbothNegative() {
        logOp.BaseLog(-2,-20);
    }
    try {
        baseLogbothNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Nor the base of the logarithm or the argument should be negative or 0");
    }
});

test('BaseLog of 0 base 10 equals error', () => {
    function baseLogArgument0() {
        logOp.BaseLog(10, 0);
    }
    try {
        baseLogArgument0();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Nor the base of the logarithm or the argument should be negative or 0");
    }
});

test('BaseLog of 10 base 0 equals error', () => {
    function baseLogWBase0() {
        logOp.BaseLog(0, 10);
    }
    try {
        baseLogWBase0();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Nor the base of the logarithm or the argument should be negative or 0");
    }
});


test('BaseLog of 6 base c throws an error', () => {
    function baseLogChar() {
        logOp.BaseLog('c', 6);
    }
    try {
        baseLogChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

test('BaseLog of c base 2 throws an error', () => {
    function baseLogChar() {
        logOp.BaseLog(2, 'c');
    }
    try {
        baseLogChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*LOG10 TESTS*/

test('log10 of 7 equals', () => {
    expect(logOp.Log10(7)).toBeCloseTo(0.84,1);
});

test('log10 of 0 equals -Infinity', () => {
    expect(logOp.Log10(0)).toBe(-Infinity);
});

test('Log10 of -100 throws an error', () => {
    function log10ofNegative() {
        logOp.Log10(-100);
    }
    try {
        log10ofNegative();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "The logarithm argument should be a positive number");
    }
});

test('log10 of 100 equals', () => {
    expect(logOp.Log10(100)).toBe(2);
});

test('log10 of 1829037829 equals 9.262222687847144', () => {
    expect(logOp.Log10(1829037829)).toBe(9.262222687847144);
});

test('Log10 of c throws an error', () => {
    function log10Char() {
        logOp.Log10('c');
    }
    try {
        log10Char();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', "Type numbers only");
    }
});