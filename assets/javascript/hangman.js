window.onload = function() {
// "listen" for any key press to start game
// choose word from array at random
// display that word as # of underscores = to word's characters

// have user select letters (listen for keypresses), compare those
// 	to random word, and display characters in their position
// if letters chosen arent in random word, countdown # of guesses to 0
// 	end game at 0

//Start game with keypress, then add other functions to be run
//inside paramters of function below
//document.addEventListener('keypress', underScores);
//capture key pressed, check to see if that letter is in random
//word, if yes: display character in word in correct place, if no: display wrong
//character in 'letters guessed' field & add body part to hangman

var words = ["apple", "banana", "orange", "grape", "strawberry", "blueberry"];
var wins = 0;
var guesses = 7;

var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var splitWord = underScoreWord.split("");
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

	for (var j = 0; j < randomWord.length; j++) {
        
        if (randomWord[j] == letterGuess[letterGuess.length-1]) {
            indexes.push(j);

            for (k = 0; k < indexes.length; k++) {
	            splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
        	}
        	underScoreWord = split.join("");
         	document.getElementById('randomWord').innerHTML = underScoreWord;
         } else {
         	document.getElementById('guessed').innerHTML = letterGuess;

         }
    }

    console.log(indexes);


});




// function indexesOf(word, letter) {

//     for(var i = 0; i < word.length; i++)
//     {
//         if(word.charAt(i) == letter)
//         {
//             indexes.push(i);
//         }
//     }

// }

// indexesOf(randomWord, letterGuess);	
// console.log(indexes);



// for (var j = 0; j < randomWord.length; j++) {
// 		for (var k = 0; k < letterGuess.length; k++) {

// 			if (randomWord[j] === letterGuess[k]) {
// 				console.log(randomWord.indexOf(letterGuess[k]));
// 			} 
// 		}
// 	}
//search for matching guess letters in random word
//store the index of those matching letters
//replace the index of the underScoreWord with matching letter 



	







}











