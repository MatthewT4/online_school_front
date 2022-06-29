import React, {useState} from 'react';
import styles from "./WebinarBlock.module.scss";
import WebDiv from "./WebDiv/WebDiv";
const WebinarBlock = () => {
    const [webinars, setWebinars] = useState([])
    React.useEffect(() => {
        const fenchData = async() => {
            try {
                const response = await fetch("http://localhost/get_today_webinars")
                const data = await response.json()
                setWebinars(data)
                console.log(data)
            }
            catch (error) {
                console.log("123",error)
                return("");
            }
        }
        fenchData()
    }, [])
    var lenMas = webinars.length -1
    if (webinars.length == 0) {
        return (<div><h1>Вебинаров сегодня нет 😴</h1></div>);
    }
    return (
        <div className={styles.web}>
            <h1 className={styles.text}>Вебинары сегодня</h1>
            {webinars.map((web, idx )=> (
                <WebDiv key={idx} data={web} lenn={lenMas} kei={idx}/>
            ))}
        </div>
    );
};

export default WebinarBlock;