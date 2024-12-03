import AppName from "./AppName";
import Input from "./Input";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from './Item3.jsx';
import Item from './Item.jsx';

import "./Todo.css";

export default function Todo() {
   let TodoData = [
    {
      todoName : "Complete CRC Assignment",
      todoDate : "26-11-2024"
    },   
    {
      todoName : "Project 2",
      todoDate : "27-11-2024"
    },   
    {
      todoName : "After that Buy Pizza",
      todoDate : "28-11-2024"
    },   
   ];

  return (
    <>
      <center>
        <div className="container">
          <AppName appName="TODO APP"></AppName>
          <Input />
          {/* <Item1></Item1>
          <Item2></Item2>
          <Item3></Item3> */}

           {TodoData.map((todoItem)=>
             <Item key="" itemTodo={todoItem}></Item>
          )} 

        </div>
      </center>
    </>
  );
}
