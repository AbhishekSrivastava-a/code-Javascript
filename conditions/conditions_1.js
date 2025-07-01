// Allow user to access the course if logged in using any
// logged in using email
//logged in using facebook
//logged in using google

var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("Logged in successfully");
}