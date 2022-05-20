const cells = document.querySelectorAll('.cell');
const restartBtn = document.querySelector('#restartBtn')
const winnerMsg = document.querySelector('.winnerMsg')

restartBtn.addEventListener('click',function(){
    window.location.reload();
    return false;
  });
  
function cellClicked(e) {
    //  console.log(countXMove())
    //  console.log(countOMove());
     if(countXMove()==countOMove() && this.innerText == ""){
        this.innerText = "X";
        findWinner();
        isDraw();
     } else if (countXMove() - countOMove() == 1 && this.innerText == ""){
        this.innerText = "O";
        findWinner();
        isDraw();
     }
}

cells.forEach(cell => cell.addEventListener('click',cellClicked));


const cell1 = document.querySelector('[data-cell-index="1"]')
const cell2 = document.querySelector('[data-cell-index="2"]')
const cell3 = document.querySelector('[data-cell-index="3"]')
const cell4 = document.querySelector('[data-cell-index="4"]')
const cell5 = document.querySelector('[data-cell-index="5"]')
const cell6 = document.querySelector('[data-cell-index="6"]')
const cell7 = document.querySelector('[data-cell-index="7"]')
const cell8 = document.querySelector('[data-cell-index="8"]')
const cell9 = document.querySelector('[data-cell-index="9"]')

const winPattern = [
    [cell1,cell2,cell3],
    [cell4,cell5,cell6],
    [cell7,cell8,cell9],
    [cell1,cell4,cell7],
    [cell2,cell5,cell8],
    [cell3,cell6,cell9],
    [cell1,cell5,cell9],
    [cell3,cell5,cell7],
]

function countXMove(){
    let Xnumber = 0
    cells.forEach(cell=> {
        if(cell.innerText == "X"){
            Xnumber++;
        }
    })
    return Xnumber;
}

function countOMove(){
    let Onumber = 0
    cells.forEach(cell=> {
        if(cell.innerText == "O"){
            Onumber++;
        }
    })
    return Onumber;
}

function findWinner(){
    winPattern.forEach(arr=> {
        if(arr[0].innerText == "X" && arr[1].innerText == arr[0].innerText && arr[2].innerText == arr[0].innerText ){
            // arr.every(cell=> cell.innerText == arr[0].innerText)
            winnerMsg.innerText = "Player X wins!";
        }
        if(arr[0].innerText == "O" && arr[1].innerText == arr[0].innerText && arr[2].innerText == arr[0].innerText ){
            winnerMsg.innerText = "Player O wins!";
        }
    })

}


function isDraw() {
    if([...cells].every(cell=>cell.innerText !== "") && winnerMsg.innerText == ""){
        winnerMsg.innerText = "It's a draw.";
    }
}    