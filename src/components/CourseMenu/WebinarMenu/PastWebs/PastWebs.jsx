import React, {useEffect, useState} from 'react';
import {GetData, domain} from "../../../baseComponents/baseFunctions.js"
import {useParams} from "react-router-dom";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
import mStyles from "../../../MainStyles.module.scss";
const PastWebs = () => {
    var courseId = useParams("id")
    var [webinars, setWebinars] = useState("")
    useEffect(() => {
        GetData(domain+`/get_past_webinars?course_id=${courseId.id}`, setWebinars)
    }, [courseId.id])
    let header = <h2 className={mStyles.zagolovoc}>Прошедшие вебинары</h2>
    if (webinars == undefined) {
        return <div>{header}
            <div className={mStyles.errContent}><p className={mStyles.gr}>Здесь будут отображаться прошедшие вебинары</p></div>
        </div>
    }
    if (webinars.length == 0) {
        return <div>{header}
            <div className={mStyles.errContent}><p className={mStyles.gr}>Здесь будут отображаться прошедшие вебинары</p></div>
        </div>
    }
    var lenMas = webinars.length -1
    return (
        <div>
            <h2 className={mStyles.zagolovoc}>Прошедшие Вебинары</h2>
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default PastWebs;