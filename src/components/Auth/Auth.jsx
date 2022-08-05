import React from 'react';
import Header from "../Header/Header";
import styles from "./Auth.module.scss"
import {domain} from "../baseComponents/baseFunctions"
function Redirect() {
    //let clientId = 8219136
    let clientId = 51393056
    let redirectUri = "https://lk.lyc15.ru/ant"
    let url = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
    var strGET = window.location.search.replace( '?', '');
    if (strGET == "pay=true") {
        url += "&state=pay"
    } else {
        url += "&state=standart"
    }
    window.location.href = url;
}
const Auth = () => {
    return (
        <div>
            <Header menu={false}/>
            <div className={styles.authdiv}>
                    <button className={styles.button} onClick={Redirect}>Войти через ВКонтакте</button>
            </div>
        </div>
    );
};

export default Auth;