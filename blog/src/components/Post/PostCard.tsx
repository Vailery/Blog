import { useContext } from "react";
import { Context, darkTheme, lightTheme } from "../../App";
import styles from "./PostCard.module.css";

export interface IPostCard {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
  onClick: () => void;
}

export const PostCard = ({
  id,
  image,
  title,
  text,
  date,
  onClick,
}: IPostCard) => {
  const { isDark } = useContext(Context);

  return (
    <div
      className={styles.postCard}
      style={{
        background: isDark ? darkTheme.colorOfCard : lightTheme.colorOfCard,
      }}
      onClick={onClick}
    >
      <div className={styles.cardImage}>
        <img
          src={image ? image : "assets/img/defaultPostCardImage.png"}
          alt="postImage"
        />
      </div>

      <div className={styles.cardContent}>
        <p
          className={styles.contentTitle}
          style={{
            color: isDark ? darkTheme.text : lightTheme.text,
          }}
        >
          {title}
        </p>
        <p
          className={styles.contentText}
          style={{
            color: isDark ? darkTheme.grayText : lightTheme.grayText,
          }}
        >
          {text}
        </p>
        <p
          className={styles.contentDate}
          style={{
            color: isDark ? darkTheme.timeText : lightTheme.timeText,
          }}
        >
          {date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};
