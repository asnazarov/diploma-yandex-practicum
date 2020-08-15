import "../pages/analytics.css";
import Statistics from './components/Statistics';

const body = document.querySelector('body');
const statisticsResult = body.querySelector('.statistics__result').textContent = localStorage.getItem('searchQuery').toLocaleLowerCase();
const statisticsTextTotal = body.querySelector('.statistics__text_total').textContent = localStorage.getItem('totalResults');
const statisticsMentioning = localStorage.getItem('data').toLocaleLowerCase().split(' ');

const container = body.querySelector('.tabel__schedule-wrapper');
const localParse = JSON.parse(localStorage.getItem('data'));
let sum = 0;
for (let i = 0; i < statisticsMentioning.length; i++) {
    if (statisticsMentioning[i] == statisticsResult) {
        sum += 1;
    }
}
body.querySelector('.statistics__text_mentioning').textContent = sum;

const statistics = new Statistics(container, localParse, statisticsResult, statisticsMentioning);
const date = new Date();

function getMonth(month) {
    const days = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return days[month.getMonth()].toUpperCase();
}
const todayMonth = getMonth(date) // месяц сегодня
body.querySelector('.tabel__sorter_month').textContent = getMonth(date);