import foodItemStyle from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={foodItemStyle.itemContainer}>
      <img className={foodItemStyle.itemImage} src={food.image} alt="" />
      <div className={foodItemStyle.itemContent}>
        <p className={foodItemStyle.itemName}>{food.title}</p>
      </div>
      <div className={foodItemStyle.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={foodItemStyle.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
