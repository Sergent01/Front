import {React}  from 'react';

import Headermenu from '../../header/HeaderMenu/HeaderMenu';

import styles from './Adminlayout.module.scss'
// import Footer from '../footer/Footer';

const Adminlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <Headermenu admin={true}/>
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

export default Adminlayout;