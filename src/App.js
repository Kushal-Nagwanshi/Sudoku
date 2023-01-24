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

  function select(selected, ele) {
    let defaultcolor = "blue";
    console.log("this is selected : ");
    console.log(ele);
    console.log(selected);
    console.log(ele.target.id);
    util.changeBGColor(selected, defaultcolor);
    let newcolor = "#f34";
    selected = ele.target.id;
    console.log(selected);
    util.changeBGColor(selected, newcolor);

    console.log(selected);
  }

  function giveNextId() {
    let nextId = "cell";
    console.log(CurrIdNumber);
    nextId = nextId + CurrIdNumber;
    CurrIdNumber += 1;
    return nextId;
  }

  document.onkeydown = function (e) {
    console.log("key down");
    console.log(e);
    console.log(e.key);
    console.log(selected);
    let targetId = e.target.id;
    if (util.isValidId(targetId)) console.log("Valid");
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
      return <Cell className="SudokuCell" id={giveNextId()}></Cell>;
    });
    return <div className="SudokuRow">{SudokuRow}</div>;
  });

  return (
    <div className="SudokuTable">
      <div class="Title">Sudoku</div>
      {SudokuBoard}
    </div>
  );
}

export default App;
