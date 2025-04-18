let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let turn = true ;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        resetBtn.classList.remove("hidebtn");
        if(turn === true){
            box.innerText = "0";
            turn = false; 
        }else{
            box.innerText = "X";
            turn = true ;
        }
        box.disabled = true ;
        checkWinner();
    });
});
const disableboxes = () => {
  for(let box of boxes)
  {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for(let box of boxes)
  {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner= (winner) =>{
  msg.innerText = `congratulations!!!, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for(let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText ;
    let pos2 = boxes[pattern[1]].innerText ;
    let pos3 = boxes[pattern[2]].innerText ;

    if(pos1 !="" && pos2 !="" && pos3 !="")
     {
       if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            resetBtn.classList.add("hidebtn");
        }        
  }
}
};

const resetGame = () => {
    turn = true ;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgame.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
    


