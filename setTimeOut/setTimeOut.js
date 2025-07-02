//write a javaScript program to Display Welcome on the page after 3 seconds o loading

console.log("Oh here you are all the content of the page"); // This will appear immediately

setTimeout(function() {
  console.log("Welcome!"); // This will appear after 2 seconds
}, 3000);  // we denote it by milli seconds

console.log("Loading Other things now");

//what is happening here it is loading both the logs and it is waiting for welcome to show