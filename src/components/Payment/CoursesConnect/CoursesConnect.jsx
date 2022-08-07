import React, {useEffect, useState} from 'react';
import mStyles from "../../MainStyles.module.scss"
import styles from "./CoursesConnect.module.scss"
import {domain, GetData, GetDataNew} from "../../baseComponents/baseFunctions";
import Header from "../../Header/Header";
import HwDiv from "../../baseComponents/HwDiv/HwDiv";
import {useNavigate} from "react-router-dom";

const CoursesConnect = () => {
    const navi = useNavigate()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        async function GetCourse() {
            try {
                let dt = await GetDataNew("/linking_payment", true)
            }
            catch (err) {
                console.log(err)
            }
            let dataa = await GetDataNew("/connecting_groups", true)
            setCourses(dataa)
        };
        GetCourse()
    }, [])

    let blockCourses = ""
    if (courses == null || courses.length == 0) {
        return (<div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{display:"flex", justifyContent:"center"}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginTop:20}}>
                    <h2 className={mStyles.zagolovoc}>Подключение к группам</h2>
                    <p>Ты уже подключился ко всем группам курсов!</p>
                    <div className={styles.buttonDivRedirect}>
                        <button className={styles.buttonRedirect} onClick={() => {navi("/")}}>Главный экран</button>
                    </div>
                </div>
            </div>
        </div>)
    }

    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{display:"flex", justifyContent:"center"}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginTop:20}}>
                    <h2 className={mStyles.zagolovoc}>Подключение к группам</h2>
                    <div className={styles.helpMenu}>
                        <p>Давай подключим группы.</p>
                        <p>Мы уже настроили тебе курсы, однако тебе <b>необходимо подключиться к закрытой группе каждого из курсов,</b> чтобы получать уведомления и иметь связь с преподавателем.</p>
                        <p>Нажми на кнопку <b>"Вступить"</b> напротив каждого курса, прими приглашение в группу и обязательно напиши любое сообщение в диалог с группой.</p>
                        {courses.length !== 0 ? courses.map((cou, idx )=> (
                            <div key={idx} className={styles.blockCourse}>
                                <h3 className={styles.name}>{cou.name_course}</h3>
                                <div className={styles.buttonConnect}><a className={styles.button} href={"/invite_group/"+cou.course_id} target="_blank">Вступить</a></div>
                            </div>
                        )) : ""}
                    </div>
                    <div className={styles.buttonDivRedirect}>
                        <button className={styles.buttonRedirect} onClick={() => {navi("/")}}>Главный экран</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesConnect;