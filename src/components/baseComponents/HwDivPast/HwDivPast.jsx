import React from 'react';
import styles from "./HwDivPast.module.scss"
import {Link} from "react-router-dom";

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function GetInfoDate(date) {
    let mesDate = new Date(date)
    console.log(mesDate.getTimezoneOffset())
    console.log(mesDate)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Сегодня, в " + time + " мск."
    }
    now.setDate(now.getDate() - 1)
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Вчера, в " + time + " мск."
    }
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth()] + " в " + time + " мск."
}
const HwDivPast = (props) =>  {
    var nameStyles = styles.webdiv
    if (props.lenn != props.idx){
        nameStyles = styles.border
    }
    var timeDiv = ""
    if (props.data.handed == true) {
        let deadline = new Date(props.data.deadline)
        let delivered = new Date(props.data.delivered)
        if (delivered > deadline) {
            timeDiv = "Сдано с опозданием " + GetInfoDate(props.data.delivered)
        } else {
            timeDiv = "Сдано " + GetInfoDate(props.data.delivered)
        }
    } else {
        timeDiv = "Не сдано"
    }

    return (
        <div className={nameStyles}>
            <div className={styles.text}>
                <h4 className={styles.nameHw}>{props.data.homework_name}</h4>
                <p className={styles.timeStart}>{timeDiv}</p>
            </div>
            <div className={styles.ButtonDiv}>
                <Link to="/">Посмотреть</Link>
            </div>
        </div>
    );
};

export default HwDivPast;