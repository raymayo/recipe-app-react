/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function RecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(''); // Input for recipe search
  const [loading, setLoading] = useState(false);

  const APP_ID = '479211e1';
  const APP_KEY = '1738191134fae3bfdf63b016caa4d9c3';

  useEffect(() => {
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

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-item">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div>
                <p>{recipe.recipe.calories.toFixed(0)} cal</p>
                <p>{recipe.recipe.cuisineType}</p>
              </div>
              <p>{recipe.recipe.label}</p>
              <p>{recipe.recipe.healthLabels.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

export default RecipeSearch;
