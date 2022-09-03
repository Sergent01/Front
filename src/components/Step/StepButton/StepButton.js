import React from "react";

import styles from "./StepButton.module.scss";

const StepButton = (props) => {
  const AddElement = (step, object, key, element) => {
    object[key] = element;

    ChangeStep(step, props.setStep);
  };

  const ChangeStep = (step, setStep) => {
    setStep(step + 1);
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
            onClick={() =>
              AddElement(props.step, props.object, props.key, props.btn1)
            }
          >
            {props.btn1}
          </button>
        </div>
        <div className={styles.stepButton__content}>
          <button
            className="btn btn-black"
            type="text"
            onClick={() =>
              AddElement(props.step, props.object, props.key, props.btn2)
            }
          >
            {props.btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepButton;
