import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import styles from "./AddPost.module.css";

import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";

export const AddPost = () => {
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState("");

  const onLoad = (event: any) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <div className={styles.addPostIndex}>
        <Container isImage={false}>
          <div className={styles.addPostWrraper}>
            <Title text="Add new post" />
            <div className={styles.addPost}>
              <div className={styles.addText}>
                <Input
                  type="text"
                  label="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Input
                  type="text"
                  label="Lesson number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
                <TextArea
                  value={text}
                  label="Text"
                  onChange={(event) => setText(event.target.value)}
                />
              </div>
              <div className={styles.addImg}>
                <p className={styles.addName} style={{ color: theme.text }}>
                  Image
                </p>
                <div className={styles.addBtn}>
                  <Button text="Add" onClick={() => {}}></Button>
                </div>
                <input type="file" accept="image/*" onChange={onLoad} />
              </div>
            </div>
            <div className={styles.addManeBtn}>
              <Button text="Add" onClick={() => {}}></Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
