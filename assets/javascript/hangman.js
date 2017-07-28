window.onload = function() {

var words = ["apple", "banana", "orange", "grape", "strawberry", "blueberry"];
var wins = 0;
var guessesRemaining = 7;

var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var letterGuess = [];
var indexes = [];


//converts random word length into string of underscores seperated by spaces
function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    document.getElementById('randomWord').innerHTML = underScoreWord;
    console.log(randomWord);
}

underScores();
    


document.addEventListener('keypress', function(event) {

    letterGuess.push(String.fromCharCode(event.keyCode));
    document.getElementById('guessed').innerHTML = letterGuess;

    for (var j = 0; j < randomWord.length; j++) {
        
        if (randomWord[j] === letterGuess[letterGuess.length-1]) {
            
            indexes.push(j);
            var splitWord = underScoreWord.split("");

            for (k = 0; k < indexes.length; k++) {
                splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                indexes = [];
                underScoreWord = splitWord.join("");
            }
        }
    }

    
    console.log(guessesRemaining - letterGuess.length);
    document.getElementById('randomWord').innerHTML = underScoreWord;
    document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;


});





    


}











