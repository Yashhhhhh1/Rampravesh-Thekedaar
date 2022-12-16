import React, { useState, useEffect } from "react";
import Blogs from "../../Components/Blogs/Blogs";
import axios from "axios";

function Blog() {
  const [blogList, setBlogList] = useState([]);

  const getBlogs = () => {
    axios
      .get("/blog")
      .then((res) => {
        setBlogList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {blogList &&
        blogList.map((item) => {
          return (
            <Blogs
              key={item.imgId}
              imgId={item.imgId}
              title={item.title}
              content={item.content}
              imge={item.image}
            />
          );
        })}
    </div>
  );
}

export default Blog;
