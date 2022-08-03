`use strict`;
console.log("Quiz script runnning");

const questions = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive", "questionSix"];
const answerContainers = ["oneAnswers", "twoAnswers", "threeAnswers", "fourAnswers", "fiveAnswers", "sixAnswers"];
const explanations = ["questionOneExplanation", "questionTwoExplanation", "questionThreeExplanation", "questionFourExplanation", "questionFiveExplanation", "questionSixExplanation"];
const numCorrect = document.getElementById("correctResults");


let roundCounter = 0;
let correctAnswers = 0;

console.log(correctAnswers);

for (let i = 0; i < answerContainers.length; i++) {
    document.getElementById(answerContainers[i]).addEventListener('click', event => {
        console.log("click");
        console.log("Round", roundCounter);
        const isButton = event.target.nodeName ==='BUTTON';
        console.log(isButton);
        if (isButton) {
            if (event.target.classList.contains("incorrect")) {
                correctAnswers = correctAnswers;
                document.getElementById(questions[i]).classList.add("explain");
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

function explain() {
    for (let i = 0; i < questions.length; i++) {
        if (document.getElementById(questions[i]).classList.contains("explain")) {
            document.getElementById(explanations[i]).classList.remove("hidden");
        }
    }
}

function hide() {
    for (let i = 0; i < questions.length; i++) {
        if (i == roundCounter && roundCounter < questions.length-1) {
            document.getElementById(questions[i]).classList.add("hidden");
            document.getElementById(questions[i+1]).classList.remove("hidden");
        }
        else if (roundCounter == questions.length-1) {
            document.getElementById(questions[i]).classList.add("hidden");
            document.getElementById("results").classList.remove("hidden");
            numCorrect.innerHTML = (correctAnswers + "/6 questions correct; " + ((correctAnswers/6)*100).toFixed(0) + "% correct.");
            if (correctAnswers == 6) {
                document.getElementById("placeholderImage").src = "https://www.pngplay.com/wp-content/uploads/12/Congratulations-Gifs-Transparent-PNG.gif";
            }
            else if (correctAnswers > 3) {
                document.getElementById("placeholderImage").src = "https://c.tenor.com/VmM0NoxWykMAAAAM/almost-there-balloons.gif";
            }
            else {
                document.getElementById("placeholderImage").src = "https://c.tenor.com/fVtFN_1f1HkAAAAM/mario-kart.gif";
            }
            explain();
        }
    }
}

