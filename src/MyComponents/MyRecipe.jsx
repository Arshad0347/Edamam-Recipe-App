const MyRecipe = (props) => {
  return (
      <div className="recipe-card">
          <img src={props.recipeList.recipe.image} alt={props.recipeList.recipe.label} />
          <div className="recipe-content">
              <h1>{props.recipeList.recipe.label}</h1>
              <h3>Cuisine Type: {props.recipeList.recipe.cuisineType}</h3>
              <p>Calories: {Math.round(props.recipeList.recipe.calories)}</p>
          </div>
      </div>
  );
};

export default MyRecipe;