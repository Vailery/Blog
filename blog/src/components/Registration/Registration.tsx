import { NavLink } from "react-router-dom";
import { LoginTitle } from "../LoginTitle/LoginTitle";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Registration.module.css";

export const Registration = () => {
  const onClick = () => {};

  return (
    <div className={styles.registration}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <LoginTitle />
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
      </Container>
    </div>
  );
};
