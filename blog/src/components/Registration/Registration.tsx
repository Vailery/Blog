import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState, ChangeEvent } from "react";
import styles from "./Registration.module.css";

export const Registration = () => {
  const onClick = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            {" "}
            <a href="/login">Login</a> |{" "}
            <a href="/registration" className={styles.active}>
              Registration
            </a>
          </p>

          <div className={styles.form}>
            <label>
              User name <Input />
            </label>

            <label>
              Email <Input />
            </label>

            <label>
              Password <Input />
            </label>

            <label>
              Confirm Password <Input />
            </label>

            <Button text="Registration" onClick={onClick} />
          </div>

          <p className={styles.info}>
            If you have account, you can <a href="/reset-password">login</a>
          </p>
        </div>
      </div>

      <img
        className={styles.background}
        src="/assets/img/background.png"
        alt="background"
      />
    </div>
  );
};
