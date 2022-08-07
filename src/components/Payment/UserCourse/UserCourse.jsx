import React, {useState} from 'react';
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import CourseBlock from "../CourseBlock/CourseBlock";
import styles from "./UserCourse.module.scss";
import {PostData} from "../../baseComponents/baseFunctions";
import {useNavigate} from "react-router-dom"


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
const UserCourse = ({userCour, awailCour, rend, setRend}) => {
    const navi = useNavigate()
    let buyCourse = {}
    const [payActive, setPayActive] = useState(true)
    if (userCour == null) {
        userCour = []
    }
    if (awailCour == null) {
        awailCour = []
    }
    if (userCour.length === 0 && awailCour.length === 0) {
        return (
            <p>Похоже сейчас нет доступных для записи курсов</p>
        )
    }
    for (let i = 0; i < userCour.length; i++) {
        buyCourse[userCour[i].course_id] = {
            period_id: userCour[i].period_id,
            buy: true,
            course_id: userCour[i].course_id
        }
    }

    for (let i = 0; i < awailCour.length; i++) {
        buyCourse[awailCour[i].course_id] = {
            period_id: awailCour[i].period_id,
            buy: false,
            course_id: awailCour[i].course_id
        }
    }
    function SetBuyCourse(courseId, buy) {
        let vr = buyCourse[courseId]
        vr.buy = buy
        buyCourse[courseId] = vr
        console.log(buyCourse)
        /*
        let couBuy = 0
        for (var key of Object.keys(buyCourse)) {
            if (buyCourse[key].buy) {
                couBuy++
            }
        }
        if ((couBuy === 0 && payActive) || (couBuy !== 0 && !payActive)) {
            setPayActive(!payActive)
        }*/
    }
    async function PushPaymentCourses() {
        let ret = []
        for (var key of Object.keys(buyCourse)) {
            if (buyCourse[key].buy) {
                ret.push(buyCourse[key])
            }
        }
        if (ret.length == 0) {
            return
        }
        let data = {
            buy: ret,
            promo_code: ""
        }
        let json = JSON.stringify(data);
        let res =  await PostData("/service/create_payment", json)
        console.log(res.code_req, res.dt)

        if (res.code_req != 200) {
            navi("/pay_error")
        }
        document.cookie = res.dt.cookie
        navi("/no_pay_info")
    }
    return (
        <div>
            <div>
                {userCour.map((web, idx )=> (
                    <CourseBlock setBuy={SetBuyCourse} index={idx} flagBuyCourse={buyCourse[web.course_id].buy} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " +getCoursePeriod(web.period_end)} />
                ))}
            </div>
            <div>
                {awailCour.map((web, idx )=> (
                    <CourseBlock setBuy={SetBuyCourse} index={idx} flagBuyCourse={buyCourse[web.course_id].buy} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " +getCoursePeriod(web.period_end)} />
                ))}
            </div>
            {payActive ?
                <div className={styles.buttonConnect}>
                    <button className={styles.button} onClick={PushPaymentCourses}>Оплатить</button>
                </div> : <div className={styles.buttonConnect}>
                    <button disabled className={styles.disButton}>Оплатить</button>
                </div>
            }
        </div>
    );
};

export default UserCourse;