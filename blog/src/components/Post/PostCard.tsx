import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Image } from "../Image/Image";
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
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.postCard}
      style={{
        background: theme.colorOfCard,
      }}
      onClick={onClick}
    >
      <div className={styles.cardImage}>
        {image ? (
          <Image
            src={image ? image : "assets/img/defaultPostCardImage.png"}
            alt="postImage"
            defaultImage="assets/img/defaultPostCardImage.png"
          />
        ) : null}
      </div>

      <div className={styles.cardContent}>
        <p
          className={styles.contentTitle}
          style={{
            color: theme.text,
          }}
        >
          {title}
        </p>
        <p
          className={styles.contentText}
          style={{
            color: theme.grayText,
          }}
        >
          {text}
        </p>
        <p
          className={styles.contentDate}
          style={{
            color: theme.timeText,
          }}
        >
          {date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};
