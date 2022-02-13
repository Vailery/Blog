import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard, IPostCard } from "../Post/PostCard";
import styles from "./PostList.module.css";
import { Button } from "../Button/Button";

const LIMIT = 5;

export const PostList = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((res) => res.json())
      .then((result) => {
        setPosts([...posts, ...result.results]);
        setCount(result.count);
      });
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

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

        {posts.length !== count ? (
          <Button
            text="ещё"
            onClick={() => {
              loadMore();
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
