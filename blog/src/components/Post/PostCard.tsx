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
  return (
    <div className={styles.postCard} onClick={onClick}>
      <div className={styles.cardImage}>
        <img
          src={image ? image : "assets/img/defaultPostCardImage.png"}
          alt="postImage"
        />
      </div>

      <div className={styles.cardContent}>
        <p className={styles.contentTitle}>{title}</p>
        <p className={styles.contentText}>{text}</p>
        <p className={styles.contentDate}>
          {date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};
