let countdownElement = document.getElementById("countdown");

let initialCountDownVal = document.getElementById("countdown");

initialCountDownVal = countdownElement.innerHTML;

setInterval(function () {
  //   initialCountDownVal = initialCountDownVal - 1;
  initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal - 1 : 0;
  countdownElement.innerHTML = initialCountDownVal;
}, 1000);

console.log(countdownElement);
