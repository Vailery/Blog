import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PostCard, IPostCard } from "./PostCard";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostCard.module.css";
import { Context } from "../../App";

export const Post = () => {
  const [post, setPost] = useState<IPostCard>();
  const params: { postId: string } = useParams();
  const history = useHistory();
  const { theme } = useContext(Context);

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + params.postId
    );
    const post = await res.json();
    setPost(post);
  };

  return post ? (
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
