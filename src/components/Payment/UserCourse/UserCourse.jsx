import React from 'react';
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import CourseBlock from "../CourseBlock/CourseBlock";
import styles from "./UserCourse.module.scss";


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function getCoursePeriod(date) {
    var mesDate = new Date(date)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth()]
}
const UserCourse = ({userCour, awailCour}) => {
    return (
        <div>
            <div>
                {userCour.map((web, idx )=> (
                    <CourseBlock index={idx} flagBuyCourse={true} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " +getCoursePeriod(web.period_end)} />
                ))}
            </div>
            <div>
                {awailCour.map((web, idx )=> (
                    <CourseBlock index={idx} flagBuyCourse={false} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " +getCoursePeriod(web.period_end)} />
                ))}
            </div>
            <div className={styles.buttonConnect}><button className={styles.button}>Оплатить</button></div>
        </div>
    );
};

export default UserCourse;