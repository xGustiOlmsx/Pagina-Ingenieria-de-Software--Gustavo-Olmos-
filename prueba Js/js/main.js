function avisoImportante() 
{
    alert("IMPORTANTE: esta es una maqueta simple, no esperes mucho ya que su única función es la de probar JavaScript en ella, gracias");
}

function modoClaro() 
{
    var convertidor=document.getElementById("main");
    convertidor.style.background="#ccc";
    convertidor.style.color="#303841";
}

function modoOscuro() 
{
    var convertidor=document.getElementById("main");
    convertidor.style.background="#303841";
    convertidor.style.color="#ccc";
}