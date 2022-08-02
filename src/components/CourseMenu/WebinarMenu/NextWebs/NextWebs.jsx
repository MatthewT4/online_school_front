import React, {useEffect, useState} from 'react';
import mStyles from "../../../MainStyles.module.scss"
import {GetData, domain} from "../../../baseComponents/baseFunctions.js"
import {useParams} from "react-router-dom";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
const NextWebs = () => {
    var courseId = useParams("id")
    var [webinars, setWebinars] = useState("")
    useEffect(() => {
        const ass = async () => {
            await GetData(domain+`/get_next_webinars?course_id=${courseId.id}`, setWebinars)
        }
        ass()
    }, [courseId.id])
    if (webinars.length == 0) {
        console.log("next", webinars)
        return <div>
            <h2 className={mStyles.zagolovoc}>Будущие Вебинары</h2>
            <h2>Упс, похоже все вебинары закончились 😅</h2>
        </div>
    }
    var lenMas = webinars.length -1
    return (
        <div>
            <h2 className={mStyles.zagolovoc}>Будущие Вебинары</h2>
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default NextWebs;