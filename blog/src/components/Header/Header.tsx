import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../templates/Container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavBar = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.header}>
      <Container>
        <div className={styles.menu}>
          <img
            src="/assets/img/menu.svg"
            alt="menu"
            className={styles.menuButton}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
      </Container>
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
