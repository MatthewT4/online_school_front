import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import {domain} from "../baseComponents/baseFunctions";

function getAllUrlParams(url) {

    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {

        // данные после знака # будут опущены
        queryString = queryString.split('#')[0];

        // разделяем параметры
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');

            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // преобразование регистра
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // если ключ параметра уже задан
            if (obj[paramName]) {
                // преобразуем текущее значение в массив
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // если не задан индекс...
                if (typeof paramNum === 'undefined') {
                    // помещаем значение в конец массива
                    obj[paramName].push(paramValue);
                }
                // если индекс задан...
                else {
                    // размещаем элемент по заданному индексу
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // если параметр не задан, делаем это вручную
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}
const Ant = () => {
    const [codeVK, setCodeVK] = useState()
    let search = window.location.search
    let code = getAllUrlParams(search).code
    if (code != codeVK) {
        setCodeVK(code)
    }
    let data
    useEffect(() => {
        async function Tess() {
            //let url = domain + `/auth/login?code=${codeVK}&redirect_uri=http://localhost:3000/ant`
            let url = domain + `/auth/login?code=${codeVK}&redirect_uri=https://lk.lyc15.ru/ant`
            data = await fetch(url, {
                credentials: "include",
                mode: 'cors',
            })
            let d = await data.json()
            console.log("d ", d)
            console.log("body: ",d.body)
            document.cookie = d.body
            let typeRedirect = getAllUrlParams(search).state
            console.log(typeRedirect, typeRedirect == "pay")
            if (typeRedirect == "pay") {
                window.location.href = "/course_connect";
            } else {
                window.location.href = "/";
            }
        }
        Tess()
       /* let url = `http://127.0.0.1/auth/login?code=${codeVK}&redirect_uri=http://localhost:3000/ant`

        $.ajax({
            url: url,
            type: 'GET',
            crossDomain: true,
            xhrFields: {
                withCredentials: true,
            },
            success: function(res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err.error)
            }
        });*/

    },[codeVK]);
    return (
        <div>
            <p>загрузка...</p>
        </div>
    );
};

export default Ant;