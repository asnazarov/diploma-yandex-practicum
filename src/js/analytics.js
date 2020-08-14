import "../pages/analytics.css";

const body = document.querySelector('body');
const statisticsResult = body.querySelector('.statistics__result').textContent = localStorage.getItem('searchQuery').toLocaleLowerCase();
const statisticsTextTotal = body.querySelector('.statistics__text_total').textContent = localStorage.getItem('totalResults');
const statisticsMentioning = localStorage.getItem('data').toLocaleLowerCase().split(' ');
let sum = 0;
for (let i = 0; i < statisticsMentioning.length; i++) {
    if (statisticsMentioning[i] == statisticsResult) {
        sum += 1;
    }
}
body.querySelector('.statistics__text_mentioning').textContent = sum;

class Statistics {
    constructor() {

    }
}

const statistics = new Statistics();