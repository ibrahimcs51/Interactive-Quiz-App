const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress');

let currentQuestionIndex = 0;
let score = 0;

// Sample Quiz Questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question:"SMIT Stand for ?",
        options:["saylni ","samll","non"],
        correctAnswer:1
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctAnswer: 3
    },
    {
      Question:" What is the largest planet  our solar system?",
       options: ["Earth", "Saturn", "Jupiter", "Neptune"],
       correctAnswer: 2 
    },
    {
        Question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
       correctAnswer: 2 

    },
    {
          Question: "What is the smallest unit of data in computing?",
          Options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
          correctAnswer: 1 


    },
    
    
    
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Makeup Language"
        ],
        correctAnswer: 0
    }
];

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    nextButton.textContent = "Next Question";
    showQuestion();
}

// Display Question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(button);
    });

    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

// Check Selected Answer
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    if (selectedIndex === currentQuestion.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        scoreElement.textContent = score;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[currentQuestion.correctAnswer].classList.add('correct');
    }

    // Disable all options after selection
    options.forEach(button => {
        button.disabled = true;
    });

    nextButton.disabled = false;
}

// Next Question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        // Quiz Finished
        questionElement.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
        optionsElement.innerHTML = '';
        nextButton.textContent = "Restart Quiz";
        nextButton.addEventListener('click', startQuiz);
    }
});

// Initialize Quiz
startQuiz();
nextButton.disabled = true;