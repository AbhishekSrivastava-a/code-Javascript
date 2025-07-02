// var num1 = 10; // global scope - declared outside a block of code it can be accessed anywhere in the program now
// function mySum(){
//     let a = 10;
//     let b = 20;
//     let num2= a+b;
// }

// console.log(num1);


let globalVariable = "Abhishek";

function firstFunction(){
    return globalVariable;
}
function secondFunction(){
    return globalVariable;
}

console.log(globalVariable);
console.log(firstFunction());
console.log(secondFunction());  //we are able to access the globalVariable anymoment in the code


//Local / Functional Scope - Any piece of code or variable decleared inside of  a block of code is only available in that funciton

 let num1 = 10;
 function sum(num2){
    let total = num1+num2;
    console.log(total);
 }
 console.log(num1);
 sum(10);