//Esta función hace zoom en cada uno de los botones cuando se pasa por ellos
//Cambia entre clases, estas están definidas en el archivo .css
//las dos clases son transition y zoom
$('.zoom').hover(function() {
    $(this).addClass('transition');
}, function() {
    $(this).removeClass('transition');
});


//Redirección de los botones en la ventana de detallePed
$('.asignar').click(function(){
   	document.location.href = "asignar.html"; 
});

//Redirección de los botones Detalle en la ventana de pedidos_cli
$('.detallePed').click(function(){
   	document.location.href = "detallePed.html"; 
});

//Redirección de los botones de home
$('#pedidos').click(function(){
	document.location.href = "pedidos_cli.html"; 
}); 

$('#stock').click(function(){
	document.location.href = "stock.html"; 
});

$('#reportes').click(function(){
	document.location.href = "reportes.html"; 
});

$('#solicitudes').click(function(){
	document.location.href = "solicitudesMP.html";
});

//Redirección de los botones de la ventana de reportes

$('#maquinaria').click(function(){
	document.location.href = "maquinaria.html"; 
});

$('#perdida').click(function(){
	document.location.href = "perdida.html"; 
});

//Redirección del botón de asignar en la ventana de asignar
$('.asignarMP').click(function(){
	document.location.href = "detallePed.html"; 
});

$('#crearSolicitud').click(function(){
	document.location.href = "crearSolicitud.html"; 
});

$('#productosT').click(function(){
	document.location.href = "productos.html"; 
});

$('#insumos').click(function(){
	document.location.href = "insumos.html";
}); 

$('#prodTer').click(function(){
	document.location.href = "productos.html"
});

$('#enviarSolicitud').click(function(){
	document.location.href = "solicitudesMP.html"
});
