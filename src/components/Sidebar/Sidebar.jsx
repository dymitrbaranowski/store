import React from "react";
import styles from "./sidebar.module.css"; // Assuming you have a CSS file for styling
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink to={`/categories/${1}`} className={styles.link}>
              Electronics
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a
          href="/help"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          style={{ marginLeft: "10px", textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
        <span className={styles.footerText}>Visit our website</span>
      </div>
    </section>
  );
};

export default Sidebar;
