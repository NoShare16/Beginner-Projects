const comChoiceInt = () => {
    return Math.floor(Math.random()*3)+1;  
};

const rock = () => {
    const rockButton = document.querySelector(".rock")
    rockButton.addEventListener("click", (event) => {
        const playerChoice = document.querySelector(".player");
        playerChoice.innerHTML = "Player Choice: Rock";
        
        const randomNumber = comChoiceInt();
        const result = document.querySelector(".result");
        const comChoice = document.querySelector(".computer");

        if (randomNumber === 1) { comChoice.innerHTML = "Computer Choice: Rock";
        result.innerHTML = "Tie Game!";
    } else if (randomNumber === 2) {  comChoice.innerHTML = "Computer Choice: Paper";
        result.innerHTML = "You lose!";
 } else { comChoice.innerHTML = "Computer Choice: Scissors";
        result.innerHTML = "You win!";
}
    });
    
};

const paper = () => {
    const paperButton = document.querySelector(".paper")
    paperButton.addEventListener("click", (event) => {
        const playerChoice = document.querySelector(".player");
        playerChoice.innerHTML = "Player Choice: Paper";
        
        const randomNumber = comChoiceInt();
        const result = document.querySelector(".result");
        const comChoice = document.querySelector(".computer");

        if (randomNumber === 1) { comChoice.innerHTML = "Computer Choice: Rock";
        result.innerHTML = "You win!";
    } else if (randomNumber === 2) {  comChoice.innerHTML = "Computer Choice: Paper";
        result.innerHTML = "Tie Game!";
 } else { comChoice.innerHTML = "Computer Choice: Scissors";
        result.innerHTML = "You lose!";
}
    });
    
};

const scissors = () => {
    const scissorsButton = document.querySelector(".scissors")
    scissorsButton.addEventListener("click", (event) => {
        const playerChoice = document.querySelector(".player");
        playerChoice.innerHTML = "Player Choice: Scissors";
        
        const randomNumber = comChoiceInt();
        const result = document.querySelector(".result");
        const comChoice = document.querySelector(".computer");

        if (randomNumber === 1) { comChoice.innerHTML = "Computer Choice: Rock";
        result.innerHTML = "You lose!";
    } else if (randomNumber === 2) {  comChoice.innerHTML = "Computer Choice: Paper";
        result.innerHTML = "You win!";
 } else { comChoice.innerHTML = "Computer Choice: Scissors";
        result.innerHTML = "Tie Game!";
}
    });
    
};

rock();
paper();
scissors();