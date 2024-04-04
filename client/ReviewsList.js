import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewsList = ({reviews}) => {
  return (
    <div>
      {/* Your code here */}
      REVIEWSLIST
      {reviews.map(review => (
        <ReviewTile key={review.review_id} review={review} />
      ))
      }
    </div>
  );
};

export default ReviewsList;