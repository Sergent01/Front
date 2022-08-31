import React from "react";

import styles from "./Band1.module.scss";

import Card1 from "../../Cards/Card1/Card1";

const Band1 = () => {
  return (
    <div className={styles.Band1__main}>
      <div className={styles.Band1__text}>
        <h3>
          Nouvelles aides de l'état, poêle à granulés dernière génération à fort
          rendement et faibles coûts : Il est temps d'en finir avec vos factures
          !
        </h3>
        <p>
          Le poêle à granulés est la version moderne du poêle à bois
          traditionnel. Son utilisation facile et son fort rendement le mettent
          à la portée de tous. Le chauffage au fioul étant amené à disparaître,
          le marché des poêles à granulés est en pleine expansion.
        </p>
        <p>
          Le poêle à granulés l’emporte haut la main sur tous les critères :
          autonomie, facilité d’utilisation, programmation, confort et
          performances. Le rendement d’un poêle à granulés peut ainsi désormais
          atteindre voire dépasser les 90 %.
        </p>
      </div>
      <div className={styles.Band1__card}></div>
        <Card1/>
    </div>
  );
};

export default Band1;
