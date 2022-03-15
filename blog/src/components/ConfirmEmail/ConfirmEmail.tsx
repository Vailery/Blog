import { useHistory } from "react-router-dom";
import { Container } from "../templates/Container/Container";
import styles from "./ConfirmEmail.module.css";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";

export const ConfirmEmail = () => {
  const email = useSelector((state: IState) => state.authReducer.email);
  const hisotry = useHistory();

  return (
    <div className={styles.login}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <Title text="Registration Confirmation" />
          </div>

          <div className={styles.form}>
            <p>
              Please activate your account with the activation link in the email{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>Please, check your email</p>
          </div>

          <p className={styles.info}>
            <Button
              text="Home"
              onClick={() => {
                hisotry.push("/");
              }}
            />
          </p>
        </div>
      </Container>
    </div>
  );
};
