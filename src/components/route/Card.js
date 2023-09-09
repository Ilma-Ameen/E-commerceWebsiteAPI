import React from 'react';
import "./Card.css";

const Card = ({title, price, description, image, rating, category }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>rate: {rating}</p>
    </div>
  );
};

export default Card;
