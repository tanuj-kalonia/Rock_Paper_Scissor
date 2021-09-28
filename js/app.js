let userScore = 0; // variable for user score
let computerScore = 0;// variable for computer score
const userScore_span = document.getElementById("user-score");// gets the data from the user
const computerScore_span = document.getElementById("computer-score");// gets the data form computer
const scoreBoard_div = document.querySelector("score-board");// Get the first element in the document with class="example":
const result_p = document.querySelector(".result p")
const rock_div =  document.getElementById("r");//get the value of rock
const paper_div =  document.getElementById("p");//gets the value of paper
const scissor_div =  document.getElementById("s");//gets the value of scissor

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3); // random is method and it gives random number(floating numebr) between 0 and 3, so we will round it using math.floor method
    return choices[randomNumber];// we are returing the element of the choices array,
}
function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function wins(userChoice,computerChoice){// it prints the win starement on the page
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}, YOU wins!!🔥🔥`
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
    // here upper line will print = r beats p, which is not that readable, so we will define a function 
    // which will convert r,s and p to rock, scissor and paper respectively
}


function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} losses to ${convertToWord(computerChoice)}${smallCompWord}, You Lost!!😥😥`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}
function draw(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}, DRAW!!😶😑`
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();// stores the computer choice
    switch (userChoice + computerChoice){ // side by side for comparison
        case "rs":
        case "sp":
        case "pr":
            wins(userChoice,computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice,computerChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click', function(){
        // console.log("Hey you clicked on rock");
        game("r");// if we click on rock then rock will be selected because of the event listener
    });
    
    paper_div.addEventListener('click', function(){
        // console.log("Hey you clicked on paper");
        game("p");
    });
    
    scissor_div.addEventListener('click', function(){
        // console.log("Hey you clicked on scissor");
        game("s");
    });
}

main();