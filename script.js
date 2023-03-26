function playGuessingGame(numToGuess, totalGuesses = 10) {
  let userGuess;
  let numberOfTrys = 0
  let promptLabel = "Enter a number between 1 and 100."

  do {
    userGuess = prompt(promptLabel)
    if (userGuess === null) {
      return 0 
    }
    let userGuessNumber = parseInt(userGuess)
    if(userGuessNumber === numToGuess) {
      numberOfTrys++
      return numberOfTrys
    } else if(userGuessNumber < numToGuess) {
      promptLabel = `${userGuess} is too small. Guess a larger number.`
      numberOfTrys++
    } else if (userGuessNumber > numToGuess) {
      promptLabel = `${userGuess} is too large. Guess a smaller number.`
      numberOfTrys++
    } else if (userGuessNumber === "" || isNaN(userGuess)) {
      promptLabel = "Please enter a number."
      
    }
    // console.log(`user guess ${userGuess} - ${isNaN(userGuess)}`)
  } while(
    userGuess < 1       || 
    userGuess > 100     || 
    numberOfTrys === "" || 
    isNaN(userGuess)    ||
    numberOfTrys < totalGuesses 
  )
  // console.log(`numberOfTrys - ${numberOfTrys} \ntotalGuesses - ${totalGuesses}`)
  return 0 
}
