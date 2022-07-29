import React, { useState } from "react";


function ToDolist(props){
  const [isDone, setIsDone] = useState(false);
function handleClick(){
  setIsDone(prevValue =>{
    return! prevValue

  });
  }

  return(
    <li style={{textDecoration: isDone ? "line-through": "none"}} onClick={handleClick} >{props.text}</li>
  )
};



export default ToDolist;