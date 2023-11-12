/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(''); // Input for recipe search
  const [loading, setLoading] = useState(false);
  const [prevQuery, setPrevQuery] = useState('');

  const api_KEY = import.meta.env.VITE_API_KEY;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_KEY}&query=${query}&cuisine=true`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRecipes(data.results);
      console.log(data.results);
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
