//elements

const inputEl = document.querySelector(".user-input");
const scoreEl = document.querySelector(".score");
const randomEl = document.querySelector(".random-guess");
const messageEl = document.querySelector(".error-msg");
const btnSubmit = document.querySelector(".btn-submit");

//global variables

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let score = 20;

// functions

const displayMessage = function (message, color) {
  messageEl.style.display = "block";
  messageEl.style.color = color;
  messageEl.innerText = message;
};

//event listners

btnSubmit.addEventListener("click", function () {
  const input = Math.round(Number(inputEl.value));

  //input validation

  if (input < 1 || input > 100) {
    displayMessage("Enter a Valid Input", "#000000");
  } else {
    if (score > 1) {
      //if user guess is correct

      if (input === randomNumber) {
        displayMessage(`You WON , SCORE: ${score}`, "darkblue");
        randomEl.innerText = randomNumber;
      }

      //if user guess is wrong
      else {
        if (input > randomNumber) {
          displayMessage("Your Guess is Higher", "9e0202");
          score = score - 1;
          scoreEl.innerText = score;
        } else if (input < randomNumber) {
          displayMessage("Your Guess is Lower", "9e0202");
          score = score - 1;
          scoreEl.innerText = score;
        }
      }
    }

    //if score = 0
    else {
      displayMessage("Game Over !", "9e0202");
      randomEl.innerText = randomNumber;
    }
  }

  console.log(input);
});