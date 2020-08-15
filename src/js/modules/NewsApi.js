export default class NewsApi {
    constructor(options, body) {
        this.url = options.baseUrl;
        this.apiKey = 'b1bc6d643ef64acfb58aee73a2f93d5d';
        // this.apiKey = '506809f93d0443f99a89364270056a79';
        this.from = '2020-08-01';
        this.headers = options.headers;
        this.request = null;
        this.searchBar = document.querySelector('.search__bar'); // инпут
        this.body = body;
    }

    getCardsNews() {
        this.request = this.searchBar.value
        return fetch(`${this.url}q=${this.request}&pageSize=100&from=2020-08-01&language=ru&apiKey=${this.apiKey}`, {
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

}