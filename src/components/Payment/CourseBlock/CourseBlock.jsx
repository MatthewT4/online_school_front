import React from 'react';
import styles from "./CourseBlock.module.scss"
const CourseBlock = ({courseName, courseId, coursePeriod, flagBuyCourse, Price}) => {
    return (
        <div className={styles.block}>
            <div className={styles.checkbox}>
                <input type="checkbox"/>
            </div>
            <div>
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