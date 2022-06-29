import React from 'react';
import styles from "./MainMenu.module.scss"
import WebinarBlock from "./WebinarBlock/WebinarBlock";
const MainMenu = () => {
    return (
        <div className={styles.main}>
            <div className={styles.elem}>
                <WebinarBlock/>
            </div>
            <div className={styles.elem}>
                <h2>12345</h2>
            </div>
        </div>
    );
};

export default MainMenu;