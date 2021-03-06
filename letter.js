
function Letter(letter) {
  this.letter = letter.toUpperCase();
  this.isGuessedLetter = false;

    //check if guessed letter is an acutual letter. Return this.letter or "_"
    this.letterGuessedCorrectly = function () {
    if (this.isGuessedLetter) {
      return this.letter;
    }
    else {
      return "_";
    }
  };

  this.guessed = function (character) {

    //checks to see if letter from user and guessed letter match.
    if (this.letter === character.toUpperCase()) {
      this.isGuessedLetter = true;
    }
    else {
      this.isGuessedLetter = false;
    }
  };
}

module.exports = Letter;