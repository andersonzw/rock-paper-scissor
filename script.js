function getComputerChoice() {
    let choices = ['rock','paper','scissor'];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];

}



const rock = document.querySelector("#rock")
const scissor = document.querySelector('#scissor')
const paper = document.querySelector('#paper')
const score = document.querySelector("#score")

const options = document.querySelector(".options")
const body = document.querySelector("body")


let computerResult = document.createElement("div")
computerResult.setAttribute("id","resultBox")
computerResult.textContent =""
body.appendChild(computerResult)


options.addEventListener("mouseover", e => {
    let hover = e.target
})

let count = 0
options.addEventListener("click", e => {
    let playerSelection = e.target.id
    let computerSelection = getComputerChoice()
    displayResults(computerSelection)
    let result = gamePlay(playerSelection, computerSelection)
    if (result === "win") {
        count++
    }
    score.textContent = count

})




function gamePlay(player, computer){
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


function displayResults(computer) {
    
    computerResult.textContent = `Computer selected ${computer}`
    
}




