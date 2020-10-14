import { times, getWeekDay } from '../utils/utils.js';
import { weatherTypeIcon } from '../utils/weatherTypeIcon.js';

export default class Weather {
    constructor(openweathermapApi) {
        this.template = document.querySelector('#cadr-template-weather').content
        this.container = document.querySelector('.weatherWrapper');
        this.openweathermapApi = openweathermapApi;
        this.addCard()
            // this.addCard1()
    }


    create(data) {
        this.view = this.template.cloneNode(true)
            // this.view.querySelector('.weather__icon').src = this.weatherTypeIcon(data.icon);
        this.view.querySelector('.weather__icon').src = weatherTypeIcon(data.typeMain, data.type, data.isDay);
        this.view.querySelector('.weather__city').textContent = data.city ? data.city : 'СПб';
        this.view.querySelector('.weather__temperature').textContent = `${data.temperature} °C` ? `${data.temperature} °C` : '10 °C';
        this.view.querySelector('.weather__text').textContent = data.type;
        this.view.querySelector('.weather__day').textContent = getWeekDay();
        this.view.querySelector('.weather__date').textContent = times()
        return this.view
    }

    addCard() {
            document.querySelector('.weatherWrapper').textContent = 'Загрузка погоды... Разрешите доступ геолокации'
            navigator.geolocation.getCurrentPosition((pos) => {
                if (pos) {
                    this.openweathermapApi.getCardWeather(pos)
                        .then(res => {
                            document.querySelector('.weatherWrapper').textContent = ''
                            this.container.prepend(this.create({
                                    city: res.name,
                                    temperature: Math.ceil(res.main.temp),
                                    typeMain: res.weather[0].main,
                                    type: res.weather[0].description,
                                    isDay: (res.weather[0].icon).includes('d')
                                }))
                                // this.weatherTypeIcon({
                                //     icon: res.current.weather_descriptions[0]
                                // })
                            console.log(res)

                        })
                }
            })
        }
        // addCard1() {
        //     this.openweathermapApi.getCardWeather()
        //     if (navigator.geolocation.getCurrentPosition(this.openweathermapApi.getCardWeather)) {
        //         console.log(1111111)
        //     } else {
        //         console.log(222)
        //     }

    //     this.container.prepend(this.create({
    //             city: "город",
    //             temperature: "10"
    //         }))
    //         // console.log(res.current.temperature)
    // }
}