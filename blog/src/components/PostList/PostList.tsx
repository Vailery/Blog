import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard } from "../Post/PostCard";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { addOffset, fetchPosts } from "../../redux/actions/postsActions";

const LIMIT = 5;

export const PostList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const posts = useSelector((state: IState) => state.postsReducer.posts);
  const offset = useSelector((state: IState) => state.postsReducer.offset);

  useEffect(() => {
    dispatch(fetchPosts(LIMIT, offset));
  }, [offset]);

  const loadMore = useCallback(() => {
    dispatch(addOffset(posts.length));
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
                  key={item.id + Math.random().toString(16).slice(2)}
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
              {offset + LIMIT > posts.length ? null : (
                <Button
                  text="Load more"
                  onClick={() => {
                    loadMore();
                  }}
                />
              )}
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
