// Класс списка карточек новостей.

export default class NewsCardList {
    constructor(body, container, createNewsCard, newsApi) {
        this.body = body;
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.children = this.container.children;
        this.localA();

    }

    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }

    render = (data) => {
        this.newsApi.getCardsNews()
            .then(res => {
                res.articles.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
                localStorage.setItem('data', JSON.stringify(res.articles));
                this.lengthItems = res.articles.length;
                localStorage.getItem('data');
                //    this.RenderParse = RenderParse;
                this.body.querySelector('.preloader').style.display = "none";
                if (this.children.length === 0) {
                    this.body.querySelector('.result').style.display = "none";
                    this.body.querySelector('.notFound').style.display = "flex";
                } else {
                    this.body.querySelector('.notFound').style.display = "none";
                    this.body.querySelector('.result').style.display = "block";
                }
            })
            // console.log(res.articles)
    }
    localA = () => {
        console.log('сработал метод localA')
        this.body.querySelector('.result').style.display = "none";
        // const localRender = localStorage.getItem('data');
        this.RenderParse = JSON.parse(localStorage.getItem('data'));
        if (localStorage.getItem('data') !== null) {
            this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
            this.body.querySelector('.result').style.display = "block";
        }
    }

}


//     render = (event) => {
//             this.newsApi.getCardsNews()
//                 .then(res => {
//                     res.articles.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
//                     // localStorage.setItem('data', JSON.stringify(res.articles))
//                     // this.articles = res.articles;
//                     // console.log(this.articles)

//                     // this.RenderParse = RenderParse;
//                     this.body.querySelector('.preloader').style.display = "none";
//                     if (this.children.length === 0) {
//                         this.body.querySelector('.result').style.display = "none";
//                         this.body.querySelector('.notFound').style.display = "flex";
//                     } else {
//                         this.body.querySelector('.notFound').style.display = "none";
//                         this.body.querySelector('.result').style.display = "block";
//                     }

//                 })
//                 .catch((err) => {
//                     console.log(err); // выведем ошибку в консоль
//                 })
//                 // console.log(res.articles)
//         }
//         // localA = () => {
//         //     // if (this.children) {
//         //     //     console.log(11111111111)
//         //     // }
//         //     const localRender = localStorage.getItem('data');
//         //     this.RenderParse = JSON.parse(localRender);
//         //     console.log(this.RenderParse)
//         //     this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item => this.addCard(item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name));
//         //     this.body.querySelector('.preloader').style.display = "none";
//         //     if (this.children.length === 0) {
//         //         this.body.querySelector('.result').style.display = "none";
//         //         this.body.querySelector('.notFound').style.display = "flex";
//         //     } else {
//         //         this.body.querySelector('.notFound').style.display = "none";
//         //         this.body.querySelector('.result').style.display = "block";
//         //     }
//         // }