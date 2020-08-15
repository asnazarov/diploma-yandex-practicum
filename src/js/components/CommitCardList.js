// Класс списка карточек коммитов на странице «О проекте».

export default class CommitCardList {
    constructor(container, createCommitCard, githubApi, initSwiper) {
        this.container = container;
        this.createCommitCard = createCommitCard;
        this.githubApi = githubApi;
        this.initSwiper = initSwiper;
        this.render()
    }
    addCard = (url, date, message, author, mail, avatar) => {
        this.container.append(this.createCommitCard(url, date, message, author, mail, avatar).create())
    }
    render = () => {
        this.githubApi.getCardsCommits()
            .then(res => {
                res.forEach(item => this.addCard(item.html_url, item.commit.author.date, item.commit.message, item.commit.author.name, item.commit.author.email, item.author.avatar_url));
                this.initSwiper()
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }
}