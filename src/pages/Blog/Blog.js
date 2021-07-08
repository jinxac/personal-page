import React from "react";

import Header from "../../components/Header";
import Greeting from "./components/Greeting";
import List from "./components/List";

import styles from "./Blog.module.css";


const Blog = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Greeting />
      <List />
    </div>
  </>
);

export default Blog;
