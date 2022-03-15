import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "../templates/Container/Container";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { isDark, changeIsDark } = useContext(ThemeContext);
  const { isLoggedIn, username } = useSelector(
    (state: IState) => state.authReducer
  );

  return (
    <div className={styles.navBar}>
      <Container isImage={false}>
        <div className={styles.mainMenu}>
          <div className={styles.menu}>
            <img
              src="/assets/img/close.png"
              alt="close"
              className={styles.closeButton}
              onClick={closeNavBar}
            />
            {isLoggedIn ? <p>{username}</p> : null}

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
            inputChecked={isDark}
            onChange={() => {
              changeIsDark();
            }}
          />
        </div>
      </Container>
    </div>
  );
};
