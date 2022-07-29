var randomWords = [
  "dog",
  "lemonade",
  "pineapples",
  "javascript",
  "socks",
  "spacecraft",
  "lamp",
  "pockets",
  "pitchfork",
  "taquitos",
  "yarn",
]
var timerEl = document.getElementById('countdown');

var underscoreArr = document.getElementById('underscores');

var outcome = document.getElementById("outcome");

var wins = document.getElementById("wins");

var loses = document.getElementById("loses");

function displayLetters() {
  var answers = underscores.join("")
  underscoreArr.textContent = answers
}

document.querySelector("button");

var button = document.querySelector("button");

var randomWord = []

var underscores = []

function score(userWins) {
  if (userWins) {
    //check to see if local storage has wins
    if (localStorage.getItem("wins") == null) {
      //if it does, add 1 to wins and display
      localStorage.setItem("wins", "1")
      wins.textContent = localStorage.getItem("wins")
    }
    else {
      var newWinScore = parseInt(localStorage.getItem("wins")) + 1
      localStorage.setItem("wins", newWinScore)
      wins.textContent = newWinScore
    }
    //if it doesnt, we are going to add 1 to loses and display
  }
  else {
    if (localStorage.getItem("loses") == null) {
      localStorage.setItem("loses", "1")
      loses.textContent = localStorage.getItem("loses")
    }
    else {
      var newLoseScore = parseInt(localStorage.getItem("loses")) + 1
      localStorage.setItem("wins", newLoseScore)
      loses.textContent = newLoseScore
    }
  }

}

button.addEventListener("click", function (event) {
  var index = Math.floor(Math.random() * randomWords.length);
  randomWord = randomWords[index];
  randomWord = randomWord.split("")
  console.log(randomWord)
  button.style.display = "none"
  //set an array to have underscores based on the length of the random word selected
  for (let i = 0; i < randomWord.length; i++) {
    underscores[i] = "_ "
  }
  countdown()
});

document.addEventListener('keydown', function (event) {
  var key = event.key.toLowerCase();
  var alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(
    ''
  )
  for (let i = 0; i < randomWord.length; i++) {
    if (key == randomWord[i]) {
      underscores[i] = key
    }
    addEventListener
    console.log(underscores)
    displayLetters()
  }
})

//Based on the keypress we can check if it is in the random word

//If it is in the random word
//we will replace the underscore at the index where the letter is in randomWords with the correct letter

// Timer that counts down from 30
function countdown() {
  var timeLeft = 30;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (!underscores.includes("_ ")) {
      outcome.textContent = "You win!"
      clearInterval(timeInterval);
      timerEl.textContent = ""
      //call function to win
      score(true);
    }
    else if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      outcome.textContent = "You suck! Game OVER"
      //call function to lose
      score(false);
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);


}




