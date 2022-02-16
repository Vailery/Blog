import { NavLink, useHistory, useLocation } from "react-router-dom";
import { LoginTitle } from "../LoginTitle/LoginTitle";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Login.module.css";

export const Login = () => {
  const onClick = () => {};

  return (
    <div className={styles.login}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <LoginTitle />
          </div>

          <div className={styles.form}>
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button text="Login" onClick={onClick} />
          </div>

          <p className={styles.info}>
            Forgot your password?{" "}
            <NavLink to="/reset-password">Reset password</NavLink>
          </p>
        </div>
      </Container>
    </div>
  );
};
