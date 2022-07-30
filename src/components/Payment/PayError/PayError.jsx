import React from 'react';
import mStyles from "../../MainStyles.module.scss"
import Header from "../../Header/Header";
const PayError = () => {
    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{marginTop:30, width:"90%", marginRight: "auto", marginLeft:"auto", paddingLeft:0}}>
                <div className={mStyles.elem} style={{maxWidth:800, marginRight: "auto", marginLeft:"auto"}}>
                    <h3>Упс, похоже что-то пошло не так</h3>
                    <h4>Попробуйте ещё раз или обратитесь в тех. поддержку</h4>
                </div>
            </div>
    </div>
    );
};

export default PayError;