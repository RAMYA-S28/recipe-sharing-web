import { useState } from "react";
import "../styles/AddRecipe.css";

const AddRecipe = ({ onAdd }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.instructions) {
      alert("All fields are required!");
      return;
    }
    onAdd(recipe);
    setRecipe({ title: "", ingredients: "", instructions: "", image: "" });
  };

  return (
    <div className="add-recipe">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={recipe.image}
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
