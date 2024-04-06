import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewsList = ({reviews, yourReviewsPage}) => {
  console.log("REVIEWS", reviews);

  const reviewsArray = Array.isArray(reviews) ? reviews : [reviews];

  return (
    <div>
      {/* Your code here */}
      {reviewsArray && reviewsArray.map(review => (
        <ReviewTile key={review.review_id} review={review} yourReviewsPage={yourReviewsPage}/>
      ))
      }
    </div>
  );
};

export default ReviewsList;