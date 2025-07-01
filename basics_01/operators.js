//display the discount price of the item in percentage with "off"

var listingPrice = 799;
var sellingPrice = 199;

var discountPrice = ((listingPrice - sellingPrice)/ listingPrice)*100;

console.log(discountPrice);

var discountPricePercentage = Math.round(discountPrice);

console.log(discountPricePercentage + "% off");



// Calculator problem

const number1 = 10; 
const operator = '+'; 
const number2 = 5;
let result;

if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '*') {
    result = number1 * number2;
} else if (operator === '/') {
    if (number2 === 0) {
        result = "Error: Cannot divide by zero!";
    } else {
        result = number1 / number2;
    }
} else {
    result = "Error: Invalid operator!"; 
}
console.log("Calculation:");
console.log(number1, operator, number2, "=", result);