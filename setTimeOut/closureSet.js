//q write a setTimeout function and for loop use var only but make sure output is 1-2-3-4-5

function x(){
    for(i=1;i<=5;i++){
        //here we are going to create a new function
        function closure(x){
            setTimeout(function () {
                console.log(x);
            }, x * 1000)
        }
        closure(i)
    }
    console.log("For Loop but only var")
}
x();