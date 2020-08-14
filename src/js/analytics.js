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



const statistics = new Statistics(container, localParse, todayMonth, statisticsResult, statisticsMentioning);
let date = new Date();

// const херня = `${date.getDate() + 1} ${date.getMonth()} ${date.getFullYear()} `;
// console.log(херня)


// getWeekDay(date) // сегодняшний день недели
// console.log(getWeekDay(date))

function getMonth(month) {
    let days = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return days[month.getMonth()];
}

const todayMonth = getMonth(date) // месяц сегодня