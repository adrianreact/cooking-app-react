import React from "react";
import { AiFillDelete } from "react-icons/ai";

function IngredientEditor({ ingredient, updateIngredient }) {
  const { name, value, _id } = ingredient;

  return (
    <div className="single-ingredient">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          updateIngredient(_id, "name", e.target.value);
        }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => {
          updateIngredient(_id, "value", e.target.value);
        }}
      />
      <AiFillDelete style={{ width: 25, height: 25, cursor: "pointer" }} />
    </div>
  );
}

export default IngredientEditor;
