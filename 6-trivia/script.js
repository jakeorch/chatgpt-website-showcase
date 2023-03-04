// Define the questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who wrote the book 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    }
];

// Get references to HTML elements
const quizContainer = document.getElementById("quiz");
const questionElements = document.getElementsByTagName("fieldset");
const submitButton = document.querySelector("input[type=submit]");
const feedbackContainer = document.getElementById("feedback");

// Keep track of the user's score
let score = 0;

// Add event listener to the submit button
submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Check each question for correctness and add to score if correct
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const answers = questionElements[i].getElementsByTagName("input");
        let selectedAnswer = "";

        // Find the selected answer for the current question
        for (let j = 0; j < answers.length; j++) {
            if (answers[j].checked) {
                selectedAnswer = answers[j].value;
                break;
            }
        }

        // Add to the score if the selected answer is correct
        if (selectedAnswer === question.answers.find(a => a.correct).text) {
            score++;
        }
    }

    // Display the user's score
    feedbackContainer.innerText = `You got ${score} out of ${questions.length} questions correct!`;

    // Disable the submit button to prevent resubmissions
    submitButton.disabled = true;
});
