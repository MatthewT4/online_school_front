import React from 'react';
import styles from "./WebDiv.module.scss"
const WebDiv = (props) => {
    var save = ""
    if (props.data.hasOwnProperty("web_link")) {
        save = <div className={styles.buttonConnect}><button className={styles.button}>Подключиться</button></div>
    }
    var nameStyles = styles.webdiv
    if (props.lenn != props.kei){
        nameStyles = styles.border
    }
    console.log(props.lenn, props.kei)
    return (
        <div className={styles.w}>
            <div className={nameStyles}>
                <div className={styles.text}>
                    <h3 className={styles.nameWeb}>{props.data.name}</h3>
                    <p className={styles.timeStart}>Начало в {props.data.meet_date.slice(11, 16)}</p>
                </div>
                {save}
            </div>
        </div>
    );
};

export default WebDiv;