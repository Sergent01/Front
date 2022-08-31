import React from "react";

import style from "./Band2.module.scss";

const Band2 = () => {
  return (
    <div className={style.band2__main}>
      <div className={style.band2__img}>
        <img
          src="https://i.pinimg.com/564x/5e/2c/e9/5e2ce9ea09c2229312e3f3923836b1ab.jpg"
          alt="poile à granulés"
        />
        <button className="btn btn-black" type="text">
          Devis Gratuit
        </button>
      </div>
      <div className={style.band2__card}>
        <p>
          Le gouvernement est enfin décidé à aider les particuliers à passer aux
          énergies renouvelables et propose grâce aux nouvelles Aides 2020 à
          l'investissement pour l'installation de Poêles à granulés.
        </p>
        <p>
          Le poêle à granulés suscite un intérêt grandissant auprès des
          consommateurs. Peu polluant, économique, c’est un mode de chauffage
          apprécié des Français, un foyer central autour duquel la vie
          s’organise.
        </p>
        <p>
          Les démarches administratives réalisées pour vous après une visite
          technique de validation de la faisabilité de votre installation, vient
          le temps des démarches administratives. Déclaration préalable en
          mairie, demande de financement, demande de raccordement. Nous nous
          occupons de tout, en toute transparence.
        </p>
      </div>
    </div>
  );
};

export default Band2;
