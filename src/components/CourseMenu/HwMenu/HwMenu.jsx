import React from 'react';
import mStyles from "../../MainStyles.module.scss"
const HwMenu = () => {

    return (
        <div>
            <div className={mStyles.elem}>
                <h2>Текушие домашки</h2>

            </div>
            <div className={mStyles.elem}>
                <h2>Прошедшие домашки</h2>
            </div>
        </div>
    );
};

export default HwMenu;