const Item2 = () => {
  let TodoName = "Project 1";
  let TodoDate = "27-11-2024";

  return (
    <div className="row my-row">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Item2;
