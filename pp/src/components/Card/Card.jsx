import React from 'react';
import './Card.css';

function Card({ image, title, description, limit }) {
  return (
      <div className="card">
        <img src={image} alt="content" className="card-image" />
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <p className="card-limit">{limit}</p>
        </div>
      </div>
  );
}

export default Card;