// 1. make random number generator function between 1 and 3

// 2.

//3. 





function getComputerChoice(selection){
    computerChoice = Math.ceil(Math.random()*selection)
    if (computerChoice === 1){
         return 'Rock'
    }
    else if (computerChoice === 2){
         return 'Paper'
    }
    else if (computerChoice === 3){
         return 'Scissors'
    }
   
}

console.log(getComputerChoice(3))