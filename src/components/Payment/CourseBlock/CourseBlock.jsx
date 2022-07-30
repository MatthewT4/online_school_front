import React, {useState} from 'react';
import styles from "./CourseBlock.module.scss"
const CourseBlock = ({courseName, courseId, periodId, coursePeriod, flagBuyCourse, Price, setBuy}) => {
    console.log("flag:", flagBuyCourse)
    const [buyCourse, setBuyCourse] = useState(flagBuyCourse)
    function editBuyCourse() {
        setBuy(courseId, !buyCourse)
        setBuyCourse(!buyCourse)
    }
    return (
        <div className={styles.block}>
            {<div className={styles.checkboxDiv}>
                <input className={styles.checkbox} type="checkbox" defaultChecked={flagBuyCourse} name={courseId + "-" + periodId} onClick={editBuyCourse}/>
            </div>}
            <div className={styles.infDiv}>
                <h3 className={styles.name}>{courseName}</h3>
                <p className={styles.period}>{coursePeriod}</p>
            </div>
            <div className={styles.pysto}></div>
            <div className={styles.price}>
                <h2>{Price + " руб."}</h2>
            </div>

        </div>
    );
};

export default CourseBlock;