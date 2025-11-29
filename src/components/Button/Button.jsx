import React from "react";
import styles from "./Button.module.css";
function Button({ title, handleClick, fontSize = "text-md", className }) {
  console.log(fontSize, "fontSize");
  return (
    <button
      className={`${styles.btnGrad} ${fontSize} text-white py-1.5 px-4 cursor-pointer rounded ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
