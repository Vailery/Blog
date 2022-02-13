import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./Login.module.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Title } from "../Title/Title";

export const Login = () => {
  const onClick = () => {};
  const history = useHistory();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.form}>
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button
              text="Login"
              onClick={() => {
                history.push("/success");
              }}
            />
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
