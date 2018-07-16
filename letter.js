
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
    // console.log(character);
    // console.log("correct letter", this.letter);

    //checks to see if letter from user and guessed letter match.
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
// guess.guessed("k");

// // console.log(guess.isGuessedLetter);

// var letterGuessed = guess.letterGuessedCorrectly();
// console.log(letterGuessed);
// console.log(guess.isGuessedLetter);

module.exports = Letter;