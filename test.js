const quizData = [
    {
        question: "Из какой страны Золушка?",
        a: "Дания",
        b: "Франция",
        c: "Англия",
        correct: "b",
    },
    {
        question: "Что лучшего всего делала Русалочка Ариэль?",
        a: "Пела",
        b: "Готовила",
        c: "Рисовала",
        correct: "a",
    },
    {
        question: "Какое животское является другом Рапунцель?",
        a: "Скорпион",
        b: "Суслик",
        c: "Игуана",
        correct: "c",
    },
    {
        question: "Сколько сводных сестер было у Золушки?",
        a: "1",
        b: "2",
        c: "3",
        correct: "b",
    },
    {
        question: "Как зовут тигра принцессы Жасмин?",
        a: "Раджа",
        b: "Абу",
        c: "Сэм",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Заново</button>
            `;
        }
    }
});
