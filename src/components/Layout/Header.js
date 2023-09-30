import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './headerCartButton';
import mealsImage from '../../plugs/meals.jpg';
const Header = (props) => {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>foodie</h1>
          <HeaderCartButton onPress={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="where does this write"></img>
        </div>
      </React.Fragment>
    );
}

export default Header;