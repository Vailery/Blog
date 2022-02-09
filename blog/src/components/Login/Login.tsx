import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState, ChangeEvent } from "react";
import styles from "./Login.module.css";

export const Login = () => {
  const onClick = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            {" "}
            <a href="/login" className={styles.active}>
              Login
            </a>{" "}
            | <a href="/registration">Registration</a>
          </p>

          <div className={styles.form}>
            <label>
              Email <Input />
            </label>

            <label>
              Password <Input />
            </label>

            <Button text="Login" onClick={onClick} />
          </div>

          <p className={styles.info}>
            Forgot your password? <a href="/reset-password">Reset password</a>
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
