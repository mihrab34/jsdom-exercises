'use strict';

// Dom Element Selectors
const button = document.querySelector('.check');
const number = document.querySelector('.number');
const totalScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');

// secret number random guess
const getSecretNumber = () => {
return Math.floor(Math.random() * 20 + 1);
}

let secretNumber = getSecretNumber()

// update score variable
let score = 20;
let highscore = 0;

// function to change textContent for dom elements
const setTextContent = (dom_element, message) => {
  document.querySelector(dom_element).textContent = message;
};

// play game functionality
button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    setTextContent('.message', '⛔ No Number');
  }
  // When player wins
  else if (guess === secretNumber) {
    setTextContent('.message', '🎉 Correct Number!');
    score;
    setTextContent('.number', secretNumber);
    body.style.backgroundColor = '#54a33cce';
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      setTextContent('.highscore', highscore);
    }
  }
  //   when guess not equal to guess (refactoring DRY Principles)
  else if (guess !== secretNumber) {
    if (score > 0) {
      setTextContent(
        '.message',
        guess < secretNumber
          ? '📉 Number guessed is  too low!'
          : '📈 Number guessed is  too high!'
      );
      score--;
      setTextContent('.score', score);
      body.style.backgroundColor = '#eb3c3c';
    } else {
      setTextContent('.message', '💥 You lost the game! ');
      setTextContent('.score', 0);
    }
  }
  document.querySelector('.message').style.lineHeight = '2';
});

// Play again functionality

againBtn.addEventListener('click', () => {
  score = 20;
  getSecretNumber();
  setTextContent('.number', '?');
  number.style.width = '15rem';
  setTextContent('.message', 'Start guessing...');
  totalScore.textContent = score;
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#6e93e4';
});

// REPEATED CODE
//  When guess is too low
//   else if (guess < secretNumber) {
//     if (score > 0) {
//       guessMessage.textContent = '📉 Number guessed is  too low! ';
//       score--;
//       totalScore.textContent = score;
//       body.style.backgroundColor = '#eb3c3c';
//     } else {
//       guessMessage.textContent = '💥 You lost the game! ';
//     }
//   }
//     when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       guessMessage.textContent = '📈 Number guessed is  too high!';
//       score--;
//       totalScore.textContent = score;
//       body.style.backgroundColor = '#eb3c3c';
//     } else {
//       guessMessage.textContent = '💥 You lost the game! ';
//     }
//   }
