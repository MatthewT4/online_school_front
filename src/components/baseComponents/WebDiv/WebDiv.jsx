import React from 'react';
import styles from "./WebDiv.module.scss"
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
    now.setDate(now.getDate() + 1)
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Завтра, в " + time + " мск."
    }
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth() - 1] + " в " + time + " мск."
}
const WebDiv = (props) => {
    var save = ""
    if (props.data.hasOwnProperty("web_link")) {
        save = <div className={styles.buttonConnect}><button className={styles.button}>Подключиться</button></div>
    }
    var nameStyles = styles.webdiv
    if (props.lenn != props.idx){
        nameStyles = styles.border
    }
    return (
        <div className={styles.w}>
            <div className={nameStyles}>
                <div className={styles.text}>
                    <h3 className={styles.nameWeb}>{props.data.name}</h3>
                    <p className={styles.timeStart}>{GetInfoDate(props.data.meet_date)}</p>
                </div>
                {save}
            </div>
        </div>
    );
};

export default WebDiv;