import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const params: any = useParams();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.postId
    );
    const post = await res.json();
  };

  return <h1>Post id = {params.postId}</h1>;
};
