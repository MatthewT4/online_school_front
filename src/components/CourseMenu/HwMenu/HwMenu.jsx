import React from 'react';
import mStyles from "../../MainStyles.module.scss"
import PastHw from "./PastHw/PastHw";
const HwMenu = () => {

    return (
        <div>
            <div className={mStyles.elem}>
                <h2>Текушие домашки</h2>

            </div>
            <div className={mStyles.elem}>
                <h2>Прошедшие домашки</h2>
                <PastHw />
            </div>
        </div>
    );
};

export default HwMenu;