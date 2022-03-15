import { useState } from "react";
import styles from "./Slider.module.css";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles["inner-container"]}
          style={{
            width: 130 * 6,
            transform: `translateX(${-index * (130 * 2)}px)`,
          }}
        >
          <div className={styles.card}>1</div>
          <div className={styles.card}>2</div>
          <div className={styles.card}>3</div>
          <div className={styles.card}>4</div>
          <div className={styles.card}>5</div>
          <div className={styles.card}>6</div>
        </div>
      </div>
      <button onClick={() => setIndex((prev) => prev - 1)}>{"<"}</button>
      <button onClick={() => setIndex((prev) => prev + 1)}>{">"}</button>
    </>
  );
};
