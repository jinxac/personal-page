import React from "react";

import {
  fullName,
  description
} from "../../../../../../constants";

import styles from "./Introduction.module.css";


const Introduction = () => (
  <div className={styles.container}>
    <p className={styles.description}>
      <span>
        I read a lot and it is difficult to recollect to information after a period of time. 
        Thus, maintaining them at a single place helps.&nbsp;
      </span>
      <span>I frequently write about latest technologies and trends
        that are used in&nbsp;</span>
      <span className={styles.name}>
        Backend, &nbsp;
      </span>
      <span className={styles.name}>
      Frontend&nbsp;
      </span>
      <span>
        and&nbsp;
      </span>
      <span>as well as&nbsp;</span>
      <span  className={styles.name}>
        Deployments&nbsp;
      </span>
    </p>
  </div>
);

export default Introduction;
