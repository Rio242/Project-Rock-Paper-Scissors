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

getComputerChoice(3)

function singleRound(playSelection, computerSelection){
    var computerSelection = getComputerChoice(3)
    const playerSelection = prompt("Please select  rock paper or scissors")
    // if statements for multiple scenarios 
    if (){
        return console.log("You lost" + computerSelection + "beats"+ playerSelection)
    }

    else if(){
        return console.log("You lost" + computerSelection + "beats"+ playerSelection)
    }
    
}
