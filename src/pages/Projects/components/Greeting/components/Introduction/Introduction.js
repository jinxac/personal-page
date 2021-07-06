import React from "react";

import {
  fullName,
  description
} from "../../../../../../constants";

import styles from "./Introduction.module.css";


const Introduction = () => (
  <div className={styles.container}>
    <p className={styles.description}>
      <span>I create beautiful and smooth user interfaces using&nbsp;</span>
      <span className={styles.name}>
        React. &nbsp;
      </span>
      <span>Along with this, I use&nbsp;</span>
      <span className={styles.name}>
        Django&nbsp;
      </span>
      <span>
        and&nbsp;
      </span>
      <span  className={styles.name}>
        Node/Express&nbsp;
      </span>
      <span>to write scalable backend applications.&nbsp;</span>
      <span>
        I host my applications in&nbsp;
        <span className={styles.name}>dockerized&nbsp;</span> 
        containers on&nbsp;
        <span className={styles.name}>AWS.&nbsp;</span>
      </span>
    </p>
    <p className={styles.description}>
      Below is the list of few of the projects I have worked on.
    </p>
  </div>
);

export default Introduction;
