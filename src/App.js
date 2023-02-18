import * as util from "./utility";
import axios from "axios";
import { React, useState, useEffect, useRef } from "react";

function App() {
  let blank_board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let initial_isChangeable = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const [SudokuBoard, setSudokuBoard] = useState(blank_board);
  const [changeable, setchangeable] = useState(initial_isChangeable);
  const selected = useRef("NONE");

  useEffect(() => {
    (() => {
      axios.get("http://localhost:4000/sudoku_board").then((res) => {
        setSudokuBoard(res.data);
        setchangeable(
          res.data.map((row) =>
            row.map((cell) => {
              return cell === 0;
            })
          )
        );
      });
    })();

    return () => {};
  }, []);

  let CurrIdNumber = 0;
  function giveNextId() {
    let nextId = "cell";
    // console.log(CurrIdNumber);
    nextId = nextId + CurrIdNumber;
    CurrIdNumber += 1;
    return nextId;
  }

  let select = function (e) {
    e.preventDefault();
    let defaultcolor = "#68BBE3";
    console.log(selected.current);
    if (selected.current !== "NONE")
      util.changeBGColor(selected.current, defaultcolor);
    let newcolor = "#91c7f2"; // what background color you want after a cell is selected.
    selected.current = e.target.id;
    util.changeBGColor(selected.current, newcolor);
  };

  let SudokuBoardDisplay = SudokuBoard.map((row, idx) => {
    let SudokuRow = row.map((cell) => {
      let this_id = giveNextId();
      let this_class = "SudokuCell";
      if (!isChangeable(this_id)) this_class += " nonChangeable";
      else this_class += " Changeable";
      return (
        <button
          className={this_class}
          id={this_id}
          key={this_id}
          onClick={isChangeable(this_id) ? select : () => {}}
          onKeyDown={isChangeable(this_id) ? handleOnKeyDown : () => {}}>
          {!isChangeable(this_id) ? cell : " "}
        </button>
      );
    });
    return (
      <div className="SudokuRow" key={idx}>
        {SudokuRow}
      </div>
    );
  });

  function extractID(id) {
    let idnumber = 0;
    for (let i = 0; i < id.length; i++) {
      if (id[i] >= "0" && id[i] <= "9") {
        idnumber = idnumber * 10 + Number(id[i]);
      }
    }
    return idnumber;
  }

  function isChangeable(id) {
    // console.log("changeable function");
    let idnumber = extractID(id);
    let x = Math.floor(idnumber / 9);
    let y = idnumber % 9;
    if (changeable[x][y] === true) return true;
    return false;
  }

  function handleOnKeyDown(e) {
    console.log("key down");
    let targetId = e.target.id;
    let idnumber = extractID(targetId);
    console.log(idnumber);
    if (
      util.isnumber(e.key) &&
      util.isValidId(targetId) &&
      isChangeable(targetId)
    ) {
      util.changeText(e.key, targetId);
      (() => {
        let x = Math.floor(idnumber / 9),
          y = Math.floor(idnumber % 9);
        let num = Number(e.key);
        setSudokuBoard((SudokuBoard) =>
          SudokuBoard.map((row, i) =>
            i === x ? row.map((el, j) => (j === y ? num : el)) : row
          )
        );
      })();
    }
  }

  return (
    <div className="SudokuTable">
      <div className="Title">Sudoku</div>
      {SudokuBoardDisplay}
    </div>
  );
}

export default App;
