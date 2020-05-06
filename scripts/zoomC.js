$('.zoom').hover(function() {
    $(this).addClass('transition');
}, function() {
    $(this).removeClass('transition');
});

//Redirección de los botones de inicio en comercialización
$('#clientes').click(function(){
	document.location.href = "clientes.html"; 
});

$('#pedidos').click(function(){
	document.location.href = "pedidos.html"; 
});

$('#cancelarVenta').click(function(){
	document.location.href = "listadoVentas.html"
});

$('#agregarPedido').click(function(){
	document.location.href ="agregarPedidoPro.html"
});


