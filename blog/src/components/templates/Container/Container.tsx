import { ReactNode } from "react";
import styles from "./Container.module.css";

interface IProps {
  isImage: boolean;
  children: ReactNode;
}

export const Container = ({ isImage, children }: IProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>

      {isImage === true ? (
        <img
          className={styles.background}
          src="/assets/img/background.png"
          alt="background"
        />
      ) : null}
    </div>
  );
};
