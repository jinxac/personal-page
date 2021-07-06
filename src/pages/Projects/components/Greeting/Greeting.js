import React from "react";
import {Fade} from "react-reveal";


import Avatar from "./components/Avatar";
import Introduction from "./components/Introduction";
import styles from "./Greeting.module.css";


const Greeting = () => (
  <Fade bottom duration={2000} distance="40px">
    <div className={styles.container}>
      <div className={styles.column}>
        <Introduction />
      </div>
      <div className={`${styles.column} ${styles.avatar}`}>
        <Avatar />
      </div>
    </div>
  </Fade>
);

export default Greeting;
