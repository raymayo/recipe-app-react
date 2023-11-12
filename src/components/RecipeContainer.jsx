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
							<img
								className="recipeImage"
								src={recipe.image}
								alt={recipe.title}
							/>
							<div className="recipeInfoBox">
								<h1>{recipe.title}</h1>
								<div className="tags">
									<p className="recipeInfo">
										asdasdasda
										{/* {String(recipe.dishType).charAt(0).toUpperCase() +
											String(recipe.dishType).slice(1)} */}
									</p>
									<p className="recipeInfo">
										{/* {recipe.calories.toFixed(0)} */}
										1212
										<span>cal</span>
									</p>
								</div>
								{/* <p>{recipe.healthLabels.join(' • ')}</p> */}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default RecipeContainer;
