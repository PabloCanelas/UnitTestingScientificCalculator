import ArithmeticOperators from '../js/class/Arithmetics';

test('Adds 1+2 and returns 3', () => {
    const AOp = new ArithmeticOperators();
    expect(AOp.sum(1,2)).toBe(3);
});
