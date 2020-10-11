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
    let userScoreContainer = document.getElementById('scoreOuput');
    const userName = document.getElementById('userName');
    let questionEl = document.getElementById('question');
    let outcomeDisplay = document.getElementById('displayQuestionOutcome');
    
    let userChoice1Btn = document.getElementById('choice1');
    let userChoice2Btn = document.getElementById('choice2');
    let userChoice3Btn = document.getElementById('choice3');
    let userChoice4Btn = document.getElementById('choice4');
    const saveScoreBtn = document.getElementById('saveScore');
    let currentQuestionIndex = 0;
    let userScore = 0;

    // -------------functions ------------
    // answeredIncorrectly
    // setTimer
    // endGame
    
    

    // startGame function
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

    // ShowQuestions function sets questions and answers based on currentQuesitonIndex
    function showQuestion(q) {
       questionEl.innerHTML = questions[q].question;
       userChoice1Btn.textContent = questions[q].choices[0];
       userChoice2Btn.textContent = questions[q].choices[1];
       userChoice3Btn.textContent = questions[q].choices[2];
       userChoice4Btn.textContent = questions[q].choices[3];
    }

        
    
    // checkAnswers function checks user answer using jQuery and event delagation
        $("#choiceBtns button").on("click", (function(event) {
	
		let userGuess = $(this).text();
		if (userGuess === questions[currentQuestionIndex].answer) {
        //  userScore +=10;
          answeredCorrectly();
          console.log("correct");
		//	clearInterval(clock);
		//	answeredCorrectly;
		}
		else {
         answeredInCorrectly();
         console.log("incorrect");
         // deduct time from timer
		//	clearInterval(clock);
        //	answeredIncorrectly;
      
        }
        console.log(userScore)
        
       // showQuestion(currentQuestionIndex);
	}));

    // checkAnswers function checks user answer using jQuery and event delagation
    function answeredCorrectly() {
        userScore +=10;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
            console.log("answered correctly")
            outcomeDisplay.style.color = "green";
            outcomeDisplay.textContent = "Awesome! You answered correctly!"
    }   else {
            setTimeout(myfunc, 2000);
         //   questionPage.style.display = 'none'; //display game page
         //   gameOverPage.style.display = 'block';  //hide start page
         //   userScoreContainer.textContent = userScore;
    }}


    // checkAnswers function checks user answer using jQuery and event delagation
    function answeredInCorrectly() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
            console.log("answered incorrectly")
            outcomeDisplay.style.color = "red";
            outcomeDisplay.textContent = "Oops! You answered incorrectly!"
    }   else {
            setTimeout(myfunc, 2000);
           // questionPage.style.display = 'none'; //display game page
          //  gameOverPage.style.display = 'block';  //hide start page
          //  userScoreContainer.textContent = userScore;
    }}

    function myfunc(){ 
        questionPage.style.display = 'none'; //display game page
        gameOverPage.style.display = 'block';  //hide start page
        userScoreContainer.textContent = userScore;
    
    }