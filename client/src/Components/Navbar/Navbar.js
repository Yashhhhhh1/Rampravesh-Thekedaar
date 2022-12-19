import React, {useEffect, useState} from "react";
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";
import logo from "../../assets/company logo.png";

function Navbar() {
    const [currNav, setCurrNav] = useState(null);
    const [hamVis, setHamVis] = useState(false);
    const [navVis, setNavVis] = useState(false);

    const handleNav = (navParam) => { // eslint-disable-next-line
        switch (navParam) {
            case "home":
                setCurrNav("home");
                break;
            case "services":
                setCurrNav("services");
                break;
            case "blog":
                setCurrNav("blog");
                break;
        }
    };

    const navStyle = {
        color: "#3963ab"
    };

    useEffect(() => {
        setCurrNav(window.location.pathname.split("/")[1]);
        if (window.outerWidth <= 425) {
            setHamVis(true);
        };

        if (window.outerWidth > 425) {
            setNavVis(true);
        }
    }, [currNav]);

    return (
        <header id={
            style.header
        }>
            <img id={
                    style.logo
                }
                src={logo}
                alt="logo"/>
            <div id={
                style.navBar
            }>
                {
                hamVis && <span onClick={
                        () => setNavVis(!navVis)
                    }
                    id={
                        style.hamburgerIcon
                    }
                    className="fa-solid fa-bars"></span>
            }
                {
                navVis && <nav>
                    <Link onClick={
                            (event) => {
                                window.scrollTo({top: 0, behavior: 'smooth'})
                                handleNav(event.target.innerText.toLowerCase());
                                setNavVis(false)
                            }
                        }
                        style={
                            currNav === "home" ? navStyle : {}
                        }
                        to="/home">
                        Home
                    </Link>
                    <Link onClick={
                            (event) => {
                                window.scrollTo({top: 0, behavior: 'smooth'})
                                handleNav(event.target.innerText.toLowerCase());
                                setNavVis(false)
                            }
                        }
                        style={
                            currNav === "services" ? navStyle : {}
                        }
                        to="/services">
                        Services
                    </Link>
                    <Link onClick={
                            (event) => {
                                window.scrollTo({top: 0, behavior: 'smooth'})
                                handleNav(event.target.innerText.toLowerCase());
                                setNavVis(false)
                            }
                        }
                        style={
                            currNav === "blog" ? navStyle : {}
                        }
                        to="/blog">
                        Blog
                    </Link>
                </nav>
            } </div>
        </header>
    );
}

export default Navbar;
