import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {
  player: number = 1;
  board: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  result: string = '';

  public setUpGame(): void {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.player = 1;
    this.result = '';
  }

  onCellClick(row: number, col: number): void {
    if (this.board[row][col] !== 0) {
      return;
    }
    this.board[row][col] = this.player;

    if (this.checkWinner(row, col)) {
      this.onWin();
      return;
    } else if (this.isTie()) {
      this.onTie();
      return;
    }

    this.player = this.player === 1 ? 2 : 1;

  }

  private isTie(): boolean {
    let isFull = true;

    this.board.forEach(val => {
      val.forEach(v => {
        if (v === 0) {
          isFull = false;
        }
      })
    });

    return isFull;
  }

  checkRow(row: number): boolean {
    return this.player === this.board[row][0] && this.player === this.board[row][1] && this.player === this.board[row][2];
  }

  checkColumn(col: number): boolean {
    return this.player === this.board[0][col] && this.player === this.board[1][col] && this.player === this.board[2][col];
  }

  checkDiagonal(): boolean {
    return (this.board[0][0] == this.player && this.board[1][1] === this.player && this.board[2][2] === this.player) || 
    (this.board[0][2] === this.player && this.board[1][1] === this.player && this.board[2][0] === this.player);
  }

  checkWinner(row: number, col: number): boolean {
    return this.checkDiagonal() || this.checkColumn(col) || this.checkRow(row);
  }

  onWin(): void {
    this.result = 'Winner is: ' + this.player;
  }

  onTie(): void {
    this.result = `It's a tie`
  }
}
