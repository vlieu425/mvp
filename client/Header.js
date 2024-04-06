import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({yourReviewsPage, setYourReviewsPage}) => {
  let navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/login');
    setYourReviewsPage(false)
  };

  const navigateToHome = () => {
    navigate('/');
    setYourReviewsPage(false)
  }

  const navigateToYourReviews = () => {
    navigate('/reviews');
    setYourReviewsPage(true)
  }


  return (

    <div className="header-content">
      <span className="app-name" onClick={navigateToHome}>BARK! </span>

      <span>
      <button onClick={navigateToYourReviews}> Your Reviews </button>
      <button onClick={navigateToLogin}> Log In </button>
      </span>
    </div>

        );
};

export default Header;