import React from "react";
import style from "./Blogs.module.css";
import arrowIcon from "../../assets/ServicePageElements/arrowIcon.png";
import { useNavigate } from "react-router-dom";

function Blogs({ imgId, title, content, imge }) {
  const navigate = useNavigate();

  return (
    <div id={style.blogContainer}>
      <img src={imge} alt="blogImg" />
      <h2> {title}</h2>
      <p> {content}</p>
      <button
        onClick={() => {
          navigate(`/blog/${imgId}`);
        }}
      >
        Full Article
        <img src={arrowIcon} alt="" />
      </button>
    </div>
  );
}

export default Blogs;
