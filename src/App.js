import * as util from "./utility";
import Cell from "./Cell";

let Changeable = [];

for (let i = 0; i < 81; i++) {
  Changeable.push(true);
}

function isChangeable(id) {
  let idnumber = 0;
  for (let i = 0; i < id.length; i++) {
    if (id[i] >= "0" && id[i] <= "9") {
      idnumber = idnumber * 10 + Number(id[i]);
    }
  }
  console.log(idnumber);
  if (Changeable[idnumber]) return true;
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
  let row = [];
  for (let i = 0; i < 9; i++) {
    row.push(i);
  }

  let SudokuBoard = row.map((x) => {
    let SudokuRow = row.map((y) => {
      return (
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(selected) => select(selected)}></button>
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
