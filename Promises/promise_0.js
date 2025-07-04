// let promise1 = new Promise(function(resolve, reject) {
//   the function is executed automatically when the promise is constructed
//    after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 1000);
// }); //success


// let promise2 = new Promise(function(resolve, reject) {
//   after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// }); //error


// let promise3 = new Promise(function(resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

// let promise4 = new Promise(function(resolve, reject) {
//    not taking our time to do the job
//   resolve(123); // immediately give the result: 123
// });



let promise5 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise5.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.error(error) // logs error to the console
);


let promise6 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise6.then(
  result => console.log(result), // doesn't run
  error => console.error(error) // logs "Whoops!" after 1 second
);