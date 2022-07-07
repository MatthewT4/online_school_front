import React from 'react';
import styles from "./WebDiv.module.scss"
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function GetInfoDate(date) {
    let mesDate = new Date(date)
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
    var online = ""
    var conspect = ""
    var presentation = ""
    var video = ""
    if (props.data.hasOwnProperty("conspect")) {
        conspect = <div><form className={styles.formDopInfo} action={props.data.conspect} target="_blank">
                    <button  className={styles.dopInfo}><div><h3>К</h3><p>конспект</p></div></button>
        </form></div>
    }
    if (props.data.hasOwnProperty("presentation")) {
        presentation = <div><form className={styles.formDopInfo} action={props.data.presentation} target="_blank">
            <button  className={styles.dopInfo}><div><h3>П</h3><p>преза</p></div></button>
        </form></div>
    }
    if (props.data.hasOwnProperty("record_link")) {
        video = <div><form className={styles.formDopInfo} action={props.data.record_link} target="_blank">
            <button  className={styles.dopInfo}><div><h3>В</h3><p>видео</p></div></button>
        </form></div>
    }
    if (props.data.hasOwnProperty("web_link")) {
        online = <div className={styles.buttonConnect}><button className={styles.button}>Подключиться</button></div>
    }
    var nameStyles = styles.webdiv
    if (props.lenn != props.idx){
        nameStyles = styles.border
    }
    return (
        <div className={styles.w}>
            <div className={nameStyles}>
                <div className={styles.text}>
                    <h4 className={styles.nameWeb}>{props.data.name}</h4>
                    <p className={styles.timeStart}>{GetInfoDate(props.data.meet_date)}</p>
                </div>
                    {conspect}
                    {presentation}
                    {video}
                {online}
            </div>
        </div>
    );
};

export default WebDiv;