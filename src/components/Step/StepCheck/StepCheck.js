import React, { useState } from "react";

import styles from "./StepCheck.module.scss";

const StepCheck = (props) => {
  const [select, setSelect] = useState("");

  const obj = {};

  const handleSubmit = (e) => {
    e.preventDefault();

    obj[props.key1] = select;
    props.setArray((array) => [...array, obj]);

    props.setStep(props.step + 1);
  };

  return (
    <div className={styles.stepcheck__main}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>{props.issue}</legend>
        <div className={styles.stepcheck__content}>
          <input
            type="radio"
            name="drone"
            value="yes"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          />
          <label>Oui</label>
        </div>

        <div className={styles.stepcheck__content}>
          <input
            type="radio"
            name="drone"
            value="no"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          />
          <label>Non</label>
        </div>
        <div className={styles.stepInput__btn}>
          <input className="btn btn-black" value="Validé" type="submit" />
          {/* {error ? <p>{errorMessage}</p> : ""} */}
        </div>
      </form>
    </div>
  );
};

export default StepCheck;
