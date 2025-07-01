/*
Define a funciton that can answer the role of the user 
A user can be of following roles
admin - with all access
subAdmin - with access to create / delete courses
testPrep - with access to create / delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

// function getUserRole(name, role){ // we can decalre it this way as well as the way written below 
let getUserRole = function (name, role){
    switch(role){
    case "admin" :
        return `${name} is admin with all access`
    break;
    
    case "subAdmin" :
        return `${name} is subAdmin with access to create / delete courses`
    break;

    case "testPrep" :
        return `${name} is testprep with access to create / delete tests`
    break;

   case "user" :
        return `${name} is user with all content access`
    break;

    default:
    return`${name} is a trial user`
    break;
}
}

console.log(getUserRole("Abhishek", "user"));

let getRole = getUserRole("Abhishek", "admin");
console.log(getRole);

