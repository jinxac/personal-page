import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import {Fade} from "react-reveal";


import Header from "../../components/Header";

import styles from "./BlogContent.module.css";



const BlogContent = () => {
  const params = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = () => {
      fetch(`http://13.234.218.202/api/v0/blog/${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    
    fetchContent();
  }, [params]);

  return (
    <>
      <Header />
      <Fade bottom duration={2000} distance="40px">
        <div 
          className={styles.container}
          dangerouslySetInnerHTML={{__html: content}} />
      </Fade>

    </>
  )
};

export default BlogContent;
