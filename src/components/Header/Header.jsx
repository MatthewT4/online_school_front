import React from 'react';
import logoImage from "../../img/logo.svg"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logoImage} src={logoImage} alt=''/>
            </div>
        </div>
    )};

export default Header;