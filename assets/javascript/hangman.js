window.onload = function() {

var words = ["apple", "banana", "orange", "grape", "strawberry", "blueberry"];
var wins = 0;
var guessesRemaining = 7;

var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var letterGuess = [];
var indexes = [];
var trueFalse = false;


underScores();
    

document.addEventListener('keypress', function(event) {

    letterGuess.push(String.fromCharCode(event.keyCode));

    for (var j = 0; j < randomWord.length; j++) {
        
        if (randomWord[j] === letterGuess[letterGuess.length-1]) {
            trueFalse = true;
            indexes.push(j);
            var splitWord = underScoreWord.split("");

            for (k = 0; k < indexes.length; k++) {
                splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                indexes = [];
                underScoreWord = splitWord.join("");
            }
        } 
    }

    if (trueFalse) {
        document.getElementById('randomWord').innerHTML = underScoreWord;
        document.getElementById('guessed').innerHTML = letterGuess;


    } else {
        guessesRemaining--
        document.getElementById('guessed').innerHTML = letterGuess;
        document.getElementById('randomWord').innerHTML = underScoreWord;
        document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-6.png height='400'/>";

    }

    trueFalse = false;
    checkWin();
    images();
    
});



//converts random word length into string of underscores seperated by spaces
function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    document.getElementById('randomWord').innerHTML = underScoreWord;
    console.log(randomWord);
}

//checks to see if player wins or loses, and alerts the answer
function checkWin() {
    if (underScoreWord === randomWord) {
            alert("You Win! Refresh page for new game.");
        } else if (guessesRemaining === 0) {
            alert("You Lose! Refresh page for new game.");
        }

}   

function images(){
    if (guessesRemaining === 6) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-6.png height='400'/>";

    } else if (guessesRemaining === 5) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-5.png height='400'/>";

    } else if (guessesRemaining === 4) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-4.png height='400'/>";

    } else if (guessesRemaining === 3) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-3.png height='400'/>";
        
    } else if (guessesRemaining === 2) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-2.png height='400'/>";
        
    } else if (guessesRemaining === 1) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-1.png height='400'/>";
        
    } else if (guessesRemaining === 0) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-0.png height='400'/>";
        
    }

}


}











