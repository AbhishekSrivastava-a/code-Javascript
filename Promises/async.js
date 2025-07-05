async function getData(){
    return "Abhishek"
}

const dataPromise = getData();

console.log(dataPromise);

//output = Promise { 'Abhishek' }

const p = new Promise((resolve, reject)=>{
    resolve("Promise is here")
})

async function understandingAsyncPromise(){
    return p;
}

const dataWeGet = understandingAsyncPromise();

dataWeGet.then((res) => console.log(dataWeGet));
