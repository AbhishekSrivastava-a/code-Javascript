//q write a js program to store the name,phonenumber and marks of the student using objects

const student = {
    name : "Abhishek",
    phoneNumber : "1111111111",
    marks : 80
};

console.table([student]);
console.log(typeof student);

// ┌─────────┬────────────┬──────────────┬───────┐
// │ (index) │ name       │ phoneNumber  │ marks │
// ├─────────┼────────────┼──────────────┼───────┤
// │ 0       │ 'Abhishek' │ '1111111111' │ 80    │
// └─────────┴────────────┴──────────────┴───────┘
// object

// Create a variable of type string and try to add a number to it.


let myString = "Abhishek";
let addNumber = myString + 18;

console.log(addNumber);

console.log(typeof addNumber);


// Create a const object in JavaScript and try to add a new value to It

const obj = {
    name:"Abhishek"
};
console.log(obj);
// output:{ name: 'Abhishek' }

obj.phoneNumber = "1234567890";

console.log(obj);

//output { name: 'Abhishek', phoneNumber: '1234567890' }