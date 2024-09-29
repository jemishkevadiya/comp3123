
// Question :- 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (let name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// Question :- 2

const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
}
  
console.log(capitalize('fooBar')); 
console.log(capitalize('nodeJs')); 


// Question :- 3

const convert_capital = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
}

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(convert_capital);

console.log(capitalizedColors);


// Question :- 4

const values = [1, 60, 34, 30, 20, 5];

function isLessThan20(value) {
    return value < 20;
}
const filterLessThan20 = values.filter(isLessThan20);
console.log(filterLessThan20);


// Question :- 5

const array = [1, 2, 3, 4];

const calculateSum = array.reduce(([total], num) => [total + num], [0])[0];
const calculateProduct = array.reduce(([total], num) => [total * num], [1])[0];

console.log(calculateSum);
console.log(calculateProduct);


// Question :- 6

class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); 
      this.balance = balance;
    }
  
    details() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details()); 
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.details()); 
  