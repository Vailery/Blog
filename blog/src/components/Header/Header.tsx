import { useContext, useState } from "react";
import { Context } from "../../App";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../templates/Container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavBar = () => {
    setIsActive(false);
  };

  const { theme } = useContext(Context);

  return (
    <nav className={styles.header}>
      <Container isImage={false}>
        <div className={styles.menu}>
          <img
            src="/assets/img/menu.svg"
            alt="menu"
            className={styles.menuButton}
            onClick={() => setIsActive(!isActive)}
            style={{
              filter: theme.filter,
            }}
          />
        </div>
      </Container>
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
