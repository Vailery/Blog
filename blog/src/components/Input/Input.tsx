import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./Input.module.css";

interface IProps {
  type?: string;
  label?: string;
  error?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({
  type = "text",
  label,
  error,
  onChange,
  onKeyDown,
  value,
}: IProps) => {
  return (
    <label className={styles.label}>
      {" "}
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error ? <p className={styles.errorInfo}>{error}</p> : null}
    </label>
  );
};
