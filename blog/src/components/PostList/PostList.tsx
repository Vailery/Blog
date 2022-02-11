import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard, IPostCard } from "../Post/PostCard";
import styles from "./PostList.module.css";

export const PostList = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/blog/posts/?limit=100")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result.results);
      });
  }, []);

  return (
    <div className={styles.postList}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {posts.map((item) => (
            <PostCard
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
              date={item.date}
              id={item.id}
              onClick={() => {
                history.push("/post/" + item.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
