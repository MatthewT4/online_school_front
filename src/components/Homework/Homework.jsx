import React, {useEffect, useState} from 'react';
import {GetData, PostData, domain, GetDataNew} from "../baseComponents/baseFunctions";
import {useParams} from "react-router-dom";
import WebDiv from "../baseComponents/WebDiv/WebDiv";
import UnhandTask from "./test/UnhandTask/UnhandTask";
import mStyles from "../MainStyles.module.scss"
import styles from "./Homework.module.scss"
import HandTask from "./test/HandTask/HandTask";
var flagg = 0
const Homework = () => {
    let userAnswers = []
    const [homework, setHomework] = useState("")
    const [loading, setLoading] = useState(true)
    let hId = useParams("id")
    let homeworkId = Number(hId.id)

    async function GetDt() {
        let dat = await GetDataNew(`/get_homework?homework_id=${homeworkId}`, false)
        if (dat === 0) {
            dat = []
        }
        setHomework(dat)
        setLoading(false)
    }

    useEffect(() => {
        //GetData(domain+`/get_homework?homework_id=${homeworkId}`, setHomework)

        GetDt()
    }, [homeworkId, flagg])
    if (loading) {
        return (
            <div className={styles.loadingDiv}>
                <div className={styles.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
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
    async function PushAnswers() {
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
        setLoading(true)
        let json = JSON.stringify(final_res);
        let rett = await PostData("/submit_homework", json)
        console.log(rett)
        if (rett.code_req === 200) {
            flagg += 111
            GetDt()
        }
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