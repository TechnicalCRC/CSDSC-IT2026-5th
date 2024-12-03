const Input = () => {
  return (
    <>
      <div className="row my-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </>
  );
};

export default Input;
