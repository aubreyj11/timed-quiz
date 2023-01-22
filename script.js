var startBtn = document.getElementById('startBtn');
var startPage = document.getElementsByClassName('startPage')[0];
var quizPage = document.getElementsByClassName('quizPage')[0];
var resultPage = document.getElementById('resultPage');
var highScorePage = document.getElementById('highScorePage');
var question = document.getElementById('questions');
var choiceA = document.getElementById('a');
var choiceB = document.getElementById('b');
var choiceC = document.getElementById('c');
var finalScore = document.getElementById('finalScore');
var submitInitials = document.getElementById('submitInitials');
var initials = document.getElementById('initials');
var scoreBoardInitials = document.getElementById('scoreBoardInitials');
var scoreBoardScores = document.getElementById('scoreBoardScores');
var startOverBtn = document.getElementById('startOverBtn');
var clearScoresBtn = document.getElementById('clearScoresBtn');
var score = 0;
var amountCorrect;
var timeLeft = 75;
var timerInterval;
var timer = document.getElementById('timer');
var highScoresStorage = [];

var quizQuestions = [{
        question: "getElementByID will link an element's ___.",
        choiceA: "Class",
        choiceB: "ID",
        choiceC: "Class & ID",
        correctAnswer: "b" 
    },

    {
        question: "Which method should be used to remove white space from user's input?",
        choiceA: ".trim",
        choiceB: ".slice",
        choiceC: ".push",
        correctAnswer: "a",
    },

    {
        question: "What does .preventDefault do?",
        choiceA: "Adds new information into code.",
        choiceB: "Stops bubbling of an element to it's parent element.",
        choiceC: "Prevents default action of element from happening.",
        correctAnswer: "c",
    },

    {
        question: "What data type is this: var hello = 7",
        choiceA: "number",
        choiceB: "boolean",
        choiceC: "string",
        correctAnswer: "a",
    }

]; 

var currentQuestionIndex = 0;

function loadCurrentQuestion() {
    question.innerText = quizQuestions[currentQuestionIndex].question;
    choiceA.innerText = quizQuestions[currentQuestionIndex].choiceA;
    choiceB.innerText = quizQuestions[currentQuestionIndex].choiceB;
    choiceC.innerText = quizQuestions[currentQuestionIndex].choiceC;
}

function questionAnswered(btnTheUserClicked) {
   if (btnTheUserClicked.currentTarget.id === quizQuestions[currentQuestionIndex].correctAnswer) {
        alert("Correct!");
        score++;
   } else {
        alert("False!");
   }
   currentQuestionIndex++;
    if (currentQuestionIndex > quizQuestions.length -1) {
        clearInterval(timerInterval);
        showScore();
    } else {
        loadCurrentQuestion();
    }
}


function startQuiz() {
    if (startPage.style.display = 'flex') {
        startPage.style.display = 'none';
    };
    
    quizPage.style.display = 'flex';
    highScorePage.style.display = 'none';
    

    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Seconds Left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);

    loadCurrentQuestion();
   
};

function showScore () {
    if (quizPage.style.display = 'flex') {
        quizPage.style.display = 'none';
    };

    resultPage.style.display = 'flex';
    finalScore.innerHTML = "You got " + score + " out of " + quizQuestions.length + " questions correct!";
};




function highScores() {
    if (initials.value === "") {
        alert('Initials cannot be blank!');
        return false;
    } else {
        var highScoresItem = {
            initials: initials.value,
            score: score,
        }
        highScoresStorage.push(highScoresItem);
    };
    
    resultPage.style.display = "none";
    highScorePage.style.display = "flex";

    scoreBoardInitials.innerHTML = "";
    scoreBoardScores.innerHTML = "";

    for (i = 0; i < highScoresStorage.length; i++) {
        var item = highScoresStorage[i];
        scoreBoardInitials.innerHTML += "<li>" + item.initials + "</li>";
        scoreBoardScores.innerHTML += "<li>" + item.score + "</li>";
    }
};

function playAgain() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 75;
    startQuiz();
};

function clearScores(){
    highScoresStorage = [];
    scoreBoardInitials.textContent = "";
    scoreBoardScores.textContent = "";
};

clearScoresBtn.addEventListener('click', clearScores);
startOverBtn.addEventListener('click', playAgain)
submitInitials.addEventListener('click', highScores);
startBtn.addEventListener('click', startQuiz);
choiceA.addEventListener('click', questionAnswered);
choiceB.addEventListener('click', questionAnswered);
choiceC.addEventListener('click', questionAnswered);

















