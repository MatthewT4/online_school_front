import React, {useEffect, useState} from 'react';
import {GetData} from "../baseComponents/baseFunctions";
import {useParams} from "react-router-dom";
import WebDiv from "../baseComponents/WebDiv/WebDiv";
import UnhandTask from "./test/UnhandTask/UnhandTask";
import mStyles from "../MainStyles.module.scss"
import styles from "./Homework.module.scss"
const Homework = () => {
    let userAnswers = []
    const [homework, setHomework] = useState("")
    let hId = useParams("id")
    let homeworkId = Number(hId.id)
    console.log(homeworkId)
    useEffect(() => {
        GetData(`http://localhost/get_homework?homework_id=${homeworkId}`, setHomework)

    }, [homeworkId])
    if (homework.length == 0) {
        return <div></div>
    } else {
        homework.tasks.map((task)=> (
            userAnswers.push(task.user_answer)
        ))
    }
    function SetAnswer(answer, idx) {
        userAnswers[idx] = answer
        console.log(userAnswers)
    }
    if (homework.handed) {
        return (
            ""
        )
    } else {
        return (
            <div className={mStyles.main}>
                <div className={mStyles.fflex}>
                    <div className={mStyles.pysto}/>
                    <h2 className={styles.nameHw}>{homework.name}</h2>
                    <div className={mStyles.pysto}/>
                </div>
                {homework.tasks.map((task, idx )=> (
                    <UnhandTask key={idx} data={task} func={SetAnswer}/>
                ))}
            </div>
        );
    }
};

export default Homework;