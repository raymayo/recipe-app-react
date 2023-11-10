/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import RecipeSearchInput from './RecipeSearchInput';
import { HiBars3 } from 'react-icons/hi2';
import { PiShrimpFill } from 'react-icons/pi';


const Header = ({ query, setQuery, handleSearchClick }) => {
  return (
    <header>
      <div className='icon'>
        <PiShrimpFill size={40} id='logo'/>
        <h1> PrawnPal</h1>
        </div>
      <RecipeSearchInput query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
      <HiBars3 className='icon' size={25}/>
    </header>
  );
};

export default Header;
