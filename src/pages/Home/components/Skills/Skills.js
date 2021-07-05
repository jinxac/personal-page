import React from "react";
import {Fade} from "react-reveal";


import styles from  "./Skills.module.css";
import Avatar from "./components/Avatar";
import Details from "./components/Details";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Fade bottom duration={2000} distance="20px">
        <div className={styles.header}>
          <h1 className={styles.headerText}>
            Here's what I do
          </h1>
        </div>
        <div className={styles.body}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.details}>
            <Details />
          </div>
        </div>
      </Fade>
    </div>

  );
}

export default Skills;

