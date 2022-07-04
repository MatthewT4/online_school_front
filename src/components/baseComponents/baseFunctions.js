function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function GetInfoDate(date) {
    let mesDate = new Date(date)
    console.log(mesDate.getTimezoneOffset())
    console.log(mesDate)
    let now = new Date()
    now = convertTZ(now, "Europe/Moscow")
    mesDate = convertTZ(mesDate, "Europe/Moscow")
    let time = [mesDate.getHours(), mesDate.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":")

    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Дедлайн Сегодня, в " + time + " мск."
    }
    now.setDate(now.getDate() + 1)
    if ((mesDate.getDate() == now.getDate()) && (mesDate.getMonth() == now.getMonth()) && (mesDate.getFullYear() == now.getFullYear())) {
        return "Дедлайн завтра, в " + time + " мск."
    }
    var vec_month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return "Дедлайн " + mesDate.getDate() + " " + vec_month[mesDate.getMonth() - 1] + " в " + time + " мск."
}