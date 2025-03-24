import React from 'react';

const ItineraryItem = ({ time, activity, description }) => {
  return (
    <div className="itinerary-item">
      <div className="item-time">{time}</div>
      <div className="item-details">
        <div className="item-activity">{activity}</div>
        <div className="item-description">{description}</div>
      </div>
    </div>
  );
};

export default ItineraryItem;
