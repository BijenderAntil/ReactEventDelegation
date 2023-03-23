import React from "react";
import Bar from "./Bar";
/*
label: "First Name"

inputType: "Text"

validations: "Required"

visible: true

value: ""
*/
export default (props) => {
  const [isHiddenShow, setIsHiddenShow] = React.useState(false);
  const [state, setState] = React.useState();
  const addMoreInfo = (e) => {
    e.preventDefault();
    setIsHiddenShow(true);
    console.log("form=>", state);
    let result ={content: {body: []}};
     result.content.body = props.fdata.content.body.map((b,k)=>{
      if(k==1){
         b.submitedFormData=state;
         return b;  
      }
      else{
         return b;
      }
     
    });
    console.log('sd1=>', result);
    let dataS = props.fdata.content.body.push(state);
    
    props.setfData(result);
  };
  //console.log('sd=>', setfData);
  const handleData = (e) => {
    
   
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="foo">
      <hr />
      Hi I'm a Foo component with the headline:
      <h2>{props.block.headline}</h2>
      <form>
        {props.block.formFields &&
          Object.values(props.block.formFields).map((formData) => {
            if (formData.visible === true || isHiddenShow === true) {
              return (
                <>
                  <div style={{marginTop:'10px',width:'100%'}}>
                  <label style={{width:'50%'}}>{formData.label} </label>
                  <input style={{width:'50%',float:'right'}}
                    type={formData.inputType}
                    name={formData.label}
                    onChange={(e) => handleData(e)}
                    required={formData.validations == "Required" ? true : false}
                  />
                  </div>
                </>
              );
            }
          })}
        <button style={{marginTop:'10px',marginLeft:'40%'}}onClick={addMoreInfo}>Add More Information</button>
      </form>
    </div>
  );
};
