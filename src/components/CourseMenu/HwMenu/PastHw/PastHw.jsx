import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetData} from "../../../baseComponents/baseFunctions";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
import HwDiv from "../../../baseComponents/HwDiv/HwDiv";

const PastHw = () => {
    var cId = useParams("id")
    var [courseId, setCourseId] = useState("")
    if (courseId != cId.id) {
        setCourseId(cId.id)
    }
    var [homeworks, setHomeworks] = useState("")
    useEffect(() => {
        GetData(`http://localhost/get_past_webinars?course_id=${courseId}`, setHomeworks)
    }, [courseId])
    if (webinars.length == 0) {
        return <div><h2>Здесь будут отображаться выданные тебе домашки</h2></div>
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

export default PastHw;