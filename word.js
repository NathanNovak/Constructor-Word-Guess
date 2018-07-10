var letter = require('./letter.js');

var Word = function(word){
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
           
            this.underscoreArr.push("_ ");         
        }
        console.log(this.underscoreArr.join(" "));


    }
}

var word1 = new Word('baseball');

word1.wordSplitter();