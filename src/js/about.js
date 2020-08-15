import "../pages/about.css";
import initSwiper from './Swiper.js';
import CommitCard from './components/CommitCard';
import CommitCardList from './components/CommitCardList';
// console.log(initSwiper)
import GithubApi from './modules/GithubApi';
const body = document.querySelector('body');
const container = document.querySelector('.commit__cards');
const serverGitUrl = 'https://api.github.com/repos/asnazarov/diploma-yandex-practicum';
const githubApi = new GithubApi({
    baseUrl: serverGitUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})




const createCommitCard = (...arg) => new CommitCard(...arg);
const commitCardList = new CommitCardList(container, createCommitCard, githubApi, initSwiper);