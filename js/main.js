window.sr = ScrollReveal();

    sr.reveal('.nav-list', {
        duration: 1000,
        origin: 'left',
        distance: '-1000px'
    });

    sr.reveal('.projects-grid', {
        duration: 1500,
        origin: 'top',
        distance: '-300px'
    });

    sr.reveal('.scroll-h1', {
        duration: 1500,
        origin: 'left',
        distance: '-300px'
    });

    sr.reveal('.scroll-p', {
        duration: 1500,
        origin: 'right',
        distance: '-300px'
    });

    sr.reveal('.contact-links', {
        duration: 3000,
        origin: 'top',
        distance: '-100px'
    });

window.addEventListener("scroll", function(){
    var nav = document.getElementById("navbar");
    nav.classList.toggle("abajo",window.scrollY>0);
})