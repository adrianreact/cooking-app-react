import React from "react";
import Ingredient from "./Ingredient";

function Recipe({ name, cookTime, servings, instructions, recipeIngredients }) {
  return (
    <div className="recipe">
      <h1>{name}</h1>
      <p>
        Cook Time: <span>{cookTime}</span>
      </p>
      <p>
        Servings: <span>{servings}</span>
      </p>
      <p>
        Instructions: <span className="instruction">{instructions}</span>
      </p>
      <p>
        Ingredients:{" "}
        <span className="ingredients">
          {recipeIngredients.map(ingredient => (
            <Ingredient
              key={ingredient.id}
              name={ingredient.name}
              amount={ingredient.amount}
            />
          ))}
        </span>
      </p>
    </div>
  );
}

export default Recipe;
