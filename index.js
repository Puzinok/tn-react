import Calculator from '~/src/Calc';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

console.log('Hello World!');

const x = 8;
const y = 4;
const calc = new Calculator();

console.log(`${x} + ${y} = ${calc.plus(x, y)}`);
console.log(`${x} - ${y} = ${calc.minus(x, y)}`);
console.log(`${x} * ${y} = ${calc.multiply(x, y)}`);
console.log(`${x} / ${y} = ${calc.devide(x, y)}`);

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>Hello world!</div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);