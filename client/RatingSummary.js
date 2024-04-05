import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const RatingSummary = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="rating-summary">
      <div className="star-rating-wrapper">
        {[...Array(5)].map((_, index) => (
          <div className="star" key={index}>
            {index < filledStars ? (
              <i className="fas fa-paw"></i>
            ) : hasHalfStar && index === filledStars ? (
              <i className="fas fa-paw-half"></i>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;