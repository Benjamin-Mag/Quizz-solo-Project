// DATA for the Quiz. Array of Objects

const data = [
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

// select my elements

const quizElement = document.getElementById("quiz");
const questionElement = document.getElementById("question");

// answer elements

const answerElement = document.querySelectorAll(".answer");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");

// submition button

const submitButton = document.getElementById("submit");

// Initiate the score and current quiz (i keep it simple : no ramdom. At the moment,
// everytime we run the quizz we will have the same questions)

let currentQuiz = 0;
let score = 0;

displayQuiz();

// function to display my quiz

function displayQuiz() {
  uncheckAnswer();

  let currentQuizQuestion = data[currentQuiz];

  questionElement.innerText = currentQuizQuestion.question;
  answer_a.innerText = currentQuizQuestion.a;
  answer_b.innerText = currentQuizQuestion.b;
  answer_c.innerText = currentQuizQuestion.c;
  answer_d.innerText = currentQuizQuestion.d;
}

// uncheck everytime a -new quiz is display
function uncheckAnswer() {
  answerElement.forEach((answerElement) => (answerElement.checked = false));
}

function answerSelected() {
  // checking wich answer is checked or not and return the id :a,b,c or d . This way it's easier to find the good answer
  //i'll have to compare data.goodOne to the aswerElement id. Return the ID
  let answer;
  answerElement.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

// addEventlistenner on the button

submitButton.addEventListener("click", () => {
  // condition to score
  const answer = answerSelected();

  if (answer === data[currentQuiz].goodOne) {
    score++;
  }

  currentQuiz++;
  // check if it's the end of the quiz.
  if (currentQuiz < data.length) {
    displayQuiz();
  } else {
    quizElement.innerHTML = `plouplout ${score} / ${data.length}
    <button onclick="location.reload()"> Restart </button>`;
  }
});
