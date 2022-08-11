// select my start button
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const counterContainer = document.getElementById("counter");
// add event on my button
startButton.addEventListener("click", startTheGame);

//create the funtion
function startTheGame() {
  // add class 'hide' to hide start button
  startButton.classList.add("hide");
  // remove class 'hide' to display my quiz (need to store it inside a const)
  questionContainer.classList.remove("hide");
  counterContainer.classList.remove("hide");
}
