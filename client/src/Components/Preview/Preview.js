import React, {useState} from 'react';
import style from "./Preview.module.css";

function Preview({list, setPreview}) {

    let [count, setCount] = useState(0);

    const nextImg = () => {
        if (count >= list.length - 1) {
            setCount(0);
        } else {
            setCount((prev) => prev + 1);
        }
    }

    const prevImg = () => {
        if (count <= 0) {
            setCount(list.length - 1);
        } else {
            setCount((prev) => prev - 1);
        }
    }

    return (<div id={
        style.previewContainer
    }>
        <p id={
                style.closeBtn
            }
            onClick={
                () => setPreview(false)
        }>X</p>
        <button onClick={prevImg}>Prev</button>
        <img src={
                list[count]
            }
            alt="preview img"/>
        <button onClick={nextImg}>Next</button>
    </div>)
}

export default Preview;
