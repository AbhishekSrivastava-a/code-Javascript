function countClick() {
  let count = 0;
  const clickButton = document.getElementById("clickMe");

  clickButton.addEventListener("click", function clickHandler() {
    count++;
    console.log("Button Clicked", count);

    if (count === 15) {
      alert("Too many clicks! Slow down.");
      clickButton.disabled = true; 
      setTimeout(() => {
        clickButton.disabled = false; 
        count = 0; 
        console.log("Button re-enabled and count reset.");
      }, 2000); 
    }
  });
}

countClick();