import React from 'react';
import CourseBlock from "./CourseBlock/CourseBlock";
import Header from "../Header/Header";
import mStyles from "../MainStyles.module.scss"

const Payment = () => {
    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{marginTop:30, width:"90%", marginRight: "auto", marginLeft:"auto", paddingLeft:0}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginRight: "auto", marginLeft:"auto"}}>
                    <h2 className={mStyles.zagolovoc}>Выбери желаемые курсы</h2>
                    <CourseBlock courseName={"Русский язык"} coursePeriod={"1 августа - 15 сентября"} Price={3000}/>
                </div>
            </div>
        </div>

    );
};

export default Payment;