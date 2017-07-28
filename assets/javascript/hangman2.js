//converts random word length into string of underscores seperated by spaces
function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    document.getElementById('randomWord').innerHTML = underScoreWord;
    console.log(randomWord);
}


//checks to see if player wins or loses
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











