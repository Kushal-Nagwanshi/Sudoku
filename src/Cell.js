// onClick={(e) => {
//   select(this.state.selected, e);
// }}
function Cell(props) {
  return (
    <>
      <button className={props.className} id={props.id}>
        {props.content}
      </button>
    </>
  );
}

export default Cell;
