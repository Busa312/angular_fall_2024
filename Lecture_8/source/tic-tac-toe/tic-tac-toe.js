let cells = document.querySelectorAll('.cell');
let player = 1;
let usedCells = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

// cells.forEach(val => {
//     console.log(val.attributes.value.nodeValue)
// })

function onTurnClick(event) {
    if (usedCells[event[0]][event[1]] !== 0) {
        return;
    }

    usedCells[event[0]][event[1]] = player;

    let cellIdx = event[0] === 0? event[1] :
        event[0] === 1 ? 3 + event[1] : 6 + event[1];


    cells.item(cellIdx).innerText = player === 1? 'X' : 'O';
    cells.item(cellIdx).className += ' player-'+ player;

    if (checkWinner()) {
        
    }

    player = player === 1? 2 : 1;
}

function checkWinner() {

}