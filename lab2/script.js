
//function that outputs Hello in the console log
function greetMe() {
  console.log("Hello!!");
}

var counter = 1

function setContext() {
  myTrigger.textContent = ("this button has been changed " + counter + " times")
  console.log("The myTrigger context has been changed " + counter + " times")
  counter ++
}


//the trigger to run the greetMe function after the button with id myTrigger is clicked
myTrigger.addEventListener('click', greetMe);


anotherTrigger.addEventListener('click', setContext)
