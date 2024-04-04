import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToHome = () => {
    navigate('/');
  }


  return (

    <div className="header-content">
      <span className="app-name" onClick={navigateToHome}>BARK! </span>

      <span>
      <button> Favorites </button>
      <button onClick={navigateToLogin}> Log In </button>
      </span>
    </div>

        );
};

export default Header;