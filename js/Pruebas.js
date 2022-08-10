function modoClaro() 
{
    var claro=document.getElementById("main");
    claro.style.background="#ccc";
    claro.style.color="#303841";
}

function modoOscuro() 
{
    var oscuro=document.getElementById("main");
    oscuro.style.background="#303841";
    oscuro.style.color="#ccc";
}

window.sr = ScrollReveal();

    sr.reveal('.nav-list', {
        duration: 1000,
        origin: 'left',
        distance: '-1000px'
    });