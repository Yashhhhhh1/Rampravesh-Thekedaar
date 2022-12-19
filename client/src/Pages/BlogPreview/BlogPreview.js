import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import style from "./BlogPreview.module.css";
import axios from "axios";


function BlogPreview() {

    const {blogId} = useParams();
    const [blogObj, setBlogObj] = useState({});
    useEffect(() => {
        axios.get(`/blog/${blogId}`).then(res => setBlogObj(res.data)).catch(err => alert("Error Found."))
    }, [blogId]);

    return (
        <>
            <button id={
                    style.blogsLink
                }
                onClick={
                    () => {
                        window.history.back();
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    }
            }>Back</button>
            <div id={
                style.previewContainer
            }>
                <div>
                    <img src={
                            blogObj.image
                        }
                        alt="blogImg"/>
                    <h1> {
                        blogObj.title
                    }</h1>
                    <p> {
                        blogObj.content
                    }</p>
                </div>
            </div>
        </>
    )
}

export default BlogPreview;
