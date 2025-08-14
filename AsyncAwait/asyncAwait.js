


// const p1 = new Promise ((resolve, reject)=>{
//  setTimeout(() => {
//  resolve("Promise Resolved");
//  }, 10 * 1000)
// });
// const p2 = new Promise ((resolve, reject)=>{
//  setTimeout(() => {
//  resolve("Promise Resolved");
//  }, 5 * 1000)
// });

// async function promiseHandeler() {
//  console.log("Hello World")
//  const val = await p1;
//  console.log("Will i get executed in the second place");
//  console.log(val);

//  const val2 = await p2;
//  console.log("Will i get executed in the second place");
//  console.log(val2);

// }



// async function promiseHandeler() {
//  const val = await p;
//  console.log("I will get executed"); //what happens here will I get executed first?
 //both get executed after 10 seconds why? -- because we have written await p which waits for 10 seconds 
 //for the code to execute then it goes in next line
//  console.log(p);
// }



// async function promiseHandeler() {
// //waits for 10 second to execute
//  const val = await p;

//  console.log(p);
// }

//reverse -- now 5 sec execute first then 10 sec
const p1 = new Promise ((resolve, reject)=>{
 setTimeout(() => {
 resolve("Promise Resolved");
 }, 5 * 1000)
});
const p2 = new Promise ((resolve, reject)=>{
 setTimeout(() => {
 resolve("Promise Resolved");
 }, 10 * 1000)
});

async function promiseHandeler() {
 console.log("Hello World")
 const val = await p1;
 console.log("Will i get executed in the second place");
 console.log(val);

 const val2 = await p2;
 console.log("Will i get executed in the second place");
 console.log(val2);

}

promiseHandeler();