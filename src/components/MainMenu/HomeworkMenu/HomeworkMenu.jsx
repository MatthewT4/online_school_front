import React, {useState} from 'react';
import HwDiv from "./HwDiv/HwDiv";

function HomeworkMenu() {
    const [homeworks, setHomeworks] = useState([])
    React.useEffect(() => {
        const fenchData = async() => {
            try {
                const response = await fetch("http://localhost/get_next_homeworks")
                const data = await response.json()
                setHomeworks(data)
                console.log(data)
            }
            catch (error) {
                console.log("err",error)
                return("");
            }
        }
        fenchData()
    }, [])
    var lenMas = homeworks.length -1
    if (homeworks.length == 0) {
        return (<div><h2>Все домашки сданы. Молодец!</h2></div>);
    }
    return (
        <div>
            <h2>Домашки</h2>
            {homeworks.map((hw, idx )=> (
                <HwDiv key={idx} data={hw} lenn={lenMas} idx={idx}/>
            ))}
        </div>
    );
};

export default HomeworkMenu;