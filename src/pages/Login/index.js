import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import authService from "../../service/auth.service";

import styles from "./login.module.scss";

import InputForm from "../../components/InputForm/InputForm.js";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const [err, setErr] = useState("");

  const redirectTo = () => {
    router.push("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    await authService.login(user).then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push({ pathname: "/" });
      } else {
        setErr("Identifiant/mot de passe incorrect");
      }
    });
  };

  return (
    <div className={styles.login__container}>
      <div className={styles.login__text}>
        <div className={styles.login__text_title}>
          <h1>S'identifier</h1>
        </div>
        <form
          className={styles.form__register}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={styles.input__text_group}>
            <InputForm
              label="Email :"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required={true}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />

            <InputForm
              label="Mot de passe :"
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe"
              required={true}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>

          <input
            className={styles.input__submit}
            value="S'identitfier"
            type="submit"
          />
        </form>
        <p>{err}</p>
      </div>
    </div>
  );
};

export default Index;
