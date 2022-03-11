import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../templates/Container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isLoggedIn, username } = useSelector(
    (state: IState) => state.authReducer
  );

  const closeNavBar = () => {
    setIsActive(false);
  };

  const { theme } = useContext(ThemeContext);

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

          {isLoggedIn ? <p>{username}</p> : null}
        </div>
      </Container>
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
