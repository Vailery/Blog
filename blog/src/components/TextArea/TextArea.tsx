import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./TextArea.module.css";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  label?: string;
  error?: string;
}

export const TextArea = ({ label, value, error, onChange }: IProps) => {
  return (
    <label className={styles.label}>
      {" "}
      {label ? <p>{label}</p> : null}
      <textarea
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error ? <p>{error}</p> : null}
    </label>
  );
};
