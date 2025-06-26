import React from "react";

function Button({ text, onClick, disabled, width, height }) {
  return (
    <button
      className= "button"
      onClick={onClick}
        disabled={disabled}
        style={{ width: width, height: height }}
    >
      {text}
    </button>
  );
}

export default Button;