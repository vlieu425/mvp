import React from 'react';

const Filters = ({setFavoriteFilter}) => {
  // Add your code here
  const handleFilterChange = (event) => {
    // const value = event.target.value;
    // if (value === "favorites") {
    //   setFavoriteFilter(true);
    // } else {
    //   setFavoriteFilter(false);
    // }
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="favorites">Favorites</option>
      </select>
    </div>
  );
};

export default Filters;