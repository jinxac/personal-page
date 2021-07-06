import React from "react";

import {
  title,
  fullName,
  description
} from "../../../../../../constants";

import styles from "./Introduction.module.css";


const Introduction = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>
      {title}
    </h1>
    <p className={styles.description}>
      <span>I'm &nbsp;</span>
      <span className={styles.name}>
        {fullName}. &nbsp;
      </span>
      {description}
    </p>
  </div>
);

export default Introduction;
