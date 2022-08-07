import React, {useEffect, useState} from 'react';
import styles from "./MobileMenu.module.scss"
import {NavLink} from "react-router-dom";
import {GetData} from "../../baseComponents/baseFunctions";
import {domain} from "../../baseComponents/baseFunctions";
const MobileMenu = ({active, setActive}) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        GetData(domain+"/get_courses", setCourses)
    }, [])

    return (
        <div className={active ? styles.menuActive : styles.menu} onClick={() => setActive(false)}>
            <div className={styles.blur}></div>
            <div className={styles.menuContent} /*onClick={(e) => {e.stopPropagation()}}*/>
                <div className={styles.menuHeader}>Курсы</div>
                <ul className={styles.navbar}>
                {courses.map((course, idx) => (
                    <div key={idx} className={styles.courseBlock}>
                        <li><NavLink className={({isActive}) => isActive ? (styles.active) : ""}  to={`/course/${course.course_id}`}>{course.name_course}</NavLink></li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;