import React from 'react';
import Header from "../Header/Header";
import styles from "./Auth.module.scss"
import {domain, thisDomain, clientId} from "../baseComponents/baseFunctions"
function Redirect() {


    //let redirectUri = "https://lk.lyc15.ru/ant"
    let redirectUri = `${thisDomain}/ant`
    let url = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
    var strGET = window.location.search.replace( '?', '');
    if (strGET == "pay=true") {
        url += "&state=pay"
    } else if (strGET == "payment=true") {
        url += "&state=payment"
    } else if (strGET.substr(0, 9) == "intensive") {
        let vr = ""
        for (let i = 10; i < strGET.length; i++) {
            vr += strGET[i]
        }
        url += "&state=i" + vr
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