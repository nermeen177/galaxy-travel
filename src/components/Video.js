import React from "react";
import { Link } from "react-router-dom";
import spaceVideo from "../assets/space.mp4";
import "./VideoStyle.scss";

const Video = () => {
  return (
    <div className="container">
      <video autoPlay loop muted className="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h2 className="content__header">Galaxy. Travel.</h2>
        <p className="content__txt">world's first civilian space travel.</p>
        <Link to="./contact" className="content__btn">
          Launch
        </Link>
      </div>
    </div>
  );
};

export default Video;
