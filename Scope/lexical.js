function a(){ // lexical parent of a () is global execution context or global
    var n = 10;
    c();
    function c(){  //lexical parent of c() is a()
        console.log(n);
    }
}

console.log(a());
console.log(n); //ReferenceError: n is not defined

// open space or global space parent is if there is any variable decalred otherwise it is null