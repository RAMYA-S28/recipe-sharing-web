import { Link } from "react-router-dom";
import styles from "../styles/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description.substring(0, 100)}...</p>
      <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
    </div>
  );
};

export default RecipeCard;
