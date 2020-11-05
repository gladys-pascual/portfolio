import React from "react";
import "./Technologies.scss";

const Technologies = ({ imgUrl, title }) => {
  return (
    <div className="technologies-wrapper">
      <img src={imgUrl} alt={title} />
    </div>
  );
};

export default Technologies;
