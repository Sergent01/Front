import React, { useEffect, useState } from "react";

import styles from "./StepInput.module.scss";

const StepInput = (props) => {
  const [user, setUser] = useState(Object);
  const [address, setAddress] = useState(Object);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};
    let lilObj = {}


    if (props.key0 == "address") {
        lilObj[props.key1] = address.street;
        lilObj[props.key2] = address.zipCode;
        lilObj[props.key3] = address.city;

        obj[props.key0] = lilObj
        props.setArray((array) => [...array, obj]);
        
    } else {
        obj[props.key1] = user.firstName;
        obj[props.key2] = user.lastName;
        props.setArray((array) => [...array, obj]);
    }
    props.setStep(props.step + 1);
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
              props.key0 != undefined
                ? setAddress({ ...address, street: e.target.value })
                : setUser({ ...user, firstName: e.target.value });
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
              props.key0 != undefined
                ? setAddress({ ...address, zipCode: e.target.value })
                : setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        {props.key0 != undefined && (
          <div className={styles.stepInput__content}>
            <label>{props.label3}</label>
            <input
              type="text"
              placeholder={props.label3}
              required={true}
              onChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
          </div>
        )}
        <div className={styles.stepInput__btn}>
          <input className="btn btn-black" value="Validé" type="submit" />
          {/* {error ? <p>{errorMessage}</p> : ""} */}
        </div>
      </form>
    </div>
  );
};

export default StepInput;
