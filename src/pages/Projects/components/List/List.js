import React from "react";

import Card from "./components/Card";

import styles from "./List.module.css";

const List = () => {
  const data = [
    {
      id: 1,
      name: "Wealthy Web",
      description: "A web platform to purchase basket of mutual funds, built using ReactJS, Redux and Apollo",
      url: "https://www.wealthy.in"
    },
    {
      id: 2,
      name: "Wealthy Mobile App",
      description: "A mobile platform to purchase basket of mutual funds, built using React Native, Apollo and Graphql",
      url: "https://play.google.com/store/apps/details?id=in.wealthy.android.wealthy"
    },
    {
      id: 3,
      name: "SpeakTribe",
      description: "A language learning web application built using Django and deployed on Google Cloud Platform",
      url: "https://www.speaktribe.com/"
    },
    {
      id: 4,
      name: "Personal Page",
      description: "Personal websiter developed using React and Redux",
      url: "https://github.com/jinxac/personal-page"
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
