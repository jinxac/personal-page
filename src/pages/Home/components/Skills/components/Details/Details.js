import React from "react";
import {Fade} from "react-reveal";

import styles from "./Details.module.css";



const Details = () => {
  const skills = [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Building responsive website front end using ReactJS",
    "⚡ Developing mobile applications using Flutter and Android",
    "⚡ Creating application backend in Node, Express & Flask",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
