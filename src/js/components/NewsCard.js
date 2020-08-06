// Класс карточки новости.
export default class NewsCard {
    constructor(urlToImage, publishedAt, title, description, name) {
        this.template = document.querySelector('#cadr-template-new').content;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.title = title;
        this.description = description;
        this.name = name;
    }

    create() {
        this.view = this.template.cloneNode(true).children[0];
        this.view.querySelector('.card__img').src = this.urlToImage;
        this.view.querySelector('.card__date').textContent = this.publishedAt;
        this.view.querySelector('.card__title').textContent = this.title;
        this.view.querySelector('.card__text').textContent = this.description;
        this.view.querySelector('.card__source').textContent = this.name;
        return this.view
    }
}