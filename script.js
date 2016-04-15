/* Welcome to the itty bitty number guessing game!
Players must guess a random number between 1-10.
If incorrect, the player will get a second try,
receiving a clue as to whether the random number is higher or lower
than their original guess. */

var correctGuess = false;

var randomNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt("I am thinking of a number between 1 and 10. Care to guess what it is?");
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  } else if (parseInt(guess) < randomNumber) {
      var guessMore = prompt("Try again. The number I am thinking of is greater than " + guess);
        if (parseInt(guessMore) === randomNumber) {
          correctGuess = true;
        }

  }
    else if (parseInt(guess) < randomNumber) {
      var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
        if (parseInt(guess) === randomNumber) {
          correctGuess = true;
        }
    }

  if (correctGuess) {
    alert("You are correct!");
  } else {
    alert("Sorry, the correct answer was " + randomNumber + ".");
  }