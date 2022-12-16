import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/company logo.png";

function Navbar() {
  const [currNav, setCurrNav] = useState(null);
  const [hamVis, setHamVis] = useState(false);

  const handleNav = (event) => {
    // eslint-disable-next-line
    switch (event.target.innerText.toLowerCase()) {
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
    color: "#3963ab",
  };

  useEffect(() => {
    setCurrNav(window.location.pathname.split("/")[1]);
  }, [currNav]);

  return (
    <header id={style.header}>
      <img id={style.logo} src={logo} alt="logo" />
      <div id={style.navBar}>
        <span
          onClick={() => setHamVis(!hamVis)}
          id={style.hamburgerIcon}
          className="fa-solid fa-bars"
        ></span>
        <nav>
          <Link
            onClick={handleNav}
            style={currNav === "home" ? navStyle : {}}
            to="/home"
          >
            Home
          </Link>
          <Link
            onClick={handleNav}
            style={currNav === "services" ? navStyle : {}}
            to="/services"
          >
            Services
          </Link>
          <Link
            onClick={handleNav}
            style={currNav === "blog" ? navStyle : {}}
            to="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
