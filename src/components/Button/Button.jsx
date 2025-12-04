import React from "react";
import styles from "./Button.module.css";
function Button({
  variant = "primary",
  title,
  handleClick,
  fontSize = "text-md",
  className,
}) {
  console.log(fontSize, "fontSize");
  return (
    <button
      className={`${
        variant === "primary"
          ? `${styles.btnGrad} ${styles.btnGradPrimary}`
          : `${styles.btnGrad} ${styles.btnBlack}`
      } ${fontSize} text-white py-1.5 px-4 cursor-pointer rounded ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
