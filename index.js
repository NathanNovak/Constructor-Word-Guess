var Word = require("./word.js");
var inquirer = require("inquirer");
var figlet = require("figlet");
var colors = require("colors");
var boxen  = require("boxen");

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

var guessesLeft;
var selectedWord = "";
var wordChoice;
var wins;
var losses;
var lettersGuessed = [];
var name = "";

intro();

//gets a new word from the array
function newWord() {
  for (var i = 0; i < selectWord.length; i++) {
    selectedWord = selectWord[Math.floor(Math.random() * selectWord.length)];
    wordChoice = new Word(selectedWord);
  }
  wordChoice.wordSplitter();
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
          console.log("\nGuessed Word:", wordChoice.word+"!");
          console.log("\nYou Win".green, name + "!\n".bold);
          wins++;
          console.log("\nWINS:".green, wins);
          console.log("LOSSES:".red, losses, "\n");

          playAgain();
  
        } else if (guessesLeft === 0) {
          console.log("\nSorry,", name + ",You Lose :(...\n");
          losses++;
          console.log("\nWINS:".green, wins);
          console.log("LOSSES:".red, losses, "\n");

          playAgain();

        } else {
          getLetter();
        }
      } else {
        console.log("\nWell", letter, "has been guessed already. Guess again", name+"!");
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
        console.log("Hello".bold, name +"! Let's play!".bold);

        startGame();
        getLetter();
      });
  });
}

function startGame() {
  newWord();
  guessesLeft = 10;
  wins = 0;
  losses = 0;
  lettersGuessed = [];
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
        guessesLeft = 10;
        lettersGuessed = [];
        newWord();
        getLetter();
      } else {
        console.log("\nLater", name + "! Come Again, and\n THUNDERCATS HOOOOOOOOOO!!!");
        intro();
      }
    });
}


