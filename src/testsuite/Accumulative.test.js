import AccumulativeOperations from '../js/class/Accumulative'

test('is summation of 3 from 1 to 7', () => {
    const acc = new AccumulativeOperations();
    expect(acc.summation(1,5,5)).toBe(20);
});
