import React, { useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import ReactCardFlip from "react-card-flip";

const ContactMeCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };
  console.log(isFlipped);

  return (
    <div className="flip-card-wrapper">
      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <CardFront handleClick={handleClick} />
          <CardBack handleClick={handleClick} />
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default ContactMeCard;
