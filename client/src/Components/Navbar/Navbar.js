import React from 'react';
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";
import logo from "../../assets/company logo.png";


function Navbar() {
    return (
        <header id={
            style.header
        }>
            <img id={
                    style.logo
                }
                src={logo}
                alt='logo'/>
            <div id={
                style.nabBar
            }>
                <i id={
                        style.hamburgerIcon
                    }
                    className="fa-solid fa-bars"></i>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
