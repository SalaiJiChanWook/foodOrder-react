import { useEffect, useState } from "react";
import foodDetailsStyle from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY1 = "d24719424ac44e909166497eba21be08";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${API_KEY1}`);
      const data = await res.json();
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={foodDetailsStyle.recipeCard}>
        <h1 className={foodDetailsStyle.recipeName}>{food.title}</h1>
        <img className={foodDetailsStyle.recipeImage} src={food.image} alt="" />
        <div className={foodDetailsStyle.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪 <strong>Serves:{food.servings} people</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "Vegetarian food: 🥕" : " non- vegetarian: 🍖"}
            </strong>
          </span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          💲{""}
          <span>
            <strong>{food.pricePreServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={foodDetailsStyle.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...🔄</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => <i>{step.step}</i>)
          )}
        </ol>
      </div>
    </div>
  );
}
