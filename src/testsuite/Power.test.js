import powerOperators from '../js/class/Power'
const POp = new powerOperators();

//Pow
test('Adds 2 base and 3 exponent then returns 8', () => {
    expect(POp.pow(2,3)).toBe(8);
});
test('Adds 5 base and 0 exponent and returns 1', () => {
    expect(POp.pow(5,0)).toBe(1);
});

test('Adds 0 base and 500 exponent and returns 0', () => {
    expect(POp.pow(0,500)).toBe(0);
});
test('Adds -2 base and 2 exponent and returns 4', () => {
    expect(POp.pow(-2,2)).toBe(4);
});
test('Adds -2 base and 3 exponent and returns -8', () => {
    expect(POp.pow(-2,2)).toBe(4);
});
test('Adds 2 base and -2 exponent and returns 0.25', () => {
    expect(POp.pow(2,-2)).toBe(0.25);
});

test('Adds 0 base and 0 exponent and returns Error', () => {
    function error() {
        POp.pow(0,0)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('Adds asd base and 2 exponent and returns error', () => {
    function PowChar() {
        POp.pow("asd",2)
    }

    try {
        PowChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }

});
test('2 base and asd exponent and returns error', () => {
    function PowChar() {
        POp.pow(2,"asd")
    }

    try {
        PowChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//squared
test('Adds 2 base then returns 4', () => {
    expect(POp.squared(2)).toBe(4);
});
test('Adds 1 base then returns 1', () => {
    expect(POp.squared(1)).toBe(1);
});
test('Adds 0 base then returns 0', () => {
    expect(POp.squared(0)).toBe(0);
});
test('Adds -3 base then returns 9', () => {
    expect(POp.squared(-3)).toBe(9);
});

test('asd base and returns error', () => {
    function SquaredChar() {
        POp.squared("asd")
    }

    try {
        SquaredChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//cubed
test('Adds 2 base then returns 8', () => {
    expect(POp.cubed(2)).toBe(8);
});
test('Adds 1 base then returns 1', () => {
    expect(POp.cubed(1)).toBe(1);
});
test('Adds 0 base then returns 0', () => {
    expect(POp.cubed(0)).toBe(0);
});
test('Adds -3 base then returns 9', () => {
    expect(POp.cubed(-3)).toBe(-27);
});

test('asd base and returns error', () => {
    function CubedChar() {
        POp.cubed("asd")
    }

    try {
        CubedChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//sqrt
test('Adds 4 radicand then returns 2', () => {
    expect(POp.sqrt(4)).toBe(2);
});
test('Adds 1 radicand then returns 1', () => {
    expect(POp.sqrt(1)).toBe(1);
});
test('Adds 0 radicand then returns 0', () => {
    expect(POp.sqrt(0)).toBe(0);
});
test('Adds -4 radicand then returns error', () => {
    function error() {
        POp.sqrt(-4)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('asd radicant and returns error', () => {
    function SqrtChar() {
        POp.sqrt("asd")
    }

    try {
        SqrtChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//root
test('Adds 32 radicand and 5 index then returns 2', () => {
    expect(POp.root(32,5)).toBe(2);
});
test('Adds 32 radicand and 0 index then returns error', () => {
    function error() {
        POp.root(32,0)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('Adds 0 radicand and 5 index then returns error', () => {
    function error() {
        POp.root(0,5)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});
test('Adds -30 radicand and 5 index then returns error', () => {
    function error() {
        POp.root(-30,5)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('Adds 4 radicant and -2 index and returns 0.5', () => {
    expect(POp.root(4,-2)).toBe(0.5);
});

test('Adds 0 radicant and 0 index and returns Error', () => {
    function error() {
        POp.root(0,0)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('Adds asd radicant and 2 index and returns error', () => {
    function RootChar() {
        POp.root("asd",2)
    }

    try {
        RootChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }

});

test('Adds 2 radicant and asd index and returns error', () => {
    function RootChar() {
        POp.root(2,"asd")
    }

    try {
        RootChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }

});

//cubic root
test('Adds 27 radicand then returns 3', () => {
    expect(POp.cubicRoot(27)).toBe(3);
});
test('Adds 1 radicand then returns 1', () => {
    expect(POp.cubicRoot(1)).toBe(1);
});
test('Adds 0 radicand then returns 0', () => {
    expect(POp.cubicRoot(0)).toBe(0);
});
test('Adds -4 radicand then returns error', () => {
    function error() {
        POp.cubicRoot(-4)
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});

test('asd radicant and returns error', () => {
    function CubicRootChar() {
        POp.cubicRoot("asd")
    }

    try {
        CubicRootChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//inverse
test('Adds 2 base then returns 0.5', () => {
    expect(POp.inverse(2)).toBe(0.5);
});
test('Adds 1 base then returns 1', () => {
    expect(POp.inverse(1)).toBe(1);
});
test('Adds 0 base then returns error', () => {
    function error() {
        POp.inverse(0);
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});
test('Adds -2 base then returns -0.5', () => {
    expect(POp.inverse(-2)).toBe(-0.5);
});

test('asd base and returns error', () => {
    function InverseChar() {
        POp.inverse("asd")
    }

    try {
        InverseChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

//inverse
test('Adds 2 base 1 argument then returns 0.5', () => {
    expect(POp.log(2,1)).toBe(0.5);
});
test('Adds 1 base 1 argument then returns 1', () => {
    expect(POp.log(1,1)).toBe(1);
});
test('Adds 0 base 1 argument then returns error', () => {
    function error() {
        POp.log(1,1);
    }

    try {
        error();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
});
test('Adds 1 base 0 argument then returns 1', () => {
    expect(POp.log(1,0)).toBe(1);
});


test('Adds -2 base, argument 1 then returns -0.5', () => {
    expect(POp.log(-2,1)).toBe(-0.5);
});

test('Adds 1 base, argument -1 then returns 1', () => {
    expect(POp.log(1,-1)).toBe(1);
});

test('asd base argument 1 and returns error', () => {
    function LogChar() {
        POp.log("asd",1)
    }

    try {
        LogChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});

test('1 base argument asd and returns error', () => {
    function LogChar() {
        POp.log(1,"asd")
    }

    try {
        LogChar();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Type numbers only');
    }
});
