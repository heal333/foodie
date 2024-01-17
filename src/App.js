import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setcartIsShown] = useState(false);

  //will show the cart when this function is called
  const showCartHandler = () => {
    setcartIsShown(true);
  };

  //funtion to change the cartIsShown state
  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
};

export default App;
