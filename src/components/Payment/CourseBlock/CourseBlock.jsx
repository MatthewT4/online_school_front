import React, {useState} from 'react';
import styles from "./CourseBlock.module.scss"
const CourseBlock = ({courseName, courseId, periodId, coursePeriod, flagBuyCourse, Price}) => {
    const [buyCourse, setBuyCourse] = useState(flagBuyCourse)
    function editbBuyCourse() {
        setBuyCourse(!buyCourse)
    }
    return (
        <div className={styles.block}>
            {<div className={styles.checkboxDiv}>
                <input className={styles.checkbox} type="checkbox" defaultChecked={buyCourse} name={courseId + "-" + periodId} onClick={editbBuyCourse}/>
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