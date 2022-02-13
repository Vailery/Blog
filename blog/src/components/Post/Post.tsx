import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PostCard, IPostCard } from "./PostCard";
import styles from "./PostCard.module.css";

export const Post = () => {
  const [post, setPost] = useState<IPostCard>();
  const params: any = useParams();
  const history = useHistory();

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
    <div className={styles.postInfo}>
      <PostCard
        key={post.id}
        image={post.image}
        title={post.title}
        text={post.text}
        date={post.date}
        id={post.id}
        onClick={() => {}}
      />
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </button>
    </div>
  ) : null;
};
