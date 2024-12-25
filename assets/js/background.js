document.addEventListener("DOMContentLoaded", function() {
    const classes = ['background-1', 'background-2','background-3'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.body.classList.add(randomClass);
});