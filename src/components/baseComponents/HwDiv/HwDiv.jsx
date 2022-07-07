import React from 'react';
import styles from "./HwDiv.module.scss"

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
        return "Дедлайн Сегодня, в " + time + " мск."
    }
    now.setDate(now.getDate() + 1)
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Дедлайн завтра, в " + time + " мск."
    }
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return "Дедлайн " + mesDate.getDate() + " " + vec_month[mesDate.getMonth() - 1] + " в " + time + " мск."
}
const HwDiv = (props) =>  {
    var nameStyles = styles.webdiv
    if (props.lenn != props.idx){
        nameStyles = styles.border
    }
    return (
        <div className={nameStyles}>
            <div className={styles.text}>
                <h4 className={styles.nameHw}>{props.data.homework_name}</h4>
                <p className={styles.timeStart}>{GetInfoDate(props.data.deadline)}</p>
            </div>
            <div className={styles.ButtonDiv}>
                <button className={styles.button}>Выполнить</button>
            </div>
        </div>
    );
};

export default HwDiv;