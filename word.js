var Letter = require('./letter.js');

function Word(word) {
	this.word = word;
	this.letterArr = [];
	this.letterStateArr = [];
	this.wordSplitter = function () {

		//need to take the new word and split the letters up
		var splitWord = word.split("");
		console.log(splitWord);

		// var underscore = splitWord.length;
		// console.log(underscore);

		for (var i = 0; i < splitWord.length; i++) {
			this.letterArr[i] = new Letter(splitWord[i]);
			// this.letterArr.push(new Letter(splitWord[i]));
			if (splitWord[i] === " "){
				this.letterStateArr.push(" ");
			}
			else{
				this.letterStateArr.push("_");
			}
		
		}
		// console.log(this.letterArr);
		console.log(this.letterStateArr.join(" "));

	};
	this.guessLetter = function (character) {
		console.log("letter guessing:", character);
		for (var i = 0; i < this.letterArr.length; i++) {
			// console.log("LetterState: ", i, this.letterStateArr[i]);
			// console.log(this.letterArr[i]);

			if("_" === this.letterStateArr[i]){
				this.letterArr[i].guessed(character);
				var letterState = this.letterArr[i].letterGuessedCorrectly();

				// console.log("guessed: ", letterState);
				// console.log(this.letterArr[i]);
				this.letterStateArr[i] = letterState;
				console.log("LetterState: ", i, this.letterStateArr[i]);
			}
			

		}
		console.log(this.letterStateArr.join(" "));
	};
}




// function makeGuess(){
//return a boolean
// }
// var word1 = new Word('cat');

// word1.wordSplitter();
// word1.guessLetter('c');

module.exports = Word;