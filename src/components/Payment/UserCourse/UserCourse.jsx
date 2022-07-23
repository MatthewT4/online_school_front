import React from 'react';
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import CourseBlock from "../CourseBlock/CourseBlock";
function getCoursePeriod(date) {
    var mesDate = new Date(date)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth()] + " в " + time + " мск."
}
const UserCourse = ({userCour, awailCour}) => {
    return (
        <div>
            {webinars.map((web, idx )=> (
                <CourseBlock flagBuyCourse={true} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " +getCoursePeriod(web.period_end)} />
            ))}
        </div>
    );
};

export default UserCourse;