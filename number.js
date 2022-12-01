'use strict';
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🐣No Number!!';
  } // when player wins
  else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = '🎉🎊Correct Number🎊🎉';
    document.querySelector('.number').textContent = Secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //when guess is too high
  else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? 'too High😮' : 'Too Low 😢';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game😫😵';
      document.querySelector('.score').textContent = 0;
    }
  }
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost The Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < Secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost The Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...😁😁';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
