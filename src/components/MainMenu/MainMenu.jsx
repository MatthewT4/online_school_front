import React from 'react';
import mStyles from "../MainStyles.module.scss"
import WebinarBlock from "./WebinarBlock/WebinarBlock";
import HomeworkMenu from "./HomeworkMenu/HomeworkMenu";
const MainMenu = () => {
    return (
        <div className={mStyles.main}>
            <div className={mStyles.elem}>
                <WebinarBlock/>
            </div>
            <div className={mStyles.elem}>
                <HomeworkMenu/>
            </div>
        </div>
    );
};

export default MainMenu;