// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(body, container, createNewsCard, newsApi) {
        this.body = body;
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.children = this.container.children;

        // this.render();
    }

    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }

    render = (event) => {
        this.newsApi.getCardsNews()
            .then(res => {
                res.articles.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));

                this.body.querySelector('.preloader').style.display = "none";
                if (this.children.length === 0) {
                    this.body.querySelector('.result').style.display = "none";
                    this.body.querySelector('.notFound').style.display = "flex";
                } else {
                    this.body.querySelector('.notFound').style.display = "none";
                    this.body.querySelector('.result').style.display = "block";
                }
            })
            // console.log(res.articles)
    }

}