const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);
const GAME_WIDTH = 12;
const GAME_HEIGHT = 20;



const piece = [
    [0,0,0],
    [1,1,1],
    [0,1,0],
];

function createBoard(w,h){
    const board = []
    while(h--){
        board.push(new Array(w).fill(0));
    }
    return board;
}

function draw(){
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawPiece(player.piece, player.pos);
}

function collide(arena, player){
    
}

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

function merge(arena, player){
    player.piece.forEach((row, y) => {
        row.forEach((value,x) => {
            if (value !== 0){
                arena[y + player.pos.y][x + player.pos.x];
            }
        });
    });
}

function playerDrop() {
    player.pos.y++;
    dropCounter = 0;
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if(dropCounter > dropInterval) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

const board = createBoard(GAME_WIDTH, GAME_HEIGHT);

const player = {
    pos: {x: 5, y: 5},
    piece: piece,
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 65){       //A
        player.pos.x--;
    } else if(event.keyCode === 68){//D
        player.pos.x++;
    } else if(event.keyCode === 83){//S
        playerDrop();
    }
});

update();



