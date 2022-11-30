import React, {useState} from 'react';
import style from "./Services.module.css";
import constructionImg from '../../assets/ServicePageElements/constructionImg.png';
import bulletPoint from '../../assets/ServicePageElements/PointsIcon.png';
import arrowIcon from '../../assets/ServicePageElements/arrowIcon.png';
import scaffoldingImg from "../../assets/ServicePageElements/scaffoldingImg.png"
import scaf1 from "../../assets/ServicePageElements/scaffolding images/1.png";
import scaf2 from "../../assets/ServicePageElements/scaffolding images/2.png";
import scaf3 from "../../assets/ServicePageElements/scaffolding images/3.png";
import scaf4 from "../../assets/ServicePageElements/scaffolding images/4.png";
import scaf5 from "../../assets/ServicePageElements/scaffolding images/5.png";
import scaf6 from "../../assets/ServicePageElements/scaffolding images/6.png";
import scaf7 from "../../assets/ServicePageElements/scaffolding images/7.png";
import scaf8 from "../../assets/ServicePageElements/scaffolding images/8.png";
import cons1 from "../../assets/ServicePageElements/construction photos/1.png";
import cons2 from "../../assets/ServicePageElements/construction photos/2.png";
import cons3 from "../../assets/ServicePageElements/construction photos/3.png";
import cons4 from "../../assets/ServicePageElements/construction photos/4.png";
import Gallery from '../../Components/Gallery/Gallery';
import Forms from '../../Components/Form/Forms';


const constructionList = [cons1, cons2, cons3, cons4];
const scaffoldingList = [
    scaf1,
    scaf2,
    scaf3,
    scaf4,
    scaf5,
    scaf6,
    scaf7,
    scaf8
];


function Services() {
    const [formVis, setFormVis] = useState(false);

    return (<div id={
        style.servicesPageContainer
    }> {
        formVis && <Forms setFormVis={setFormVis}/>
    }
        <div id={
            style.container
        }>
            <div>
                <img src={constructionImg}
                    alt='construction imge'/>
                <div id={
                    style.galleryContainer
                }>
                    <p>Gallery</p>
                    <Gallery list={constructionList}/>
                </div>
            </div>
            <div id={
                style.descriptionContainer
            }>
                <h1>
                    Construction
                    <span>&</span>
                    Renovation Work.
                </h1>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        We have our expertise in Construction houses, Store, Upto 5 Storey House and stores.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        Renovation and Repairing work.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>Tiles, Granites and Moulding work are also our area of expertise.</span>
                </div>
                <div id={
                    style.details
                }>
                    <p>We have delivered 150+ Fully Furnished Houses and more than 100 Renovation Work on time and with great User Feedbacks.</p>
                    <p>Book a free consultation call.</p>
                    <button id={
                            style.enquiryBtn
                        }
                        onClick={
                            () => setFormVis(true)
                    }>Enquire Now
                        <img src={arrowIcon}
                            alt=''/></button>
                </div>
            </div>
        </div>

        <div id={
            style.container
        }>

            <div id={
                style.descriptionContainer
            }>
                <h1>
                    Renting Scaffolding.
                </h1>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        High-quality wooden planks.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        Strong Bamboos (Thin & long wooden logs).</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>Bamboo panels.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        Bamboo stems.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>
                        Waterproof Plates.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>Steel Plates.</span>
                </div>
                <div className={
                    style.bulletPoint
                }>
                    <img src={bulletPoint}
                        alt=''/><span>Vibrators.</span>
                </div>
                <div id={
                    style.details
                }>
                    <p>For Best quality and Best Chartering Prices you can contact us directly from here.</p>
                    <button id={
                            style.enquiryBtn
                        }
                        onClick={
                            () => setFormVis(true)
                    }>Enquire Now
                        <img src={arrowIcon}
                            alt=''/></button>
                </div>
            </div>
            <div>
                <img src={scaffoldingImg}
                    alt='scaffolding imge'/>
                <div id={
                    style.galleryContainer
                }>
                    <p>Gallery</p>
                    <Gallery list={scaffoldingList}/>
                </div>
            </div>
        </div>
    </div>)
}

export default Services;
