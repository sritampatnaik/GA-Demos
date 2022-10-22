import React from "react";
import ComponentF from "./ComponentF"


function ComponentE() {

  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };
  

  return (
    <div style={style}>
      This is Component E
      <ComponentF/>
    </div>
  );
}

export default ComponentE
