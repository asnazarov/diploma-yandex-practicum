import "../pages/index.css";
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import NewsApi from './modules/NewsApi';
import SearchInput from './components/SearchInput';

// (function() {
const body = document.querySelector('.body');
const container = body.querySelector('.cards-news');
const searchBar = document.querySelector('.search__bar'); // инпут
let serverUrl = 'https://praktikum.tk/news/v2/everything?';

const newsApi = new NewsApi({
    baseUrl: serverUrl,
    headers: {
        'apiKey': 'Bearer <b1bc6d643ef64acfb58aee73a2f93d5d>',
        'Content-Type': 'application/json'
    },
}, body);
const createNewsCard = (...arg) => new NewsCard(...arg);
const newsCardList = new NewsCardList(body, container, createNewsCard, newsApi);
const searchInput = new SearchInput(body, newsCardList, container, newsApi);
// })();
const result = body.querySelector('.result__container')
const number = container;
// console.log(localStorage.getItem('number'))
localStorage.setItem('number', number.toString())
console.log(localStorage.getItem('number'))