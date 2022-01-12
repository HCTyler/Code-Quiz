var allTheStuff = 0;
var time = thestuff.length * 15; //takes the amount of questions there is and multiplies it. This serves as the base time.
var timerInverval;

var question = document.getElementById("question");
var timer = document.getElementById("time");
var choices = document.getElementById("questchoices");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");


function startGame(){
    console.log("The game is starting")
    //taking the starting ID and hiding it
    var starting = document.getElementById("starting")
    starting.setAttribute("class","hide")

    //makes it so that the questions fill the container and sets up game
    question.removeAttribute("class")
    timerInverval = setInterval(countdownTimer,1000)
    timer.textContent = time

    stuff()

}

function stuff(){
  console.log("Game is now displaying the question")
  var questionDisplayed = thestuff[allTheStuff]
  var title = document.getElementById("question-title")
  title.textContent = questionDisplayed.title
  choices.innerHTML= "";
  questionDisplayed.option.forEach(function (pick, i) {
      var choiceDom = document.createElement("button")
      choiceDom.setAttribute("class","choice")
      choiceDom.setAttribute("value",pick)
      choiceDom.textContent = i + 1 + ". " + pick
      choiceDom.onclick = questionSelected;
      choices.appendChild(choiceDom)
  })
}
function questionSelected(){
  console.log("I got selected!")
  if (this.value !== thestuff[allTheStuff].answer){
    //when the question selected does not equal the answer to the stuff, the time gets reduced by 15 seconds. If the time gets less than 15 seconds, it becomes 0
    time -= 15
    if (time < 0){
      time = 0
    } 
    timerInverval.textContent = time
    console.log("Go to the Wrong pathway")
  } else {
    console.log("go to the right pathway")
    time += 5 
  }
  allTheStuff++

  //if allTheStuff ran out, it goes to noMoreStuff, ending the game, if there are still question, we go to stuff
  if (allTheStuff === thestuff.length){
    noMoStuff()
  }else{
    stuff()
  }
}

function noMoStuff(){
  console.log("game is now displaying the ending screen")
  clearInterval(timerInverval);

  var gameEnding = document.getElementById("ending")
  gameEnding.removeAttribute("class")

  var scoresboard = document.getElementById("score")
  scoresboard.textContent = time

  question.setAttribute("class", "hide")
}


//this is the function for timer
function countdownTimer() {
    // update time
    time--;
    timer.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      noMoStuff();
      console.log("game is now ending, going to display end screen")
    } else {
      stuff()
    }
  }


startButton.onclick = startGame;


