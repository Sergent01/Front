import {React}  from 'react';

import Headermenu from '../../header/HeaderMenu/HeaderMenu';

import styles from './MainLayout.module.scss'
// import Footer from '../footer/Footer';

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <Headermenu/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* Ajouter footer */}
            </footer>
        </>
    );
}

export default Mainlayout;