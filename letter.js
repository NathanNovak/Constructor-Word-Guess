function Letter(letter){
    this.letter = letter.toUpperCase(),
    this.guessedLetter = false,
    this.letterGuessedCorrectly = function(){
      //check this.guessedLetter
      //return this.letter or "_"
        if (this.guessedLetter){
            console.log(this.letter);
        }
        else{
            console.log('_');
        }
    }
    this.guessed = function(){
      //check to see if letter is displayed
      if (this.letter)
      this.guesssedLetter = true;
    }
}

// var guess = new Letter("a");

// guess.letterGuessedCorrectly();

module.exports = Letter;