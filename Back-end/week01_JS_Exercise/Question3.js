// QUESTION :- 3
function right(str) {
    // if else conditions to check length of string that is it atlease 3 or not
    if (str.length >= 3) {
        return str.slice(-3) + str.slice(0, -3);
    } else {
        return "String length must be at least 3.";
    }
}
console.log(right("Python"));      
console.log(right("JavaScript"));  
console.log(right("Hi"));        