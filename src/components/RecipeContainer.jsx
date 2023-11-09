/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RecipeContainer = ({ loading, recipes }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipeCard">
              <img className='recipeImage' src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div className="recipeInfoBox">
                <h1>{recipe.recipe.label}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeContainer;
