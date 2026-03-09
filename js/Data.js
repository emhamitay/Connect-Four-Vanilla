class Cell {
    constructor(row,col){
        this.value = "empty"; //"empty", "red", "blue"
        this.row = row;
        this.col = col;
    }

    //functions
     // New function to get a direction array of cells
     getCellsInDirection(boardMode, direction, length = 1) {
        let requestedRow = new Row();
        requestedRow.push(boardMode.rows[this.row].cells[this.col]);
        let currentRow = this.row;
        let currentCol = this.col;

        /*the length is - 1 becouse the cilent request the length of the row with the first
        column for example click on column 0 and request line of 3
        we aleardy inserted the first column and there is left 2 more
        for that we need - 1 */
        for (let i = 0; i < length - 1 ; i++) {
            // Update the row and column based on the direction
            if (direction === 'top') {
                currentRow--;
            } else if (direction === 'topLeft') {
                currentRow--;
                currentCol--;
            } else if (direction === 'left') {
                currentCol--;
            } else if (direction === 'bottomLeft') {
                currentRow++;
                currentCol--;
            } else if (direction === 'bottom') {
                currentRow++;
            } else if (direction === 'bottomRight') {
                currentRow++;
                currentCol++;
            } else if (direction === 'right') {
                currentCol++;
            } else if (direction === 'topRight') {
                currentRow--;
                currentCol++;
            }

            // Check if the current position is out of bounds
            if (currentRow < 0 || currentRow >= 6 || currentCol < 0 || currentCol >= 7) {
                break; // Stop if out of bounds
            }

            // Push the cell at the new position into the array
            requestedRow.push(boardMode.rows[currentRow].cells[currentCol]);
        }

        //return a cell if was not requested a length
        if(length != 1)
            return requestedRow;
        else 
            return requestedRow[1];
    }

    // Convenience functions to get cells in each direction
    getTop(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'top', length);
    }

    getTopLeft(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'topLeft', length);
    }

    getLeft(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'left', length);
    }

    getBottomLeft(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'bottomLeft', length);
    }

    getBottom(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'bottom', length);
    }

    getBottomRight(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'bottomRight', length);
    }

    getRight(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'right', length);
    }

    getTopRight(boardMode, length = 1) {
        return this.getCellsInDirection(boardMode, 'topRight', length);
    }

    getVerticalRow(boardMode){
        let requestedRow = new Row();
        for(let r = 0 ; r < 6 ; r ++){
            requestedRow.push(boardMode.rows[r].cells[this.col]);
        }
        return requestedRow;
    }
}

class Row{
    constructor(){
        this.cells = [];
    }
    push(cell){
        this.cells.push(cell);
    }
    isVictoryRow(){
        if(this.cells.length != 4) return false;

        let firstColor = this.cells[0].value;
        if(firstColor == "empty") return false;

        /*
        this is what i write and below that is what the ai write
        for(let c = 0 ; c < 4 ; c ++){
            if(this.cells[c].value != firstColor) 
                return false;
        }
        return true;
        */
        return this.cells.every(cell => cell.value === firstColor);

    }
    isFull(){
        if(this.cells.length != 6) {
            console.log("this is not a vertical row");
            return false;
        }
        for(let i = 0 ; i < 6 ; i ++){
            if(this.cells[i].value == "empty") return false;
        }
        return true;
    }
    getTheLastEmptyCell(){
        for(let r = 5; r >= 0 ; r --){
            if(this.cells[r].value == "empty") return this.cells[r];
        }
    }
}

export default class Board{
    constructor(){
        this.rows = [];
        for(let r = 0 ; r < 6 ; r++){
            let row = new Row();
            for(let c = 0 ; c < 7 ; c++){
                let cell = new Cell(r,c);
                row.push(cell);
            }
            this.rows.push(row);
        }
    }
}