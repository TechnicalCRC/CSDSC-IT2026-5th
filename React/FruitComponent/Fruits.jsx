import { useState } from "react";
import ItemFruit from "./ItemFruit";

export default function Fruits() {
  //let list = ['Apple','Banana','Orange','Lichi','Melon','Peach']

  // object contain state and behavior
  let [list, setList] = useState(["Berry", "Orange"]);

  let [newData, setNewData] = useState();

  let handleOnChange = () => {
    setNewData(event.target.value);
    // if (event.key == "Enter") {
    //   let newFruit = event.target.value;
    //   newFruit = [...list,newFruit];
    //   setList(newFruit)
    //   console.log(newFruit);
    // }
  };

  let handleOnClick = () => {
    let newFruit = [...list, newData];
    setList(newFruit);
  };

  return (
    <>
      <h1>Fruit List</h1>
      <input
        type="text"
        className="w-50 m-2 mx-5"
        onChange={handleOnChange}
        value={newData}
      />

      <button
        className="w-25 btn btn-success fw-bold"
        style={{}}
        onClick={handleOnClick}
      >
        Add Fruit to List
      </button>

      <ol className="list-group">
        {list.map((item) => (
          <ItemFruit key={item} Item={item}></ItemFruit>
        ))}
      </ol>
    </>
  );
}
