import React from 'react';
import styles from "./CourseMenu.module.scss"
import {NavLink, Outlet, useParams} from "react-router-dom"
import StartMenu from "./StartMenu/StartMenu";
const CourseMenu = () => {
    var courseId = useParams("id")
    var cId = Number(courseId.id)
    ///console.log(cId)
    return (
        <div className={styles.main}>
            <div className={styles.toolbar}>
                <div className={styles.butMenu}>
                    <NavLink className={({isActive}) => isActive ? (styles.activeKnopka) : (styles.knopka)} to="start">Главная</NavLink>
                    <NavLink className={({isActive}) => isActive ? (styles.activeKnopka) : (styles.knopka)} to="web">Вебинары</NavLink>
                    <NavLink className={({isActive}) => isActive ? (styles.activeKnopka) : (styles.knopka)} to="homeworks">Домашки</NavLink>
                    <a className={styles.activeKnopka}>Темы</a>
                    <a className={styles.activeKnopka}>Аналитика</a>
                    <p className={styles.skoro}>🔥Скоро!</p>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default CourseMenu;