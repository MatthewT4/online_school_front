import $ from "jquery";

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

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
export function GetDataNew(url) {
    try {
        fetch(url, {
            credentials: 'include', mode: 'cors', 'headers': {
                'cookie': document.cookie,
            }
        }).then(response => {
            if (!response.ok) {
                if (response.status == 401) {
                    window.location.href = "/auth";
                }
                else {
                    return "error"
                }
            }
            return response.json();
        })
        /*function ff() {
            const response = fetch(url, {
                credentials: 'include', mode: 'cors', 'headers': {
                    'cookie': document.cookie,
                }
            })
            //console.log("dddd: ", data)
            /*const response = await fetch(url, {
                credentials: 'include', mode: 'cors', 'headers': {
                    'cookie': document.cookie,
                },
            });*/
            /*if (response.ok) {
                const data = response.json()
                console.log("d2: ", data)
                return data
            } else {
                console.log("status: ", response.status)
                if (response.status == 401) {
                    console.log("111, 401")
                    window.location.href = "/auth";
                } else {
                    return "error"
                }
            }
        }
        ff()*/
    }
    catch (error) {
        console.log("eeeeeerrror")
        return "error"
    }/*
    $.ajax({
        url: url,
        type: 'GET',
        success: function(res) {
            console.log(res);
            return res;
        },
        crossDomain: true,
        xhrFields: {
            withCredentials: true,
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status == 401) {
                window.location.href = "/auth";
            } else if (jqXHR.status == 500) {
                return "error"
            }
        }
    });*/
}