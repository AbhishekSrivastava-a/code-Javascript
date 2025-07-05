function makeMaggi(isGasAvailable) {
  return new Promise((resolve, reject) => {
    console.log("Starting to make Maggi...");

    setTimeout(() => {
      if (isGasAvailable) {
        resolve("Maggi is ready!");
      } else {
        reject("Failed to make Maggi. No gas!");
      }
    }, 2000); // Wait 2 seconds to cooking
  });
}

// Calling the function
// makeMaggi(true)
makeMaggi(false)
  .then((message) => {
    console.log("Success:", message); // if resolve() is called
  })
  .catch((error) => {
    console.log("Error:", error); // if reject() is called
  })
  .finally(() => {
    console.log("Cleaning the pan..."); // always runs
  });
