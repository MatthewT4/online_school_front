import React, {useState} from 'react';
//import HwDivPast from "./HwDivPast/HwDivPast";
import HwDiv from "../../baseComponents/HwDiv/HwDiv";
import {domain} from "../../baseComponents/baseFunctions";
import mStyles from "../../MainStyles.module.scss"
import styles from "./HomeworkMenu.module.scss"
import {GetDataNew} from "../../baseComponents/baseFunctions";

function HomeworkMenu() {
    const [homeworks, setHomeworks] = useState([])
    React.useEffect(() => {
        const fenchData = async() => {
            try {
                const response = await fetch(domain + "/get_next_homeworks", {
                    credentials: 'include', mode: 'cors', 'headers': {
                        'cookie': document.cookie,
                    }})
                const data = await response.json()
                setHomeworks(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
                return("");
            }
        }
        fenchData()
    }, [])
    let header = <h2 className={mStyles.zagolovoc}>Домашки</h2>
    var lenMas = homeworks.length -1
    if (homeworks.length == 0) {
        return (<div>{header} <div className={mStyles.errContent}><p className={mStyles.gr}>Все домашки сданы. Молодец! &#128521;</p></div></div>);
    }
    if (homeworks == "error") {
        return (<div>{header}<div className={mStyles.errContent}><p className={mStyles.gr}>Упс, похоже что-то пошло не так &#128532;</p></div></div>)
    }
    return (
        <div>
            {header}
            {homeworks.map((hw, idx )=> (
                <HwDiv key={idx} data={hw} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default HomeworkMenu;