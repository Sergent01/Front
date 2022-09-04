import React, { useEffect, useState } from "react";

import styles from "./StepInput.module.scss";

const StepInput = (props) => {
  const [user, setUser] = useState(Object);
  const [address, setAddress] = useState(Object);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.key0 == "address") {
      let obj = {
        street: address.street,
        zipCode: address.zipCode,
        city: address.city,
      };
      props.object[props.key0] = obj;
    } else {
      props.object[props.key1] = user.firstName;
      props.object[props.key2] = user.lastName;
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
