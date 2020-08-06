export default class NewsApi {
    constructor(options) {
        this.options = options.baseUrl;
        this.headers = options.headers;
        console.log(this.headers.authorization)
    }
    getCardsNews() {
        return fetch(`${this.options}q=мир&language=ru&apiKey=b1bc6d643ef64acfb58aee73a2f93d5d`, {
                headers: this.headers,
            })
            .then(res => {
                return res.json();
            })
    }
}