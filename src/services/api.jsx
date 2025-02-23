const API_URL = import.meta.env.VITE_API_URL;

export const getRecipes = async () => {
  try {
    const response = await fetch(`${API_URL}/recipes`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const addRecipe = async (recipeData) => {
  try {
    const response = await fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};
