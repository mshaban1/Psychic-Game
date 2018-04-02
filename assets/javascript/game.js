var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];


var computerGuess = computer[Math.floor(Math.random() * computer.length)];

var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    letterToGuess = computer[Math.floor(Math.random() * computer.length)];
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

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    }
};



var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


