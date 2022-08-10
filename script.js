// DATA for the Quiz. Array of Objects

const dataQuiz = [
  {
    question: "who is the mad hatter ...?",
    a: "Nobody",
    b: "everybody",
    c: "Somebody",
    d: "not me !",
    goodOne: "d",
  },
  {
    question: "Is the white Rabbit late ? ",
    a: "Never",
    b: "he's always in time",
    c: "who is he ? ",
    d: "to my brithday ?",
    goodOne: "a",
  },
  {
    question: "what's the good answer ?",
    a: "maybe this one",
    b: "or this one",
    c: "ask to the mad hatter",
    d: "love",
    goodOne: "d",
  },
];

// select my elements and create a variable to store them

const quizElement = document.getElementById("quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

// answer elements

const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");

// submition button

const submitButton = document.getElementById("submit");

// Initiate the score and current quiz

let currentQuiz = 0;
let score = 0;

// creates function to display my quiz

function displayQuiz() {
  let currentQuizQuestions = dataQuiz[currentQuiz];

  questionElement.innerText = currentQuizQuestions.question;
  answer_a.innerText = currentQuizQuestions.a;
  answer_b.innerText = currentQuizQuestions.b;
  answer_c.innerText = currentQuizQuestions.c;
  answer_d.innerText = currentQuizQuestions.d;
}


displayQuiz()