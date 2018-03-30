var a;
var winCount = 0;
var loseCount = 0;
var blankArray =[];
var guessesLeft = 8;
var wrongGuesses =[];
var wordChosen ='';
var lettersInWord =[];
var numBlanks =0;

//Array of words to choose from

var arrayOfWords = [
        "burger",
        "steak",
        "pizza",
        "ramen",
        "burrito",
        "sushi",
        "pasta",
        "cake",
        "waffles",
        "salad",
        "bacon",
        "chocolate"];



function startGame() {
  guessesLeft = 8;
  wrongGuesses =[];
  blankArray =[];
  wordChosen = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
  lettersInWord = wordChosen.split('');
  numBlanks = lettersInWord.length;
  for (var i = 0; i < numBlanks; i++) {
    blankArray.push("_");
  }
  a = blankArray.join(' ');
  document.getElementById('blankSpaces').innerHTML = a;
   document.getElementById('guessesRemaining').innerHTML = guessesLeft;
   document.getElementById('winsCounter').innerHTML = winCount;
   document.getElementById('lossesCounter').innerHTML = loseCount;
}


//function to display the letters guessed
 document.onkeyup = function (event) {
 	var userGuess = event.key.toLowerCase();
//  console.log(userGuess);
  letter(userGuess);
  roundComplete();
 }

// function to replace each blank with a letter when guessed


function letter(userGuess) {
 var isLetterInWord = false;
   for (var i = 0; i < numBlanks; i++) {
     if(wordChosen[i] == userGuess) {
       isLetterInWord = true;
     }
   }

   if(isLetterInWord) {
     for (var i = 0; i < numBlanks; i++) {
       if (wordChosen[i] == userGuess) {
         blankArray[i] = userGuess;
       }
     }
   } else {
       wrongGuesses.push(userGuess);
       guessesLeft--;
     }
 document.getElementById('wordToGuess').innerHTML = blankArray.join(' ');
 document.getElementById('numGuesses').innerHTML = guessesLeft;
}

function roundComplete () {
 document.getElementById("numGuesses").innerHTML = guessesLeft;
 document.getElementById("wordToGuess").innerHTML = blankArray.join(' ');
 document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
  if (lettersInWord.toString() == blankArray.toString()) {
    winCount++;
    alert("You Won!");
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  } else if (guessesLeft === 0) {
    loseCount++;
    alert("You Lost");
    document.getElementById("lossCounter").innerHTML = loseCount;
    startGame();
  }
}
// Starting the Game 
startGame();




















// //creates number of blanks equivalent to mystery word length
// function setup() {
//     var gameStart = setup;
//     cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
//     for (var i = 0; i < cpuWord.length; i++) {
//         //replaces length of chosen word with "_"
//         cpuWordBlanks[i] = "_";
//         document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join(" ");
//     }
//     //captures user input into user variable
//     document.onkeyup = function (event) {
//         //stores user input into a variable and convert to lower case
//         var userGuess = event.key.toLowerCase();
//         //if user input is NOT within acceptable characters, error message
//         if (isAlphabet(userGuess) === false) {
//             alert("Are you that hungry? That's not a valid character!");
//         }
//         //if user input IS within acceptable characters
//         else {
//             //if user character is not part of chosen word, would return -1
//             if (cpuWord.indexOf(userGuess) === -1 && incorrectLetters.indexOf(userGuess) === -1) {
//                 //would need to 'push' to the end of respective empty arrays
//                 allGuessedLetters.push(userGuess);
//                 incorrectLetters.push(userGuess);
//                 //document wrong letters on screen
//                 document.getElementById("lettersGuessed").innerHTML = incorrectLetters.join(", ");
//                 //in turn reduces number of remaining guesses
//                 remainingGuesses--;
//                 //display those remaining guesses
//                 document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
//                 //if remaining guesses depletes to 0, game over
//                 if (remainingGuesses === 0) {
//                     alert("Too bad! You're having crumbs tonight.");
//                     //increment losses and display on losses counter
//                     losses++;
//                     document.getElementById("lossesCounter").innerHTML = losses;
//                     //refresh with new word
//                     newGame();
//                 }
//             }
//             //if user character is a part of chosen word
//             else {
//                 allGuessedLetters.push(userGuess);
//                 for (var j = 0; j < cpuWord.List; i++) {
//                     if (cpuWord[j].charAt(0) === userGuess) {
//                         cpuWordBlanks[j] = userGuess;
//                         document.getElementById("blankSpaces").innerHTML = cpuWordBlanks;
//                         for (var i = 0; i < cpuWord.length; i++) {
//                             document.getElementById("blankSpaces").innerHTML =
//                             document.getElementById("blankSpaces").innerHTML = cpuWord[i].join(" ");
//                         }
//                     }

//                 }
//             }
//             if (cpuWordBlanks.indexOf("_") === -1) {
//                 alert("Winner, winner, chicken dinner.");
//                 wins++;
//                 document.getElementById("winsCounter").innerHTML = wins;
//                 newGame();
//             }
//         }
//     }
// }

// //this tests for acceptable characters
// function isAlphabet(aChar) {
//     myCharCode = aChar.charCodeAt(0);
//     if (((myCharCode > 64) && (myCharCode < 91)) ||
//         ((myCharCode > 96) && (myCharCode < 123))) {
//         return true;
//     }
//     return false;
// }

// function newGame() {
//     cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
//     remainingGuesses = 8;
//     allGuessedLetters = [];
//     incorrectLetters = [];
//     cpuWordBlanks = [];
//     document.getElementById("blankSpaces").innerHTML = "";
//     document.getElementById("incorrectGuesses").innerHTML = "";
//     startGame();
// }




// setup();

