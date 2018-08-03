var computerChoices = ["Rock", "Paper", "Scissors"]
var userChoice = prompt("Choose Rock, Paper or Scissors")
var userWins = 0
var computerWins = 0
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

console.log(computerGuess)
console.log(userChoice + " your choice")
if (userChoice == computerGuess) { 
    alert("Its  A Draw!")
} 
else if (userChoice == "Rock" && computerGuess == "Scissors") { 
    userWins++
    alert("You win")
}  
else if (userChoice == "Scissors" && computerGuess == "Paper") { 
   userWins++
   alert("You win")
} 
else if (userChoice == "Paper" && computerGuess == "Rock") {
    userWins++
    alert("You win")
} 
else if (userChoice == "Rock" && computerGuess == "Paper") { 
    computerWins++
    alert("You lose")
} 
else if (userChoice == "Paper" && computerGuess == "Scissors") {
    computerWins++
    alert("You lose")
} 
else if (userChoice == "Scissors" && computerGuess == "Rock") {
    computerWins++
    alert("You lose") 
} 
else if (userChoice == "Nathan") {
    alert("Hi Nathan you get a free win ;)")
    userWins++ 
} 
else {
    alert("DID YOU NOT TYPE Rock Paper or Scissors ;) IF SO DO IT NOW NOW NOW NOW NOW NOW")
    alert("Quickly come on")
    alert("Whats the settling for DO IT NOW...")
}

var html = 
 "<p>Player wins: " + userWins + "</p>" + 
 "<p>Computer Wins " + computerWins + "</p>"
document.getElementById("game").innerHTML = html
