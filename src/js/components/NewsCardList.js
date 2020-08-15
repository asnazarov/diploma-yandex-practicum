// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(body, container, createNewsCard, newsApi) {
        this.body = body;
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.children = this.container.children;
        this.localA();
    }

    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }

    render = (data) => {
        this.newsApi.getCardsNews()
            .then(res => {
                res.articles.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
                localStorage.setItem('data', JSON.stringify(res.articles));
                localStorage.setItem('totalResults', JSON.stringify(res.totalResults));
                this.lengthItems = res.articles.length;
                localStorage.getItem('data');
                this.body.querySelector('.preloader').style.display = "none";
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

    localA = () => {
        this.body.querySelector('.result').style.display = "none";
        // const localRender = localStorage.getItem('data');
        this.RenderParse = JSON.parse(localStorage.getItem('data'));
        if (localStorage.getItem('data') !== null) {
            this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
            this.body.querySelector('.result').style.display = "block";
        }
    }
}