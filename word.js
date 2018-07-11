var Letter = require('./letter.js');

function Word(word){
    this.word = word,
    this.letterArr = [],
    this.underscoreArr = [],
    this.wordSplitter = function(){

        //need to take the new word and split the letters up
        var splitWord =word.split("");
        console.log(splitWord);
        
        // var underscore = splitWord.length;
        // console.log(underscore);

        for (var i = 0; i<splitWord.length; i++) {
            this.letterArr.push(new Letter(splitWord[i]));
            console.log(splitWord[i]);
            console.log(this.letterArr);
            this.underscoreArr.push("_ ");         
        }
        console.log(this.underscoreArr.join(" "));

    }
}
// function displayWord(){
    //loop through this.letters fo each{
        // call the letter's display()
        // add to display string
// }
    // }

    // function makeGuess(){
     //return a boolean
    // }
var word1 = new Word('cat');

word1.wordSplitter();