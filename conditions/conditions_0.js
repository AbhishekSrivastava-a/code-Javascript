let userName = "xyzABC000";
let emailAddress = "xyz@google.com";
let password = "abcdefghiABCDEFGHI";

let userIsLoggedIn = true;       
let emailIsVerified = true;       
let passwordIsCorrect = true;     
let usernameIsVerified = true;  

// userIsLoggedIn IS true AND emailIsVerified IS true AND passwordIsCorrect IS true AND usernameIsVerified IS true

if (userIsLoggedIn && emailIsVerified && passwordIsCorrect && usernameIsVerified) {
    // If EVERYTHING above is true, then this message will show:
    console.log("SUCCESS! User can make a purchase.");
} else {
    // If even ONE of the above is false, then this message will show:
    console.log("INVALID! User cannot make a purchase because one or more conditions are not met.");
}

//  one condition is FALSE
emailIsVerified = false;

if (userIsLoggedIn && emailIsVerified && passwordIsCorrect && usernameIsVerified) {
    console.log("SUCCESS! User can make a purchase.");
} else {
    console.log("INVALID! User cannot make a purchase because one or more conditions are not met.");
}

userIsLoggedIn = false; 
emailIsVerified = true; 

if (userIsLoggedIn && emailIsVerified && passwordIsCorrect && usernameIsVerified) {
    console.log("SUCCESS! User can make a purchase.");
} else {
    console.log("INVALID! User cannot make a purchase because one or more conditions are not met.");
}