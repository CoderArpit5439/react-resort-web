import React from 'react';
import img from '../assets/res1.jpg'

function ResortCard({ resort }) {
  return (
    <div className="card h-100">
      <img src={resort.image} className="card-img-top" alt={resort.name} />
      <div className="card-body">
        <h5 className="card-title">{resort.name}</h5>
        <p className="card-text">{resort.description}</p>
        <p className="text-muted">{resort.location}</p>
        <p><strong>${resort.price}</strong> / night</p>
      </div>
    </div>
  );
}

export default ResortCard;
