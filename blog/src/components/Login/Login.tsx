import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const onClick = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            {" "}
            <NavLink to="/login" className={styles.active}>
              Login
            </NavLink>{" "}
            | <NavLink to="/registration">Registration</NavLink>
          </p>

          <div className={styles.form}>
            <label>
              Email <Input type="email" />
            </label>

            <label>
              Password <Input type="password" />
            </label>

            <Button text="Login" onClick={onClick} />
          </div>

          <p className={styles.info}>
            Forgot your password?{" "}
            <NavLink to="/reset-password">Reset password</NavLink>
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
