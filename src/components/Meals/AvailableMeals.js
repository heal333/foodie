import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]); //array of meal items fetched form firebase
  const [isLoading, setIsLoading] = useState(true); //to show a loading text until date is fetched

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodie-53936-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].value,
        });
      }
      setIsLoading(false);
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);


  //to render loading state until fetching is completed
  if (isLoading) {
    return (
      <section className={classes.isLoading}>
        <p>loading.....</p>
      </section>
    );
  }

  const mealsListJSX = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsListJSX}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
