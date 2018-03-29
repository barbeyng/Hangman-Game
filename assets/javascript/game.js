//list of hangman words
var wordList = [
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

//display wins
var wins = 0;

//display losses
var losses = 0;

//display guesses remaining
var remainingGuesses = 8;

//display initial guesses before user input
document.getElementById("guessesRemaining").innerHTML = remainingGuesses;

//computer generated word
var cpuWord = wordList[Math.floor(Math.random() * wordList.length)];

//empty array for generated word blanks
var cpuWordBlanks = [];

//empty array for incorrectly guessed letters
var incorrectLetters = [];

//empty array for ALL guessed letters
var allGuessedLetters = [];



//creates number of blanks equivalent to mystery word length
for (var i = 0; i < cpuWord.length; i++) {
    cpuWordBlanks[i] = "_";
    document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join (" ");
}


// //this tests for acceptable characters
// function isAlphabet(aChar) {
//     myCharCode = aChar.charCodeAt(0);
//         if(((myCharCode > 64) && (myCharCode < 91)) ||
//         ((myCharCode > 96) && (myCharCode < 123))) {
//             return true;
//         }
//             return false;
// }


// //this reflects number of blank spaces of chosen word
// function setup() {
//     cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
//     for (var i = 0; i < cpuWord.length; i++) {
//         if (cpuWord.charAt(i) === " ") {
//             cpuWordBlanks[i] = "&nbsp; &nbsp; &nbsp;";
//         }
//         else {
//             cpuWordBlanks[i] = "_";
//         }
//     }
//     for (var i = 0; i < cpuWord.length; i++) {
//         document.getElementById("blankSpaces").innerHTML =
//         document.getElementById("blankSpaces").innerHTML + " " + cpuWord[i];
//     }
// }

//this tests for acceptable characters
function isAlphabet(aChar) {
    myCharCode = aChar.charCodeAt(0);
        if(((myCharCode > 64) && (myCharCode < 91)) ||
        ((myCharCode > 96) && (myCharCode < 123))) {
            return true;
        }
            return false;
}

//captures user input into user variable
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    if (isAlphabet(userGuess) === false) {
        alert("Are you that hungry? That's not a valid character!");
    }
    else {
        if (cpuWord.indexOf(userGuess) === -1 && incorrectLetters.indexOf(userGuess) === -1) {
            allGuessedLetters.push(userGuess);
            incorrectLetters.push(userGuess);
            document.getElementById("lettersGuessed").innerHTML = incorrectLetters.join(", ");
            remainingGuesses--;
            document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
            if (remainingGuesses === 0) {
                alert("Too bad! You're having crumbs tonight.");
                losses++;
                document.getElementById("lossesCounter").innerHTML = losses;
                newGame();
            }
        }
        else {
            allGuessedLetters.push(userGuess);
            for (var j = 0; j < cpuWord.List; i++) {
                if (cpuWord[j].charAt(0) === userGuess) {
                    cpuWordBlanks[j].push(userGuess);
                    document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join(" ");
                        for (var i = 0; i < cpuWord.length; i++) {
                            document.getElementById("blankSpaces").innerHTML =
                            document.getElementById("blankSpaces").innerHTML = cpuWord[i].join(" ");
                        }
                }
                
            }
        }
        if (cpuWordBlanks.indexOf("_") === -1) {
            alert("Winner, winner, chicken dinner.");
            wins++;
            document.getElementById("winsCounter").innerHTML = wins;
            newGame();
        }
    }
}

function newGame() {
    cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
    remainingGuesses = 8;
    allGuessedLetters = [];
    incorrectLetters = [];
    cpuWordBlanks = [];
    document.getElementById("blankSpaces").innerHTML = "";
    document.getElementById("incorrectGuesses").innerHTML = "";
    setup();
}

setup();

