document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-content');
    const mainTitleSpans = document.querySelectorAll('.main-title span');

    header.addEventListener('mouseenter', function() {
        mainTitleSpans.forEach(span => {
            span.style.animationPlayState = 'paused';
        });
    });

    header.addEventListener('mouseleave', function() {
        mainTitleSpans.forEach(span => {
            span.style.animationPlayState = 'running';
        });
    });
});