import Board from './Data.js';
import ViewManager  from './View.js';

let view = new ViewManager();
let board = new Board();
let turnOfPlayer = "blue"; // blue or red
let gameOver = false;

function restartGame(){
    board = new Board();
    turnOfPlayer = "blue";
    gameOver = false;
    view.clearBoard();
    view.hideWinModal();
    view.updateTurnIndicator(turnOfPlayer);
}

function onClick(event){
    if(gameOver) return;

    //get col and row of clicked cell
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    const verticalRow = board.rows[row].cells[col].getVerticalRow(board);

    //check if can play
    if(verticalRow.isFull()) {
        return;
    }

    //play - change view & data
    let emptyCell = verticalRow.getTheLastEmptyCell();
    view.onClick(emptyCell.row,emptyCell.col,turnOfPlayer);
    board.rows[emptyCell.row].cells[emptyCell.col].value = turnOfPlayer;

    //check if a player won
    let winner = CheckForAWinner();
    if(winner == "red" || winner == "blue"){
        gameOver = true;
        view.showWinModal(winner);
        return;
    }

    //change a player
    if(turnOfPlayer=="blue") turnOfPlayer = "red";
    else turnOfPlayer = "blue";
    view.updateTurnIndicator(turnOfPlayer);
}

function CheckForAWinner(){
    let currentRow = 0; 
    let currentCol = 0;

    for(let r = 0 ; r < 6 ; r ++ ){
        for(let c = 0 ; c < 7 ; c ++ ){
            let currentCell = board.rows[r].cells[c];

            //the if is always check this the test wont get out of board
            let testedRow;

            //check bottom right
            if(r < 3 && c < 4){
                testedRow = currentCell.getBottomRight(board,4);
                if(testedRow.isVictoryRow())
                    return currentCell.value;
            }
            //check right
            if(c < 4){
                testedRow = currentCell.getRight(board,4);
                if(testedRow.isVictoryRow())
                    return currentCell.value;
            }
            //check bottom
            if(r < 3){
                testedRow = currentCell.getBottom(board,4);
                if(testedRow.isVictoryRow())
                    return currentCell.value;
            }

            //check bottom left
            if(r < 3 && c > 2){
                testedRow = currentCell.getBottomLeft(board,4);
                if(testedRow.isVictoryRow())
                    return currentCell.value;
            }
        }
    }

    return "no winner";
}

window.onload  = () => {
    view.createBoard(onClick);
    view.updateTurnIndicator(turnOfPlayer);
    document.getElementById('modalBtn').addEventListener('click', restartGame);
}
