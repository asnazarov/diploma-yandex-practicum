export default class OpenweathermapApi {
    constructor(option) {
        this.url = option.baseUrl;
    }

    getCardWeather = (pos) => {
        var crd = pos.coords;
        const latitude = Math.floor(crd.latitude * 100) / 100;
        const longitude = Math.floor(crd.longitude * 100) / 100;
        // console.log(`Широта: ${latitude}`);
        // console.log(`Долгота: ${longitude}`);
        console.log(`Точность геопозиции плюс-минус ${crd.accuracy} метров.`);
        // console.log(`https://api.openweathermap.org/data/2.5/weather?&q=Saint%20Petersburg&lang=ru&units=metric&appid=7a413b7114bca1a02d11e7114704e04e`)
        // return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Wuhan&lang=ru&units=metric&appid=7a413b7114bca1a02d11e7114704e04e`, {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=7a413b7114bca1a02d11e7114704e04e`, {
                method: "GET",
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }
}