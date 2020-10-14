const times = () => {
    const date = new Date();
    const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const time = `${date.getDate()} ${days[date.getMonth()]} ${date.getFullYear()}г.`
    return time
}

const getWeekDay = () => {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[new Date().getDay()];
}




export { times, getWeekDay }