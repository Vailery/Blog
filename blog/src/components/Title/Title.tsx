import styles from "./Title.module.css";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <p className={styles.title}>{text}</p>;
};
