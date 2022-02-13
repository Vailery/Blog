import { useContext } from "react";
import styles from "./Button.module.css";
import { Context } from "../../App";

interface IProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IProps) => {
  const contextValue = useContext(Context);
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
