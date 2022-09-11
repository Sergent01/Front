import React, { useState, useEffect } from "react";

import styles from "./Form.module.scss";

import StepButton from "../Step/StepButton/StepButton";
import StepInput from "../Step/StepInput/StepInput";
import StepCheck from "../Step/StepCheck/StepCheck";

const Form = () => {
  const [step, setStep] = useState(0);
  const [obj, setObj] = useState({});
  const [state, setState] = useState("");

  if (step == 7) {
    parseInt(obj.address.zipCode);

    fetch(`${process.env.API_URL}/survey`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => console.log("Je suis data = ", data));
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
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            isKey="situation"
          />
        )}
        {step == 1 && (
          <StepButton
            title="État de votre bien"
            btn1="Terminé"
            btn2="Construction"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            isKey="state"
          />
        )}
        {step == 2 && (
          <StepInput
            label1="Votre Prénom :"
            label2="Votre Nom :"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            key1="firstName"
            key2="lastName"
          />
        )}
        {step == 3 && (
          <StepInput
            label1="Rue :"
            label2="Code Postale :"
            label3="Ville :"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            key0="address"
            key1="street"
            key2="zipCode"
            key3="city"
          />
        )}
        {step == 4 && (
          <StepCheck
            issue="Avez-vous une de demande en cours auprès de « Maprime Renov » ?"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            key1="request"
          />
        )}
        {step == 5 && (
          <StepCheck
            issue="Avez-vous déjà bénéficié d’une aide Maprime Rénov pour une autre catégorie de travaux ?"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
            key1="assistance"
          />
        )}
        {step == 6 && (
          <StepInput
            label1="Numéro :"
            label2="Email :"
            step={step}
            setStep={setStep}
            obj={obj}
            setObj={setObj}
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
