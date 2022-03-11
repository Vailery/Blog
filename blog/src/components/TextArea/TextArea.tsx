import { ChangeEventHandler } from "react";
import styles from "./TextArea.module.css";

interface IProps {
  label?: string;
  value: string;
  onChange: (e: any) => void;
}

export const TextArea = ({ label, onChange, value }: IProps) => {
  return (
    <label className={styles.label}>
      {" "}
      {label}
      <textarea value={value} onChange={onChange} />
    </label>
  );
};
