window.sr = ScrollReveal();

    sr.reveal('.nav-scroll', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.projects-grid', {
        duration: 2000,
        origin: 'top',
        distance: '-300px'
    });

    sr.reveal('.scroll-h1', {
        duration: 2000,
        origin: 'top',
        distance: '-300px'
    });

    sr.reveal('.scroll-p', {
        duration: 2000,
        origin: 'top',
        distance: '-300px'
    });

    sr.reveal('.scroll-h1a', {
        duration: 2000,
        origin: 'left',
        distance: '-300px'
    });

    sr.reveal('.scroll-pa', {
        duration: 2000,
        origin: 'right',
        distance: '-300px'
    });

    sr.reveal('.btn1', {
        duration: 1000,
        origin: 'top',
        distance: '-300px'
    });

    sr.reveal('.btn2', {
        duration: 1000,
        origin: 'top',
        distance: '-2000px'
    });

    sr.reveal('.btn3', {
        duration: 1200,
        origin: 'top',
        distance: '-10000px'
    });

    sr.reveal('.btn4', {
        duration: 1600,
        origin: 'top',
        distance: '-10000px'
    });

window.addEventListener("scroll", function(){
    var nav = document.getElementById("navbar");
    nav.classList.toggle("abajo",window.scrollY>0);
})

barba.init({
    transitions: [{
        name: 'cambio',
        leave: function(data){
            var donde = this.async();
            document.body.classList.add('loading');
            setTimeout(function(){
                done();
            },900);
        },
        enter:
        function(data){
            var donde = this.async();
            document.body.classList.add('loading');
            setTimeout(function(){
                done();
            },900);
    }}]
});