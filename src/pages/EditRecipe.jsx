import React, { useState } from "react";

const EditRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Updated:", recipe);
  };

  return (
    <div className="edit-recipe">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
