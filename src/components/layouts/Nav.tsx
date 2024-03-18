import React, { useState } from "react";

import styles from "./Nav.module.css";
import { getImageUrl } from "../../utils/getImageUrl";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Profile
      </a>
      <div className={styles.menu}>
        {menuOpen && (
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="experience">Experience</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
          </ul>
        )}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  );
};
