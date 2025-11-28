import React from "react";
import styles from "./Button.module.css"
function Button({ title, handleClick }) {
  return (
    <button
      class={`${styles.btnGrad} text-sm text-white py-1.5 px-4 cursor-pointer rounded`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
