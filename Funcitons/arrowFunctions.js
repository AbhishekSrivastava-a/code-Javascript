//syntax

// const sayHello = () => {  // arrow function
//     console.log("Say Hello");
// }

// sayHello();


// const add =(a, b) =>{
//     return a+b;
// }

// console.log(add(2,4));

//this keyword

const user ={
    username:"Abhishek",
    course: "JavaScript",
    price: 499,
    //now we want to display whenever a new user come we want to display welcome message
    welcomeMessage: function(){
        console.log(`${this.username},welcome to this website`);
    }
};

user.welcomeMessage();