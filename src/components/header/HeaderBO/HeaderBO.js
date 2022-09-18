import React from 'react';
import { useRouter } from "next/router";


import styles from './HeaderBO.module.scss';

import Icon from "../../../../public/retour.png"

const HeaderBO = () => {
    const router = useRouter();
    const redirectTo = (path) => {
        router.push({ pathname: `/` });
      };

    return (
        <div className={styles.headerBO__main}>
            <div className={styles.headerBO__title}>
                <h2>Back Office</h2>
            </div>
            <div className={styles.headerBO__button}>
                <img onClick={() => redirectTo()} src={Icon.src} alt=""/>
            </div>
        </div>
    );
};

export default HeaderBO;