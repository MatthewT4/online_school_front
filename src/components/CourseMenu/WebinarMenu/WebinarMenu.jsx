import React from 'react';
import styles from "./WebinarMenu.module.scss"
import mStyles from "../../MainStyles.module.scss"
import {NavLink, Routes, Route, Outlet} from "react-router-dom";

const WebinarMenu = () => {
    return (
        <div className={mStyles.main}>
            <div className={styles.topPanel}>
                <div className={styles.pysto}></div>
                <div className={styles.butDiv}>
                    <NavLink className={({isActive}) => isActive ? (styles.activeKnopka) : (styles.knopka)} to="past">Прошедшие</NavLink>
                    <NavLink className={({isActive}) => isActive ? (styles.activeKnopka) : (styles.knopka)} to="next">Будущие</NavLink>
                </div>
                <div className={styles.pysto}></div>
            </div>
            <div className={mStyles.elem}>
                <Outlet/>
            </div>
        </div>
    );
};

export default WebinarMenu;