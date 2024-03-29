import { useRef,useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value=>value.trim()==='';
const isNotSixChars =value=> value.trim().length !==6;

const Checkout = (props) => {
  const [formValidity,setformValidity]=useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  })

  const nameInputRef=useRef();
  const streetInputRef=useRef();
  const postalInputRef=useRef();
  const cityInputRef=useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const validName = !isEmpty(nameInputRef.current.value);
    const validStreet = !isEmpty(streetInputRef.current.value);
    const validPostal = !isNotSixChars(postalInputRef.current.value);
    const validCity = !isEmpty(cityInputRef.current.value)

    setformValidity({
      name:validName,
      street: validStreet,
      postal: validPostal,
      city: validCity
    })

    const formIsValid = validName && validCity &&validPostal && validStreet;

    if (formIsValid){
      // submit
      props.onConfirm({
        name:nameInputRef.current.value,
        street:cityInputRef.current.value,
        postal:postalInputRef.current.value,
        city:cityInputRef.current.value
      });
    }

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name? "":classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
      </div>
      <div className={`${classes.control} ${formValidity.street? "":classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
      </div>
      <div className={`${classes.control} ${formValidity.postal? "":classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
      </div>
      <div className={`${classes.control} ${formValidity.city? "":classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;