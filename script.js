function playGuessingGame(numToGuess, totalGuesses = 10) {
  let userGuess;
  let numberOfTrys = 0
  do {
    userGuess = prompt("Enter a number between 1 and 100.")
    console.log(`user guess ${userGuess} - ${isNaN(userGuess)}`)
    numberOfTrys++
  } while(
    (userGuess < 1 || userGuess > 100) && numberOfTrys < totalGuesses
  )
  return 0 
}
