function getComputerChoice() {
    let choices = ['rock','paper','scissor'];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}





    function playerSelection(player, computer){

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            console.log("Player chooses: "+player +" Computer chooses: "+ computer+ " It's a draw!")
            return result = "draw"
    
        } else if (player === "rock" && computer === "scissor" ||
                   player === "paper" && computer === "rock" || 
                   player === "scissor" && computer === "paper" ) {
                    console.log(("Player chooses: "+player +" Computer chooses: "+ computer+ " Player wins!"))    
                    return result = "win"
    
        } else {
            console.log(("Player chooses: "+player +" Computer chooses: "+ computer+ " Computer wins!"))  
            return result = "lose"
        }
        }
    

function game(rounds) {
    let score = 0
    for (let i = 1; i <=rounds; i++){
        console.log("Round: "+i);
        playerSelection(getComputerChoice(), getComputerChoice());
        if (result === "win") {
            score++;
        }
    }
    return console.log("Final score is: "+ score)
}

game(4);