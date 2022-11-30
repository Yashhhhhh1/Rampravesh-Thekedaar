import React, {useState} from 'react';
import style from "./Gallery.module.css";
import Preview from '../../Components/Preview/Preview';

function Gallery({list}) {
    const [preview, setPreview] = useState("");
    return (<div id={
        style.galleryContainer
    }> {
        preview && <Preview list={list}
            setPreview={setPreview}/>
    }
        {
        list.map((img, index) => <img height="70px"
            key={index}
            onClick={
                () => setPreview(true)
            }
            src={
                list[index]
            }
            alt="img"/>)
    } </div>)
}

export default Gallery;
