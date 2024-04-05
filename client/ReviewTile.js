import React from 'react';
import RatingSummary from './RatingSummary';

const ReviewTile = ({review}) => {

  console.log("REVIEWTILE INFO", review)
  return (
    <div className="reviews-tile">
      {/* Your component content goes here */}
      <div className="review-header">
        <RatingSummary rating={review.rating} />
      {review.username}
      </div>

      {review.review_body}

      <br/>
      <button>Upvote</button>  {review.upvotes}
      <button>Downvote</button>    {review.downvotes}
      <button>Report</button>
    </div>
  );
};

export default ReviewTile;