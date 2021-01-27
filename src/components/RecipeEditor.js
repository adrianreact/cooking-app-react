import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import IngredientForm from "./IngredientForm";

function RecipeEditor({ hideEditor, addRecipe, enlargeIngredientsArr }) {
  const [nameValue, setNameValue] = useState("");
  const [cookTimeValue, setCookTimeValue] = useState("");
  const [servingsValue, setServingsValue] = useState("");
  const [instructionsValue, setInstructionsValue] = useState("");
  const [ingredientsValues, setIngredientsValues] = useState([
    { _id: 0, name: "ziemniaki", value: "2kg" },
    { _id: 1, name: "buraki", value: "3kg" },
  ]);

  const nameChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const cookTimeChangeHandler = (e) => {
    setCookTimeValue(e.target.value);
  };

  const servingsChangeHandler = (e) => {
    setServingsValue(e.target.value);
  };

  const instructionsChangeHandler = (e) => {
    setInstructionsValue(e.target.value);
  };

  return (
    <div className="recipe-editor">
      <div className="close-editor" onClick={hideEditor}>
        <CgClose style={{ width: 23, height: 23, cursor: "pointer" }} />
      </div>
      <div className="form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cook-time">Cook Time</label>
          <input
            type="text"
            id="cook-time"
            value={cookTimeValue}
            onChange={cookTimeChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            value={servingsValue}
            onChange={servingsChangeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            cols="30"
            rows="6"
            value={instructionsValue}
            onChange={instructionsChangeHandler}
          ></textarea>
        </div>
        <div className="form-field ingredients-field">
          <h4>Ingredients</h4>
          <div className="ingredients-labels">
            <span>Name</span>
            <span>Amount</span>
          </div>
          <IngredientForm
            ingredientsValues={ingredientsValues}
            setIngredientsValues={setIngredientsValues}
          />
        </div>
      </div>

      <div className="save-changes">
        <button
          className="button-1"
          onClick={() => {
            addRecipe(
              nameValue,
              cookTimeValue,
              servingsValue,
              instructionsValue,
              ingredientsValues
            );
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default RecipeEditor;
