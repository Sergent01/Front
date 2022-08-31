import React from "react";

import styles from "./Card1.module.scss";

const Card1 = () => {
  return (
    <div className={styles.card1__main}>
      <div className={styles.card1__hero}>
        <h3>Pourquoi faire sa demande avant la fin du mois ?</h3>
      </div>
      <div className={styles.card1__text}>
        <ul>
          <li>- Matériel éligible aux aides de l'état</li>
          <li>- Installation par un professionnel RGE</li>
          <li>- Assistance à l'élaboration de votre dossier de primes</li>
          <li>- Devis personnalisé et gratuit jusqu'à la fin du mois.</li>
        </ul>
        <span>
          <p>Dépêchez-vous !</p>
        </span>
      </div>
      <div className={styles.card1__btn}>
        <button className='btn btn-black' type="text">Devis Gratuit</button>
      </div>
    </div>
  );
};

export default Card1;
