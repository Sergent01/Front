import React from "react";

import styles from "./HeroHome.module.scss";

import Form from "../Form/Form";

const HeroHome = () => {
  return (
    <div className={styles.HeroHome__main}>
      <div className={styles.HeroHome__text}>
        <h2>
          Chauffez votre maison pour moins de 400 euros par an grâce aux
          Poêles à granulés nouvelle génération
        </h2>
        <p>
          Télécharger notre catalogue complet ! La version moderne des poêles à
          granulés ! Pratique et performant Les factures d'énergie ne cessent de
          grimper et les prévisions ne sont pas très optimistes... Mais comment
          ces propriétaires mettent fins aux grosses factures d'énergie ?
          Recevez votre catalogue, et estimez vos économies ...
        </p>
      </div>
      <div className={styles.HeroHome__form}>
        <Form/>
      </div>
    </div>
  );
};

export default HeroHome;
