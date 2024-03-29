import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetData, domain} from "../../../baseComponents/baseFunctions";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
import HwDiv from "../../../baseComponents/HwDiv/HwDiv";
import HwDivPast from "../../../baseComponents/HwDivPast/HwDivPast";
import styles from "./CurrectHw.module.scss"

const CurrectHw = () => {
    var cId = useParams("id")
    var [courseId, setCourseId] = useState("")
    if (courseId != cId.id) {
        setCourseId(cId.id)
    }
    var [homeworks, setHomeworks] = useState("")
    useEffect(() => {
        GetData(domain+`/get_next_course_homeworks?course_id=${courseId}`, setHomeworks)
    }, [courseId])
    if (homeworks.length == 0) {
        return <div style={{display:"flex", justifyContent: "center"}}><p className={styles.gr}>Здесь будут отображаться выданные тебе домашки</p></div>
    }
    var lenMas = homeworks.length-1
    return (
        <div>
            {homeworks.map((hw, idx )=> (
                <HwDiv key={idx} data={hw} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default CurrectHw;