

const choises = ["rock" , "paper" , "Scissor"];

const player = document.getElementById("player")
const comp = document.getElementById("computer")
const resultdisplay = document.getElementById("result")

const playerScore = document.getElementById("playerScore") ;
const CompScore = document.getElementById("CompScore") ;
let Pscore =0 ;
let Cscore =0 ;

function Play (choise) {
    const compChoise = choises[ Math.floor (Math.random() *3 )] ; 
    let result = "" ;
    if (choise === compChoise) {
        result = "IT's A TIE"
    }

    else {
        switch (choise) {
            case "rock" : 
               result  =  (compChoise === "Scissor") ?  "You Win" : "You Lose" ;
               break ;
            case "paper" : 
               result  =  (compChoise === "rock") ?  "You Win" : "You Lose" ;
               break ;
            case "Scissor" : 
               result  =  (compChoise === "paper") ?  "You Win" : "You Lose" ;
               break ;
            
        }
    }

    player.textContent =`PLAYER : ${choise}` ;
    comp.textContent = `COMPUTER : ${compChoise}` ;
    resultdisplay.textContent = result ;
    switch (result) {
        case "You Win" : 
            resultdisplay.classList.remove("yellow");
            resultdisplay.classList.remove("red");
            resultdisplay.classList.add("green");
            Pscore++;
            playerScore.textContent = Pscore ;
            break ;
        case "You Lose" : 
            resultdisplay.classList.remove("yellow");
            resultdisplay.classList.remove("green");
            resultdisplay.classList.add("red");
            Cscore++;
            CompScore.textContent = Cscore ;
            break ;
        case "IT's A TIE" :
            resultdisplay.classList.add("yellow");
            break ;
     }
     
}

