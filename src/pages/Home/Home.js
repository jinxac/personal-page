import React from "react";

import Header from "../../components/Header";
import Greeting from "./components/Greeting";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

import styles from "./Home.module.css";



const Home = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Greeting />
      <Skills />
      <Education />
      <Footer />
    </div>
  </>
);

export default Home;
