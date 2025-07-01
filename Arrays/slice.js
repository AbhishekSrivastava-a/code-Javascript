//syntax

/*
slice()
slice(start)
slice(start, end)
*/


const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
//output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
//output: ["camel", "duck"]

console.log(animals.slice(1, 5));
//output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//output: ["duck", "elephant"]

console.log(animals.slice(2, -1));
//output: ["camel", "duck"]

console.log(animals.slice());
//output: ["ant", "bison", "camel", "duck", "elephant"]