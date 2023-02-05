import * as util from "./utility";

let Sudoku = [
  [8, 6, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 0, 5, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 0, 8, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 3, 0, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 7, 5, 0, 9, 0, 0, 0],
];

function isChangeable(id) {
  let idnumber = 0;
  for (let i = 0; i < id.length; i++) {
    if (id[i] >= "0" && id[i] <= "9") {
      idnumber = idnumber * 10 + Number(id[i]);
    }
  }
  let x = Math.floor(idnumber / 9);
  let y = idnumber % 9;
  // console.log(x, y);
  // console.log(idnumber);
  if (Sudoku[x][y] === 0) return true;
  return false;
}

function App() {
  let CurrIdNumber = 0;
  let selected = "NONE";

  let select = function (e) {
    let defaultcolor = "#68BBE3";
    util.changeBGColor(selected, defaultcolor);
    let newcolor = "#1c3447";
    selected = e.target.id;
    util.changeBGColor(selected, newcolor);
  };

  function giveNextId() {
    let nextId = "cell";
    // console.log(CurrIdNumber);
    nextId = nextId + CurrIdNumber;
    CurrIdNumber += 1;
    return nextId;
  }

  document.onkeydown = function (e) {
    console.log("key down");
    let targetId = e.target.id;
    if (
      util.isnumber(e.key) &&
      util.isValidId(targetId) &&
      isChangeable(targetId)
    )
      util.changeText(e.key, targetId);
  };

  // let Sudoku = [];
  // let row = [];
  // for (let i = 0; i < 9; i++) {
  //   row.push("");
  // }
  // for (let i = 0; i < 9; i++) {
  //   Sudoku.push(row);
  // }

  let row = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let SudokuBoard = row.map((x) => {
    let SudokuRow = row.map((y) => {
      let this_id = giveNextId();
      let this_class = "SudokuCell";
      if (!isChangeable(this_id)) this_class += " nonChangeable";
      else this_class += " Changeable";
      return (
        <button
          className={this_class}
          id={this_id}
          onClick={isChangeable(this_id) ? (selected) => select(selected) : ""}>
          {Sudoku[x][y] !== 0 ? Sudoku[x][y] : ""}
        </button>
      );
    });
    return <div className="SudokuRow">{SudokuRow}</div>;
  });

  return (
    <div className="SudokuTable">
      <div className="Title">Sudoku</div>
      {SudokuBoard}
    </div>
  );
}

export default App;
