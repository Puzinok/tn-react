import Calculator from '~/src/Calc';

console.log('Hello World!');

const x = 8;
const y = 4;
const calc = new Calculator();

console.log(`${x} + ${y} = ${calc.plus(x, y)}`);
console.log(`${x} - ${y} = ${calc.minus(x, y)}`);
console.log(`${x} * ${y} = ${calc.multiply(x, y)}`);
console.log(`${x} / ${y} = ${calc.devide(x, y)}`);
