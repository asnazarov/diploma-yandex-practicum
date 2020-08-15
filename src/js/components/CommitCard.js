// Аналогичен компоненту NewsCard только для карточек коммитов на странице «О проекте».

export default class CommitCard {
    constructor(wrapperLink, date, message, author, mail, avatar) {
        this.template = document.querySelector('#cadr-template-commit').content;
        this.wrapperLink = wrapperLink;
        this.date = date;
        this.message = message;
        this.author = author;
        this.mail = mail;
        this.avatar = avatar;
    }

    create() {
        this.view = this.template.cloneNode(true).children[0];
        this.view.querySelector('.commit__wrapper-link').href = this.wrapperLink;
        this.view.querySelector('.commit__date').textContent = this.date;
        this.view.querySelector('.commit__text').textContent = this.message;
        this.view.querySelector('.commit__image').src = this.avatar
        this.view.querySelector('.commit__title').textContent = this.author;
        this.view.querySelector('.commit__mail').textContent = this.mail;
        return this.view
    }
}