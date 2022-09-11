import React, { useState, useEffect } from "react";

import styles from "./Form.module.scss";

import StepButton from "../Step/StepButton/StepButton";
import StepInput from "../Step/StepInput/StepInput";
import StepCheck from "../Step/StepCheck/StepCheck";

const Form = () => {
  const [step, setStep] = useState(0);
  const [array, setArray] = useState({});
  //   const [sendObj, setSendObj] = useState({});

  let sendObj = {};

  if (step == 7) {
    console.log("Je suis obj = ",array);
  }

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
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            isKey="situation"
          />
        )}
        {step == 1 && (
          <StepButton
            title="État de votre bien"
            btn1="Terminé"
            btn2="Construction"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            isKey="state"
          />
        )}
        {step == 2 && (
          <StepInput
            label1="Votre Prénom :"
            label2="Votre Nom :"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            key1="firstName"
            key2="lastName"
          />
        )}
        {step == 3 && (
          <StepInput
            label1="Rue :"
            label2="Code Postale :"
            label3="Ville :"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            key0="address"
            key1="street"
            key2="zipCode"
            key3="city"
          />
        )}
        {step == 4 && (
          <StepCheck
            issue="Avez-vous une de demande en cours auprès de « Maprime Renov » ?"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            key1="request"
          />
        )}
        {step == 5 && (
          <StepCheck
            issue="Avez-vous déjà bénéficié d’une aide Maprime Rénov pour une autre catégorie de travaux ?"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            key1="assistance"
          />
        )}
        {step == 6 && (
          <StepInput
            label1="Numéro :"
            label2="Email :"
            array={array}
            setArray={setArray}
            step={step}
            setStep={setStep}
            key1="phone"
            key2="email"
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
