// https://leetcode.com/problems/sudoku-solver/solutions/988304/concise-javascript-dfs-with-line-by-line-explanation/

const isValid = (x, y, ch, board) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === ch && i !== x) return false;
  }
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === ch && i !== y) return false;
  }
  x = Math.floor(x / 3) * 3;
  y = Math.floor(y / 3) * 3;
  for (let i = x; i <= x + 2; i++) {
    for (let j = y; j <= y + 2; j++) {
      if (board[i][j] === ch && (i !== x || j !== y)) return false;
    }
  }
  return true;
};

const solve = (x, y, board) => {
  if (x === 9) {
    return true;
  }
  if (y === 9) {
    return solve(x + 1, 0, board);
  }
  if (board[x][y] !== ".") {
    return solve(x, y + 1, board);
  }
  for (
    let ch = "1";
    ch <= "9";
    ch = String.fromCharCode(ch.charCodeAt(0) + 1)
  ) {
    if (isValid(x, y, ch, board)) {
      board[x][y] = ch;
      if (solve(x, y + 1, board)) return true;
      board[x][y] = ".";
    }
  }
  return false;
};

const solveSudoku = (board) => solve(0, 0, board);
const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(solveSudoku(sudokuBoard));