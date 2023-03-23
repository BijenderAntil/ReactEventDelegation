import { useState, useCallback, useMemo, useEffect } from "react";
import SubComponet from "./SubComponent";

import Todos from "./Todos";
/*
const Page =()=>{
    const [state, setState] = useState(0);
    const handleIncr=(e)=>{
        setState(state+1);
    }
    return(
        <div>
        <div style={{display:'flex', border:'3px solid black'}}>
            <div style={{height:'200px', width:'40%', backgroundColor:'red'}}>Red</div>
             <div style={{height:'200px', width:'40%', backgroundColor:'green'}}>Green</div>
             <div style={{height:'200px', width:'20%', backgroundColor:'blue'}}>blue</div>
        </div>
        <div style={{display:'flex', border:'3px solid black', position:'absolute'}}>
        <div style={{height:'200px', width:'40%', backgroundColor:'red'}}>Red</div>
         <div style={{height:'200px', width:'40%', backgroundColor:'green'}}>Green</div>
    </div>
    <div><span>this is state value: {state} </span>
    <input type='button' value='Save' onClick={handleIncr}></input></div>
    <SubComponet></SubComponet>
    <h1>Hello, Bijender </h1>
    </div>
    )
}*/
const Page = () => {
  const navi = navi
const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);

useEffect(()=>{
    setCount(count);
    console.log("test",Math.random());
},[count])

const increment = () => {
  setCount((c) => c + 1);
};
console.log("parrent");
const addTodo = useCallback(() => {
  //setTodos((t) => [...t, "New Todo"]);
  setTodos(["New Todo"]);
}, [todos]);
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);
return (
  <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr />
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
    </div>
  </>
);
}
export default Page;