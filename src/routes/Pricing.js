import React from "react";
import Nav from "../components/Nav";
import PricingImage from "../components/PricingImage";
import PricingCard from "../components/PricingCard";
import CardDetails from "../components/CardDetails";

const Pricing = () => {
  const Items = CardDetails.map((item) => {
    return <PricingCard key={item.title} item={item} />;
  });

  return (
    <div>
      <Nav />
      <PricingImage />
      <h1 className="title">Choose your trip</h1>
      <div className="cards-container">
        {Items} <br />
      </div>
    </div>
  );
};

export default Pricing;
