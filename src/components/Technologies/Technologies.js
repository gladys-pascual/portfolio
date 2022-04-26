import React from 'react';
import './Technologies.scss';
import ReactTooltip from 'react-tooltip';

const Technologies = ({ imgUrl, title }) => {
  return (
    <div className="technologies-wrapper">
      <img src={imgUrl} alt={title} data-tip data-for={imgUrl} />
      <ReactTooltip id={imgUrl} type="light">
        <span>{title}</span>
      </ReactTooltip>
    </div>
  );
};

export default Technologies;
