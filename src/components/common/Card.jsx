import React from 'react';

const Card = ({ name, logo, description }) => {
  return (
    <div className="card border-0 shadow text-center h-100">
      <div
        className="w-100"
        style={{
          height: '200px',
          overflow: 'hidden',
          borderRadius: '0.5rem',
        }}
      >
        <img
          src={logo}
          alt={name}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold text-success mt-3">{name}</h5>
        <p className="text-muted small flex-grow-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
