// Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска.
//  В колбэк-функции описывается взаимодействие с API, 
//  списком карточек и локальным браузерным хранилищем. 
//  Полученные от NewsAPI данные должны приводить к обновлению хранилища, 
//  а список карточек отображать полученные данные на странице. 
//  Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, 
//  управляющие работой кнопки сабмита.

export default class SearchInput {
    constructor(body, newsCardList, container, newsApi, searchBar) {
        this.body = body;
        this.newsCardList = newsCardList;
        this.container = container;
        this.newsApi = newsApi;
        this.searchBar = searchBar;
        this.children = this.container.children;
        this.body.querySelector('.search').addEventListener('submit', this.searchNewsSubmit);
        this.body.querySelector('.btnShowMore').addEventListener('click', this.showMore);
    }

    searchNewsSubmit = (event) => {
        event.preventDefault();
        this.body.querySelector('.search__btn').disabled = true;
        this.body.querySelector('.result').style.display = "none";
        this.body.querySelector('.notFound').style.display = "none";
        localStorage.removeItem('searchQuery') // удаляю текст запроса из хранилища
        this.container.innerHTML = "";
        this.body.querySelector('.preloader').style.display = "flex";
        this.newsCardList.render();
        localStorage.setItem('searchQuery', this.searchBar.value)
    }
    showMore = () => {
        this.body.querySelector('.preloader').style.display = "flex";
        this.newsCardList.renderLocalStorage()
        this.body.querySelector('.preloader').style.display = "none";
    }

}