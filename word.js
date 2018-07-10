var letter = require('./letter.js');

var Word = function(word){
    this.word = word,
    this.letterArr = [],
    this.underscoreArr = [],
    this.wordSplitter = function(){
        var splitWord =word.split("");
        console.log(splitWord);
        var underscore = splitWord.length;
        console.log(this.underscoreArr.join(" "));

        for (var i = 0; i<underscore.length; i++) {
           
            this.underscoreArr.push("_ ");
            

        }
        console.log('hello');
    }
}

var word1 = new Word('cat');

word1.wordSplitter();