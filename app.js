
const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#message");
let resetBtn = document.querySelector("#btn");




let turnO = true;
let count = 0;

const winPattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],];


const resetGame = () => {
    turnO = true;
    count= 0;
    msg.innerText= "Play Your Move!!";
    enableBoxes();
};

choices.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = "Game was a Draw!!";
    disableBoxes();
    
};
const disableBoxes = () => {
    for(let box of choices) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of choices) {
        box.disabled = false;
        box.innerText ="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val = choices[pattern[0]].innerText;
        let pos2Val = choices[pattern[1]].innerText;
        let pos3Val = choices[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
