import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard } from "../Post/PostCard";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IState, store } from "../../redux/store";
import {
  fetchPosts,
  fetchSearchPosts,
  fetchMorePosts,
} from "../../redux/actions/postsActions";
import { Input } from "../Input/Input";
import { debounce } from "./helpers";
import { Slider } from "../Slider/Slider";

const debouncedSearch = debounce(
  (text: string) => store.dispatch(fetchSearchPosts(text)),
  1000
);

export const PostList = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const posts = useSelector((state: IState) => state.postsReducer.posts);
  const count = useSelector((state: IState) => state.postsReducer.count);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loadMore = useCallback(() => {
    dispatch(fetchMorePosts());
  }, []);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      debouncedSearch(search);
    },
    [setSearch]
  );

  const onKeyDown = useCallback(() => {
    dispatch(fetchSearchPosts(search));
  }, [search]);

  return (
    <>
      <Container isImage={false}>
        <div className={styles.allPosts}>
          <div className={styles.title}>
            <div className={styles.postsInfo}>
              <Title text="All posts" />
              <Button
                text="+ Add"
                onClick={() => {
                  history.push("/addpost");
                }}
              />
            </div>

            <Input
              value={search}
              label="Search"
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>

          {posts.length ? (
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
    </>
  );
};
