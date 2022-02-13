import { ReactNode } from "react";
import styles from "./Container.module.css";

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
};
