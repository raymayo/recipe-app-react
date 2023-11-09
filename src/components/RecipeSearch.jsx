/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(''); // Input for recipe search
  const [loading, setLoading] = useState(false);
  const [prevQuery, setPrevQuery] = useState('');

  const APP_ID = '479211e1';
  const APP_KEY = '1738191134fae3bfdf63b016caa4d9c3';

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchClick = () => {
    if (query && query !== prevQuery) {
      fetchData();
      setPrevQuery(query);
    }
  };

  return (
    <div>
      <Header query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
      <RecipeContainer loading={loading} recipes={recipes} />
    </div>
  );
};

export default RecipeSearch;
