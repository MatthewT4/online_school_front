import React, {useEffect, useState} from 'react';
import mStyles from "../../../MainStyles.module.scss"
import {GetData} from "../../../baseComponents/baseFunctions.js"
import {useParams} from "react-router-dom";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
const PastWebs = () => {
    var courseId = useParams("id")
    var [webinars, setWebinars] = useState("")
    useEffect(() => {
        GetData(`http://localhost/get_past_webinars?course_id=${courseId.id}`, setWebinars)
    }, [courseId.id])
    if (webinars.length == 0) {
        return <div>
            <h2>Здесь будут отображаться прошедшие вебинары</h2>
        </div>
    }
    var lenMas = webinars.length -1
    return (
        <div>
            <h2>Прошедшие Вебинары</h2>
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default PastWebs;