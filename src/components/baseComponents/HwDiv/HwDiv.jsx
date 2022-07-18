import React from 'react';
import styles from "./HwDiv.module.scss"
import {GetInfoDate} from "../baseFunctions";

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
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
                <p className={styles.timeStart}>Дедлайн {GetInfoDate(props.data.deadline)}</p>
            </div>
            <div className={styles.ButtonDiv}>
                <button className={styles.button}>Выполнить</button>
            </div>
        </div>
    );
};

export default HwDiv;