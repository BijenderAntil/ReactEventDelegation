import React from "react";

export default (props) => {
  console.log('sd=>', props);
  return(
  
  <div className="bar">
    <hr />
    Hi I'm a Bar component with the title:
    <h2>{props.block.title}</h2>
    <ul>
      {props.block.submitedFormData && Object.values(props.block.submitedFormData).map((v)=>{
        return (<li>{v}</li>);
      })}
    </ul>
  </div>
);
  }
