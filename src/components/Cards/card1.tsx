import React from 'react';
import '../Cards/card.css'; // Assuming you place the styles in a separate CSS file

const Card: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>

      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>

      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>

      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>
    </div>
  );
};

export default Card;
