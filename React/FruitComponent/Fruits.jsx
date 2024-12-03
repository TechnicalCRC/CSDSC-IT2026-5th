import { useState } from "react";
import ItemFruit from "./ItemFruit";

export default function Fruits() {
  //let list = ['Apple','Banana','Orange','Lichi','Melon','Peach']

  // object contain state and behavior
  let [list, setList] = useState(["Berry", "Orange"]);

  let handleOnChange = () => {
    if (event.key == "Enter") {
      let newFruit = event.target.value;
      newFruit = [...list,newFruit];
      setList(newFruit)
      console.log(newFruit);
    }
  };

  return (
    <>
      <h1>Fruit List</h1>
      <input type="text" className="w-50 m-2 mx-5" onKeyDown={handleOnChange} />

      <ol className="list-group">
        {list.map((item) => (
          <ItemFruit key={item} Item={item}></ItemFruit>
        ))}
      </ol>
    </>
  );
}
