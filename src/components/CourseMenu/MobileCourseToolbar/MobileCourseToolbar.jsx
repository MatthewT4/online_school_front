import React from 'react';
import styles from "./MobileCourseToolbar.module.scss"
import {NavLink} from "react-router-dom";
const stelem = {
    borderRightColor: "gray",
    borderRightStyle: "solid",
    borderRightWidth: 1
}
const MobileCourseToolbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.divElem} style={stelem}>
                <NavLink to="start" className={({isActive}) => isActive ? styles.activeBot : styles.unactiveBot}>
                    <div>
                        <i className="material-icons">home</i>
                        <p>Главная</p>
                    </div>
                </NavLink>
            </div>
            <div className={styles.divElem} style={stelem}>
                <NavLink to="web" className={({isActive}) => isActive ? styles.activeBot : styles.unactiveBot}>
                    <div className={styles.divKnopk}>
                        <i className="material-icons">video_library</i>
                        <p>Вебинары</p>
                    </div>
                </NavLink>
            </div>
            <div className={styles.divElem}>
                <NavLink to="homeworks" className={({isActive}) => isActive ? styles.activeBot : styles.unactiveBot}>
                    <div>
                        <i className="material-icons">edit_document</i>
                        <p>Домашки</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default MobileCourseToolbar;