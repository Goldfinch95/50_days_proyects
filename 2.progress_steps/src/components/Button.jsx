import styles from "../styles/page.module.css";
import React, { useState } from "react";

export default function Button({ onButtonClick, disabled, side }) {
  //declara la dirección
  const [direction] = useState(side);
  const handleClick = () => {
    onButtonClick(direction);
  };
  // button es prev ? si es entonces prev, sino entonces next.
  return (
    <button className={styles.button} onClick={handleClick}>
      {side === "Prev" ? "Prev" : "Next"}
    </button>
  );
}
