//High order function and CallBacks

function add(a,b, callback){
    let result = a+b;
    callback(result);
}

function showResult(result){
    console.log(result);
}

add(2, 4, showResult);