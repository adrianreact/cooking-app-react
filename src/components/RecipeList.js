import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, getIngredients, showEditor }) {
  const allRecipes = recipes.map(recipe => {
    const recipeIngredients = getIngredients(recipe.ingredients);

    return (
      <Recipe
        key={recipe.id}
        name={recipe.name}
        cookTime={recipe.cookTime}
        servings={recipe.servings}
        instructions={recipe.instructions}
        recipeIngredients={recipeIngredients}
      />
    );
  });

  return (
    <div className="recipe-list">
      {allRecipes}
      <div className="add-recipe">
        <button className="button-1" onClick={showEditor}>
          Add recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
