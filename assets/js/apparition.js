document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animation-scroll, .animation-scroll-from-left');
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});