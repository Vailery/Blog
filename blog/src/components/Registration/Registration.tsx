import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./Registration.module.css";
import { NavLink } from "react-router-dom";
import { Title } from "../Title/Title";

export const Registration = () => {
  const onClick = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Title />
          </div>

          <div className={styles.form}>
            <Input type="text" label="User name" />
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Input type="password" label="Confirm Password" />
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
