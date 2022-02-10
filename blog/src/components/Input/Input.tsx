import { useState } from "react";
import styles from "./Input.module.css";

interface IProps {
  type: string;
}

export const Input = ({ type }: IProps) => {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className={styles.input}
    />
  );
};
