import "../pages/index.css";

import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import SearchInput from './components/SearchInput';
import NewsApi from './modules/NewsApi';

(function() {
    const body = document.querySelector('body');
    const container = body.querySelector('.cards-news');
    const btnShowMore = body.querySelector('.btnShowMore'); // показать еще
    const searchBar = document.querySelector('.search__bar'); // инпут
    searchBar.value = localStorage.getItem('searchQuery')
        // const serverNewsUrl = 'https://newsapi.org/v2/everything?';
    const serverNewsUrl = 'https://nomoreparties.co/news/v2/everything?';
    const apiKey = 'b1bc6d643ef64acfb58aee73a2f93d5d';
    body.querySelector('.logo').addEventListener('click', () => localStorage.clear()) // полностью чистим localStorage

    const newsApi = new NewsApi({
        baseUrl: serverNewsUrl,
        key: apiKey,
        searchBar: searchBar,
        headers: {
            'Content-Type': 'application/json'
        },
    }, body, utils);

    const createNewsCard = (...arg) => new NewsCard(...arg);
    const newsCardList = new NewsCardList(body, container, createNewsCard, newsApi, btnShowMore);
    const searchInput = new SearchInput(body, newsCardList, container, newsApi, searchBar);
})();