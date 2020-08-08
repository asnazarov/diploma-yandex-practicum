// Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска.
//  В колбэк-функции описывается взаимодействие с API, 
//  списком карточек и локальным браузерным хранилищем. 
//  Полученные от NewsAPI данные должны приводить к обновлению хранилища, 
//  а список карточек отображать полученные данные на странице. 
//  Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, 
//  управляющие работой кнопки сабмита.

export default class SearchInput {
    constructor(body, newsCardList, container) {
        this.body = body;
        this.newsCardList = newsCardList;
        this.container = container;
        this.children = this.container.children;
        this.body.querySelector('.search').addEventListener('submit', this.searchNewsSubmit);
        this.body.querySelector('.btnShowMore').addEventListener('click', this.showMore);
    }
    searchNewsSubmit = (event) => {
        event.preventDefault();
        this.container.innerHTML = "";
        this.newsCardList.render();
    }
    showMore = () => {
        this.newsCardList.render()
    }
}