$(document).ready(function() {

var words = ["apple", "banana", "orange", "grape", "strawberry", "blueberry", "lemon"];
var guessesRemaining = 7;
//generates random #, and assigns it to an item in the array, storing it in randomWord
var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var letterGuess = [];
var indexes = [];
var trueFalse = false;


//call underscore function to display randomWord underscores
underScores();

//listen for keypress, and run function
$(document).keypress(function(event) {

    //pushes key pressed into array of guessed letters
    letterGuess.push(String.fromCharCode(event.keyCode));

    //loop through random word's letters, checking against keypress
    for (var j = 0; j < randomWord.length; j++) {
        
        //if any letter of randomWord is equal to the last letter pressed
        if (randomWord[j] === letterGuess[letterGuess.length-1]) {
            
            //tell me keypress matches character in randomWord (used for if/else later)
            trueFalse = true;
            //tell me at what index the matching characters are at
            indexes.push(j);
            //change underScoreWord from string to array for looping
            var splitWord = underScoreWord.split("");

            //loop through splitWord array, and set matching indices to corresponding keypress
            for (k = 0; k < indexes.length; k++) {
                splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                //reset indexes array to nothing, so we can loop through again later
                indexes = [];
                //rejoin underScoreWord as string for display
                underScoreWord = splitWord.join("");
            }
        } 
    }

    //if/else statement checking success or failure of matching characters
    if (trueFalse) {
        $('#randomWord').html(underScoreWord);
        // If characters match, remove last entered character from letterGuess array
        // I only want incorrect letters in the letterGuess array
        letterGuess.pop();


    } else {
        // If keypress has no matches, lower guesses by 1
        guessesRemaining--
        //display letters guessed
        $('#guessed').html(letterGuess);
        //display remaining chances
        $('#remainingGuesses').html("Guesses Remaining: " + guessesRemaining);
    }

    //reset trueFals to false, to restart entire process
    trueFalse = false;
    //call function to determine win/lose (see below)
    checkWin();
    //call function for appropriate image, depending on state of missed guesses
    images();
    
});



//converts randomWord into string of underscores of matching length
function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    $('#randomWord').html(underScoreWord);
}

//checks to see if player wins or loses, and alerts the answer
function checkWin() {
    if (underScoreWord === randomWord) {
            setTimeout(function() {
                alert("You Win!");
            } , 600);
            location.reload();
            
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

//calls specific image related to # of guess remaining
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
        $("#textArea").append("<div>" + 'Hint...All of the words are fruits.');
        $('#hangman').html("<img src='assets/images/hangman-2.png' height='400'/>");
        
    } else if (guessesRemaining === 1) {
        $('#hangman').html("<img src='assets/images/hangman-1.png' height='400'/>");

    } else if (guessesRemaining === 0) {
        $('#hangman').html("<img src='assets/images/hangman-0.png' height='400'/>");   
    }
}


});







