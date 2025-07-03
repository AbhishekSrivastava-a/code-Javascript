function main() {
  callVet();
  // blocked for 15 minutes
  walkDog();
  doTaxes();
  doDishes();
  answerPeronalEmails();
  doLaundry();
}

//with call back

function main() {
  callVet(function vetCallback(vetOnThePhoneReadyToSpeakWithMe) { //vetcallback passed as an argument in callVet
    talkToVetAboutTestResults(vetOnThePhoneReadyToSpeakWithMe);
  });
  walkDog();
  doTaxes();
  doDishes();
  answerPeronalEmails();
  doLaundry();
}

//real world project scenario

//user logs into the website now we see how it works 

function main() {
  displayNavbar(); 
  const user = getUser(); 
  // wait a few seconds for response...
  displayUserDashboard(user);
  displaySidebar();
  displayFooter();
}


//after this we use call back now other task can be executed as well

function main() {
  displayNavbar();
  getUser(function (user) {
    displayUserDashboard(user);
  });
  displaySidebar();
  displayFooter();
}