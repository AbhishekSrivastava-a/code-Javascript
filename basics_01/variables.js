const accountId = 777;
let accountEmailId= "xyz@google.com"; //we can update and redeclare the value in the same sccope
var accountPassoword = "2121212"; // we can update and redeclare the valur in the same scope

let accountState;

accountCity = "Dhanbad";

// accountId = 2; //TypeError: Assignment to constant variable. 
//Const: A const variable's value cannot be changed after initialization 
// because const declares a read-only reference to a value, not necessarily an immutable value itself.

console.log("accountId");
accountEmailId = "xxyz@gmail.com";
accountPassoword = "77777777";
accountCity= "Banglore";

console.table([accountPassoword, accountEmailId, accountId , accountCity, accountState]); //to show data in tab format


/*
We should not use var because of the issues with its block scope or functional scope
*/