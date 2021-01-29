//Creates animation for "WEB DEVELOPER" on landing component
import React from "react";

 const SplitText = (props) => {
    
      return (
        //Maps props.copy (string passed on as prop) and adds styling to each character
        <span aria-label={props.copy} role={props.role}>
          {props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
      );
  }

  export default SplitText
  
  
  