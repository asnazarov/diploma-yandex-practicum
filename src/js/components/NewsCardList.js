// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(container, initialCards, createNewsCard) {
        this.container = container;
        this.initialCards = initialCards;
        this.createNewsCard = createNewsCard;
        this.render();
    }

    addCard = (urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(urlToImage, publishedAt, title, description, name).create())
    }

    render = () => {
        this.initialCards.forEach((item) => {
            this.addCard(item.urlToImage, item.publishedAt, item.title, item.description, item.source.name)
        })
    }
}