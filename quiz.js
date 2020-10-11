// list of all questions, choices, and answers
var questions = [
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

    let startPage = document.getElementById('startContainer');
    let questionPage = document.getElementById('questionContainer');
    let gameOverPage = document.getElementById('gameOverContainer');

    let timer = document.getElementById('timerDisplay');
    let userScore = document.getElementById('scoreOut');
    const userName = document.getElementById('userName');
    let questionEl = document.getElementById('question');
    let outcomeDisplay = document.getElementById('displayQuestionOutcome');
    
    let userChoice1Btn = document.getElementById('choice1');
    let userChoice2Btn = document.getElementById('choice2');
    let userChoice3Btn = document.getElementById('choice3');
    let userChoice4Btn = document.getElementById('choice4');
    const saveScoreBtn = document.getElementById('saveScore');
    let currentQuestionIndex = 2;

    // -------------functions ------------
    // startGame
    // setTimer
    // endGame
    // ShowQuestions
    // checkAnswers

    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startGame) 
    
    function startGame() {
       // console.log('started');
       startPage.style.display = 'none';  //hide start page
       questionPage.style.display = 'block'; //display game page
      // currentQuestionIndex = 0;
       showQuestion(currentQuestionIndex);
      // console.log(questions[currentQuestionIndex])

    }


    // sets questions and answers based on currentQuesitonIndex
    function showQuestion(q) {
       questionEl.innerHTML = questions[q].question;
       userChoice1Btn.textContent = questions[q].choices[0];
       userChoice2Btn.textContent = questions[q].choices[1];
       userChoice3Btn.textContent = questions[q].choices[2];
       userChoice4Btn.textContent = questions[q].choices[3];
    }

        
    
    // checks answer using jQuery and event delagation
        $("#choiceBtns button").on("click", (function(event) {
	
		var userGuess = $(this).text();
		if (userGuess === questions[currentQuestionIndex].answer) {
            console.log("correct")
		//	clearInterval(clock);
		//	userWin();
		}
		else {
            console.log("incorrect")
		//	clearInterval(clock);
		//	userLoss();
		}
	}));
