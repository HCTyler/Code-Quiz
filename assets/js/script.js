var allTheStuff = 0
var time = thestuff.length * 15 //takes the amount of questions there is and multiplies it. This serves as the base time.
var timerInverval

var questioncontain = document.getElementById("question")
var timer = document.getElementById("time")
var choices = document.getElementById("questchoices")
var submitButton = document.getElementById("submit")
var startButton = document.getElementById("start")
var initials = document.getElementById("initials")
var feedback = document.getElementById("feedback")
var gameEnding = document.getElementById("ending")
var highscores = document.getElementById("highscores")


function startGame(){
    console.log("The game is starting")
    var starting = document.getElementById("starting")//taking the starting ID and hiding it
    starting.setAttribute("class","hide")//makes it so that the questions fill the container and sets up game
    questioncontain.removeAttribute("class")
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
      var theChoices = document.createElement("button")
      theChoices.setAttribute("class","choice")
      theChoices.setAttribute("value",pick)
      theChoices.textContent = i + 1 + ". " + pick
      theChoices.onclick = questionSelected;
      choices.appendChild(theChoices)
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
  clearInterval(timerInverval)

  gameEnding.removeAttribute("class")

  var scoresboard = document.getElementById("final-score")
  scoresboard.textContent = time

  questioncontain.setAttribute("class", "hide")
}

function showHighScores(){
  console.log("You clicked the button, so redirect to the highscores.")

  var thename = initials.value.trim()

  if (thename !== ""){
    var highscoresInitial = 
      JSON.parse(localStorage.getItem("thename")) || []
      console.log("Initials are saved to:", thename)

    var savingscores = {
      score: time,
      thename: thename
    }

    console.log(savingscores)
    console.log(highscoresInitial)

    highscoresInitial.push(savingscores)
    window.localStorage.setItem("thename", JSON.stringify(highscoresInitial))
    console.log(highscoresInitial)

    showTheScore()
  }
}

function showTheScore(){
  gameEnding.setAttribute("class", "hide")
  highscores.removeAttribute("class")
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
  }
}


startButton.onclick = startGame;
submitButton.onclick = showHighScores;


