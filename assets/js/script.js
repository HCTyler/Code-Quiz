var currentQuestionIndex = 0;
var time = question.length * 15; //takes the amount of questions there is and multiplies it. This serves as the base time.
var timerInverval;

var question = document.getElementById("question");
var timer = document.getElementById("time");
var choices = document.getElementById("choices");
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

    startQuestions()

}

function startQuestions(){
    console.log("Game is now displaying the question")
    var currentQuestion = question[currentQuestionIndex]

    var title = document.getElementById("question-title")
    title.textContent= currentQuestion.title

    choices.innerHTML= ""

    currentQuestion.choices.forEach(function(choice, i) {
      
        var choiceDom = document.createElement("button")
        choiceDom.setAttribute("class","choice")
        choiceDom.setAttribute("value",choice)
        choiceDom.textContent = i + 1 + ". " + choice

        choiceDom.onclick = questionSelected

        choice.appendChild(choiceDom)
    })
}

//this is the function for timer
function countdownTimer() {
    // update time
    time--;
    timer.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
      console.log("game is now ending, going to display end screen")
    } else {
      getQuestion()
    }
  }

function quizEnd(){
  console.log("game is now displaying the ending screen")
  clearInterval(timerInverval);

  var gameEnding = document.getElementById("ending")
}

startButton.onclick = startGame;
