import React, {useState} from 'react';
import styles from "./LeftCoursesMenu.module.scss"
import {NavLink} from "react-router-dom";
import mStyles from "../MainStyles.module.scss"
function getDataInStr(data) {
    var res = data[8] + data[9]
    var month = Number(data[5]+data[6])
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    res += " " + vec_month[month-1]
    return res
}

const LeftCoursesMenu = () => {
    const [courses, setCourses] = useState([])
    React.useEffect(() => {
        const fenchData = async() => {
            try {
                const response = await fetch("http://localhost/get_courses")
                const data = await response.json()
                setCourses(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fenchData()
    }, [])
    return (
        <div className={styles.main}>
            <div className={styles.leftMenu}>
                <h2 className={mStyles.zagolovoc}>Курсы</h2>
                <ul className={styles.navbar}>
                {courses.map((course, idx) => (
                    <div key={idx} className={styles.courseBlock}>
                        <li className={styles.ul}><NavLink className={({isActive}) => isActive ? (styles.active) : ""} to={`/course/${course.course_id}`}>{course.name_course}, до {getDataInStr(course.payment_end)}</NavLink></li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftCoursesMenu;