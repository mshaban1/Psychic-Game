var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];


var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
var updateGuessesSoFar = function () {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};


document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (letterToGuess === userGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = 'Wins: ' + wins;
        resetGame();
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = 'Losses: ' + losses;
        resetGame();
    };
};

var resetGame = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


