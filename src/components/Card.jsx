import React from 'react';
import "./style/Card.css" // Import the CSS file for styling

const Card = ({ title, content, }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
