import api from "./api";

export const getRecipes = async () => {
  const response = await api.get("/recipes");
  return response.data;
};

export const createRecipe = async (recipe) => {
  const response = await api.post("/recipes", recipe);
  return response.data;
};
