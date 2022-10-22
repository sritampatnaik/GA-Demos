// import useContext Hook
import React, {useContext} from "react";
import ComponentG from "./ComponentG"



function ComponentF() {

  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };
  
  return (
    <div style={style}>
      This is Component F
      <ComponentG/>
    </div>
  );
}

export default ComponentF
