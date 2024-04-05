import React from 'react';
import { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList';
import axios from 'axios';

const LocationModal = ( {location, closeModal}) => {
  const [reviews, setReviews] = useState([]);
  const [addReviewState, setAddReviewState] = useState(false);
  console.log("addReviewState", addReviewState)

  // console.log("LOCATION ID", location.location_id);
  // console.log("REVIEWS", reviews);

  useEffect(() => {
    axios.get(`api/reviews/${location.location_id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING")

    // Retrieve form data
    const rating = e.target.elements.rating.value;
    const review = e.target.elements.review.value;

    const data = {
      locationID: location.location_id,
      username: 'Vincent',
      email: 'test@test.com',
      reviewBody: review,
      rating: rating,
      // upvotes: 0,
      // downvotes: 0,
      // reported: false,
    };
    // Log form data
    // console.log("Rating:", rating);
    // console.log("Review:", review);

    axios.post('/api/reviews', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error submitting review: ', error);
    })
    axios.get(`api/reviews/${location.location_id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });

    // Reset the form
    e.target.reset();

    // Send form data to the server

    setAddReviewState(false);
  };



  return (
    <div className="modal-overlay">
      <div className="location-modal">
      <div className="close">
      <button onClick={closeModal} >X</button>
      </div>
        <h2>{location.name}</h2>
        <p>{location.address}</p>
        {
        addReviewState ? <div>
          <form onSubmit={handleSubmit}>
            <label>Rating:</label>
            <input type="number" min="1" max="5" name="rating" />
            <label>Review:</label>
            <input type="text" name="review" />
            <button type="submit">Submit</button>
          </form>
        </div>
        :
        <button onClick={()=>{setAddReviewState(true)}}>Add Review</button>
        }
        <ReviewsList reviews={reviews}/>
      </div>

    </div>
  );

};

export default LocationModal;