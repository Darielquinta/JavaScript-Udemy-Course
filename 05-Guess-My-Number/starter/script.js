'use strict';

// console.log(document.querySelector('.message').textContent);
//displayMessage( "Correct secretNumber! 🏅"

// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = document.querySelector('.highscore').textContent;

const displayMessage = function (message) {
 document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫 No number!');
  }
  // When Player wins
  else if (guess === secretNumber) {
    displayMessage('🏅 Correct number! ');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
     displayMessage(guess > secretNumber ? '👆 Too high!' : '👇 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage( '😡 Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //    displayMessage( '👆 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    displayMessage( '😡 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //    displayMessage( '👇 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    displayMessage( '😡 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
 displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
});
