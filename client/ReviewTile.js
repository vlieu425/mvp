import React from 'react';

const ReviewTile = ({review}) => {
  return (
    <div>
      {/* Your component content goes here */}
      {review.rating}
      {review.username}
      {review.review_body}
      {review.upvotes}
      {review.downvotes}
      REPORTED
    </div>
  );
};

export default ReviewTile;