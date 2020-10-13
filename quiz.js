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
    let timer = document.getElementById('timerDisplay');
   
    let currentQuestionIndex = 0;
    let playerScore= 0;
    let correctLog = 0;
    let timeLeft = 60;

    // startGame function uses event listener dynamically change page and display question and choices
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startGame); 
    function startGame() {
        // console.log('started');
        startPage.style.display = 'none'; 
        questionPage.style.display = 'block'; 
        gameOverPage.style.display = 'none';
        currentQuestionIndex = 0;
        outcomeDisplay.textContent = "";
        correctLog = 0;
        playerScore = 0;
        timeLeft = 60;
        showQuestion(currentQuestionIndex);
       // console.log(questions[currentQuestionIndex])
        countDown();
    }

    // setTimer function 
    function countDown() {
    let interval =  setInterval(function() {
            if (timeLeft <= 0 ) {
                loadGameOverPage();
                clearInterval(interval);
            }  
            else {
                timer.innerHTML = timeLeft;
                timeLeft--;
            }
        },1000);
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
        }   
	}));

    // if answered was correct this checks if current question index is less than questions items and and add score 
    // and updates content, else loads gameOver
    function answeredCorrectly() {
        playerScore +=10;
        correctLog++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
         //   console.log("answered correctly")
            outcomeDisplay.style.color = "green";
            outcomeDisplay.textContent = "Awesome! You answered correctly. Progess:" + correctLog + "/" + questions.length;
        } 
        else {
            timeLeft = 0;
    }}

    // if answered was incorrect this checks if current question index is less than questions items 
    // and updates content, else loads gameOver
    function answeredInCorrectly() {
        currentQuestionIndex++;
        timeLeft-=5;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
          //  console.log("answered incorrectly")
            outcomeDisplay.style.color = "red";
            outcomeDisplay.textContent = "Oops! You answered incorrectly. Progess:" + correctLog + "/" + questions.length;
        }   
        else {
            timeLeft = 0; 
  
    }}

    // switches to game over page with score displayed
    function loadGameOverPage(){ 
        questionPage.style.display = 'none'; //display game page
        gameOverPage.style.display = 'block';  //hide start page
        userScoreContainer.textContent = playerScore;
        getLastScore();
    }


    const saveScoreBtn = document.getElementById('saveScore');
    
    // gets player's name and score and sends to local storage
    saveScoreBtn.addEventListener('click',function(){
        event.preventDefault();
        const playerNameVal = document.getElementById('userName').value;
        console.log("clicked the saved button");
        if (playerNameVal == "") {
            alert("name cannot be empty!");
        }
        localStorage.setItem("name", playerNameVal);
        localStorage.setItem("score", playerScore);
     })
    
    // fetches player's previous name and score from local storage 
    let lastScore = document.getElementById('lastScore');
    
    
    function getLastScore() {
    let lastScoreVal = localStorage.getItem('score');
        if (lastScoreVal !== null) {
            lastScore.textContent = "You're previous score was: " + lastScoreVal;
        }
    }
    
    // replay game and reset
    const restartGameBtn = document.getElementById('playAgainBtn');
    restartGameBtn.addEventListener('click', function() {
        startGame();
     });


