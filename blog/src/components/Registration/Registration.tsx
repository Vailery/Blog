import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./Registration.module.css";
import { NavLink } from "react-router-dom";

export const Registration = () => {
  const onClick = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            {" "}
            <NavLink to="/login">Login</NavLink> |{" "}
            <NavLink to="/registration" className={styles.active}>
              Registration
            </NavLink>
          </p>

          <div className={styles.form}>
            <label>
              User name <Input type="text" />
            </label>

            <label>
              Email <Input type="email" />
            </label>

            <label>
              Password <Input type="password" />
            </label>

            <label>
              Confirm Password <Input type="password" />
            </label>

            <Button text="Registration" onClick={onClick} />
          </div>

          <p className={styles.info}>
            If you have account, you can <NavLink to="/login">login</NavLink>
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
