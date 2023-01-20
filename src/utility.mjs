export function changeColor(color = "blue", elementId) {
  const x = document.getElementById(elementId);
  if (x.style.color !== color) x.style.color = color;
  else x.style.color = "blue";
}

export function changeBGColor(elementId, color) {
  if (elementId === "NONE") return;
  const x = document.getElementById(elementId);
  x.style.backgroundColor = color;
}

export function select(selected, ele) {
  let defaultcolor = "blue";
  console.log("this is selected : ");
  console.log(ele);
  console.log(selected);
  console.log(ele.target.id);
  changeBGColor(selected, defaultcolor);
  let newcolor = "#f34";
  selected = ele.target.id;
  console.log(selected);
  changeBGColor(selected, newcolor);

  console.log(selected);
}

export function changeText(newtext, selected) {
  if (selected === "NONE") return;
  const x = document.getElementById(selected);
  console.log(x.innerHTML);
  console.log(x.id);
  x.innerHTML = newtext;
}

export function isnumber(c) {
  return c >= "1" && c <= "9";
}

export function isValidId(id) {
  if (id === null) return false;
  if (id.length < 4) return false;
  if (id[0] !== "c") return false;
  if (id[1] !== "e") return false;
  if (id[2] !== "l") return false;
  if (id[3] !== "l") return false;
  return true;
}
