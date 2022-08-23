import React, {useEffect, useState} from 'react';
import WebDiv from "../../baseComponents/WebDiv/WebDiv";
import CourseBlock from "../CourseBlock/CourseBlock";
import styles from "./UserCourse.module.scss";
import {GetDataNew, PostData} from "../../baseComponents/baseFunctions";
import {useNavigate} from "react-router-dom"


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getCoursePeriod(date) {
    var mesDate = new Date(date)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth()]
}
const UserCourse = ({userCour, awailCour, rend, setRend}) => {
    //var cookie = await GetDataNew("/service/check_auth", false)
    const [cookie, setCookie] = useState(false)
    useEffect(() => {
        async function checkCookieAuth() {
            let c = await GetDataNew("/service/check_auth", false)
            if (c === 0) {
                setCookie(false)
            } else {
                setCookie(c.status)
            }
        }
        checkCookieAuth()
    }, [])
    var promo_code = ""
    const navi = useNavigate()
    let buyCourse = {}
    const [payActive, setPayActive] = useState(true)
    if (userCour == null) {
        userCour = []
    }
    if (awailCour == null) {
        awailCour = []
    }
    if (userCour.length === 0 && awailCour.length === 0) {
        return (
            <p>Похоже сейчас нет доступных для записи курсов</p>
        )
    }
    var PredAmount = 0
    for (let i = 0; i < userCour.length; i++) {
        buyCourse[userCour[i].course_id] = {
            period_id: userCour[i].period_id,
            buy: true,
            course_id: userCour[i].course_id,
            buyAllPer: false,
            price: userCour[i].price,
            price_all_periods:  userCour[i].price_all_periods,
            discount_all_pers: userCour[i].discount_all_pers
        }
        PredAmount += userCour[i].price
    }

    for (let i = 0; i < awailCour.length; i++) {
        buyCourse[awailCour[i].course_id] = {
            period_id: awailCour[i].period_id,
            buy: false,
            course_id: awailCour[i].course_id,
            buyAllPer: false,
            price: awailCour[i].price,
            price_all_periods:  awailCour[i].price_all_periods,
            discount_all_pers: awailCour[i].discount_all_pers
        }
    }
    console.log(buyCourse)
    var promo_code = ""


    async function SetPromoCode() {
        document.getElementById('promo_message').innerHTML = ""
        document.getElementById('promo_code_table').innerHTML = ""
        document.getElementById('amount').innerHTML = PredAmount + " руб."
        promo_code = ""

        let pc = document.getElementById("promo_code").value
        if (pc == "" || pc == undefined) {
            return
        }
        let dataa = await GetDataNew(`/cal_amount_in_promo_code?promo_code=${pc}&amount=${PredAmount}`, false)
        if (dataa == 0) {
            document.getElementById('promo_message').innerHTML = "<p style='color:red; margin-top:0'>Ошибка, попробуйте обновить страницу или обратитесь в тех. поддержку</p>"
            return
        }
        console.log(dataa)
        let obj = dataa
        console.log("obj.message", obj.message)
        if (obj.message != "") {
            document.getElementById('promo_message').innerHTML = "<p style='color:red; margin-top:0'>" + obj.message + "</p>"
            return
        }
        document.getElementById('promo_message').innerHTML = "<p style='color:green; margin-top:0'>Промокод успешно применён!</p>"

        document.getElementById('amount').innerHTML = obj.amount + " руб."
        promo_code = pc
        if (obj.discount != 0) {
            document.getElementById('promo_code_table').innerHTML = `<h3>Промо-код</h3>
                    <div style=\"flex-grow: 1;\"></div>
                    <h3>-` + obj.discount + ` руб.</h3>`
        } else {
            document.getElementById('promo_code_table').innerHTML = `
            <p>Выберите курсы для скидки по промокоду</p>`
        }
    }


    function SetAmount() {
        let amount = 0
        let discount = 0
        for (var key of Object.keys(buyCourse)) {
            if (buyCourse[key].buy) {
                if (buyCourse[key].buyAllPer) {
                    amount += buyCourse[key].price_all_periods
                    discount += buyCourse[key].discount_all_pers
                } else {
                    amount += buyCourse[key].price
                }
            }
        }
        document.getElementById('amount').innerHTML =  amount + " руб."
        PredAmount = amount
        if (discount != 0) {
            document.getElementById('discount').innerHTML = `<h3>Выгода</h3>
                    <div style=\"flex-grow: 1;\"></div>
                    <h3>-` + discount +` руб.</h3>`
        } else {
            document.getElementById('discount').innerHTML = ""
        }
        SetPromoCode()
    }

    function SetBuyAllPer(courseId, buy) {
        let vr = buyCourse[courseId]
        vr.buyAllPer = buy
        buyCourse[courseId] = vr
        SetAmount()
    }
    function SetBuyCourse(courseId, buy) {
        let vr = buyCourse[courseId]
        vr.buy = buy
        buyCourse[courseId] = vr
        console.log(buyCourse)
        SetAmount()
        /*
        let couBuy = 0
        for (var key of Object.keys(buyCourse)) {
            if (buyCourse[key].buy) {
                couBuy++
            }
        }
        if ((couBuy === 0 && payActive) || (couBuy !== 0 && !payActive)) {
            setPayActive(!payActive)
        }*/
    }
    async function PushPaymentCourses() {
        let ret = []
        for (var key of Object.keys(buyCourse)) {
            if (buyCourse[key].buy) {
                if (buyCourse[key].buyAllPer) {
                    let buyAllp = {
                        period_id: -1,
                            buy: true,
                        course_id: buyCourse[key].course_id,
                    }
                    ret.push(buyAllp)
                } else {
                    ret.push(buyCourse[key])
                }
            }
        }
        if (ret.length == 0) {
            return
        }
        let data = {
            buy: ret,
            promo_code: promo_code
        }
        let json = JSON.stringify(data);
        let res =  await PostData("/service/create_payment", json)
        console.log(res.code_req, res.dt)
        if (res.code_req != 200) {
            navi("/pay_error")
        }
        /*
        document.cookie = res.dt.cookie
        navi("/no_pay_info")*/

        const jso = await JSON.parse(res.dt)
        let data_receipt = { //содержимое элемента data
            "CloudPayments": {
                "CustomerReceipt": jso.receipt, //онлайн-чек
            }
        }
        /* eslint-disable */
        //onsole.log(jso.total, jso.payment_id, jso)
        var widget = new cp.CloudPayments(); //eslint-disable-lin
        widget.pay('auth', // или 'charge'
            { //options
                publicId: 'pk_3ae9c4a6d1ddaf51e473b3102cf0f', //id из личного кабинета
                description: 'Оплата доступа lyc15.ru', //назначение
                amount: jso.total, //сумма
                currency: 'RUB', //валюта
                accountId: jso.user_id, //идентификатор плательщика (необязательно)
                invoiceId: jso.payment_id, //номер заказа  (необязательно)
                //email: 'user@example.com', //email плательщика (необязательно)
                skin: "mini", //дизайн виджета (необязательно)
                requireEmail: true,
                data: data_receipt
            },
            {
                onSuccess: function (options) { // success
                    navi("/course_connect")
                    //действие при успешной оплате
                },
                onFail: function (reason, options) { // fail
                    //действие при неуспешной оплате
                },
                onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                    //например вызов вашей аналитики Facebook Pixel
                }
            }
        )
        /* eslint-enable */
    }
    return (
        <div>
            <div>
                {userCour.map((web, idx )=> (
                    <CourseBlock discountAllPer={web.discount_all_pers} setBuy={SetBuyCourse} index={idx} flagBuyCourse={buyCourse[web.course_id].buy} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " + getCoursePeriod(web.period_end)} availBuyAllPer={web.buy_all_periods} amountAllPer={web.price_all_periods} endTimeAllPeriods={getCoursePeriod(web.period_start) + " - " + getCoursePeriod(web.end_all_periods)} setBuyAllPr={SetBuyAllPer}/>
                ))}
            </div>
            <div>
                {awailCour.map((web, idx )=> (
                    <CourseBlock discountAllPer={web.discount_all_pers} setBuy={SetBuyCourse} index={idx} flagBuyCourse={buyCourse[web.course_id].buy} courseName={web.name} courseId={web.course_id} periodId={web.period_id} Price={web.price} coursePeriod={getCoursePeriod(web.period_start) + " - " + getCoursePeriod(web.period_end)} availBuyAllPer={web.buy_all_periods} amountAllPer={web.price_all_periods} endTimeAllPeriods={getCoursePeriod(web.period_start) + " - " + getCoursePeriod(web.end_all_periods)} setBuyAllPr={SetBuyAllPer}/>
                ))}
            </div>
            <div style={{marginTop:5}}>
                {!cookie ?
                    <div><div style={{display:"flex"}}><input disabled style={{width:"200px"}} placeholder="Войдите для ввода промокода" className={styles.inActivePromoCodeInp} type="text"/><a className={styles.authBut} href={"/auth?payment=true"}>Войти</a></div></div>
                    :   <div style={{display:"flex"}}><input id="promo_code" placeholder="Промокод" className={styles.promoCodeInp} type="text"/><button className={styles.promoCodeButton} onClick={SetPromoCode}>Применить</button></div>
                }
                <div style={{fontSize:10, marginLeft:12}} id={"promo_message"}></div>
            </div>
            <div className={styles.total}>
                <div className={styles.discountDiv} id="promo_code_table"></div>

                <div  className={styles.discountDiv} id="discount"></div>

                <div className={styles.amountDiv}>
                    <h1>Итого</h1>
                    <div style={{flexGrow:1}}></div>
                    <h1 id="amount">{PredAmount} руб.</h1>
                </div>
            </div>
            {payActive ?
                <div className={styles.buttonConnect}>
                    <button className={styles.button} onClick={PushPaymentCourses}>Оплатить</button>
                </div> : <div className={styles.buttonConnect}>
                    <button disabled className={styles.disButton}>Оплатить</button>
                </div>
            }
        </div>
    );
};

export default UserCourse;