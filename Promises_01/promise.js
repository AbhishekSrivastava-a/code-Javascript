const cart = ["shoes", "Trousers","Shirts"];

const promise = createOrder(cart); //this is createOrder APi 

promise.then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})



//creation of own promise
function createOrder(cart){

    const pr = new Promise(function(resolve, reject){

        //Logic For createOrder
        //validateCart
        //orderId 
        //return success or error


        if(!validateCart(cart)){
            const err = new Error('Cart is not Valid');
            reject(err);
        }

        //Logic for createOrder
        const orderId = "12dskash";
        if(orderId){
            // resolve(orderId); now we use a setTimeout

            setTimeout(function(){
                resolve(orderId);
            },5*1000);
        }

    });


    return pr;
}


function proceedToPayment (orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successfull");
    });
}

function validateCart(cart){
   //reslove return true;
   //reject
   return false;
}