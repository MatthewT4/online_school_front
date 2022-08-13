import React, {useState} from 'react';
import styles from "./CourseBlock.module.scss"
const CourseBlock = ({courseName, courseId, periodId, coursePeriod, flagBuyCourse, Price, setBuy, availBuyAllPer, amountAllPer, endTimeAllPeriods, setBuyAllPr, discountAllPer}) => {
    console.log("flag:", flagBuyCourse)
    const [buyCourse, setBuyCourse] = useState(flagBuyCourse)
    const [buyAllPer, setBuyAllPer] = useState(false)
    console.log("availBuyAllPer:", availBuyAllPer)

    function editBuyCourse() {
        setBuy(courseId, !buyCourse)
        setBuyCourse(!buyCourse)
    }
    function editAllBuyPer() {
        setBuyAllPr(courseId, !buyAllPer)
        setBuyAllPer(!buyAllPer)
    }
    return (
        <div className={styles.block}>
            {<div className={styles.checkboxDiv}>
                <input className={styles.checkbox} type="checkbox" defaultChecked={flagBuyCourse} name={courseId + "-" + periodId} onClick={editBuyCourse}/>
            </div>}
            <div className={styles.infDiv}>
                <h3 className={styles.name}>{courseName}</h3>
                {buyAllPer ? <p className={styles.period}>{endTimeAllPeriods}</p> : <p className={styles.period}>{coursePeriod}</p>}
                {availBuyAllPer ? <div className={styles.BuyAllPerDiv}><p className={styles.PBuyAllPer}>за месяц</p><label className="switch"><input type="checkbox" defaultChecked={buyAllPer} onClick={editAllBuyPer}/><span className="slider round"></span></label><p className={styles.PBuyAllPer}>за год</p><p className={styles.skidka}>-15%</p></div> : ""}
            </div>
            <div className={styles.pysto}></div>
            <div className={styles.price}>
                {buyAllPer ? <div><p className={styles.endPrice}><del className={styles.delOldPrice}>{amountAllPer+discountAllPer} руб.</del></p><h2 style={{marginTop:0, color:"red"}}>{amountAllPer}  руб.</h2></div> : <h2>{Price} руб.</h2>}
            </div>

        </div>
    );
};

export default CourseBlock;