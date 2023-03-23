[3,4,6] ---> [3,16,36]
const arr =  [3,4,6];
const new_arr = arr.map((a)=>a%2==0? Math.pow(a,2):a);
console.log(new_arr);
OR 
const squerArr=(arr)=>{
    let result =[];
    arr.map((r)=>{
        if(r%2==0)
            result.push(r*r);
        else
            result.push(r);
        
    });
    return result;
}
console.log("result=>", squerArr([3,4,6]));


var obj = {
	name: 'ABC'
};
var objNew = Object.assign({}, obj); //var objNew = JSON.parse(JSON.stringify(obj));
obj.name = 'XYZ';
console.log(objNew.name); // output??//
//ABC


var obj = {a: 1,b: 2,c: 3,z: 26};	
console.log(Object.values(obj).reduce((ic, v)=> ic+V));
//
return (<>
<h1> Hello</h1>
<table></table>

</>)


waht is box?
what is synthic event in React.
what is differnce b/w position abosolut and position rerlative



HCL Interview Question?

Q1. How to squre the even number of element in Array?
const arr = [2,3,1,5,6,8]
const output = arr.map((r)=> r%2==0? Math.pow(r,2):r);

Q2. sum of two number?
const arr = [2,3,1,5,6,8];
let result =0;
arr.forEach((r)=> result += r);
const output1 = arr.reduce((r,i)=> r+i);

Q3. What is differnce between map and foreach?
Q4. What is promise?
Q5. what is Javascript?
Ans. JavaScript is the Programming Language for the Web.
JavaScript can update and change both HTML and CSS.
JavaScript can calculate, manipulate and validate data.

import { Javascript, QrCode2 } from '@mui/icons-material';
import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const useref = React.useRef(0);
  
  const handleOnEv=()=>{
    useref.current = useref.current + 1;
    if(useref.current%5==0)
    setCount(useref.current);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <span>This is increment of count {count}</span>
      <input name='st' value={count} />
      <button onClick={handleOnEv} >Increase Count</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
