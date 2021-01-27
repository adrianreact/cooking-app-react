import React from "react";
import IngredientEditor from "./IngredientEditor";
import { RiAddCircleFill } from "react-icons/ri";

function IngredientForm({ ingredientsValues, setIngredientsValues }) {
  const updateIngredient = (id, key, value) => {
    const updatedIngredients = ingredientsValues.map(_ingredient => {
      if (_ingredient._id === id) _ingredient[key] = value;
      return _ingredient;
    });
    setIngredientsValues(updatedIngredients);
  };

  const addNewIngredient = () => {
    setIngredientsValues([
      ...ingredientsValues.concat({
        _id: ingredientsValues.length,
        name: "",
        value: "",
      }),
    ]);
  };

  return (
    <div className="ingredients-list">
      {ingredientsValues.map(ingredient => {
        return (
          <IngredientEditor
            key={ingredient._id}
            ingredient={ingredient}
            updateIngredient={updateIngredient}
          />
        );
      })}

      <RiAddCircleFill
        onClick={addNewIngredient}
        style={{ width: 25, height: 25, cursor: "pointer", marginTop: 10 }}
      />
    </div>
  );
}

export default IngredientForm;
