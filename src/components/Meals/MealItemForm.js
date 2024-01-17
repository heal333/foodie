import { useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();//to prevent auto reloading the page after submiting
    const enteredAmountNumber = +amountInputRef.current.value;//used addition sign to convert string to integer
    props.onAddToCart(enteredAmountNumber);
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};
export default MealItemForm;
