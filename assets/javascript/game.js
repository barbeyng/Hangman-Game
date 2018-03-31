//array for the cpu to select from
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

//variables
var wins = 0;
var losses = 0;
var cpuWordBlanks = [];
var remainingGuesses = 8;
var incorrectLetters = [];
var cpuWord;
var splitLetters = [];
var numberOfBlanks = 0;

//functions

//starts the game with everything reset
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

//captures user input and runs various functions
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (isAlphabet(userGuess) === false) {
        alert("Are you that hungry? That's not a valid character!")
    }
    letterMatch(userGuess);
    finishGame();
}

//tests for character match or no match
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
    document.getElementById("lettersGuessed").innerHTML = incorrectLetters.join(", ");
}

//when full words have been guessed
function finishGame() {
    if (splitLetters.toString() == cpuWordBlanks.toString()) {
        wins++;
        winMessage();
        document.getElementById("winsCounter").innerHTML = wins;
        startGame();
    } else if (remainingGuesses === 0) {
        losses++;
        loseMessage();
        document.getElementById("lossesCounter").innerHTML = losses;
        startGame();
    }
}

function loseMessage() {
    var loserText = 
    ["Too bad! Butter luck next time.",
    "Holy shiitake! You donut know what you're doing.",
    "What's worse than overcooked steak? Your score. Ouch! Burrrrn.",
    "Aaaand another one bites the crust."];
    var a = Math.floor(Math.random() * loserText.length);
    alert (loserText[a]);
}

function winMessage() {
    var winText =
    ["Winner, winner, chicken dinner!",
    "Well look who's a big dill now?",
    "Well, hot dog!",
    "That was eggsquisite. Lettuce celebrate!"];
    var a = Math.floor(Math.random() * winText.length);
    alert (winText[a]);
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