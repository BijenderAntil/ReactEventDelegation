import React from "react";
import ReactDOM from "react-dom";
import Components from "./Components.js";
import "./styles.css";
/**
 * First Component Foo will Intiate Form with only visible fields
 * There will a button "Add More Information" On Click of add it will show non visible fields
 * After Submmiting There will be loader or processing text and data will be pass to second component Bar
 * Afer Bar component is able to load submmited data, there will be finalize Button on click of which it will reset Foo Form and create new state of data that is submmited.
 * In Foo Bar component there will be button load saved data that will load same form in foo with data you have submmited earlier.
 *
 **/
const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo",
        formFields: [
          {
            label: "First Name",
            inputType: "Text",
            validations: "Required",
            visible: true,
            value: ""
          },
          {
            label: "Last Name",
            inputType: "Text",
            validations: "Required",
            visible: true,
            value: ""
          },
          {
            label: "Address",
            inputType: "Text",
            validations: "Required",
            visible: false,
            value: ""
          }
        ]
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar",
        submitedFormData: []
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline"
      }
    ]
  }
};

function Test() {
  const [updateData, setupdateData] = React.useState();
  const[ fdata, setfData] = React.useState(data);
  return (
    <div className="App">
      <h1>Hello React</h1>
      {fdata.content.body.map((block) => {
       
        return Components(block, fdata, setfData);
      }
        )}
    </div>
  );
}

export default Test;
