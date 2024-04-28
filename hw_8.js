function notNumber(value) {
    if (value == null) {                    // If the parameter value is equal to null, then it is not a number
        return true;
    }
    if (typeof value === 'boolean') {       // If the parameter type is boolean, then it is not a number
        return true;
    }
    let number = +value;           // Conversion to a number
    // Check whether the variable number is a NaN value.
    if (number !== number) {
        return true;
    } else {
        return false;
    }
}
let result = notNumber("example");  // Passing the value 'example' to the function
console.log(result);                               // Displaying the result of the function's operation
let result1 = notNumber("1");
console.log(result1);
let result2 = notNumber("NaN");
console.log(result2);
let result3 = notNumber(1);
console.log(result3);
let result4 = notNumber(NaN);
console.log(result4);
let result5 = notNumber(false);
console.log(result5);
let object = {
    x: 5,
    y: 7
}
let result6 = notNumber(object);
console.log(result6);
let array = [
    "xy",
    "yx"
]
let result7 = notNumber(array);
console.log(result7);
let result8 = notNumber(null);
console.log(result8);