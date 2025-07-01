//RBAC - role based access control
//admin - has all access can remove/add/update anyone
//subAdmin - has access to only course users add/delete but cannot do this with admin
//user - only has access to course


var user = "";

switch(user){
    case "admin" :
    console.log("has all access can remove/add/update anyone");
    break;
    
    case "subAdmin" :
    console.log("has access to only course users add/delete but cannot do this with admin");
    break;

    case "user":
    console.log("only has access to course");
    break;

    default:
    console.log("trial user");
    break;
}
