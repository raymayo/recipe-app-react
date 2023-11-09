/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import '../styles/RecipeSearch.css';

function RecipeSearch() {
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
			<div id="recipeSearchBox">
				<input
					type="text"
					id="recipeSearchInput"
					placeholder="Search for recipes"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				<button id="recipeSearchBtn" onClick={handleSearchClick}>
        <HiMagnifyingGlass size={20}/>
				</button>
			</div>

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
}

export default RecipeSearch;
