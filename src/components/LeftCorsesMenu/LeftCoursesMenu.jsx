import React, {useEffect, useState} from 'react';
import styles from "./LeftCoursesMenu.module.scss"
import {NavLink} from "react-router-dom";
import mStyles from "../MainStyles.module.scss"
import {domain, GetDataNew} from "../baseComponents/baseFunctions";
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
                const response = await fetch(domain+"/get_courses", {
                    credentials: 'include', mode: 'cors', 'headers': {
                        'cookie': document.cookie,
                    }})
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
/*
    useEffect(() => {
        let data = GetDataNew("http://localhost/get_courses")
        console.log("data:", data)
        setCourses(data)
    }, [])*/
    if (courses == "error") {
        return (<div><h3>Упс, похоже что-то пошло не так</h3></div>)
    }
    return (
        <div className={styles.main}>
            <div className={styles.leftMenu}>
                <h2 className={mStyles.zagolovoc}>Курсы</h2>
                <ul className={styles.navbar}>
                {courses.map((course, idx) => (
                    <div key={idx} className={styles.courseBlock}>
                        <li className={styles.li}><NavLink className={({isActive}) => isActive ? (styles.active) : ""} to={`/course/${course.course_id}`}><div className={styles.divfl}><h4 className={styles.name} style={{margin:0, marginRight:4}}>{course.name_course}</h4><p style={{margin:0}} className={styles.dateEnd}> до {getDataInStr(course.payment_end)}</p></div></NavLink></li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftCoursesMenu;