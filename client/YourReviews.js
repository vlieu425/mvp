import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile';

const YourReviews = ({yourReviewsPage}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/api/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [])

  console.log(reviews);
  const filteredReviews = reviews.filter((review) => review.email === 'test@test.com');

  return (
    <div>
      <h1>Your Reviews</h1>
      {filteredReviews.map((review) => (
        <ReviewTile key={review.review_id} review={review} yourReviewsPage={yourReviewsPage} setReviews={setReviews}/>
      ))}
    </div>
  );
};

export default YourReviews;