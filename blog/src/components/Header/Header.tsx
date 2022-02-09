import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavBar = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src="/assets/img/menu.svg"
            alt="menu"
            className={styles.menuButton}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
      </div>
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
