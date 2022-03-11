import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Title.module.css";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  const { theme } = useContext(ThemeContext);

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
