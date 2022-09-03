import React, { useEffect, useState } from "react";

import styles from "./StepInput.module.scss";

const StepInput = (props) => {
  const [user, setUser] = useState(Object);
  //   const AddElement = (step, object, lst) => {
  //     const key = lst[step];
  //     // object[key] = element;
  //     // console.log("Je suis object = ", object);
  //   };

//   useEffect(() => {
//     AddElement(props.step, props.object, props.lst);
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.object[props.key1] = user.firstName
    props.object[props.key2] = user.lastName

    console.log('====================================');
    console.log("Je suis props.object = ",props.object);
    console.log('====================================');
    props.setStep(props.step + 1)
    console.log('====================================');
    console.log("Je suis props.step = ",props.step);
    console.log('====================================');
  };

  return (
    <div className={styles.stepInput__main}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.stepInput__content}>
          <label>{props.label1}</label>
          <input
            type="text"
            placeholder={props.label1}
            required={true}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div className={styles.stepInput__content}>
          <label>{props.label2}</label>
          <input
            type="text"
            placeholder={props.label2}
            required={true}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div className={styles.stepInput__btn}>
          <input className="btn btn-black" value="M'inscrire" type="submit" />
          {/* {error ? <p>{errorMessage}</p> : ""} */}
        </div>
      </form>
    </div>
  );
};

export default StepInput;
