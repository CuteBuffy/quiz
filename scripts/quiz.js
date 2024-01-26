let quizData = [
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
const resultElem = document.querySelector('.result');

const quizDataLength = quizData.length;
const ansVariables = 4;
let currentQuiz;
let questionNumber = 1;
let score = 0;
let randomAnswer;

const possibleButtons = [1, 2, 3, 4];

loadQuiz();

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

function loadQuiz() {
  currentQuiz = getRandomIndex();

  if (quizData.length === 0) {
    if (score === 1) {
      mainContentElem.classList.add('hidden');
      resultElem.innerHTML = `<h1>Meh, you have to learn history way more! You got 
      ${score}/${quizDataLength} points.</h1>
      <button class="js-play-again play-again">Play Again</button>
      `
      resultElem.classList.remove('hidden');
      
      const playAgainElem = document.querySelector('.js-play-again');

      playAgainElem.addEventListener('click', () => {
        resultElem.classList.add('hidden');
        mainContentElem.classList.remove('hidden');
        playAgain();
      })
    } else if (score === 2 || score === 3) {
      mainContentElem.classList.add('hidden');
      resultElem.innerHTML = `<h1>Good job! You just need a little bit more knowledge. You got 
      ${score}/${quizDataLength} points.</h1>
      <button class="js-play-again play-again">Play Again</button>
      `
      resultElem.classList.remove('hidden');
      
      const playAgainElem = document.querySelector('.js-play-again');

      playAgainElem.addEventListener('click', () => {
        resultElem.classList.add('hidden');
        mainContentElem.classList.remove('hidden');
        playAgain();
      })
    } else if (score === 4) {
      mainContentElem.classList.add('hidden');
      resultElem.innerHTML = `<h1>Congrats! You got 
      ${score}/${quizDataLength} points. Well Done!</h1>
      <button class="js-play-again play-again">Play Again</button>
      `
      resultElem.classList.remove('hidden');
      
      const playAgainElem = document.querySelector('.js-play-again');

      playAgainElem.addEventListener('click', () => {
        resultElem.classList.add('hidden');
        mainContentElem.classList.remove('hidden');
        playAgain();
      })
    }
  } else {
    const currentQuizData = quizData[currentQuiz]
  
    questionElem.innerHTML = `Question ${questionNumber}: ${currentQuizData.question}`;
    randomPropertyName();
    btn1.innerHTML = randomAnswer;
    randomPropertyName();
    btn2.innerHTML = randomAnswer;
    randomPropertyName();
    btn3.innerHTML = randomAnswer;
    randomPropertyName();
    btn4.innerHTML = randomAnswer;
  }
}

function checkAnswer(btn) {
  if (currentQuiz < quizData.length) {
    if (btn.innerHTML === quizData[currentQuiz].correct) {
      score++;
      questionNumber++;
      removeQuestion();
      loadQuiz();
    } else {
      questionNumber++;
      removeQuestion();
      loadQuiz();
    }
  } 
}

function getRandomIndex() {
  return Math.floor(Math.random() * quizData.length);
}

function removeQuestion() {
  quizData.splice(currentQuiz, 1);
}

function playAgain() {
  score = 0;
  questionNumber = 1;
  quizData = [
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
  loadQuiz();
}

function randomPropertyName() {
  const keys = Object.keys(quizData[currentQuiz]);
  let index = 1 + Math.floor(Math.random() * (keys.length - 2));

  randomAnswer = quizData[currentQuiz][keys[index]];
  delete quizData[currentQuiz][keys[index]];
}