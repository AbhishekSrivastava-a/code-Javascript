// there is a loop running 1 to 5 use setTimeout function on the loop
// hint: console(i) to show the output

function x(){
    //for(var i = 0; i<=5; i++){ //so when we used var we see output 6-6-6-6-6 why?
    for(let i = 0; i<=5 ; i++){
    setTimeout(function (){
        console.log(i);
    }, i * 1000)
    }
    console.log("For Loop");
}
x();