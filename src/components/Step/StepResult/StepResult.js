import React from "react";

import Img1 from "../../../../public/approbation.png";
import Img2 from "../../../../public/annuler.png"

import styles from "./StepResult.module.scss";

const StepResult = (props) => {
  return (
    <div className={styles.stepResult__main}>
      {props.result === 201 ? (
        <>
          <div className={styles.stepResult__main_img}>
            <img src={Img1.src} alt="valid" />
          </div>
          <div className={styles.stepResult__main_text}>
            <h3>Felicitations, vous êtes eligible</h3>
            <p>Nous vous contacterons d'ici quelques jours</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.stepResult__main_img}>
            <img src={Img2.src} alt="valid" />
          </div>
          <div className={styles.stepResult__main_text}>
            <h3>Malheureusement, vous n'êtes pas eligible</h3>
            <p>Nous sommes désolés mais nous ne pouvons pas donner suite à votre demande</p>
          </div>
        </>
      )}
    </div>
  );
};

export default StepResult;
