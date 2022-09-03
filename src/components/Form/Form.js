import React, { useState } from "react";

import styles from "./Form.module.scss";

import StepButton from "../Step/StepButton/StepButton";
import StepInput from "../Step/StepInput/StepInput";

const Form = () => {
  const [step, setStep] = useState(2);
  const lst = [
    "situation",
    "state",
    "firstName",
    "lastName",
    "address",
    "request",
    "assistance",
    "phone",
    "email",
  ];
  var trip = new Object();

  return (
    <div className={styles.form__main}>
      <div className={styles.form__title}>
        <h3>Poêle à Granulés Livré Posé au Meilleur prix</h3>
      </div>
      <div className={styles.form__contain}>
        {step == 0 && (
          <StepButton
            title="Votre situation"
            btn1="Propriétaire"
            btn2="Locataire"
            object={trip}
            step={step}
            setStep={setStep}
            key="situation"
          />
        )}
        {step == 1 && (
          <StepButton
            title="État de votre bien"
            btn1="Terminé"
            btn2="Construction"
            object={trip}
            step={step}
            setStep={setStep}
            key="state"
          />
        )}
        {step == 2 && (
          <StepInput
            label1="Votre Prénom :"
            label2="Votre Nom :"
            object={trip}
            step={step}
            setStep={setStep}
            key1="firstName"
            key2="lastName"
          />
        )}
      </div>
      <div className={styles.form__btn}>
        {/* Dans le cas ou il y a un bouton suivant */}
      </div>
    </div>
  );
};

export default Form;
