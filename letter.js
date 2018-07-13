

function Letter(letter) {
  this.letter = letter.toUpperCase();
  this.isGuessedLetter = false;
  this.letterGuessedCorrectly = function () {

    //check the guessed letter is an acutual lettre. Return this.letter or "_"
    if (this.isGuessedLetter) {
      return this.letter;
    }
    else {
      return "_";
    }
  };

  this.guessed = function (character) {
    // console.log(character);
    // console.log("correct letter", this.letter);

    //check to see if letter is displayed
    if (this.letter === character.toUpperCase()) {
      this.isGuessedLetter = true;
      // console.log("isGuessedLetter:", this.isGuessedLetter);
      // console.log('letter guessed correctly');
    }
    else {
      this.isGuessedLetter = false;
      // console.log('letter not guessed correctly');
    }
  };
}

// var guess = new Letter("a");
// guess.guessed("a");

// console.log(guess.isGuessedLetter);

// var letterGuessed = guess.letterGuessedCorrectly();
// console.log(letterGuessed);
// console.log(guess.isGuessedLetter);

module.exports = Letter;