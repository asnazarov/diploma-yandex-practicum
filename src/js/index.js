import "../pages/index.css";
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import SearchInput from './components/SearchInput';
import NewsApi from './modules/NewsApi';
import OpenweathermapApi from './modules/OpenweathermapApi.js';
import CurrencyApi from './modules/CurrencyApi.js';
import Currency from './components/Currency.js';
import Weather from './components/Weather.js';

(function() {
    const body = document.querySelector('body');
    const container = body.querySelector('.cards-news');
    const btnShowMore = body.querySelector('.btnShowMore'); // показать еще
    const searchBar = document.querySelector('.search__bar'); // инпут
    searchBar.value = localStorage.getItem('searchQuery')
        // const serverNewsUrl = 'https://newsapi.org/v2/everything?';
        // const serverOpenweathermapApi = 'api.openweathermap.org/data/2.5/weather?q=London&appid=7a413b7114bca1a02d11e7114704e04e';
    const serverOpenweathermapApi = NODE_ENV === 'development' ?
        'http://api.weatherstack.com' : 'https://api.weatherstack.com';
    const serverNewsUrl = 'https://nomoreparties.co/news/v2/everything?';
    // const servetCurrencyApi = 'https://www.cbr.ru/scripts/XML_daily.asp';
    const servetCurrencyApi = 'https://www.amdoren.com/api/currency.php?api_key=zNc5yHsTAa8MyfRenmAX879YgYKcYK&from=USD&to=RUB';
    const apiKeyNews = 'b1bc6d643ef64acfb58aee73a2f93d5d';
    body.querySelector('.logo').addEventListener('click', () => localStorage.clear()) // полностью чистим localStorage

    const openweathermapApi = new OpenweathermapApi({
        baseUrl: serverOpenweathermapApi,
        weather: weather,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const currencyApi = new CurrencyApi({
        baseUrl: servetCurrencyApi
    })
    const newsApi = new NewsApi({
        baseUrl: serverNewsUrl,
        searchBar: searchBar,
        key: apiKeyNews,
        headers: {
            'Content-Type': 'application/json'
        },
    }, body);
    const createNewsCard = (...arg) => new NewsCard(...arg);
    const newsCardList = new NewsCardList(body, container, createNewsCard, newsApi, btnShowMore);
    const weather = new Weather(openweathermapApi);
    const currency = new Currency(currencyApi);
    const searchInput = new SearchInput(body, newsCardList, container, newsApi, searchBar);


})();