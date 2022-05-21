import propertiesOperators from '../js/class/Properties'
const POp = new propertiesOperators();

//eulerValue
test('Euler Value', () => {
    expect(POp.eulerValue()).toBe(2.718281828459045);
});

//piVAlue
test('Pi Value', () => {
    expect(POp.piValue()).toBe(3.141592653589793);
});

//ln10
test('Ln10', () => {
    expect(POp.ln10()).toBe(2.302585092994046);
});

//ln2
test('Ln2', () => {
    expect(POp.ln2()).toBe(0.6931471805599453);
});

//log10E
test('Log10E', () => {
    expect(POp.log10E()).toBe(0.4342944819032518);
});

//log2E
test('Log2E', () => {
    expect(POp.log2E()).toBe(1.4426950408889634);
});

