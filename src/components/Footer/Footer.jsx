import React from "react";
import styles from "../../styles/Footer.module.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes"; // Assuming you have a routes file for navigation
import LOGO from "../../images/logo.svg"; // Assuming you have a logo image in your assets folder
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.LOGO}>
        <Link to={ROUTES.HOME} className={styles.logoLink}>
          <img
            src={LOGO}
            width={24}
            alt="Store Logo"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Store</span>
        </Link>
        <div className={styles.rights}>
          All rights reserved. 2023
          <a
            href="https://www.youtube.com/@dymitrbaranowski3134"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
            Privacy Policy
          </a>
        </div>

        <p>© 2023 Your Company. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className={styles.icon} />
            Twitter
          </a>
          ,{" "}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} />
            Facebook
          </a>
          , and{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className={styles.icon} />
            Instagram
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
