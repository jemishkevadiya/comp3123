// QUESTION :- 1
// creating function name capitalizeWord with str parameter.
function capitalizeWord(str) {
    // spliting words 
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        // joining again to make string
    }).join(' ');
}
const inputString = "the quick brown fox";
const capitalizedString = capitalizeWord(inputString);
console.log(capitalizedString);