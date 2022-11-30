import React from 'react';
import style from "./Blogs.module.css";
import arrowIcon from "../../assets/ServicePageElements/arrowIcon.png";
import {useNavigate} from "react-router-dom";

function Blogs({imgId, title, content, imge}) {

    const navigate = useNavigate();
    return (
        <div key={imgId}
            id={
                style.blogContainer
        }>
            <img style={
                    {cursor: "pointer"}
                }
                onClick={
                    () => {
                        navigate(`/blog/${imgId}`);
                        console.log(imgId);
                    }
                }
                src={imge}
                alt="blogImg"/>
            <h2> {title}</h2>
            <p> {content}</p>
            <button>Full Article
                <img src={arrowIcon}
                    alt=""/></button>
        </div>
    )
}

export default Blogs;
