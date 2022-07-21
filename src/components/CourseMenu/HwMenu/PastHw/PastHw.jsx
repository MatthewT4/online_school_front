import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetData} from "../../../baseComponents/baseFunctions";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
import HwDiv from "../../../baseComponents/HwDiv/HwDiv";
import HwDivPast from "../../../baseComponents/HwDivPast/HwDivPast";
import styles from "./PastHw.module.scss";
import mStyles from "../../../MainStyles.module.scss"

const PastHw = () => {
    var cId = useParams("id")
    var [courseId, setCourseId] = useState("")
    if (courseId != cId.id) {
        setCourseId(cId.id)
    }
    var [homeworks, setHomeworks] = useState("")
    let header = <h2 className={mStyles.zagolovoc}>Прошедшие домашки</h2>
    useEffect(() => {
        GetData(`http://localhost/get_past_course_homeworks?course_id=${courseId}`, setHomeworks)
    }, [courseId])
    if (homeworks.length == 0) {
        return <div>{header}<div className={mStyles.errContent}><p className={mStyles.gr}>Здесь будут отображаться прошедшие домашки</p></div></div>
    }
    var lenMas = homeworks.length-1
    return (
        <div>
            {header}
            {homeworks.map((hw, idx )=> (
                <HwDivPast key={idx} data={hw} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default PastHw;