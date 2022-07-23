import React, {useEffect, useState} from 'react';
import {GetData, PostData} from "../baseComponents/baseFunctions";
import {useParams} from "react-router-dom";
import WebDiv from "../baseComponents/WebDiv/WebDiv";
import UnhandTask from "./test/UnhandTask/UnhandTask";
import mStyles from "../MainStyles.module.scss"
import styles from "./Homework.module.scss"
import HandTask from "./test/HandTask/HandTask";
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
    function PushAnswers() {
        let index;
        let ret = []
        for (index = 0; index < userAnswers.length; ++index) {
            let task = {
                "number": index + 1,
                "user_answer": userAnswers[index]
            }
            ret.push(task)
        }
        let final_res = {
            "homework_id": homeworkId,
            "answers": ret
        }
        let json = JSON.stringify(final_res);
        let code = PostData("/submit_homework", json)
        console.log("code: ", code)
    }
    if (homework.handed) {
        return (
            <div className={mStyles.main}>
                <div className={mStyles.fflex}>
                    <div className={mStyles.pysto}/>
                    <h2 className={styles.nameHw}>{homework.name}</h2>
                    <div className={mStyles.pysto}/>
                </div>
                {homework.tasks.map((task, idx )=> (
                    <HandTask key={idx} data={task} func={SetAnswer}/>
                ))}
            </div>
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
                <div style={{display:"flex", justifyContent: "center"}}>
                    <button className={styles.button} onClick={PushAnswers}>Отправить на проверку</button>
                </div>
            </div>
        );
    }
};

export default Homework;