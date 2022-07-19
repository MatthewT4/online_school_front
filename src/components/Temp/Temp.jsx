import React from 'react';
import Header from "../Header/Header";
import LeftCoursesMenu from "../LeftCorsesMenu/LeftCoursesMenu";
import {Outlet} from "react-router-dom";
const Temp = () => {
    return (
        <div>
            <Header menu={true}/>
            <div className={"start"}>
                <LeftCoursesMenu/>
                <Outlet/>
                <div className={"pysto"}></div>
            </div>
        </div>
    );
};

export default Temp;