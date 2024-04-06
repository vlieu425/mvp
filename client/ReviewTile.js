import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import RatingSummary from './RatingSummary';

const ReviewTile = ({review, yourReviewsPage, setReviews}) => {

  console.log("DELETE BUTTON", yourReviewsPage)
  const handleDelete = () => {
    axios.delete(`/api/reviews/${review.review_id}`)
    .then((response) => {
      console.log('Review deleted');
      axios.get('/api/reviews')
      .then((response) => {
        setReviews(response.data);
        console.log("REVIEWS UPDATED", response.data);
      })
    })

    .catch((error) => {
      console.error('Error deleting review: ', error);
    })
  }

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
      {yourReviewsPage && <button onClick={handleDelete}>DELETE</button>}
    </div>
  );
};

export default ReviewTile;