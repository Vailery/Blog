import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src="/assets/img/close.png"
            alt="close"
            className={styles.closeButton}
            onClick={closeNavBar}
          />
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={styles.activeLink}>
                All posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName={styles.activeLink}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" activeClassName={styles.activeLink}>
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
