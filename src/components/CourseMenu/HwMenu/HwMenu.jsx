import React from 'react';
import mStyles from "../../MainStyles.module.scss"
import PastHw from "./PastHw/PastHw";
import CurrectHw from "./CurrectHw/CurrectHw";
const HwMenu = () => {

    return (
        <div>
            <div className={mStyles.elem}>
                <h2 className={mStyles.zagolovoc}>Текушие домашки</h2>
                <CurrectHw/>
            </div>
            <div className={mStyles.elem}>
                <h2 className={mStyles.zagolovoc}>Прошедшие домашки</h2>
                <PastHw />
            </div>
        </div>
    );
};

export default HwMenu;