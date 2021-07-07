import React, {useState, useEffect} from "react";

import Card from "./components/Card";
import styles from "./List.module.css";


const List = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      fetch('http://13.234.218.202/api/v0/blog/')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      {
        blogs.map((datum) => (
          <Card blog={datum} key={datum.id} />
        ))
      }
    </div>
  )
};

export default List;

