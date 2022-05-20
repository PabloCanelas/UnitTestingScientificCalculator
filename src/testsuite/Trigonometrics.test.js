import TrigonometricOperations from '../js/class/Trigonometric';

test('Evaluates cos of 0 and returns 1', () => {
    const TOp = new TrigonometricOperations();
    expect(TOp.cos(0)).toBe(1);
});
