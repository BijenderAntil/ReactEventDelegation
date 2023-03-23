import React from "react";
const data ={
  id:1,
  pid:null,
  children:[{
    id:2,
  pid:1,
  children:[{id:4, pid:2, children:[{id:6, pid:4}]}]
  },
  {id:3,pid:1, children:[{id:5, pid:3}]}
  ]
  };
  
function TreeMenu({data}){
    if (!data.children) {
        return (
            <li style={{background:'red',}}>
                <a>{data.id}-{data.pid}--d</a>
            </li>
        );
    }
   
    return (
        <ul style={{ marginLeft: '1rem', }}>
            <li style={{ background:'yellow', }}>{data.id}
            {data.children.map((item) => (
                <TreeMenu data={item} />
            ))}
            </li>
        </ul>
        );
  
  
}  
export default function Nav() {
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
     
          <TreeMenu data={data}/>
       
        
       
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
