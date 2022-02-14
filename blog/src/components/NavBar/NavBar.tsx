import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../App";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import styles from "./NavBar.module.css";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { isDark, changeIsDark } = useContext(Context);

  return (
    <div className={styles.navBar}>
      <Container>
        <div className={styles.mainMenu}>
          <div className={styles.menu}>
            <img
              src="/assets/img/close.png"
              alt="close"
              className={styles.closeButton}
              onClick={closeNavBar}
            />

            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName={styles.activeLink}
                  onClick={closeNavBar}
                >
                  All posts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  activeClassName={styles.activeLink}
                  onClick={closeNavBar}
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/registration"
                  activeClassName={styles.activeLink}
                  onClick={closeNavBar}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>

          <DarkModeToggle
            onClick={() => {
              changeIsDark();
            }}
          />
        </div>
      </Container>
    </div>
  );
};
