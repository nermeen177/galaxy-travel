import React from "react";
import "./FooterStyle.scss";
import { FaPhone, FaMailBulk, FaSearchLocation } from "react-icons/fa";
import img1 from "../assets/pic7.jpg";
import img2 from "../assets/pic3.jpg";
import img3 from "../assets/pic11.jpg";
import img4 from "../assets/pic16.jpg";
import img5 from "../assets/pic6.jpg";
import img6 from "../assets/pic1.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__info">
          <FaSearchLocation size={20} style={{ marginRight: "1rem" }} />
          123 Acme St. Houston,Tx
        </div>
        <div className="footer__info">
          <FaPhone size={20} style={{ marginRight: "1rem" }} />
          1-800-123-1234
        </div>
        <div className="footer__info">
          <FaMailBulk size={20} style={{ marginRight: "1rem" }} />
          trips@galaxy.com
        </div>
      </div>
      <div className="footer__middle">
        <h4>Gallery</h4>
        <div className="footer__gallery">
          <img src={img1} alt="space" />
          <img src={img2} alt="space" />
          <img src={img3} alt="space" />
          <img src={img4} alt="space" />
          <img src={img5} alt="space" />
          <img src={img6} alt="space" />
        </div>
      </div>
      <div className="footer__right">
        <h4>About company</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout Contrary to
          popular belief.
        </p>
      </div>
    </div>
  );
};

export default Footer;
