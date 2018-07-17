var Word = require("./word.js");
var inquirer = require("inquirer");
var figlet = require("figlet");
var colors = require("colors");
var boxen  = require("boxen");


// var word1 = new Word('Nate dogg is the best');

// word1.wordSplitter();
// word1.guessLetter('o');
// word1.guessLetter('g');

var selectWord = [
  "Jaga",
  "Pumyra",
  "Cheetara",
  "Tygra",
  "Snarf",
  "Lion-O",
  "WilyKat",
  "Panthro",
  "Grune",
  "WilyKit"
];


// var guessesLeft = 10;
var selectedWord = "";
var wordChoice;
// var count = 0;
var lettersGuessed = [];
var name = "";

intro();

function newWord() {
  for (var i = 0; i < selectWord.length; i++) {
    selectedWord = selectWord[Math.floor(Math.random() * selectWord.length)];
    // console.log(selectedWord);
    wordChoice = new Word(selectedWord);

    // console.log("This is the word:", wordChoice);
  }
  wordChoice.wordSplitter();
  //console.log("Word contains", selectedWord.length, "letters.")
}

function startGame() {
  newWord();
  guessesLeft = 2;
  count = 0;
  lettersGuessed = [];
}

function getLetter() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a Letter"
      }
    ])
    .then(function(questions) {
      var letter = questions.letter.toUpperCase();

      // checks to see if letter has been guessed. If it has not then push to lettersGuessed.
      if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        var isCorrectLetter = wordChoice.guessLetter(letter);
        if (isCorrectLetter === false) {
          guessesLeft--;
        }

        console.log(boxen("Here are the letters guessed", {borderStyle: 'round', borderColor: 'magenta'}));
        console.log(lettersGuessed.join(" "));
        console.log("\n\nGUESSES LEFT:".bold.red, guessesLeft);

        if (wordChoice.isWordComplete === true) {
          console.log("\nGuessed Word:", wordChoice.word);
          console.log("\nYou Win".green, name + "!\n".bold);

          playAgain();
  
        } else if (guessesLeft === 0) {
          console.log("\nSorry,", name + ",You Lose :(...\n");

          playAgain();

        } else {
          getLetter();
        }
      } else {
        console.log("Well", name, "...", letter, "has been guessed already.");
        getLetter();
      }
    });
}

function intro() {
  figlet("Word Guess Game! \n ThunderCats Edition", function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log("\n" + data + "\n");

    inquirer
      .prompt([
        //Enter questions
        {
          type: "input",
          name: "name",
          message: "What's Your Name"
        }
      ])
      .then(function(intro) {
        name = intro.name.toUpperCase();
        console.log("Hello".bold, name, "! Let's play!".bold);

        startGame();
        getLetter();
      });
  });
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "playAgain",
        message: "Play again?",
        default: true
      }
    ])
    .then(function(replay) {
      if (replay.playAgain === true) {
        startGame();
        getLetter();
      } else {
        console.log("\nLater", name + "! Come Again!\n");
        intro();
      }
    });
}

// wordChoice.guessLetter("s");
