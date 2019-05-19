const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

const piece = [
    [0,0,0],
    [1,1,1],
    [0,1,0],
];

/**
 * Draws a piece on the Board (canvas)
 * @param {*} piece the piece to be drawn
 * @param {*} offset offset of the piece (x,y)
 */
function drawPiece(piece, offset) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

const player = {
    pos: {x: 5, y: 5},
    piece: piece,
}

drawPiece(player.piece, player.pos);

