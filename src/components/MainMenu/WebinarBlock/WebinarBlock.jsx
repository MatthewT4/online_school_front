import React, {useState} from 'react';
import styles from "./WebinarBlock.module.scss";
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import domain from "../../baseComponents/WebDiv/WebDiv";
import mStyles from "../../MainStyles.module.scss"
import {GetDataNew} from "../../baseComponents/baseFunctions";
const WebinarBlock = () => {
    const [webinars, setWebinars] = useState([])
    React.useEffect(() => {
        /*let data = GetDataNew("http://localhost/get_today_webinars")
        setWebinars(data)*/
        const fenchData = async() => {
            try {
                const response = await fetch(domain+"/get_today_webinars", {
                    credentials: 'include', mode: 'cors', 'headers': {
                        'cookie': document.cookie,
                    }})
                const data = await response.json()
                setWebinars(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
                return("");
            }
        }
        fenchData()
    }, [])
    let header = <h2 className={mStyles.zagolovoc}>Вебинары сегодня</h2>
    var lenMas = webinars.length -1
    if (webinars.length == 0) {
        return (<div>{header}<div className={mStyles.errContent}><p className={mStyles.gr}>Вебинаров сегодня нет 😴</p></div></div>);
    }
    if (webinars == "error") {
        return (<div>{header}<div className={mStyles.errContent}><p className={mStyles.gr}>Упс, похоже что-то пошло не так</p></div></div>)
    }
    return (
        <div className={styles.web}>
            {header}
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default WebinarBlock;