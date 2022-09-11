import React from "react";

import styles from "./StepButton.module.scss";

const StepButton = (props) => {
  const AddElement = (element, key) => {
    let obj = {};
    obj[key] = element;
    props.setArray((array) => [...array, obj]);
    props.setStep(props.step + 1);
  };

  return (
    <div className={styles.stepButton__main}>
      <div className={styles.stepButton__title}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.stepButton__container}>
        <div className={styles.stepButton__content}>
          <button
            className="btn btn-black"
            type="text"
            onClick={() => AddElement(props.btn1, props.isKey)}
          >
            {props.btn1}
          </button>
        </div>
        <div className={styles.stepButton__content}>
          <button
            className="btn btn-black"
            type="text"
            onClick={() => AddElement(props.btn2,props.isKey)}
          >
            {props.btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepButton;
