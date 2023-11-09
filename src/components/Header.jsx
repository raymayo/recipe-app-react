/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import RecipeSearchInput from './RecipeSearchInput';

const Header = ({ query, setQuery, handleSearchClick }) => {
  return (
    <header>
      <h1>Your Recipe App</h1>
      <RecipeSearchInput query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
    </header>
  );
};

export default Header;
