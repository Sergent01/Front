import React from "react";
import Logo from "../../../../public/logo.png";

import Link from "next/link";

import styles from "./HeaderLogo.module.scss";

const Headerlogo = (props) => {
  return (
    <div className={styles.header__logo}>
      <img src={Logo.src} alt="SFAH" />
    </div>
  );
};

export default Headerlogo;
