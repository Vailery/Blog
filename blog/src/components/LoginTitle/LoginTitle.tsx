import { NavLink } from "react-router-dom";
import styles from "./LoginTitle.module.css";

export const LoginTitle = () => {
  return (
    <p className={styles.title}>
      {" "}
      <NavLink to="/login">Login</NavLink> |{" "}
      <NavLink to="/registration">Registration</NavLink>
    </p>
  );
};
