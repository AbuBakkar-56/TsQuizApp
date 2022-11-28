const quiz=document.getElementById('quiz') as HTMLDivElement;
const questionEl=document.getElementById('question') as HTMLHeadingElement;
const answerEls=document.querySelectorAll('.answer');
const a_text=document.getElementById('a_text') as HTMLInputElement;
const b_text=document.getElementById('b_text') as HTMLInputElement;
const c_text=document.getElementById('c_text') as HTMLInputElement;
const d_text=document.getElementById('d_text') as HTMLInputElement;
const submitBtn=document.getElementById('submit') as HTMLButtonElement;
interface quizData {
   question:string,
   a:string,
   b:string,
   c:string,
   d:string,
   correct:string,
};
const quizData1:quizData[]=[
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let currentQuiz:number=0;
let score:number=0;
function loadQuizs(){
   deselectAnswers()
   const currentQuizData:any=quizData1[currentQuiz];
   questionEl.innerText=currentQuizData.question;
   a_text.innerText=currentQuizData.a;
   b_text.innerText=currentQuizData.b;
   c_text.innerText=currentQuizData.c;
   d_text.innerText=currentQuizData.d;
}
loadQuizs();
function deselectAnswers(){
    answerEls.forEach((answerEl)=>answerEl.checked=false)
}
function selectAnswers(){
    let answer:any
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    })
    return answer;
};
submitBtn.addEventListener('click',()=>{
    const answer:any=selectAnswers();
    if(answer){
        if(answer===quizData1[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData1.length){
            loadQuizs()
        }else{
            quiz.innerHTML=`<h2>You answered ${score}/${quizData1.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})
