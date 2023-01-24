// onClick={(e) => {
//   select(this.state.selected, e);
// }}
function Cell(props) {
  return (
    <>
      <button className={props.className} id={props.id} onClick={props.onClick}>
        {props.content}
      </button>
    </>
  );
}

export default Cell;
