function welcome() {
    console.log('Welcome to the class');
}

function greet(name) {
    console.log(`Hello, ${name}`);
}

// Function Expression
var welcome = function() {
    console.log('Welcome to the class');
}

// Arrow Function
var welcome = () => {
    console.log('Welcome to the class');
}

var greet = name => {
    console.log(`Hello, ${name}`);
}

// Short Hand
var greet = name => console.log(`Hello, ${name}`);

function print(a, b, ...c) {
    console.log(arguments);
    console.log(a)
    console.log(b)
    console.log(c)
}

print(1, 2 ,3, 4, 5, 6, 7, 8, 9, 10);
