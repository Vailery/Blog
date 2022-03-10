import { NavLink, useHistory } from "react-router-dom";
import { LoginTitle } from "../LoginTitle/LoginTitle";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Login.module.css";
import { useCallback, useEffect, useState } from "react";
import { validationService } from "../../services/validation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { IState } from "../../redux/store";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state: IState) => state.authReducer.error);
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);

    const error = validationService.validateEmail(value);

    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const onChangePassword = useCallback((event) => {
    const value = event.target.value;
    setPassword(value);

    const error = validationService.validatePassword(value);

    setErrors((errors) => ({ ...errors, password: error }));
  }, []);

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    };

    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === "");

    if (isValid) {
      dispatch(login({ email, password }));
    }
  };

  const errorValues = error ? Object.values(error).flat() : "";

  return (
    <div className={styles.login}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <LoginTitle />
          </div>

          <div className={styles.form}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={onChangeEmail}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={onChangePassword}
              error={errors.password}
            />
            <Button text="Login" onClick={onClick} />
          </div>

          <p className={styles.info}>
            Forgot your password?{" "}
            <NavLink to="/reset-password">Reset password</NavLink>
          </p>

          <p className={styles.error}>{errorValues}</p>
        </div>
      </Container>
    </div>
  );
};
