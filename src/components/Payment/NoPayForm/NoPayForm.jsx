import mStyles from "../../MainStyles.module.scss"
import Header from "../../Header/Header";
import styles from "./NoPayForm.module.scss"

const PayError = () => {
    return (
        <div>
            <Header menu={false}/>
            <div className={mStyles.main} style={{display:"flex", justifyContent:"center"}}>
                <div className={mStyles.elem} style={{marginTop:10, fontWeight:"normal", maxWidth:800}}>
                    <h2 className={mStyles.zagolovoc}>Завершение оплаты</h2>
                    <p>Извините, <b>платёжная система временно недоступна</b> 😢, мы прилагаем все усилия чтобы восстановить её работу.</p>
                    <p>Вам выдан временный доступ к курсам до <b>10 сентября</b> вы сможете подключиться к группе курса и полноценно использовать все возможности личного кабинета.</p>
                    <p>Цена, а также всё применённые вами скидки сохранятся.</p>
                    <p>Мы обязательно отправим вам уведомление о восстановлении работы формы и ссылку на оплату в виде сообщения во ВКонтакте.</p>
                    <p>С уважением, команда Лицей15</p>
                    <div className={styles.buttonDiv}>
                        <button className={styles.button}>Перейти к подкючению курсов</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayError;