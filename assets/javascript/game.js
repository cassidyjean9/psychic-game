// declare variables

var letterText = document.getElementById("letter-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var userGuessesText = document.getElementById("user-guesses-text");

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var usedArray = []

//print guessesLeft variables to html



//Array of options for the letters
var options = ['a','b','c','d','e','f','g','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// loop through letters

for (i = 0; i < options.length; i++) {
    console.log(options[i])
    var letter = options[i]
    
}

document.onkeydown = function(event) {

    console.log("your key " + event.key);

    userGuess=event.key;

    if(options.includes(event.key)) {
        console.log("Found");
        usedArray.push(event.key);
        console.log ("used array: " + usedArray);
        userGuessesText.textContent = usedArray;
    } 
    
    else {
        console.log("Not Found");
        letterText.textContent = "Pick a letter from the alphabet"
    }
    
    //Make computer pick random choice



    var computerChoice = options[Math.floor(Math.random() * options.length)]

    console.log ("computer choice " + computerChoice);

    if ((computerChoice === userGuess) && (guessesLeft > 0)) {
        console.log("You won");
        wins++;
        usedArray = [];
        userGuessesText.textContent = usedArray;
        winsText.textContent = wins;
        
    }

    if ( (computerChoice !== userGuess) && (guessesLeft > 0)) {
        guessesLeft--;
        guessesLeftText.textContent = guessesLeft;
        
    }

   if (guessesLeft === 0) {
       losses++;
       lossesText.textContent = losses
       usedArray = [];
       userGuessesText.textContent = usedArray;
       guessesLeft = 10;

   }
}

guessesLeftText.textContent = guessesLeft;
winsText.textContent = wins;
lossesText.textContent = losses;