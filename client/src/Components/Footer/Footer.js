import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/company logo.png";

function Footer() {
  return (
    <div>
      <footer id={style.footer}>
        <div>
          <img id={style.logo} src={logo} alt="logo" />
        </div>
        <div>
          <p>
            For the last 20 years, we have come to make people a house according
            to their mind. And almost till now we have fulfilled the dream of a
            house of 150 people. At present we are operating in Delhi only. We
            are soon going to start in other cities also.
          </p>
          <p>Ram Pravesh Thekedaar - Zarurat Harr Ghar Ki</p>
          <hr />
          <p>Get in Touch:</p>
          <p>See our latest work on</p>
          <div id={style.socialMediaContainer}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div>
          <strong>Address:</strong>
          <address>
            27-B/1, Durga Vihar Phase-2, Deendarpur, Najafgarh, New Delhi-110043
          </address>

          <strong>Whatsapp and Contact No.:</strong>
          <p>9718434576</p>

          <strong>Email:</strong>
          <p>rampraveshthekedaar22@gmail.com</p>
        </div>
      </footer>
      <div id={style.copyrightContainer}>
        <p>
          <i className="fa-regular fa-copyright"></i>
          2022 Rampraveshthekedaar.in | All Rights Reserved
        </p>
        <p>
          Website Designed by
          <a
            href="https://www.linkedin.com/in/amit4576/"
            rel="noreferrer"
            target="_blank"
          >
            Amit
          </a>
          and
          <a
            href="https://www.linkedin.com/in/yash-sharma-s/"
            rel="noreferrer"
            target="_blank"
          >
            Yash
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
