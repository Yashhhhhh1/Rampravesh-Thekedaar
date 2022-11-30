import React, {useState} from 'react';
import style from "./CreateBlog.module.css";
import {storage} from "../Firebase/Firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import axios from "axios";


function CreateBlog() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");


    const createBlogHandler = async (event) => {
        event.preventDefault();
        const imageFolderRef = ref(storage, "blogImages/");
        const imgListLen = await listAll(imageFolderRef);
        const currImageName = "image.name" + imgListLen.items.length;
        const imageRef = ref(storage, `blogImages/${
            currImageName
        }`);

        try {
            await uploadBytes(imageRef, image);
            const imgArr = await listAll(imageFolderRef);
            imgArr.items.forEach((item) => {
                if (item.name === currImageName) {
                    getDownloadURL(item).then(res => {
                        const data = {
                            title,
                            content,
                            image: res,
                            imgId: imgListLen.items.length
                        }
                        axios.post("/create-blog", data).then(DATA => {
                            alert("Blog Successfully Created");
                            setTitle("");
                            setContent("");
                        }).catch(err => {
                            alert("Error Occured, Please refresh and try again.");
                        });
                    });
                };
            });
        } catch (err) { // console.log("err", err);
        };

    }

    return (<div id={
        style.blogInputContainer
    }>
        <form onSubmit={createBlogHandler}>
            <div className={
                style.fieldContainer
            }>
                <label>Title</label><br/>
                <input onChange={
                        (event) => setTitle(event.target.value)
                    }
                    value={title}
                    type="text"
                    placeholder='enter title here.'
                    required/>
            </div>
            <div className={
                style.fieldContainer
            }>
                <label>Content</label><br/>
                <textarea onChange={
                        (event) => setContent(event.target.value)
                    }
                    value={content}
                    placeholder='enter content here.'
                    required/>
            </div>
            <div className={
                style.fieldContainer
            }>
                <label>Image</label><br/>
                <input onChange={
                        (event) => setImage(event.target.files[0])
                    }
                    type="file"
                    accept='image/*'
                    required/>
            </div>
            <button>Create Blog</button>
        </form>
    </div>)
}

export default CreateBlog;
