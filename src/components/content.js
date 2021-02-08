import React from "react";

export default function MainContent({ children })  {
  return (
    // <div style={{ 'margin-left': '15%',height:'1400px'}}>
    //   {children}
    // </div>
    <div style={{ marginLeft: '25%', width: '75%',display:'block',minWidth:'100px'}}>
        {children}
    </div>
  );
};

