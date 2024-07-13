alert("This website is made of education purposes intended to learn development. Background image credits  https://www.pixelstalk.net/ Pattern color light blue dark wallpaper.")
let userScore = 0;
let compScore = 0;



const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const option = ["rock","paper","scissor"]
    const randInx = Math.floor(Math.random()*3)
    return option[randInx]
}

const drawGame = (userChoice) => {
    msg.innerText = `That's a draw. Both chose ${userChoice}`
    display.style.backgroundColor ="blue"
    console.log("Draw")
}
const userScoreP = document.querySelector("#user-score")
const compScoreP = document.querySelector("#comp-score")
const msg = document.querySelector("#disp-txt")
const display = document.querySelector("#dsp")

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++
        console.log("you win!")
        userScoreP.innerText = userScore
        msg.innerText = `You won, ${userChoice} beats ${compChoice}`
        display.style.backgroundColor = "green"
        
        } else{
        compScore++
        console.log("you lose")
        compScoreP.innerText = compScore
        msg.innerText = `You loose, ${compChoice} beats ${userChoice}`
        display.style.backgroundColor = "red"



    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice)
    //Generate computer choice

    if(userChoice === compChoice) {
        //the game is draw
        drawGame(userChoice)
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor or paper
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false :true;

        } else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

