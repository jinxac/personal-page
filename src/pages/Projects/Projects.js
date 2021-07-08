import React from "react";

import Header from "../../components/Header";
import Greeting from "./components/Greeting";
import List from "./components/List";

import styles from "./Projects.module.css";


const Projects = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Greeting />
      <List />
    </div>

  </>
);

export default Projects;
