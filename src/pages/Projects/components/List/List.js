import React from "react";

import Card from "./components/Card";

import styles from "./List.module.css";

const List = () => {
  const data = [
    {
      id: 1,
      name: "Wealthy Web",
      description: "A web platform to purchase basket of mutual funds, built using ReactJS, redux and graphql",
      url: "https://www.wealthy.in"
    },
    {
      id: 2,
      name: "Wealthy Mobile App",
      description: "A mobile platform to purchase basket of mutual funds, built using React Native, apollo client and graphql",
      url: "https://play.google.com/store/apps/details?id=in.wealthy.android.wealthy"
    },
    {
      id: 3,
      name: "SpeakTribe",
      description: "A language learning web application built using Django and deployed on Google Cloud Platform",
      url: "https://www.speaktribe.com/"
    }
  ]

  return (
    <div className={styles.container}>
      {
        data.map((datum) => (
          <Card
            key={datum.id}
            repo={datum} 
          />
        ))
      }
    </div>
  );

};

export default List;
