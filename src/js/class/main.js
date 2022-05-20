import { ArithmeticOperators } from './Arithmetics.js';
import { PowerOperators } from './Power.js';
import { Properties } from './Properties.js';
import { LogarithmicOperations } from './Logarithms.js';
import { TrigonometricOperations } from './Trigonometric.js';
import { AccumulativeOperations } from './Accumulative.js';


Main();

function Main() {
    const AOp = new ArithmeticOperators();
    const POp = new PowerOperators();
    const prop = new Properties();
    const logOp = new LogarithmicOperations();
    const trigOp = new TrigonometricOperations();
    const acc = new AccumulativeOperations();



    //Arithmetic
    console.log(AOp.sum(1, 2));
    console.log(AOp.mult(1, 2));
    console.log(AOp.div(0, 0));
    console.log(AOp.sub(1, 2));
    console.log(AOp.res(3, 2));

    //Power, root, inverse
    console.log(POp.pow(9, 0.5));
    console.log(POp.squared(8));
    console.log(POp.root(9, 3));
    console.log(POp.sqrt(16));
    console.log(POp.inverse(16));
    console.log(POp.cubicRoot(8));
    console.log(POp.cubed(3));

    //Properties, Constants
    console.log(prop.eulerValue());
    console.log(prop.piValue());
    console.log(prop.ln10());
    console.log(prop.ln2());
    console.log(prop.log10E());
    console.log(prop.log2E());

    //Logarithms
    console.log(logOp.BaseLog(2, 10));
    console.log(logOp.Log10(5));

    //Trigonometry
    console.log(trigOp.cos(5));
    console.log(trigOp.sin(5));
    console.log(trigOp.tan(5));
    console.log(trigOp.hypcos(1));
    console.log(trigOp.hyptan(5));
    console.log(trigOp.hypsin(1));
    console.log(trigOp.arccos(1));
    console.log(trigOp.arcsin(5));
    console.log(trigOp.arctan(1));
    console.log(trigOp.hyparccos(1));
    console.log(trigOp.hyparcsin(5));
    console.log(trigOp.hyparctan(1));

    //Accumulative
    console.log(acc.fact(5));
    console.log(acc.recFac(5));
    console.log(acc.secProduct(1,5,5));
    console.log(acc.summation(1,5,5));






















}