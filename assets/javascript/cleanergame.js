
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

var wins = 0;
var losses = 0;
var cpuWordBlanks = [];
var remainingGuesses = 8;
var incorrectLetters = [];
var cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
var splitLetters = [];
var numberOfBlanks = 0;


function startGame() {
    remainingGuesses = 8;
    incorrectLetters = [];
    cpuWordBlanks = [];
    cpuWord = wordList[Math.floor(Math.random() * wordList.length)];
    splitLetters = cpuWord.split("");
    numberOfBlanks = splitLetters.length;
    for (var i = 0; i < numberOfBlanks; i++) {
        cpuWordBlanks.push("_");
    }
    document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join(" ");
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
    document.getElementById("winsCounter").innerHTML = wins;
    document.getElementById("lossesCounter").innerHTML = losses;
}


//function to display the letters guessed
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (isAlphabet(userGuess) === false) {
        alert("Are you that hungry? That's not a valid character!")
    }
    letterMatch(userGuess);
    finishGame();
}

// function to replace each blank with a letterMatch when guessed


function letterMatch(userGuess) {
    var isMatch = false;
    for (var i = 0; i < numberOfBlanks; i++) {
        if (cpuWord[i] == userGuess) {
            isMatch = true;
        }
    }
    if (isMatch) {
        for (var i = 0; i < numberOfBlanks; i++) {
            if (cpuWord[i] == userGuess) {
                cpuWordBlanks[i] = userGuess;
            }
        }
    } else {
        incorrectLetters.push(userGuess);
        remainingGuesses--;
    }
    document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join(" ");
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
}

function finishGame() {
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
    document.getElementById("blankSpaces").innerHTML = cpuWordBlanks.join(" ");
    document.getElementById("lettersGuessed").innerHTML = incorrectLetters.join(", ");
    if (splitLetters.toString() == cpuWordBlanks.toString()) {
        wins++;
        alert("You Won!");
        document.getElementById("winsCounter").innerHTML = wins;
        startGame();
    } else if (remainingGuesses === 0) {
        losses++;
        alert("You Lost");
        document.getElementById("lossesCounter").innerHTML = losses;
        startGame();
    }
}

function isAlphabet(letter) {
    myCharCode = letter.charCodeAt(0);
    if (((myCharCode > 64) && (myCharCode < 91)) ||
        ((myCharCode > 96) && (myCharCode < 123))) {
        return true;
    }
    return false;
}

// Starting the Game 
startGame();