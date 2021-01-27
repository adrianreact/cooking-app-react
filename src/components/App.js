import React, { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import RecipeEditor from "./RecipeEditor";

const RECIPES = [
  {
    id: 0,
    name: "Nalesniki",
    cookTime: "0:30",
    servings: "5",
    instructions: "przykladowa instrukcja 1",
    ingredients: [
      { id: 0, amount: "500 ml" },
      { id: 1, amount: "300 g" },
    ],
  },
  {
    id: 1,
    name: "Parowki",
    cookTime: "2:00",
    servings: "12",
    instructions: "przykladowa instrukcja 2",
    ingredients: [
      { id: 2, amount: "12 szt" },
      { id: 3, amount: "1l" },
    ],
  },
];

const INGREDIENTS = [
  {
    id: 0,
    name: "mleko",
  },
  {
    id: 1,
    name: "maka",
  },
  {
    id: 2,
    name: "parowki",
  },
  {
    id: 3,
    name: "woda",
  },
];

function App() {
  const [recipes, setRecipes] = useState(RECIPES);
  const [ingredients, setIngredients] = useState(INGREDIENTS);
  const [ifEditor, setIfEditor] = useState(true);
  console.log("ingredients", ingredients);
  console.log("recipes", recipes);

  const getIngredients = recipeIngredients => {
    return ingredients.reduce((prev, curr) => {
      const currentIngredient = recipeIngredients.find(
        ing => ing.id === curr.id
      );
      if (currentIngredient)
        prev.push({ ...curr, amount: currentIngredient.amount });
      return prev;
    }, []);
  };

  const showEditor = () => setIfEditor(true);
  const hideEditor = () => setIfEditor(false);

  const addRecipe = (
    name,
    cookTime,
    servings,
    instructions,
    recipeIngredients
  ) => {
    let lastId = ingredients.reduce(
      (prev, curr) => (curr.id > prev ? curr.id : prev),
      0
    );

    const updatedRecipeIngredients = recipeIngredients.map(recipeIngredient => {
      const ingredient = ingredients.find(
        ingredient => ingredient.name === recipeIngredient.name
      );
      if (ingredient) {
        recipeIngredient.id = ingredient.id;
        recipeIngredient.present = true;
      } else {
        recipeIngredient.id = lastId + 1;
        recipeIngredient.present = false;
        lastId += 1;
      }
      return recipeIngredient;
    });

    setIngredients([
      ...ingredients,
      ...updatedRecipeIngredients
        .filter(ingredient => !ingredient.present)
        .map(ingredient => ({ id: ingredient.id, name: ingredient.name })),
    ]);

    setRecipes([
      ...recipes.concat({
        id: recipes.length,
        name,
        cookTime,
        servings,
        instructions,
        ingredients: updatedRecipeIngredients.map(ingredient => ({
          id: ingredient.id,
          amount: ingredient.value,
        })),
      }),
    ]);
    setIfEditor(false);
  };

  return (
    <div className="cooking-recipe-app">
      <RecipeList
        recipes={recipes}
        getIngredients={getIngredients}
        showEditor={showEditor}
      />
      {ifEditor ? (
        <RecipeEditor hideEditor={hideEditor} addRecipe={addRecipe} />
      ) : null}
    </div>
  );
}

export default App;
