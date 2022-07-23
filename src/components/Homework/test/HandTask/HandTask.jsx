import React from 'react';
import mStyles from "../../../MainStyles.module.scss";
import styles from "./HandTask.module.scss";

const HandTask = (props) => {
    let max_point = props.data.max_point
    let user_point = props.data.point
    let ball = ""
    if (max_point === user_point) {
        ball = <p style={{color: "green",margin:0}}>Верно! {user_point + "/" + max_point}</p>
    }
    else {
        if (user_point !== 0) {
            ball = <p style={{color: "orange",margin:0}}>Частично верно, {user_point + "/" + max_point}</p>
        } else {
            ball = <p style={{color: "red",margin:0}}>Неверно, {user_point + "/" + max_point}</p>
        }
    }
    console.log(props.data.solution)
    return (
        <div className={mStyles.elem}>
            <div className={styles.zagolovoc} style={{display: "flex", alignItems: "flex-end"}}>
                <h2 style={{margin:0}}>Задание №{props.data.number}</h2>
                <div style={{flexGrow:1}}></div>
                {ball}
            </div>
            <div className={mStyles.soderzanie}>
                <div><p className={styles.text}>{props.data.text}</p></div>
                <div className={styles.answer}>
                    <h4 style={{ marginRight:5, marginLeft:0}}>Твой ответ:</h4>
                    <p className={max_point === user_point ? styles.inpGr : styles.inpRed}>{props.data.user_answer}</p>
                </div>
                <div className={styles.solution}>
                    <h4 style={{marginTop:15, marginBottom:0}}>Решение:</h4>
                    <p style={{paddingLeft:10, marginTop:5}}>{props.data.solution}</p>
                </div>
                <div className={styles.answers}>
                    {props.data.answers.length > 1 ? <h4>Верные ответы:</h4> : <h4>Верный ответ:</h4>}
                    <p style={{marginLeft: 5}}>{props.data.answers}</p>
                </div>
            </div>
        </div>
    );
};

export default HandTask;