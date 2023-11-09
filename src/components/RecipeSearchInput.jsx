/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const RecipeSearchInput = ({ query, setQuery, handleSearchClick }) => {
  return (
    <div id="recipeSearchBox">
      <input
        type="text"
        id="recipeSearchInput"
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="recipeSearchBtn" onClick={handleSearchClick}>
        <HiMagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default RecipeSearchInput;
