import "../pages/index.css";
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import SearchInput from './components/SearchInput';
import NewsApi from './modules/NewsApi';

(function() {
    const body = document.querySelector('.body');
    const container = body.querySelector('.cards-news');
    const searchBar = document.querySelector('.search__bar'); // инпут
    let serverUrl = 'https://praktikum.tk/news/v2/everything?';
    const localClear = body.querySelector('.logo')
    localClear.addEventListener('click', function() { localStorage.clear() })
    const newsApi = new NewsApi({
        baseUrl: serverUrl,
        headers: {
            'apiKey': 'Bearer <b1bc6d643ef64acfb58aee73a2f93d5d>',
            'Content-Type': 'application/json'
        },
    }, body);

    const createNewsCard = (...arg) => new NewsCard(...arg);
    const newsCardList = new NewsCardList(body, container, createNewsCard, newsApi, searchInput);

    const searchInput = new SearchInput(body, newsCardList, container, newsApi);
})();