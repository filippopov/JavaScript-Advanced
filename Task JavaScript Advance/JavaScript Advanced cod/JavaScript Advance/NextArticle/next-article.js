function getArticleGenerator(articles) {
    return function showNext() {
        let article = articles.shift();
        if (article) {
            $('<article>').text(article).appendTo('#content');
        }
    }
}

