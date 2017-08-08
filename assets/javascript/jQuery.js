$(document).ready(function() {

var words = ["apple", "banana", "orange", "grape", "strawberry", "blueberry", "lemon"];
var guessesRemaining = 7;
//generates random #, and assigns it to an item in the array, storing it in randomWord
var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var letterGuess = [];
var indexes = [];
var trueFalse = false;


underScores();

$(document).keypress(function(event) {

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
        $('#randomWord').html(underScoreWord);
        letterGuess.pop();


    } else {
        guessesRemaining--
        $('#guessed').html(letterGuess);
        $('#remainingGuesses').html("Guesses Remaining: " + guessesRemaining);
    }

    trueFalse = false;
    checkWin();
    images();
    
});


function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    $('#randomWord').html(underScoreWord);
}

function checkWin() {
    if (underScoreWord === randomWord) {
            setTimeout(function() {
                alert("You Win!");
            } , 400);
            setTimeout(function() {
                location.reload();
            } , 600);
            
            
        } else if (guessesRemaining === 0) {
            setTimeout(function() {
                alert("You're a Loser!");
            } , 600);
            $('#randomWord').html(randomWord);
            setTimeout(function() {
                location.reload();
            } , 600);
        }
}   

function images(){
    if (guessesRemaining === 6) {
        $('#hangman').html("<img src='assets/images/hangman-6.png' height='400'/>");

    } else if (guessesRemaining === 5) {
        $('#hangman').html("<img src='assets/images/hangman-5.png' height='400'/>");

    } else if (guessesRemaining === 4) {
        $('#hangman').html("<img src='assets/images/hangman-4.png' height='400'/>");

    } else if (guessesRemaining === 3) {
        $('#hangman').html("<img src='assets/images/hangman-3.png' height='400'/>");
        
    } else if (guessesRemaining === 2) {
        $("#hint").css("display", "inherit");
        $('#hangman').html("<img src='assets/images/hangman-2.png' height='400'/>");
        
    } else if (guessesRemaining === 1) {
        $('#hangman').html("<img src='assets/images/hangman-1.png' height='400'/>");

    } else if (guessesRemaining === 0) {
        $('#hangman').html("<img src='assets/images/hangman-0.png' height='400'/>");   
    }
}


});







