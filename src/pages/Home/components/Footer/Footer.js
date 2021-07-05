import React from "react";
import { Fade } from "react-reveal";


import styles from "./Footer.module.css";

import {fullName} from "../../../../constants";

export default function Footer(props) {
  return (
    <div className={styles.container}>
      <Fade>
        <p className={styles.description}>
          Made with <span role="img">❤️</span> by {fullName}
        </p>
      </Fade>
    </div>
  );
}
