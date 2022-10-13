
// create a program that guesses a number from 1 to 10
// then asks us to guess that number.
// if it is higher say "too high" and ask again
// if it lower, say "too low" and ask again
// if it's the right number, say congratulations and exit

import readline from "readline-sync"

let userGuessedRight = false

// while(true) {
    let NumberChosen = Math.ceil(Math.random() * 10) //guess a number from 1-10
    // console.log(NumberChosen)

while(!userGuessedRight) {
    let guess = readline.question("What is your guess?")
    if (guess == NumberChosen) {
        console.log("Congratulations")
        userGuessedRight = true
    } else if (guess > NumberChosen) {
        console.log("Your guess is too high") 
    } else if (guess < NumberChosen) {
        console.log("Your guess is too low")
    }
    //console.log(guess)
}

// }

// let NumberChosen = Math.ceil(Math.random() * 10)
// console.log(NumberChosen)

// while(!userGuessedRight) {
//     console.log("What is your guess?")
// }
