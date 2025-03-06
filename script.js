const board = Chessboard('board', {
    draggable: true,
    position: 'start',
    onDrop: handleMove
});

const game = new Chess();

function handleMove(source, target) {
    if (game.move({ from: source, to: target })) {
        board.position(game.fen());
    } else {
        return 'snapback';
    }
}

function resetGame() {
    game.reset();
    board.position('start');
