var questions = document.getElementById("question");
var timer = document.getElementById("time");
var choices = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startGame(){
    //taking the starting ID and hiding it
    var starting = document.getElementById("starting")
    starting.setAttribute("class","hide")

    //makes it so that the questions fill the container and sets up game
    questions.removeAttribute("class")
    timerId = setInterval(countdownTimer,1000)
    timer.textContent = time

    startQuestions()

}

function startQuestions(){
    var currentQ = questions[currentQuestionIndex]
    var title = document.getElementById("questtitle")
    title.textContent=currentQ.title

    choices.innerHTML= " "

    currentQ.choices.forEach(function(choice,i){
        var choiceDom = document.createElement("button")
        choiceDom.setAttribute("class","choice")
        choiceDom.setAttribute("value",choice)
        choiceDom.textContent = i + 1 + ". " + choice

        choiceDom.onclick = questionSelected

        choice.appendChild(choiceDom)
    })
}

function countdownTimer() {
    // update time
    time--;
    timer.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

startButton.onclick = startGame