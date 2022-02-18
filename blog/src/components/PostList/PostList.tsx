import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard, IPostCard } from "../Post/PostCard";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostList.module.css";

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
    <Container isImage={false}>
      <div className={styles.allPosts}>
        <div className={styles.title}>
          <Title text="All posts" />
        </div>

        {posts ? (
          <>
            <div className={styles.postList}>
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

            <div className={styles.loadButton}>
              {posts.length !== count ? (
                <Button
                  text="Load more"
                  onClick={() => {
                    loadMore();
                  }}
                />
              ) : null}
            </div>
          </>
        ) : (
          <div className={styles.noPostsTitle}>
            <Title text="NO posts..." />
          </div>
        )}
      </div>
    </Container>
  );
};
