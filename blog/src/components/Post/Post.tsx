import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PostCard } from "./PostCard";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostCard.module.css";
import { Context } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { clearPost, fetchPost } from "../../redux/actions/postActions";

export const Post = () => {
  const params: { postId: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { theme } = useContext(Context);

  const post = useSelector((state: IState) => state.postReducer.post);

  useEffect(() => {
    getPostInfo();

    return () => {
      dispatch(clearPost());
    };
  }, []);

  const getPostInfo = async () => {
    dispatch(fetchPost(params.postId));
  };

  return post.title ? (
    <Container isImage={false}>
      <div className={styles.postInfo}>
        <Title text="Selected post" />

        <PostCard
          key={post.id}
          image={post.image}
          title={post.title}
          text={post.text}
          date={post.date}
          id={post.id}
          onClick={() => {}}
        />

        <p
          className={styles.backButton}
          style={{
            color: theme.timeText,
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          &lt; Back
        </p>
      </div>
    </Container>
  ) : null;
};
