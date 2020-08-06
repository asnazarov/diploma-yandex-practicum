// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(container, createNewsCard, newsApi) {
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.render();
    }

    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }

    render = () => {
        this.newsApi.getCardsNews()
            .then(res => { res.articles.forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name)); })
    }
}