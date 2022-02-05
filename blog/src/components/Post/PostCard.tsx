import styles from "./PostCard.module.css";

interface IPostCard {
  post: {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
  };
}
export const PostCard = ({ post }: IPostCard) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.cardImage}>
        <img
          src={post.image ? post.image : "assets/img/defaultPostCardImage.png"}
          alt="postImage"
        />
      </div>

      <div className={styles.cardContent}>
        <p className={styles.contentTitle}>{post.title}</p>
        <p className={styles.contentText}>{post.text}</p>
        <p className={styles.contentDate}>
          {post.date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};
