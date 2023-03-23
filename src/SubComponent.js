import { memo } from "react";

 function  SubComponet(){
    console.log("test"+Math.random(0,100));
    return (<h2>this is sub component</h2>)
}

export default memo(SubComponet);