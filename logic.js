class El {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w / 3;
    this.h = h / 3;
    this.state = "";
  }

  detectAndChangeState(otherX, otherY, player) {
    let click = true;
    if (
      this.x < otherX &&
      this.x + this.w > otherX &&
      this.y < otherY &&
      this.y + this.h > otherY
    ) {
      if (this.state === "" && click === true) {
        click = false;
        this.state = player;
      }
    }
  }
}

class Board {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  // setup the board
  fillBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = new El(
          (i * width) / 3,
          (j * height) / 3,
          width,
          height
        );
      }
    }
  }

  drawBoard(currentPlayer, p1, p2) {
    push();
    stroke("red");
    //    draw separation line
    line(100, 0, 100, height);
    line(200, 0, 200, height);
    line(0, 100, width, 100);
    line(0, 200, width, 200);
    pop();
    //     draw the board
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        fill("blue");
        push();
        noStroke();
        textSize(36);
        text(
          this.board[i][j].state,
          this.board[i][j].x + this.board[i][j].w / 2 - 10,
          this.board[i][j].y + this.board[i][j].h / 2 + 10
        );
        textAlign(CENTER);
        pop();
      }
    }
  }
}
