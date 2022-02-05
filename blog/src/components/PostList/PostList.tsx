import { useEffect, useState } from "react";
import { PostCard } from "../Post/PostCard";
import styles from "./PostList.module.css";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

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
        <PostCard post={item} />
      ))}
    </div>
  );
};
