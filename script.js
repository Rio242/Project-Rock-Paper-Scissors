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

function player(){
    return
}

function singleRound(playSelection, computerSelection){
    var computerSelection = getComputerChoice(3)
    const playerSelection = prompt("Please select  rock paper or scissors")
    //user input checker
    const playerSelectionFinal = playerSelection.toLowerCase()
     
    
    // if statements for multiple round scenarios 
    if (){
        return "You lost" + computerSelection + "beats"+ playerSelectionFinal
    }

    else if(){
        return "You lost" + computerSelection + "beats"+ playerSelectionFinal
    }
    
}
