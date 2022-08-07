import React from 'react';
import Header from "../Header/Header";
import styles from "./Auth.module.scss"
import {domain, thisDomain, clientId} from "../baseComponents/baseFunctions"
function Redirect() {
    const raspMas = [
        {"course_name": "Русский язык", "webinars_block": [
                {"month": "Сентябрь", "webinars": ["№4 Орфоэпия", "№5 Паронимы", "Сочинение. Поиск проблемы", "№6 Лексика"]},
                {"month": "Октябрь", "webinars": ["№7 Числительные", "Практика по сложным темам №4-7", "Сочинение. Смысловая связь между комментариями", "№8 Синтаксические нормы"]}
            ]
        },
        {"course_name": "Физика", "webinars_block": [
                {"month": "Сентябрь", "webinars": ["Основы кинематики. Виды движения", "Основы кинематики. Виды движения. Практика А части", "Движение по параболе"]},
                {"month": "Октябрь", "webinars": ["Импульс. Закон сохранения импульса. Практика С части", "Энергия. Закон сохранения энергии", "Энергия. Закон сохранения энергии. Практика А части", "Энергия. Закон сохранения энергии. Практика С части"]}
            ]
        }
    ]

    //let redirectUri = "https://lk.lyc15.ru/ant"
    let redirectUri = `${thisDomain}/ant`
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