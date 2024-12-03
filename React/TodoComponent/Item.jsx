const Item = (props) => {
  return (
    <div className="row my-row">
      <div className="col-6 my-todo-text">{props.itemTodo.todoName}</div>
      <div className="col-4">{props.itemTodo.todoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Item;
