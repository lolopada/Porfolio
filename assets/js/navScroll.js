function scrollToArticle(articleId) {
    const article = document.getElementById(articleId);
    if (article) {
        window.scrollTo({
            top: article.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    }
}

document.getElementById("buttonMoi").addEventListener("click", function() {
    scrollToArticle('toMoi');
});

document.getElementById("buttonParcours").addEventListener("click", function() {
    scrollToArticle('toParcours');
});

document.getElementById("buttonProjets").addEventListener("click", function() {
    scrollToArticle('articleProjets');
});

document.getElementById("buttonProjets").addEventListener("click", function() {
    scrollToArticle('toProjets');
});