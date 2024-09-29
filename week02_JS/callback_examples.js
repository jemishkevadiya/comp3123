// Callback Examples
var callback = () => {
    console.log('callback called');
}

setTimeout(callback, 2000);

var p = (name) => {
    console.log(name);
}

function printName(name, print){
    print('John Doe');
}

printName("Jemish", p)

var name = "John Doe";
printName("Jemish", (name) => {
    console.log(name);
});
printName(name, p)

var countries = ['India', 'USA', 'UK']
countries.map((country) => {
    console.log(country);
});