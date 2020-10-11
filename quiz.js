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

    
    let userScoreContainer = document.getElementById('scoreOuput');
    let questionEl = document.getElementById('question');
    let outcomeDisplay = document.getElementById('displayQuestionOutcome');
    
    let userChoice1Btn = document.getElementById('choice1');
    let userChoice2Btn = document.getElementById('choice2');
    let userChoice3Btn = document.getElementById('choice3');
    let userChoice4Btn = document.getElementById('choice4');
   
    let currentQuestionIndex = 0;
    let userScore = 0;
    let correctLog = 0;
    let arrLength = questions.length;
    

    // -------------functions pending------------
   // get score from local storage to display highscores
    
    

    // startGame function uses event listener dynamically change page and display question and choices
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startGame) 
    function startGame() {
        // console.log('started');
        startPage.style.display = 'none'; 
        questionPage.style.display = 'block'; 
        showQuestion(currentQuestionIndex);
       // console.log(questions[currentQuestionIndex])
        countDown();
    }

    // Gets and sets questions & answers based on currentQuesitionIndex
    function showQuestion(q) {
       questionEl.innerHTML = questions[q].question;
       userChoice1Btn.textContent = questions[q].choices[0];
       userChoice2Btn.textContent = questions[q].choices[1];
       userChoice3Btn.textContent = questions[q].choices[2];
       userChoice4Btn.textContent = questions[q].choices[3];
    }

    // Checks what button / answer the user chose using jQuery and event delagation
    $("#choiceBtns button").on("click", (function(event) {
    let userGuess = $(this).text();
        if (userGuess === questions[currentQuestionIndex].answer) {
        answeredCorrectly();
        console.log("correct");
        }
        else {
        answeredInCorrectly();
        console.log("incorrect");
        // deduct time from timer 
        }   
	}));

    // checks if current question index is less than questions items and and add score 
    // and updates content, else loads gameOver
    function answeredCorrectly() {
        userScore +=10;
        correctLog++;
        currentQuestionIndex++;
        if (currentQuestionIndex < arrLength) {
            showQuestion(currentQuestionIndex);
         //   console.log("answered correctly")
            outcomeDisplay.style.color = "green";
            outcomeDisplay.textContent = "Awesome! You answered correctly. Progess:" + correctLog + "/" + arrLength;
        }   else {
            setTimeout(loadGameOverPage, 500);
    }}


    // answeredInCorrectly function checks if current question index is less than questions items 
    // and updates content, else loads gameOver
    function answeredInCorrectly() {
        currentQuestionIndex++;
        timeLeft-=10;
        if (currentQuestionIndex < arrLength) {
            showQuestion(currentQuestionIndex);
          //  console.log("answered incorrectly")
            outcomeDisplay.style.color = "red";
            outcomeDisplay.textContent = "Oops! You answered incorrectly. Progess:" + correctLog + "/" + arrLength;
        }   else {
            setTimeout(loadGameOverPage, 500); 
    }}

    // switches to game over page with score displayed
    function loadGameOverPage(){ 
        questionPage.style.display = 'none'; //display game page
        gameOverPage.style.display = 'block';  //hide start page
        userScoreContainer.textContent = userScore;
    }

    // setTimer function 
    let timeLeft = 60;
    let timer = document.getElementById('timerDisplay');
    function countDown() {
        setInterval(function() {
            if (timeLeft <=0 ) {
                loadGameOverPage();
                clearInterval(timeLeft = 0)
            }   else {
                timer.innerHTML = timeLeft;
                timeLeft--;
            }
        },1000)
    }

    // reference variables
    const playerName = document.getElementById('userName');
    const saveScoreBtn = document.getElementById('saveScore');
    
    // get user value variable and set name and score to local storage
    saveScoreBtn.addEventListener('click',function(){
        event.preventDefault();
        const playerNameVal = document.getElementById('userName').value;
        console.log("clicked the saved button");
        if (playerNameVal === "") {
            alert("name cannot be empty!");
        }
        localStorage.setItem("name", playerNameVal);
        localStorage.setItem("score", userScore);
     })
    
     
    // get user value variable and set name and score to local storage 
    let highscore = localStorage.getItem('score');
    console.log(highscore);
    



     // not sure where to add event.preventDefault(); to stop user clicking after all quesitions

