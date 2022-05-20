import ArithmeticOperators from '../js/class/Arithmetics';
const AOp = new ArithmeticOperators();

//Sum
test('Adds 1+2 and returns 3', () => {
    expect(AOp.sum(1,2)).toBe(3);
});

test('Adds -1-1 and returns -2', () => {
    expect(AOp.sum(-1,-1)).toBe(-2);
});

test('Adds 0-2 and returns -2', () => {
    expect(AOp.sum(0,-2)).toBe(-2);
});


test('Adds c + 1 and throws error', () => {
    function addChar() {
        AOp.sum('c',1);
    }

    try {
        addChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});


//Sub
test('Substracts 1-2 and returns -1', () => {
    expect(AOp.sub(1,2)).toBe(-1);
});

test('Substracts -1-(-1) and returns 0', () => {
    expect(AOp.sub(-1,-1)).toBe(0);
});

test('Substracts 2-1 and returns 1', () => {
    expect(AOp.sub(2,1)).toBe(1);
});


test('Substracts c - 1 and throws error', () => {
    function subChar() {
        AOp.sub('c',1);
    }

    try {
        subChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//mult
test('Multiplies 1*2 and returns 2', () => {
    expect(AOp.mult(1,2)).toBe(2);
});

test('Multiplies 1*(-1) and returns -1', () => {
    expect(AOp.mult(1,-1)).toBe(-1);
});

test('Multiplies 2*0 and returns 0', () => {
    expect(AOp.mult(2,0)).toBe(0);
});


test('Multiplies c - 1 and throws error', () => {
    function multChar() {
        AOp.mult('c',1);
    }

    try {
        multChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//div
test('Divides 1/2 and returns 0.5', () => {
    expect(AOp.div(1,2)).toBe(0.5);
});

test('Divides 4/(-2) and returns -2', () => {
    expect(AOp.div(4,-2)).toBe(-2);
});


test('Divides 2/0 and returns undefined', () => {
    expect(AOp.div(2,0)).toBeUndefined();
});

test('Divides 0/2 and returns 0', () => {
    expect(AOp.div(0,2)).toBe(0);
});

test('Divides c - 1 and throws error', () => {
    function divChar() {
        AOp.div('c',1);
    }

    try {
        divChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//Res
test('Calculates residue of 1/2 and returns 1', () => {
    expect(AOp.res(1,2)).toBe(1);
});

test('Calculates residue of 3/-2 and returns 1', () => {
    expect(AOp.res(3,-2)).toBe(1);
});

test('Calculates residue of 2-1 and returns 0', () => {
    expect(AOp.res(2,1)).toBe(0);
});


test('Substracts c - 1 and throws error', () => {
    function resChar() {
        AOp.res('c',1);
    }

    try {
        resChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
}); ``