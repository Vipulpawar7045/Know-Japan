// This file manages the interactive quiz functionality, including generating quiz questions and handling user responses.

const quizData = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        answer: "Tokyo"
    },
    {
        question: "Which of these is a traditional Japanese dish?",
        options: ["Tacos", "Sushi", "Pasta", "Curry"],
        answer: "Sushi"
    },
    {
        question: "What is the Japanese word for 'hello'?",
        options: ["Konnichiwa", "Sayonara", "Arigato", "Ohayou"],
        answer: "Konnichiwa"
    },
    {
        question: "Which festival is known for cherry blossom viewing?",
        options: ["Tanabata", "Hanami", "Obon", "Setsubun"],
        answer: "Hanami"
    },
    {
        question: "What is the traditional Japanese garment called?",
        options: ["Kimono", "Sari", "Hanbok", "Cheongsam"],
        answer: "Kimono"
    }
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        ${currentQuizData.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label>
        `).join('')}
        <button id="submit">Submit</button>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;
    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.value;
        }
    });
    return answer;
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'submit') {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].answer) {
                score++;
            }
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quizContainer.innerHTML = `
                    <h2>You finished the quiz!</h2>
                    <p>Your score: ${score}/${quizData.length}</p>
                    <button id="restart">Restart</button>
                `;
            }
        }
    }

    if (e.target.id === 'restart') {
        currentQuiz = 0;
        score = 0;
        loadQuiz();
    }
});

// Load the first quiz question when the page loads
loadQuiz();