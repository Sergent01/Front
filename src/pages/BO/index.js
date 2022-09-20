import React from "react";
import { useState, useEffect } from "react";

import surveyService from "../../service/survey.service";

import ManageData from "../../components/ManageData/ManageData";

import styles from "./BO.module.scss";

const Index = () => {
  const [isDelete, setIsDelete] = useState(Boolean);
  const [survey, setSurvey] = useState([]);
  const [idSurvey, setIdSurvey] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("token");

    token &&
      surveyService
        .getAllSurvey(token)
        .then((data) => {
          setSurvey(data);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.bo__main}>
      <div className={styles.bo__text}>
        <h1>Espace Administrateur</h1>
      </div>
      <div className={styles.bo__content}>
        <table>
          <thead>
            <tr>
              <th></th>
            <th>Téléphone</th>
              <th>Email</th>
              <th>Nom</th>
              {/* <th>Rue</th> */}
              <th>Code Postale</th>
              <th>Ville</th>
              {/* <th>Situation</th>
              <th>Prêt</th> */}
            </tr>
          </thead>
        </table>
        {survey &&
          survey.map((isData) => (
            <div key={isData._id}>
              <ManageData array={idSurvey} setArray={setIdSurvey} data={isData} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
