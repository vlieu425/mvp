import React, { useState } from 'react';

function DogRating({
  ratingToDisplay, interactive, onRatingChange,
}) {
  const [rating, setRating] = useState(ratingToDisplay);

  const handleStarClick = (starIndex) => {
    if (interactive) {
      setRating(starIndex);
      onRatingChange(starIndex);
    }
  };

  return (
    <div
      aria-labelledby="overallRating"
      className="starRating"
    >
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <span
          key={starIndex}
          className={`star ${starIndex <= rating ? 'filled' : ''}${interactive ? ' interactive' : ''}`}
          onClick={() => handleStarClick(starIndex)}
        >
          🐶
        </span>
      ))}
    </div>
  );
}

export default DogRating;