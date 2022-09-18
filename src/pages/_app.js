import "../styles/styles.scss";

import { React, useState, useEffect } from "react";

import authService from "../service/auth.service";

import Adminlayout from "../components/layouts/AdminLayout/AdminLayout";
import Mainlayout from "../components/layouts/MainLayout/MainLayout";
import BOLayout from "../components/layouts/BOLayout/BOLayout";

function MyApp({ Component, pageProps, ...appProps }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    authService
      .verifyToken(token)
      .then((data) => {
        console.log("data = ", data);
        if ((data.auth = true)) {
          setIsAdmin(data.verify);
        } else {
          setIsAdmin(data.verify);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(isAdmin);

  if (
    ["/BO"].includes(appProps.router.pathname) ||
    ["/signup/regform"].includes(appProps.router.pathname)
  ) {
    return (
      <BOLayout>
        <Component {...pageProps} />
      </BOLayout>
    );
  }

  return isAdmin === true ? (
    <Adminlayout>
      <Component {...pageProps} />
    </Adminlayout>
  ) : (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}

export default MyApp;
