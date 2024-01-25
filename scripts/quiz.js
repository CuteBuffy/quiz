const quizData = [
  {
    question: "What's the capital of Ukraine?",
    a: "Mykolaiv",
    b: "Kharkiv",
    c: "Kyiv",
    d: "Odessa",
    correct: "Kyiv",
  },

  {
    question: "What's the national currency in Ukraine?",
    a: "RUB",
    b: "EUR",
    c: "PLN",
    d: "UAH",
    correct: "UAH",
  },

  {
    question: "Who's the president of Ukraine as of 2024?",
    a: "Zelensky",
    b: "Poroshenko",
    c: "Putin",
    d: "Makron",
    correct: "Zelensky",
  },

  {
    question: "What's the square root of 64?",
    a: "6",
    b: "8",
    c: "4",
    d: "32",
    correct: "8"
  }

];


const btn1 = document.querySelector('.js-ans1');
const btn2 = document.querySelector('.js-ans2');
const btn3 = document.querySelector('.js-ans3');
const btn4 = document.querySelector('.js-ans4');
const questionElem = document.querySelector('.js-question');
const mainContentElem = document.querySelector('.main_content');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  if (currentQuiz + 1 > quizData.length) {
    mainContentElem.innerHTML = `<h1 class="end">Congrats! You got ${score}/${quizData.length} points!</h1>`;
  } else {
    questionElem.innerHTML = `Question ${currentQuiz + 1}: ${currentQuizData.question}`;
    btn1.innerHTML = quizData[currentQuiz].a;
    btn2.innerHTML = quizData[currentQuiz].b;
    btn3.innerHTML = quizData[currentQuiz].c;
    btn4.innerHTML = quizData[currentQuiz].d;
  }
}

btn1.addEventListener('click', () => {
  checkAnswer(btn1);
})

btn2.addEventListener('click', () => {
    checkAnswer(btn2);
})

btn3.addEventListener('click', () => {
  checkAnswer(btn3);
})

btn4.addEventListener('click', () => {
  checkAnswer(btn4);
})

function checkAnswer(btn) {
  if (currentQuiz < quizData.length) {
    if (btn.innerHTML === quizData[currentQuiz].correct) {
      score++;
      currentQuiz++;
      loadQuiz();
      console.log(currentQuiz);
    } else {
      currentQuiz++;
      loadQuiz();
      console.log(currentQuiz);
    }
  } 
}