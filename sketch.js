let board;
let player1;
let player2;
let player;
let h1;
let start = false;

function setup() {
  createCanvas(300, 300);
  player1 = "X";
  player2 = "0";
  currentPlayer = player1;
  h2 = document.querySelector("h2");
  button = document.querySelector("button");

  button.addEventListener("click", startGame);

  function startGame() {
    h2.innerText = "Inizia giocatore 1";
    button.innerText = "Ricomincia da capo";
    start = true;
    board = new Board(width, height);

    currentPlayer = player1;
    board.fillBoard();
    loop();
  }
}

function draw() {
  background(255);

  if (start) {
    board.drawBoard(currentPlayer, player1, player2);
  
      
    if (
      board.board[0][0].state !== "" &&
      board.board[0][0].state == board.board[1][0].state &&
      board.board[1][0].state == board.board[2][0].state
    ) {
      orizzLinea1();
      winner();
    }
    if (
      board.board[0][1].state !== "" &&
      board.board[0][1].state == board.board[1][1].state &&
      board.board[1][1].state == board.board[2][1].state
    ) {
      orizzLinea2();
      winner();
    }
    if (
      board.board[0][2].state !== "" &&
      board.board[0][2].state == board.board[1][2].state &&
      board.board[1][2].state == board.board[2][2].state
    ) {
      orizzLinea3();
      winner();
    }
    if (
      board.board[0][0].state !== "" &&
      board.board[0][0].state == board.board[0][1].state &&
      board.board[0][1].state == board.board[0][2].state
    ) {
      verticale1();
      winner();
    }
    if (
      board.board[1][0].state !== "" &&
      board.board[1][0].state == board.board[1][1].state &&
      board.board[1][1].state == board.board[1][2].state
    ) {
      verticale2();
      winner();
    }
    if (
      board.board[2][2].state !== "" &&
      board.board[2][2].state == board.board[2][1].state &&
      board.board[2][1].state == board.board[2][0].state
    ) {
      verticale3();
      winner();
    }
    if (
      board.board[0][0].state !== "" &&
      board.board[0][0].state == board.board[1][1].state &&
      board.board[1][1].state == board.board[2][2].state
    ) {
      diagonale1();
      winner();
    }
    if (
      board.board[0][2].state !== "" &&
      board.board[0][2].state == board.board[1][1].state &&
      board.board[1][1].state == board.board[2][0].state
    ) {
      diagonale2();
      winner();
    }
  }
}

function mousePressed(e) {
  if (e.target.id === "defaultCanvas0") {
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board.length; j++) {
        board.board[i][j].detectAndChangeState(mouseX, mouseY, currentPlayer);
      }
    }
    if (currentPlayer !== null) {
      if (currentPlayer === player1) {
        h2.innerText = "e il turno del giocatore 2";
        currentPlayer = player2;
      } else {
        h2.innerText = "e il turno del giocatore 1";
        currentPlayer = player1;
      }
    }
  }
}

function orizzLinea1() {
  line(
    board.board[0][0].x,
    board.board[0][0].y + board.board[0][0].h / 2,
    board.board[2][0].x + board.board[2][0].w,
    board.board[2][0].y + board.board[2][0].w / 2
  );
}
function orizzLinea2() {
  line(
    board.board[0][1].x,
    board.board[0][1].y + board.board[0][1].h / 2,
    board.board[2][1].x + board.board[2][1].w,
    board.board[2][1].y + board.board[2][1].h / 2
  );
}
function orizzLinea3() {
  line(
    board.board[0][2].x,
    board.board[0][2].y + board.board[0][2].h / 2,
    board.board[2][2].x + board.board[2][2].w,
    board.board[2][2].y + board.board[2][2].h / 2
  );
}
function verticale1() {
  line(
    board.board[0][0].x + board.board[0][0].h / 2,
    board.board[0][0].y,
    board.board[0][2].x + board.board[0][2].w / 2,
    board.board[0][2].y + board.board[0][2].h
  );
}
function verticale2() {
  line(
    board.board[1][0].x + board.board[1][0].h / 2,
    board.board[1][0].y,
    board.board[1][2].x + board.board[1][2].w / 2,
    board.board[1][2].y + board.board[1][2].h
  );
}
function verticale3() {
  line(
    board.board[2][0].x + board.board[2][0].h / 2,
    board.board[2][0].y,
    board.board[2][2].x + board.board[2][2].w / 2,
    board.board[2][2].y + board.board[2][2].h
  );
}
function diagonale1() {
  line(
    board.board[0][0].x,
    board.board[0][0].y,
    board.board[2][2].x + board.board[2][2].w,
    board.board[2][2].y + board.board[2][2].h
  );
}
function diagonale2() {
  line(
    board.board[2][0].x + board.board[0][2].w,
    board.board[2][0].y,
    board.board[0][2].x,
    board.board[0][2].y + board.board[0][2].w
  );
}

function winner() {
  noLoop();
  if (currentPlayer === player1) {
    h1.innerText = "vince giocatore 2";
    currentPlayer = player2;
  } else {
    h1.innerText = "vince giocatore 1";
    currentPlayer = player1;
  }
  currentPlayer = null;
}
