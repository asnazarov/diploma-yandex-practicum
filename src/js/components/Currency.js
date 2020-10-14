import { times } from '../utils/utils.js';

export default class Currency {
    constructor(currencyApi) {
        this.template = document.querySelector('#cadr-template-currency').content
        this.container = document.querySelector('.cover__item');
        this.currencyApi = currencyApi
        console.log(this.template)
        this.addCard()
    }

    create(data) {
        this.view = this.template.cloneNode(true).children[0];
        this.view.querySelector('.exchangeRates__title').textContent = `Курс валют на ${times()}`;
        this.view.querySelector('.exchangeRates__dataNumber_usd').textContent = data.usd;
        this.view.querySelector('.exchangeRates__dataNumber_eur').textContent = data.eur;
        return this.view

    }

    addCard() {
        this.currencyApi.getCardWeather()
            .then(res => {
                const eur = Math.floor(res.rates.RUB * 100) / 100;
                const usd = Math.floor((res.rates.RUB / res.rates.USD) * 100) / 100;
                console.log(usd)
                this.container.append(this.create({ eur, usd }))
                console.log(res.rates)
            })

    }
}