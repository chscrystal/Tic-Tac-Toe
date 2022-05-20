const cells = document.querySelectorAll('.cell');
const restartBtn = document.querySelector('#restartBtn')
const winnerMsg = document.querySelector('.winnerMsg')

const player_X = "X";
const player_O = "O";
const gameStatus = ['','','','','','','','','']
let gameActive = true;
let currentPlayer = player_X;

cells.forEach(cell => cell.addEventListener('click',cellClicked));

restartBtn.addEventListener('click',function(){
    window.location.reload();
    return false;
  });
  
function cellClicked(e) {
    const id = e.target.id;
    if(gameStatus[id]==""){
        gameStatus[id]=currentPlayer;
        e.target.innerText = currentPlayer;
    }

    findWinner();
    isDraw();
    currentPlayer = currentPlayer == player_X? player_O : player_X;

    if(gameActive == false){
        cells.forEach(cell => cell.removeEventListener('click',cellClicked));
    }

}

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function findWinner(){
    winPattern.forEach(arr=>{
        if(gameStatus[arr[0]]!=="" && gameStatus[arr[1]] == gameStatus[arr[0]] && gameStatus[arr[2]] == gameStatus[arr[0]]){
            winnerMsg.innerText = `${currentPlayer} wins`;
            gameActive = false;
            return;
        }
    })
}

function isDraw() {
    if(gameStatus.every(cell=>cell !== "") && winnerMsg.innerText == ""){
        winnerMsg.innerText = "It's a draw.";
        gameActive = false;
        return;
    }
}    