let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector(".winner");
let turnO = true;
let count = 0;

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

box.forEach((ele) => {
    ele.addEventListener("click",()=>{
        console.log("Box was Clicked.");
        if(turnO){
            ele.innerText="O";
            turnO = false;
        }
        else{
            ele.innerText="X";
            turnO = true;
        }
        ele.disabled = true;  
        count++;
        let isWinner = checkWinner();  
        if(count == 9 && !isWinner ){
            gameDraw();
        }    
    })
});

const gameDraw= () => {
    msg.innerText = "Game Draw! Try Again.";
    msgContainer.classList.remove("hide");
    diasbleAllBoxes();
}

const showWinner = (winner) => {
    msg.innerText = "Congratulations! "+winner+" is the Winner.";
    msgContainer.classList.remove("hide");
    diasbleAllBoxes();

}
const checkWinner = () => {
    for(pat of winningCombinations){
        // console.log(pat[0],pat[1],pat[2]);
        // console.log(box[pat[0]].innerText,box[pat[1]].innerText,box[pat[2]].innerText);
        let pos1 = box[pat[0]].innerText;
        let pos2 = box[pat[1]].innerText;
        let pos3 = box[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos2!=""){
            if(pos1 == pos2 && pos2 == pos3){
                // console.log(pos1+" is the Winner.");
                showWinner(pos1);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    count = 0;

    enableAllBoxes();
    msgContainer.classList.add("hide");
}

const diasbleAllBoxes = () => {
    for(let b of box){
        b.disabled = true;
    }
}
const enableAllBoxes = () => {
    for(let b of box){
        b.disabled = false;
        b.innerText = "";
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);