import mStyles from "../../../MainStyles.module.scss"
import {useState, useEffect} from "react"
import React from 'react';
import {useParams} from "react-router-dom";
import WebDiv from "../../../baseComponents/WebDiv/WebDiv";
import mSyles from "../../../MainStyles.module.scss"
import {GetData} from "../../../baseComponents/baseFunctions";
const StartMenu = () => {
    var courseId = useParams("id")
    const [web, setWeb] = useState("")

    useEffect(() => {
        GetData(`http://localhost/get_next_webinars?course_id=${courseId.id}`, setWeb)
    }, [courseId.id])

    if (web == null || web.length == 0) {
        return <div className={mStyles.elem}><h2>Все Вебинары закончились 😞</h2></div>
    }
    return (
    <div className={mStyles.elem}>
        <h2 className={mStyles.zagolovoc}>Ближайший вебинар</h2>
        <WebDiv data={web[0]}></WebDiv>
    </div>
);
};

export default StartMenu;