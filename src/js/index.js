import "../pages/index.css";
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
// import Api from "./Api.js";
const initialCards = [{
        "source": {
            "id": "rbc",
            "name": "RBC"
        },
        "author": null,
        "title": "Полиция установила родителей найденного на западе Москвы ребенка - РБК",
        "description": "Полиция установила родителей мальчика, которого прохожие нашли в коляске на западе Москвы. Об этом РБК сообщили в пресс-службе ГУ МВД по столице. Предполагаемые родители ребенка установлены и ...",
        "url": "https://www.rbc.ru/rbcfreenews/5f2a8e3b9a79473815bf7349",
        "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/2/94/755966266382942.jpg",
        "publishedAt": "2020-08-05T11:23:00Z",
        "content": ""
    },
    {
        "source": {
            "id": "lenta",
            "name": "Lenta"
        },
        "author": null,
        "title": "В Сочи застрелили загрызших мальчика медведей - Lenta.ru",
        "description": "В Сочи застрелили двух медведей, которые загрызли 11-летнего мальчика в своем вольере. Животных пришлось застрелить в том числе для того, чтобы достать из вольера тело ребенка. Это было сделано по распоряжению сотрудников правоохранительных органов. Выяснилос…",
        "url": "https://lenta.ru/news/2020/08/05/shot/",
        "urlToImage": "https://icdn.lenta.ru/images/2020/08/05/14/20200805141853851/share_00787c39f60300ab44d5472acef92da9.jpg",
        "publishedAt": "2020-08-05T11:16:00Z",
        "content": ", 11- . Telegram- « ».\r\n , , . « 24» , .\r\n , , « 24». , . , , .\r\n 5 , , - . , . 1 109 (« »). -, ."
    },
    {
        "source": {
            "id": null,
            "name": "Championat.com"
        },
        "author": "Андрей Панков",
        "title": "Вслед за Кокориным «Спартак» подписал Урунова. Всё, что об этом нужно знать - Чемпионат",
        "description": "От чемпионата Узбекистана до популярнейшего клуба России – всего за полгода.",
        "url": "https://www.championat.com/football/article-4099029-transfery-rpl-leta-2020-urunov-pereshjol-v-spartak---podrobnosti.html",
        "urlToImage": "https://img.championat.com/news/social/c/93/4099029.jpg",
        "publishedAt": "2020-08-05T10:40:08Z",
        "content": "«» , . - «». 19- .\r\n «» 2020 , 10 \r\n 2020 . «», «». $ 150 . 10 , , , . , , . .\r\n , «»\r\n «», , «». . «», «» . , 21 . . «», , «» «» .\r\n«» . - , .\r\n «» \r\n«» : . «» . , , . «» «» : \r\n« . , . , , . . ! , … [+68 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Tass.ru"
        },
        "author": "ТАСС",
        "title": "В Турции зафиксировали резкий рост числа инфицированных коронавирусом - ТАСС",
        "description": "Это связано с с празднованием Курбан-байрама и увеличением числа отдыхающих на курортах, уточнил министр здравоохранения республики Фахреттин Коджа",
        "url": "https://tass.ru/obschestvo/9126453",
        "urlToImage": "https://phototass1.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20200805/5686887.jpg",
        "publishedAt": "2020-08-05T10:30:51Z",
        "content": "1083 .\r\n\" ( - . ) . . \", - .\r\n,  \" -\". , , , , .\r\n 1 , . , - --. : 1 , 10 - , .\r\n 10 . 234 ., 5 765 , 218 491 ."
    },
    {
        "source": {
            "id": "lenta",
            "name": "Lenta"
        },
        "author": null,
        "title": "Главу РУСАДА захотели уволить - Lenta.ru",
        "description": "Глава Российского антидопингового агентства (РУСАДА) Юрий Ганус может быть отправлен в отставку. В среду, 5 августа, этот вопрос поднимут на заседании наблюдательного совета организации. Функционеру придется уйти в отставку, если за это проголосует большинств…",
        "url": "https://lenta.ru/news/2020/08/05/ganus/",
        "urlToImage": "https://icdn.lenta.ru/images/2020/08/05/12/20200805122956773/share_f5a138f9042dc9a49a8c76f523c9f1f7.jpg",
        "publishedAt": "2020-08-05T09:59:00Z",
        "content": "() . .\r\n , , 5 , . , . .\r\n , . « , , , », . , .\r\n13 , . , .\r\n 2017 . ."
    },
    {
        "source": {
            "id": "lenta",
            "name": "Lenta"
        },
        "author": null,
        "title": "Стало известно о непоправимых изменениях во внешности Заворотнюк - Lenta.ru",
        "description": "Болезнь внесла непоправимые изменения во внешность актрисы Анастасии Заворотнюк, сообщила бывший реквизитор МХТ имени Чехова Светлана Веселова. Один из сотрудников медицинского учреждения, в котором наблюдается Заворотнюк, заявил о сильных изменениях у актрис…",
        "url": "https://lenta.ru/news/2020/08/05/zvrtnk/",
        "urlToImage": "https://icdn.lenta.ru/images/2020/08/05/11/20200805112154113/share_5c2202907f33b769a4dd33c7ee05ee19.jpg",
        "publishedAt": "2020-08-05T09:24:00Z",
        "content": ", . «».\r\n , .\r\n« . ? - , », , .\r\n, , , . , Instagram."
    }
];
(function() {
    const body = document.querySelector('.body');
    const container = body.querySelector('.cards-news');

    const createNewsCard = (...arg) => new NewsCard(...arg);
    const newsCardList = new NewsCardList(container, initialCards, createNewsCard)
})();