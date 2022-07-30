import React, {useEffect, useState} from 'react';
import CourseBlock from "./CourseBlock/CourseBlock";
import Header from "../Header/Header";
import mStyles from "../MainStyles.module.scss"
import {domain, GetData} from "../baseComponents/baseFunctions";
import UserCourse from "./UserCourse/UserCourse";

const Payment = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        GetData(domain+"/service/available_periods", setCourses)
    }, [])
    let userCourse = []
    let awailCourse = []
    if ("available_courses" in courses) {
        awailCourse = courses.available_courses
    }
    if("user_courses" in courses) {
        userCourse = courses.user_courses
    }
    /*var buy_cound = 0
    function IncBuyCound() {
        buy_cound += 1
    }*/
    var rendeer = true
    function setRendeer() {
        rendeer = false
    }
    const [rend, setRend] = useState(true)

    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{marginTop:30, width:"90%", marginRight: "auto", marginLeft:"auto", paddingLeft:0}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginRight: "auto", marginLeft:"auto"}}>
                    <h2 className={mStyles.zagolovoc}>Выбери желаемые курсы</h2>
                    <UserCourse userCour={userCourse} awailCour={awailCourse} rend={rend} setRend={setRend}/>
                </div>
            </div>
        </div>

    );
};

export default Payment;