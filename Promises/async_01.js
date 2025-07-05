const p = new Promise((resolve,reject) => {
    resolve("Issue Has Been Resolved!");
});

//combination of async and await in the program

async function handelPromise (){
    const value = await(p);
    console.log(value);
}

handelPromise();