import styles from "./PostCard.module.css";

export interface IPostCard {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export const PostCard = ({ image, title, text, date }: IPostCard) => {
  return (
    <div className={styles.postCard}>
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
