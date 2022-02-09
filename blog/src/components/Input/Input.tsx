import { useState } from "react";
import styles from "./Input.module.css";

interface IProps {
  onChangeText: (value: string) => void;
}

export const Input = () => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className={styles.input}
    />
  );
};
