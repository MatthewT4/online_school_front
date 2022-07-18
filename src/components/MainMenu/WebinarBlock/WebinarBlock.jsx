import React, {useState} from 'react';
import styles from "./WebinarBlock.module.scss";
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import {GetDataNew} from "../../baseComponents/baseFunctions";
const WebinarBlock = () => {
    const [webinars, setWebinars] = useState([])
    React.useEffect(() => {
        /*let data = GetDataNew("http://localhost/get_today_webinars")
        setWebinars(data)*/
        const fenchData = async() => {
            try {
                const response = await fetch("http://localhost/get_today_webinars", {
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
    var lenMas = webinars.length -1
    if (webinars.length == 0) {
        return (<div><h2>Вебинаров сегодня нет 😴</h2></div>);
    }
    if (webinars == "error") {
        return (<div><h3>Упс, похоже что-то пошло не так</h3></div>)
    }
    return (
        <div className={styles.web}>
            <h2 className={styles.text}>Вебинары сегодня</h2>
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default WebinarBlock;