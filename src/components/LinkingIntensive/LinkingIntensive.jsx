import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import mStyles from "../MainStyles.module.scss"
import  {GetDataNewRedirest} from "../baseComponents/baseFunctions";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./LinkingIntensive.module.scss"

const Intensive = () => {
    const navi = useNavigate()
    let intensiveTag = useParams("tag")
    const [course, setCourse] = useState({})
    useEffect(() => {
        async function GetDt() {
            let dat = await GetDataNewRedirest("/get_intensive?intensive_tag=" + intensiveTag.tag, "intensive="+ intensiveTag.tag)
            if (dat.code == 200) {
                setCourse(dat.datt)
            } else {
                return ("Упс, что-то пошло не так...")
            }
        }
        GetDt()
    }, [])

    async function LinkInt() {
        try{const dataIntensiveLink = await GetDataNewRedirest("/linking_intensive?intensive_tag="+intensiveTag.tag, "intensive="+ intensiveTag.tag)}
        catch (err) {
            console.log(err)
        }
        window.location.href = "/"
        //console.log(dat.status)
        /*if (dat.code == 200 || dat.status == 208) {
            window.location.href = "/"
        }
        console.log(dat.code)*/
    }
    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{marginTop:30, width:"90%", marginRight: "auto", marginLeft:"auto", paddingLeft:0}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginRight: "auto", marginLeft:"auto"}}>
                    <h2 className={mStyles.zagolovoc}>Подключение к интенсиву</h2>
                    <div className={styles.divContent}>
                        <h3 className={styles.name}>{course.name_intensive}</h3>
                        <div style={{flexGrow:1}}></div>
                        {!course.user_is_logged ? <div style={{verticalAlign:"middle"}}><botton onClick={LinkInt} className={styles.buttConnect}>Подключиться</botton></div> : <div style={{verticalAlign:"middle"}}><botton disabled className={styles.buttNotConnect}>Подключён</botton></div>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Intensive;