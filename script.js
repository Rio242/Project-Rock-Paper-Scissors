// 1. make random number generator function between 1 and 3 to randomize computer choice

// 2.

//3. 


//note 




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

function singleRound(playerSelection, computerSelection){
    let computerSelection = getComputerChoice(3)
    let playerSelection = prompt("Please select  rock paper or scissors")
    //user input checker
    let playerSelectionFinal = playerSelection.toLowerCase()
     
    
    // if statements for multiple round scenarios 
    if (){
        return "You lost" + computerSelection + "beats"+ playerSelectionFinal
    }

    else if(){
        return "You lost" + computerSelection + "beats"+ playerSelectionFinal
    }
    
}





// 
const playerScore = 0
const computerScore = 0 ;


function game(){
    
    for (let i=0; i<5;i++){
        singleRound()
        if 
    }
    
}