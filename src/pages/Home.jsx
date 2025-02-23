import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import api from "../services/api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((response) => setRecipes(response.data));
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
