import React, { useEffect, useState } from "react";

import HeaderLogo from "../headerLogo/HeaderLogo";
import icon from "../../../../public/connexion.png"

import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  const [y, setY] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY < 200) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div className={`${styles.menu__main} ${isScroll === true && styles.isActive} `}>
      <nav>
        <ul>
          <li>
            <HeaderLogo />
          </li>
          <li>Ancre n°1</li>
          <li>Ancre n°2</li>
          <li>Ancre n°3</li>
          <li><img src={icon.src} alt="SFAH"/></li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
