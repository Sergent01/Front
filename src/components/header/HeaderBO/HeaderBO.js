import React from "react";
import { useRouter } from "next/router";

import styles from "./HeaderBO.module.scss";

import Icon from "../../../../public/retour.png";

const HeaderBO = () => {
  const router = useRouter();
  const redirectTo = () => {
    router.push({ pathname: `/` });
  };
  const logout = () => {
    localStorage.removeItem("token");
    redirectTo()
  };

  return (
    <div className={styles.headerBO__main}>
      <div className={styles.headerBO__title}>
        <h2>Back Office</h2>
      </div>
      <div className={styles.headerBO__button}>
        <div className={styles.headerBO__btn_logout}>
          <p onClick={() => logout()}>DECONNEXION</p>
        </div>
        <div className={styles.headerBO__btn_redirect}>
          <img onClick={() => redirectTo()} src={Icon.src} />
        </div>
      </div>
    </div>
  );
};

export default HeaderBO;
