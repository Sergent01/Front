/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../service/auth.service";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verify, setVerify] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      authService
        .verifyToken(token)
        .then((data) => {
          if (data.verify) {
            setVerify(true);
          } else {
            localStorage.removeItem("token");
            router.push({ pathname: `Login` });
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push({ pathname: `Login` });
        });
    }, [router]);
    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default WithAuth;
