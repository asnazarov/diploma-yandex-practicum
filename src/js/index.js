import "../pages/index.css";
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import NewsApi from './modules/NewsApi';

// (function() {
const body = document.querySelector('.body');
const container = body.querySelector('.cards-news');
const serverUrl = NODE_ENV === 'development' ? 'https://praktikum.tk/news/v2/everything?' : 'https://praktikum.tk/news/v2/everything?';


const newsApi = new NewsApi({
    baseUrl: serverUrl,
    headers: {
        authorization: 'b1bc6d643ef64acfb58aee73a2f93d5d',
        'Content-Type': 'application/json'
    },
});
const createNewsCard = (...arg) => new NewsCard(...arg);
const newsCardList = new NewsCardList(container, createNewsCard, newsApi)
    // })();