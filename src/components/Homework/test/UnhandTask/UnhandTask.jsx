import React, {useState} from 'react';
import mStyles from "../../../MainStyles.module.scss"
import styles from "./UnhandTask.module.scss"
const UnhandTask = (props) => {
    const [answer, setAnswer] = useState(props.data.user_answer)
    ///setAnswer(props.data.user_answer)
    let inpName = `answer-${props.data.number}`
    function setAns(ans) {
        if (ans != answer) {
            setAnswer(ans)
            props.func(ans, props.data.number-1)
        }
    }
    return (
        <div className={mStyles.elem}>
            <div>
                <h2 className={mStyles.zagolovoc}>Задание №{props.data.number}</h2>
            </div>
            <div className={mStyles.soderzanie}>
                <p className={styles.text}>{props.data.text}</p>
                <div className={styles.answer}>
                    <p style={{ marginRight:5}}>Ответ:</p>
                    <form>
                    <input className={styles.inp} name={inpName} type="text" value={answer} onChange={event => {setAns(event.target.value)}}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UnhandTask;