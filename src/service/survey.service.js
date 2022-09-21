// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postSurvey(obj) {
    return fetch(`${process.env.API_URL}/survey`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  },
  getAllSurvey(token) {
    return fetch(`${process.env.API_URL}/survey`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  },
  deleteSurvey(id, token) {
    return fetch(`${process.env.API_URL}survey/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    }).then((res) => res.json());
  },
};
