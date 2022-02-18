import { useContext } from "react";
import { Context } from "../../App";
import styles from "./Title.module.css";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  const { theme } = useContext(Context);

  return (
    <p
      className={styles.title}
      style={{
        color: theme.timeText,
      }}
    >
      {text}
    </p>
  );
};
