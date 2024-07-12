alert("This website is made of education purposes intended to learn development. Background image credits  https://www.pixelstalk.net/ Pattern color light blue dark wallpaper.")
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const option = ["rock","paper","scissor"]
    const randInx = Math.floor(Math.random()*3)
    return option[randInx]
}

const drawGame = () => {
    console.log("Draw")
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice)
    //Generate computer choice

    if(userChoice === compChoice) {
        //the game is draw
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor or paper
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;

        }
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})