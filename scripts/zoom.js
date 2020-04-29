//Botones para redirigir la página de acuerdo a los eventos que se presentan,en este caso los clicks a ellos
const boton_prod = document.querySelector("#produccion"); 
const boton_ped = document.querySelector("#pedidos"); 
const boton_stock = document.querySelector("#stock"); 
const boton_rep = document.querySelector("#reportes"); 

//Eventos para redirigir cada uno de los botones 
boton_prod.addEventListener("click", function(){
	document.location.href ="templates/productos.html"
});

boton_ped.addEventListener("click", function(){
	document.location.href ="templates/pedidos.html"
});

boton_stock.addEventListener("click", function(){
	document.location.href ="templates/stock.html"
});

boton_rep.addEventListener("click", function(){
	document.location.href ="templates/reportes.html"
});


//Esta función hace zoom en cada uno de los botones cuando se pasa por ellos
//Cambia entre clases, estas están definidas en el archivo .css
//las dos clases son transition y zoom
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});