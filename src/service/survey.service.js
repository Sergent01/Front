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
};
