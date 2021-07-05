import React from "react";
import {Fade} from "react-reveal";

import styles from "./Details.module.css";



const Details = () => {
  const skills = [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Build responsive website front end using ReactJS",
    "⚡ Develop mobile applications using React Native",
    "⚡ Creat application backend in Django and Node",
    "⚡ Deploy dockerized applications to AWS"
  ];

  return (
    <Fade right duration={2000}>
      <div>
        {skills.map((skillSentence) => {
          return (
            <p className={styles.description}>
              {skillSentence}
            </p>
          );
        })}
      </div>
    </Fade>
  );
};

export default Details;
