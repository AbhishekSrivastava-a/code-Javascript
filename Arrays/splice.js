//Syntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Insert at index 1
console.log(months);
// output:["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replace 1 element at index 4
console.log(months);
// output: ["Jan", "Feb", "March", "April", "May"]