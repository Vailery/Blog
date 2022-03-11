import { useHistory } from "react-router-dom";
import lottie from "lottie-web";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Error.module.css";
import { useEffect, useRef } from "react";

export const Error = () => {
  const history = useHistory();

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./astronaout.json"),
      });
    }
  }, [container]);

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

      <div ref={container} className={styles.image} />
    </Container>
  );
};
