import { useHistory } from "react-router-dom";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Error.module.css";

export const Error = () => {
  const history = useHistory();

  return (
    <Container isImage={true}>
      <div className={styles.error}>
        <Title text="Lost in Space?" />
        <p className={styles.info}>
          We can't seem to find the page you're looking for.
        </p>
        <Button
          text="Return to Home"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>

      <img src="/assets/img/astronaut.png" alt="error" />
    </Container>
  );
};
