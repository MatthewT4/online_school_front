import mStyles from "../../MainStyles.module.scss"
import {useState, useEffect} from "react"
import React from 'react';
import {useParams} from "react-router-dom";
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import WebMenu from "./WebMenu/WebMenu";
import styles from "./StartMenu.module.scss"

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
            <div style={{display:"flex", flexWrap: "wrap"}}>
                <div className={mStyles.elem} style={{flexGrow:1, minWidth: 200}}>
                    <h2 className={mStyles.zagolovoc}>Жизни</h2>
                    <div>
                        <p style={{color:"red", fontSize: "1.3em", marginTop:0, marginBottom:0}}>❤❤❤❤❤</p>
                        <div style={{display:"flex"}}>
                            <p style={{color:"gray", fontSize:"0.9em", marginTop:"0.3px"}}>Дней заморозки:</p>
                            <p style={{fontSize:"1em", marginTop:"0.3px", marginLeft:2}}>31</p>
                        </div>
                        <button className={styles.zamorozkaNotAvailable} disabled>Заморозка недоступна</button>
                        <button className={styles.zamorozkaActivate} disabled>Активировать заморозку</button>
                    </div>
                </div>
                <div className={mStyles.elem} style={{flexGrow:1, minWidth: 200}}>
                    <h2 className={mStyles.zagolovoc}>Информация</h2>
                </div>
                <div className={mStyles.elem} style={{flexGrow:1, minWidth: 200}}>
                    <h2 className={mStyles.zagolovoc}>Ссылки</h2>
                </div>
            </div>
            <WebMenu/>
        </div>
    );
};

export default StartMenu;