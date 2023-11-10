/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiFunnel } from 'react-icons/hi2';
// HiChevronDown


const RecipeSearchInput = ({ query, setQuery, handleSearchClick }) => {
  return (
    <div id="recipeSearchBox">
      <button id='recipeSearchDropdown'>
      <HiFunnel size={20} />
      </button>
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
