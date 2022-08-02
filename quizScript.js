`use strict`;
console.log("Quiz script runnning");

const questions = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];
const answerContainers = ["oneAnswers", "twoAnswers", "threeAnswers", "fourAnswers", "fiveAnswers"];
const numCorrect = document.getElementById("correctResults");

let roundCounter = 0;
let correctAnswers = 0;

console.log(correctAnswers);
//answerButton not working bc query selector go research

for (let i = 0; i < answerContainers.length; i++) {
    document.getElementById(answerContainers[i]).addEventListener('click', event => {
        console.log("click");
        console.log("Round", roundCounter);
        const isButton = event.target.nodeName ==='BUTTON';
        console.log(isButton);
        if (isButton) {
            if (event.target.classList.contains("incorrect")) {
                correctAnswers = correctAnswers;
                hide();
                roundCounter++;
                console.log(correctAnswers);
                return roundCounter;
            }
            else if (event.target.classList.contains("correct")) {
                correctAnswers++;
                hide();
                roundCounter++;
                console.log(correctAnswers);
                return roundCounter;
            }
        }
    })
};



function hide() {
    for (let i = 0; i < questions.length; i++) {
        if (i == roundCounter && roundCounter < 4) {
            document.getElementById(questions[i]).classList.add("hidden");
            document.getElementById(questions[i+1]).classList.remove("hidden");
        }
        else if (roundCounter == 4) {
            document.getElementById(questions[i]).classList.add("hidden");
            document.getElementById("results").classList.remove("hidden");
            numCorrect.innerHTML = (correctAnswers + "/5 questions correct");
        }
    }
}
