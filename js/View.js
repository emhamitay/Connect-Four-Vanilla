export default class ViewManager{
    constructor(){}
    onClick(row,col,player){
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add(player);
            cell.classList.add('drop-animation');
        }
    }
    updateTurnIndicator(player){
        const dot = document.querySelector('.turn-dot');
        const text = document.getElementById('turnText');
        dot.classList.remove('blue-dot', 'red-dot');
        dot.classList.add(player === 'blue' ? 'blue-dot' : 'red-dot');
        text.textContent = `${player[0].toUpperCase() + player.slice(1)}'s turn`;
    }
    showWinModal(winner){
        const overlay = document.getElementById('winOverlay');
        const title = document.getElementById('modalTitle');
        const icon = document.getElementById('modalIcon');
        title.textContent = `${winner[0].toUpperCase() + winner.slice(1)} player wins!`;
        icon.textContent = winner === 'red' ? '🔴' : '🔵';
        overlay.classList.add('visible');
    }
    hideWinModal(){
        document.getElementById('winOverlay').classList.remove('visible');
    }
    clearBoard(){
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('red', 'blue', 'drop-animation', 'red-hovered', 'blue-hovered', 'column-hovered');
        });
    }
    createBoard(onclick){
        const ROWS = 6;
        const COLS = 7;
        const boardElement = document.getElementById('gameBoard');
        function createBoard() {
          for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('mouseenter', handleMouseEnter);
                cell.addEventListener('mouseleave', handleMouseLeave);
                cell.addEventListener('click', onclick);
                boardElement.appendChild(cell);
            }
          }
        }
        createBoard();
        // Handle mouse enter on column to add the hover effect
        function handleMouseEnter(event) {
            const col = event.target.dataset.col;
            const cellsInColumn = document.querySelectorAll(`[data-col="${col}"]`);
            cellsInColumn.forEach(cell => {
                let didColorChange = false;
                if(cell.classList.contains("red")) changeHover("red-hovered");
                if(cell.classList.contains("blue")) changeHover("blue-hovered");
                if(!didColorChange) changeHover('column-hovered');
                function changeHover(changeTo){
                    cell.classList.add(changeTo);
                    didColorChange = true;
                }
            });
       }
        
        // Handle mouse leave to remove the hover effect
        function handleMouseLeave(event) {
            const col = event.target.dataset.col;
            const cellsInColumn = document.querySelectorAll(`[data-col="${col}"]`);
            cellsInColumn.forEach(cell => {
                cell.classList.remove('column-hovered');
                cell.classList.remove('blue-hovered');
                cell.classList.remove('red-hovered');
            });
        }
    }
}
