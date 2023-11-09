/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import RecipeSearchInput from './RecipeSearchInput';
import { HiUser } from 'react-icons/hi2';
import { PiShrimpFill } from 'react-icons/pi';


const Header = ({ query, setQuery, handleSearchClick }) => {
  return (
    <header>
      <div id='logo'>
        <PiShrimpFill size={45}/>
        <h1> PrawnPal</h1>
        </div>
      <RecipeSearchInput query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
      <HiUser size={25}/>
    </header>
  );
};

export default Header;
