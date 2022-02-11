import { useState } from "react";
import styles from "./Input.module.css";

interface IProps {
  type: string;
  label: string;
}

export const Input = ({ type, label }: IProps) => {
  const [value, setValue] = useState("");

  return (
    <label className={styles.label}>
      {" "}
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        className={styles.input}
      />
    </label>
  );
};
