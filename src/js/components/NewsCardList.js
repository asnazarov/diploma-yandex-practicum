// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(body, container, createNewsCard, newsApi, btnShowMore) {
        this.body = body;
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.btnShowMore = btnShowMore;
        this.children = this.container.children;
        this.renderLocalStorage();
    }

    times = (str) => {
        const date = new Date(str);
        const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        this.time = `${date.getDate()} ${days[date.getMonth()]} ${date.getFullYear()}г.`
        return this.time
    }

    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }

    render = (data) => { // запрос к серверу
        this.newsApi.getCardsNews()
            .then(res => {
                res.articles.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, this.times(item.publishedAt), item.title, item.description, item.source.name));
                localStorage.setItem('data', JSON.stringify(res.articles));
                localStorage.setItem('totalResults', JSON.stringify(res.totalResults));
                this.lengthItems = res.articles.length;
                localStorage.getItem('data');
                this.times('2020-08-09T05:21:22Z')
                this.RenderParse = JSON.parse(localStorage.getItem('data'));
                this.checkBtnShowMore()
                this.body.querySelector('.preloader').style.display = "none";
                this.body.querySelector('.search__btn').disabled = false;
                if (this.children.length === 0) {
                    this.body.querySelector('.result').style.display = "none";
                    this.body.querySelector('.notFound').style.display = "flex";
                } else {
                    this.body.querySelector('.notFound').style.display = "none";
                    this.body.querySelector('.result').style.display = "block";
                }
            })
            .catch((err) => {
                console.log('err'); // выведем ошибку в консоль
            });
    }

    renderLocalStorage = () => {
        this.body.querySelector('.result').style.display = "none";
        this.RenderParse = JSON.parse(localStorage.getItem('data'));

        if (localStorage.getItem('data') !== null) {
            this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, this.times(item.publishedAt), item.title, item.description, item.source.name));
            this.body.querySelector('.result').style.display = "block";
        }
        this.checkBtnShowMore()
    }
    checkBtnShowMore = () => {
        if (localStorage.getItem('data') !== null) {
            if (this.RenderParse.length == this.children.length) {
                this.btnShowMore.style.display = "none";
            } else {
                this.btnShowMore.style.display = "block";
            }
        }
    }
}