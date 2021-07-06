import React from "react";
import {Fade} from "react-reveal";

import styles from "./Card.module.css";


const Card = ({repo}) => {
  const onClick = () => {
    window.open(repo.url, '_blank').focus();
  };
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className={styles.card} onClick={onClick}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>
            {repo.name}
          </p>
        </div>
        <p className={styles.description}>
          {repo.description}
        </p>
      </div>
    </Fade>
  );
};

export default Card;
