import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.scss";

const PricingCard = (props) => {
  return (
    <div className="card">
      <h2 className="card__title">{props.item.title}</h2>
      <span className="card__bar"></span>
      <span className="card__btc">{props.item.btc}</span>
      <p>{props.item.Views}</p>
      <p>{props.item.featured}</p>
      <p>{props.item.duration}</p>
      <p>{props.item.quarters}</p>
      <Link to="/contact" className="card__btn">
        Book
      </Link>
    </div>
  );
};

export default PricingCard;
