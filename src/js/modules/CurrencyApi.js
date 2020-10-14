export default class CurrencyApi {
    constructor(option) {
        this.url = option.baseUrl
        console.log(this.url)
        this.getCardWeather()
    }

    getCardWeather = () => {

        // return fetch(`http://www.amdoren.com/api/currency.php?api_key=zNc5yHsTAa8MyfRenmAX879YgYKcYK&from=USD&to=RUB`, {
        return fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,RUB`, {
                method: "GET",
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            // .then(res => console.log(res))
    }
}