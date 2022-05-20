import LogarithmicOperations from "../js/class/Logarithms"
const logOp = new LogarithmicOperations();

test('BaseLog of 5 base 10 equals 0.6989700043360187', () => {
    expect(logOp.BaseLog(10,5)).toBe(0.6989700043360187);
});

test('BaseLog of 10 base 2 equals 3.3219280948873626', () => {
    expect(logOp.BaseLog(2,10)).toBe(3.3219280948873626);
});

test('BaseLog of 30 base 6 equals 1.8982444017039273', () => {
    expect(logOp.BaseLog(6,30)).toBe(1.8982444017039273);
});

test('BaseLog of -5 base 10 equals error', () => {
    expect(logOp.BaseLog(10,-5)).toBe(Error);
});

test('BaseLog of 2000 base -2 equals error', () => {
    expect(logOp.BaseLog(-2,2000)).toBe(Error);
});

test('BaseLog of -20 base -2 equals error', () => {
    expect(logOp.BaseLog(-2,-20)).toBe(Error);
});

test('BaseLog of 0 base 10 equals error', () => {
    expect(logOp.BaseLog(10, 0)).toBe(Error);
});

test('BaseLog of 10 base 0 equals error', () => {
    expect(logOp.BaseLog(0, 10)).toBe(Error);
});

test('BaseLog of 7 base 600 equals error', () => {
    expect(logOp.BaseLog(600,7)).toBe(Error);
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

test('log10 of 7 equals', () => {
    expect(logOp.Log10(7)).toBe(2);
});

test('log10 of 0 equals -Infinity', () => {
    expect(logOp.Log10(0)).toBe(-Infinity);
});

test('log10 of -100 equals Error', () => {
    expect(logOp.Log10(7)).toBe(Error);
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
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});