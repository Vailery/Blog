import { NavLink, useHistory } from "react-router-dom";
import { LoginTitle } from "../LoginTitle/LoginTitle";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Registration.module.css";
import { useCallback, useEffect, useState } from "react";
import { validationService } from "../../services/validation";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/actions/authActions";
import { IState } from "../../redux/store";

export const Registration = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state: IState) => state.authReducer.error);
  const emailState = useSelector((state: IState) => state.authReducer.email);

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (emailState) {
      history.push("/confirm");
    }
  }, [emailState]);

  const onChangeUserName = useCallback((event) => {
    const value = event.target.value;
    setUserName(value);

    const error = validationService.validateName(value);

    setErrors((errors) => ({ ...errors, userName: error }));
  }, []);

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

  const onChangeConfirmPassword = useCallback((event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    const error = validationService.validateRepeatedPassword(password, value);

    setErrors((errors) => ({ ...errors, confirmPassword: error }));
  }, []);

  const onClick = () => {
    const errors = {
      userName: validationService.validateName(username),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    };

    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === "");

    if (isValid) {
      dispatch(registration({ username, email, password }));
    }
  };

  const errorValues = error ? Object.values(error).flat() : "";

  return (
    <div className={styles.registration}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <LoginTitle />
          </div>

          <div className={styles.form}>
            <Input
              type="text"
              label="User name"
              value={username}
              onChange={onChangeUserName}
              error={errors.userName}
            />
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
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              error={errors.confirmPassword}
            />
            <Button text="Registration" onClick={onClick} />
          </div>

          <p className={styles.info}>
            If you have account, you can <NavLink to="/login">login</NavLink>
          </p>

          <p className={styles.error}>{errorValues}</p>
        </div>
      </Container>
    </div>
  );
};
