// console.log(a);

// let a = 100; //ReferenceError: Cannot access 'a' before initialization

// var b = 100;


{
  // TDZ starts for 'myVariable' here
  console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
  let myVariable = "Hello"; // TDZ ends here
  console.log(myVariable); // "Hello"
}