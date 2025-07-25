import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import AVATAR from "../../images/avatar.jpg"; // Assuming you have a logo image in your assets folder
import { FaSearch } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { PiCat } from "react-icons/pi";
import stuff from "../../images/stuff.svg"; // Assuming you have an Artboard image
import classes from "../../styles/Header.module.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        {" "}
        <Link to={ROUTES.HOME} className={classes.logoLink}>
          <h1 className={classes.logoText}>
            <img src={stuff} alt="Logo" />
          </h1>
          <PiCat />
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.user}>
          <div
            className={classes.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={classes.username}>Guest</div>
        </div>
        <form className={classes.form}>
          <div className={classes.icon}>
            <FaSearch className={classes.searchIcon} />
          </div>
          <div className={classes.input}>
            <input
              type="search"
              name="search"
              placeholder=" Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value={""}
              className={classes.searchInput}
            />
          </div>
          {false && <div className={classes.box}></div>}
        </form>
        <div className={classes.account}>
          <Link to={ROUTES.HOME} className={classes.accountLink}>
            <IoIosHeart className={classes.accountIcon} />
          </Link>
          <Link to={ROUTES.CART} className={classes.cart}>
            <FaShoppingBag className={classes.icon_cart} />
            <span className={classes.cartCount}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
