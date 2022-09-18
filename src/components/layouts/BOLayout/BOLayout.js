import React from "react";

import styles from "./BOLayout.module.scss";

import HeaderBO from "../../header/HeaderBO/HeaderBO";

const BOLayout = ({children}) => {
  return (
    <div className={styles.boLayout__main}>
      <>
        <header className={styles.header__main}>
          <HeaderBO/>
        </header>
        <main>{children}</main>
        <footer>{/* Ajouter footer */}</footer>
      </>
    </div>
  );
};

export default BOLayout;
