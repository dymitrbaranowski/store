import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import AVATAR from "../../images/avatar.jpg"; // Assuming you have a logo image in your assets folder
import { FaSearch } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { PiCat } from "react-icons/pi";
import stuff from "../../images/stuff.svg"; // Assuming you have an Artboard image
import styles from "./Header.module.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {" "}
        <Link to={ROUTES.HOME} className={styles.logoLink}>
          <h1 className={styles.logoText}>
            <img src={stuff} alt="Logo" />
          </h1>
          <PiCat />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <FaSearch className={styles.searchIcon} />
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder=" Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value={""}
              className={styles.searchInput}
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.accountLink}>
            <IoIosHeart className={styles.accountIcon} />
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <FaShoppingBag className={styles.icon_cart} />
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
