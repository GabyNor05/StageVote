import React from "react";

function Button({type, text, onClick, disabled, width, height }) {
  return (
    <button
      className= "button"
      type={type || "button"} 
      onClick={onClick}
        disabled={disabled}
        style={{ width: width, height: height}}
    >
      {text}
    </button>
  );
}

export default Button;