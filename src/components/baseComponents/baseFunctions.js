import $ from "jquery";

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}
export const domain = "http://localhost"
export function GetInfoDate(date) {
    var mesDate = new Date(date)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")

    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Сегодня, в " + time + " мск."
    }
    now.setDate(now.getDate() + 1)
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Завтра, в " + time + " мск."
    }
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return mesDate.getDate() + " " + vec_month[mesDate.getMonth()] + " в " + time + " мск."
}
export async function PostData(url, data) {
    let ret = {
        code_req: 0,
        dt: ""}
    /*fetch(url, {
        credentials: 'include', mode: 'cors', 'headers': {
            'cookie': document.cookie,
        }})
      .then(res => {res.json()})
      .then(InData => setFunc(InData))
  return*/
    await $.ajax({
        xhrFields: { withCredentials: true },
        crossDomain: true,
        type: 'POST',
        url: domain+url,
        data: data,
        dataType: 'json',
        success: function (dat) {
            ret.code_req = 200
            ret.dt = dat
        },
        error: function (jqXHR) {
            if (jqXHR.status === 401) {
                window.location.href = "/auth";
            } else {
                console.log("errr")
                ret.code_req = jqXHR.status
                ret.dt = jqXHR.data
            }
        }
    });
    return ret
}

export function GetData(url, setFunc) {
      /*fetch(url, {
          credentials: 'include', mode: 'cors', 'headers': {
              'cookie': document.cookie,
          }})
        .then(res => {res.json()})
        .then(InData => setFunc(InData))
    return*/
    $.ajax({
        xhrFields: { withCredentials: true },
        crossDomain: true,
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
            setFunc(data)
        },
        error: function (jqXHR) {
            if (jqXHR.status === 401) {
                window.location.href = "/auth";
            } else {
                setFunc([])
            }
        }
    });
}
export async function GetDataNew(url, payFunc) {
    let dt = ""
    await $.ajax({
        xhrFields: { withCredentials: true },
        crossDomain: true,
        type: 'GET',
        url: domain+url,
        dataType: 'json',
        success: function (data) {
            dt = data
        },
        error: function (jqXHR) {
            if (jqXHR.status === 401) {
                if (payFunc) {
                    window.location.href = "/auth?pay=true"
                } else {
                    window.location.href = "/auth";
                }
            } else {
                dt = 0
            }
        }
    });
    return dt
}
