var Word = require('./word.js');
var inquirer = require('inquirer');

// var word1 = new Word('Nate dogg is the best');

// word1.wordSplitter();
// word1.guessLetter('o');
// word1.guessLetter('g');

var selectWord = ['Zack Morris', 'Kelly Kapowski', 'Lisa Turtle', 'Jessie Spano', 'A.C. Slater', 'Screech']
var guesses = 10;
var selectedWord = "";
var wordChoice;
var count = 0;

function newWord() {

	for (var i = 0; i < selectWord.length; i++) {
		selectedWord = selectWord[Math.floor(Math.random() * selectWord.length)];
		// console.log(selectedWord);
		wordChoice = new Word(selectedWord);
	
		// console.log("This is the word:", wordChoice);

	}
	wordChoice.wordSplitter();
	console.log("Word contains", selectedWord.length, "letters.")

}

function startGame(){
	newWord();
  guesses = 10;
	getLetter();
}

function getLetter(){

	inquirer.prompt([
		{
			type: "input",
			name: "letter",
			message: "Guess a Letter"
		}
	]).then(function(questions){
		console.log(questions.letter);
		wordChoice.guessLetter(questions.letter);
		if (count <= selectedWord.length){
			getLetter();
			count++;
			guesses--;
		}
		else{
			console.log("All Done")
		}
		
	});

}




// wordChoice.guessLetter("s");
// wordChoice.guessLetter("k");
// wordChoice.guessLetter("e");
// wordChoice.guessLetter("c");
inquirer.prompt([
	//Enter questions
	{
		type: "input",
		name: "name",
		message: "What's Your Name"
	}
]
).then(function(intro){
	console.log("Hello", intro.name, "! Let's play!");

	startGame();
	
});
