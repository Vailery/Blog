import styles from "./DarkModeToggle.module.css";

interface IProps {
  onClick: () => void;
}

export const DarkModeToggle = ({ onClick }: IProps) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={onClick} />
        <span className={styles.slider}> </span>
      </label>
    </div>
  );
};
