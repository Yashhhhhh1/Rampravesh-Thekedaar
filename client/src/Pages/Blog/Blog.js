import React, {useState, useEffect} from 'react';
import Blogs from '../../Components/Blogs/Blogs';
import axios from "axios";

function Blog() {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        axios.get("/blog").then(res => {
            setBlogList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (<div style={
        {
            display: 'flex',
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexWrap: "wrap"
        }
    }> {
        blogList && blogList.map(item => {
            console.log(item.imgId);
            return (<Blogs key={
                    item.imgId
                }
                title={
                    item.title
                }
                content={
                    item.content
                }
                imge={
                    item.image
                }/>)
        })
    } </div>)
}

export default Blog;
