import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "vada pav",
    description: "bun and potato",
    price: 30,
  },
  {
    id: "m2",
    name: "pizza",
    description: " flat base of leavened wheat-based dough topped with various ingredients,",
    price: 90,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const somtn = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card debug="debg">
        <ul>{somtn}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
