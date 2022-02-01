import React from 'react';
import './ContactMeCard.scss';

const CardFront = ({ handleClick }) => {
  return (
    <section className="flip-card-front">
      <img
        src="pictures/card-front.svg"
        alt="Gladys Pascual, Software Developer"
        className="card-title"
      />
      <button onClick={handleClick} className="flip-me">
        ((( Flip Me )))
      </button>
    </section>
  );
};

export default CardFront;
