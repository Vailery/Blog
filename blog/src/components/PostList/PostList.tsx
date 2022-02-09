import { useEffect, useState } from "react";
import { PostCard, IPostCard } from "../Post/PostCard";
import styles from "./PostList.module.css";

export const PostList = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/blog/posts/?limit=100")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result.results);
      });
  }, []);

  return (
    <div className={styles.postList}>
      {posts.map((item) => (
        <PostCard
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          id={0}
          lesson_num={0}
          author={0}
        />
      ))}
    </div>
  );
};
