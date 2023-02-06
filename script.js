// 1. make random number generator function between 1 and 3 to randomize computer choice

// 2. Create function to exexuate a round and returns results 

//3. Use results from round in game function that allows function to keep score 


//note 



// 
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



//function playerSelection(){
    
 //   return
//}

function singleRound(playerSelection, computerSelection){
    
    //user input checker
    let playerSelectionLower = playerSelection.toLowerCase()
    let firstLetter = playerSelection.slice(0,1) 

    playerSelection = firstLetter + playerSelectionLower.slice(1)
    
    // if statements for multiple round scenarios 
    if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        return "You lost" + computerSelection + "beats"+ playerSelection
    }

    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return "You won" + computerSelection + "losses to"+ playerSelection
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return "You lost" + computerSelection + "beats"+ playerSelection
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return "You won" + computerSelection + "loses to"+ playerSelection
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return "You lost" + computerSelection + "beats"+ playerSelection
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return "You won" + computerSelection + "losses"+ playerSelection
    }
    else
        return "Try again"
}

//Declare computer and user choices
const computerSelection = getComputerChoice(3)
const playerSelection = prompt("Please select  rock paper or scissors")



// Score tally
const playerScore = 0
const computerScore = 0 ;


function game(){
    
    for (let i=0; i<5;i++){
        singleRound('Rock', getComputerChoice(3))
        if 
    }
    
}

