import React from 'react';
import styles from "./MainMenu.module.scss"
import WebinarBlock from "./WebinarBlock/WebinarBlock";
import HomeworkMenu from "./HomeworkMenu/HomeworkMenu";
const MainMenu = () => {
    return (
        <div className={styles.main}>
            <div className={styles.elem}>
                <WebinarBlock/>
            </div>
            <div className={styles.elem}>
                <HomeworkMenu/>
            </div>
        </div>
    );
};

export default MainMenu;