import itemStyle from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={itemStyle.ItemContainer}>
        <div className={itemStyle.ImageContainer}>
          <img
            className={itemStyle.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>
        <div className={itemStyle.NameContainer}>
          <div className={itemStyle.Name}>{item.name}</div>
          <div className={itemStyle.Amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
