const cart= ["Shoes","clothes","pants","Jeans"];

createOrder(cart, function(orderId){
    console.log(orderId);
});

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment( orderId );
});

