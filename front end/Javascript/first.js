let userScore = 0
let computerScore = 0

const choices = document.querySelectorAll(".choice") //we get all divs with class choice
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const computerScorepara = document.querySelector("#computer-score")


const drawGame = () => {
    console.log("Game Drawn")
    msg.innerText = "Game Drawn!"
    msg.style.backgroundColor = "gray"

}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore
        console.log("You Win!")
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        computerScore++;
        computerScorepara.innerText = computerScore
        console.log("You Lose!")
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"

    }
}

const genComputerChoice = () =>{
    let options =["rock" , "paper" , "scissor"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const playGame=(userChoice)=>{
    console.log("User Choice = ",userChoice)
    const computerChoice = genComputerChoice();
    console.log("Computer Choice = ",computerChoice)

    if(userChoice===computerChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin = computerChoice === "scissor" ? false : true;
        }
        else
        {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);

    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});