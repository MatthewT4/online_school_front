import mStyles from "../../MainStyles.module.scss"
import {useState, useEffect} from "react"
import React from 'react';
import {useParams} from "react-router-dom";
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import WebMenu from "./WebMenu/WebMenu";

const StartMenu = () => {
    /*var courseId = useParams("id")
    console.log("start menu", courseId.id)
    const [web, setWeb] = useState("")
    useEffect(() => {
        fetch(`http://127.0.0.1/get_next_webinars?course_id=${courseId.id}`)
            .then(res => res.json())
            .then(data => setWeb(data))
    }, [courseId.id])
    if (web == null || web.length == 0) {
        return <div className={mStyles.elem}><h2>Все Вебинары закончились 😞</h2></div>
    }*/
    return (
        <div>
            <div className={mStyles.elem}>
                <h2>123</h2>
            </div>
            <WebMenu/>
        </div>
    );
};

export default StartMenu;