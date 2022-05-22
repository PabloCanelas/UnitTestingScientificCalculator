import TrigonometricOperations from '../js/class/Trigonometric';
const TOp = new TrigonometricOperations();
/*COS TEST*/

test('Evaluates cos of 0 and returns 1', () => {
    expect(TOp.cos(0)).toBe(1);
});

test('Evaluates cos of 1 and returns aprox 0.54', () => {
    expect(TOp.cos(1)).toBeCloseTo(0.54);
});

test('Evaluates cos of c and returns error', () => {
    function cosChar() {
        TOp.cos('c');
    }

    try {
        cosChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//sin
test('Evaluates sin of 0 and returns 0', () => {
    expect(TOp.sin(0)).toBe(0);
});

test('Evaluates sin of 1 and returns aprox 0,84', () => {
    expect(TOp.sin(1)).toBeCloseTo(0.84);
});

test('Evaluates sin of c and returns error', () => {
    function sinChar() {
        TOp.sin('c');
    }

    try {
        sinChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*TAN TEST*/
test('Evaluates tan of 0 and returns 0', () => {
    expect(TOp.tan(0)).toBe(0);
});

test('Evaluates tan of -1 and returns aprox -1.55', () => {
    expect(TOp.tan(-1)).toBeCloseTo(-1.55,1);
});

test('Evaluates tan of c and returns error', () => {
    function tanChar() {
        TOp.tan('c');
    }

    try {
        tanChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPCOS TEST*/
test('Evaluates hypcos of 0 and returns 1', () => {
    expect(TOp.hypcos(0)).toBe(1);
});

test('Evaluates hypcos of -1 and returns aprox 1.54', () => {
    expect(TOp.hypcos(-1)).toBeCloseTo(1.54);
});

test('Evaluates tan of c and returns error', () => {
    function hypcosChar() {
        TOp.hypcos('c');
    }

    try {
        hypcosChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPSEN TEST*/
test('Evaluates hypsin of 0 and returns 0', () => {
    expect(TOp.hypsin(0)).toBe(0);
});

test('Evaluates hypcos of -1 and returns aprox -1.17', () => {
    expect(TOp.hypsin(-1)).toBeCloseTo(-1.17,1);
});

test('Evaluates tan of c and returns error', () => {
    function hypsinChar() {
        TOp.hypsin('c');
    }

    try {
        hypsinChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPTAN TEST*/
test('Evaluates hyptan of 0 and returns 0', () => {
    expect(TOp.hyptan(0)).toBe(0);
});

test('Evaluates hyptan of -1 and returns aprox -0.76', () => {
    expect(TOp.hyptan(-1)).toBeCloseTo(-0.76,1);
});

test('Evaluates hyptan of c and returns error', () => {
    function hyptanChar() {
        TOp.hyptan('c');
    }

    try {
        hyptanChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*ARCCOS TEST*/
test('Evaluates arccos of 0 and returns number close to 1.57', () => {
    expect(TOp.arccos(0)).toBeCloseTo(1.57);
});

test('Evaluates arccos of -1 and returns aprox PI',() => {
    expect(TOp.arccos(-1)).toBeCloseTo(Math.PI);
});

test('Evaluates arccos of c and returns error', () => {
    function arccosChar() {
        TOp.arccos('c');
    }

    try {
        arccosChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*ARCsen TEST*/
test('Evaluates arcsin of 0 and returns 0', () => {
    expect(TOp.arcsin(0)).toBe(0);
});

test('Evaluates arcsin of -1 and returns aprox -1.57',() => {
    expect(TOp.arcsin(-1)).toBeCloseTo(-1.57);
});

test('Evaluates arcsin of c and returns error', () => {
    function arcsinChar() {
        TOp.arcsin('c');
    }

    try {
        arcsinChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*ARCTAN TEST*/
test('Evaluates arctan of 0 and returns 0', () => {
    expect(TOp.arctan(0)).toBe(0);
});

test('Evaluates arctan of -1 and returns aprox -0.78',() => {
    expect(TOp.arctan(-1)).toBeCloseTo(-0.78,1);
});

test('Evaluates arctan of c and returns error', () => {
    function arctanChar() {
        TOp.arctan('c');
    }

    try {
        arctanChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPARCTAN TEST*/
test('Evaluates hyparctan of 0 and returns 0', () => {
    expect(TOp.hyparctan(0)).toBe(0);
});

test('Evaluates hyparctan of -1 and returns -infinity',() => {
    expect(TOp.hyparctan(-1)).toBe(-Infinity);
});

test('Evaluates hyparctan of c and returns error', () => {
    function hyparctanChar() {
        TOp.hyparctan('c');
    }

    try {
        hyparctanChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPARCOS TEST*/
test('Evaluates hyparccos of 1 and returns 0', () => {
    expect(TOp.hyparccos(1)).toBe(0);
});

test('Evaluates hyparccos of -1 and returns NaN',() => {
    expect(TOp.hyparccos(-1)).toBeNaN();
});

test('Evaluates hyparccos of c and returns error', () => {
    function hyparccosChar() {
        TOp.hyparccos('c');
    }

    try {
        hyparccosChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

/*HYPARCSEN TEST*/
test('Evaluates hyparcsin of 1 and omething close to 0.88', () => {
    expect(TOp.hyparcsin(1)).toBeCloseTo(0.88);
});

test('Evaluates hyparcsin of -1 and returns something close -0.88',() => {
    expect(TOp.hyparcsin(-1)).toBeCloseTo(-0.88);
});

test('Evaluates hyparcsin of c and returns error', () => {
    function hyparcsinChar() {
        TOp.hyparcsin('c');
    }

    try {
        hyparcsinChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});