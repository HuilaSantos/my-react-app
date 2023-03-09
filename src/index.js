import { useState, useEffect, useRef } from "react"; 
import "./Style.css";
import ReactDOM from "react-dom/client";

function RenderList(props) {
  let handleOnChange = (e) =>{ 
    e.target.disabled = "disabled"; e.target.nextSibling.style.textDecoration = "line-through"
  };

  return <li><input type="checkbox" onChange={(e) => handleOnChange(e)}/><span>{props.text}</span></li>;
}

function List(props) {
  var listHandler = props.items.map((item, index) => {
    return <RenderList text={item.text} key={index}/>
  }); 
  
  return (
    <ul>
      {listHandler}
    </ul>
  );
}


function ToDoInput(props) {
  
  let onSubmitHandler = (e) => {
    e.preventDefault();
    
    if(document.getElementById("input").value === ""){ 
      document.getElementById("alert").style.display = "inline";

    } else { 
      listItems.push(props.task);
      document.getElementById("input").value = "";
      document.getElementById("alert").style.display = "none"

      root.render(<ToDoListContainer items={listItems}/>)
    }
  }
  
  return (
    <>
    <form onSubmit={(event) => {onSubmitHandler(event)}}>
      <label>
        Add a task: <input type="text" id="input" onChange={
        (e) => props.setTask({text: e.target.value})}/>
        <input type="submit" value="Create task"/>
      </label> <span id="alert">Add your task first!</span>
    </form>
    </>
  );
}

function ToDoListContainer(props) {
  const [task, setTask] = useState({}); 
  
  return (
    <>
      <ToDoInput task={task} setTask={setTask}/> 
      <List items={props.items} />
    </>
  );
}

const listItems = [
  //values for testing
  /*{ id: 1, text: "Buy Milk" }, 
  { id: 2, text: "Walk the dog" },
  { id: 3, text: "Finish the homework" }*/
];

//let i = 0; // created this variable so I could set different ids to the list items

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoListContainer items={listItems}/>);
