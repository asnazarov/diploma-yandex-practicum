export default class NewsApi {
    constructor(options, body) {
        this.url = options.baseUrl;
        this.apiKey = options.key;
        this.utils = options.Utils
        this.headers = options.headers;
        this.request = null;
        this.searchBar = options.searchBar; // инпут
        this.body = body;
        // console.log(this.fromDate())
    }

    getCardsNews() {
        this.request = this.searchBar.value
        return fetch(`${this.url}q=${this.request}&pageSize=100&from=${this.fromDate()}&language=ru&apiKey=${this.apiKey}`, {
                method: "GET",
                headers: this.headers,
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

    fromDate = () => { // текущая дата минус семь дней
        const date = new Date()
        const from = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()-7}`
        return from
    }
}