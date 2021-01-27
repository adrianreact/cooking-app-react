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
    ingredientsId: [0, 1],
  },
  {
    id: 1,
    name: "Parowki",
    cookTime: "2:00",
    servings: "12",
    instructions: "przykladowa instrukcja 2",
    ingredientsId: [2, 3],
  },
];

const INGREDIENTS = [
  {
    id: 0,
    name: "mleko",
    amount: "500 ml",
  },
  {
    id: 1,
    name: "maka",
    amount: "300 g",
  },
  {
    id: 2,
    name: "parowki",
    amount: "12 szt",
  },
  {
    id: 3,
    name: "woda",
    amount: "1l",
  },
];

function App() {
  const [recipes, setRecipes] = useState(RECIPES);
  const [ingredients, setIngredients] = useState(INGREDIENTS);
  const [ifEditor, setIfEditor] = useState(true);

  const getIngredients = (ids) => {
    return ingredients.reduce((prev, curr) => {
      if (ids.includes(curr.id)) prev.push(curr);
      return prev;
    }, []);
  };

  const showEditor = () => {
    setIfEditor(true);
  };

  const hideEditor = () => {
    setIfEditor(false);
  };

  const addRecipe = (
    name,
    cookTime,
    servings,
    instructions,
    newIngredients
  ) => {
    //const findLastId = INGREDIEN... reduce.

    //add ingredients

    //filter

    setRecipes([
      ...recipes.concat({
        id: recipes.length,
        name,
        cookTime,
        servings,
        instructions,
        ingredientsId: [0, 3],
      }),
    ]);
    setIfEditor(false);
  };

  console.log("ingredients arr", ingredients);

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
