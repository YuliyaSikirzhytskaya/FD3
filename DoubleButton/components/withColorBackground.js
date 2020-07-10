import React from 'react';

let withColorBackground = colors => Component => props => {
  let container = <Component {...props} />
  colors.forEach(color => 
  {container = <div style={{border:"solid 20px "+ color ,padding:"10px",textAlign:"center", fontSize:"40px"}}>
    {container}
  </div>})
  return container;
  };

export {withColorBackground};