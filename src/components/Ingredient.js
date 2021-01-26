import React from "react";

function Ingredient({ name, amount }) {
  return (
    <span className="ingredient">
      <span>-{name}: </span>
      <span>{amount}</span>
    </span>
  );
}

export default Ingredient;
