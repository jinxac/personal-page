import React from "react";
import {Fade} from "react-reveal";
import {useHistory} from "react-router-dom";

import styles from "./Card.module.css";


const Card = ({blog}) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/blog/${blog.id}`);
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className={styles.card} onClick={onClick}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>
            {blog.title}
          </p>
        </div>
        <p className={styles.description}>
          {blog.summary}
        </p>
      </div>
    </Fade>
  );
};

export default Card;
