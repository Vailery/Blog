import { useHistory } from "react-router-dom";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { ContainerWithImage } from "../templates/Container/ContainerWithImage";
import styles from "./Error.module.css";

export const Error = () => {
  const history = useHistory();
  return (
    <ContainerWithImage>
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

      <img src="/assets/img/Astronaut.png" alt="error" />
    </ContainerWithImage>
  );
};
