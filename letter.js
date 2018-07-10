function Letter(letter){
    this.letter = letter.toUpperCase(),
    this.guessedLetter = false,
    this.letterGuessedCorrectly = function(){
        if (this.guessedLetter){
            console.log(this.letter);
        }
        else{
            console.log('_');
        }
    }
}

var guess = new Letter("a");

guess.letterGuessedCorrectly();

module.exports = Letter;