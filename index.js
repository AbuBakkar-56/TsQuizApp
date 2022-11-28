var quiz = document.getElementById('quiz');
var questionEl = document.getElementById('question');
var answerEls = document.querySelectorAll('.answer');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
;
var quizData1 = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
];
var currentQuiz = 0;
var score = 0;
function loadQuizs() {
    deselectAnswers();
    var currentQuizData = quizData1[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuizs();
function deselectAnswers() {
    answerEls.forEach(function (answerEl) { return answerEl.checked = false; });
}
function selectAnswers() {
    var answer;
    answerEls.forEach(function (answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
;
submitBtn.addEventListener('click', function () {
    var answer = selectAnswers();
    if (answer) {
        if (answer === quizData1[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData1.length) {
            loadQuizs();
        }
        else {
            quiz.innerHTML = "<h2>You answered ".concat(score, "/").concat(quizData1.length, " questions correctly</h2>\n            <button onclick=\"location.reload()\">Reload</button>");
        }
    }
});
