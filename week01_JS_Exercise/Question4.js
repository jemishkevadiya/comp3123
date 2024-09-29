// QUESTION :- 4
function angleType(angle) {
    // if else conditions to check angles
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    } else {
        return "Invalid Angle";
    }
}
// testcases to check angle type
console.log(angleType(47));   
console.log(angleType(90));   
console.log(angleType(145));  
console.log(angleType(180));  
