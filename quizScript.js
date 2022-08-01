`use strict`;
console.log("Quiz script runnning");

const questionOne = document.getElementsByClassName("questionOne");
const questionTwo = document.getElementsByClassName("questionTwo");
const answerButton = document.querySelectorAll("button");

let correctAnswers = 0;

//answerButton not working bc query selector go research

answerButton.addEventListener('click', event => {
    if (answerButton.classList.contains("incorrect")) {
        correctAnswers = correctAnswers;
        console.log(correctAnswers);
        questionOne.classList.add("hidden");
        questionTwo.classList.remove("hidden;")
    }
    else if (answerButton.classList.contains("correct")) {
        correctAnswers = correctAnswers + 1;
        console.log(correctAnswers);
    }
});


