import * as util from "./utility";

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
  let CurrIdNumber = 1;
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

  return (
    <div className="SudokuTable">
      <div class="Title">Sudoku</div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
      <div className="SudokuRow">
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
        <button
          className="SudokuCell"
          id={giveNextId()}
          onClick={(e) => {
            select(this.state.selected, e);
          }}>
          1
        </button>
      </div>
    </div>
  );
}

export default App;
