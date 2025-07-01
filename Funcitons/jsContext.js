 //Execution context
 //happens is 2 phases 1-- memory allocation 2-- Code execution

 let n =2;
 function square(num){
    let ans = num*num;
    return ans;
 }
 let square2 = square(n);
 console.log(square2);
 let square4 = square(4);
 console.log(square4);


 //output
 // square 2 - 4
 //square 4 - 16