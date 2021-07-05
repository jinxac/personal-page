import React from "react";
import {Fade} from "react-reveal";


import Avatar from "./components/Avatar";
import Card from "./components/Card";


import styles from "./Education.module.css";
 
const Education = () => (
  <div className={styles.container}>
    <Fade 
      bottom
      duration={2000}
      distance="20px"
    >
      <div className={styles.header}>
        <h1 className={styles.headerText}>
          Education
        </h1>
      </div>
      <div className={styles.content}>
        <Avatar />
        <Card />
      </div>

    </Fade>
  </div>

);

export default Education;
