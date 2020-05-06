//Zoom de botones
$('.zoom').hover(function() {
    $(this).addClass('transition');
}, function() {
    $(this).removeClass('transition');
});

//Redirección de los botones de inicio: 
$('#comprasB').click(function(){
	document.location.href = "homeRepCompras.html"; 
});

$('#ingresosB').click(function(){
	document.location.href = "homeRepIngresos.html"; 
}); 

$('#ventasB').click(function(){
	document.location.href = "homeRepVentas.html"; 
});

$('#produccionB').click(function(){
	document.location.href = "homeRepProduccion.html"; 
});



//Redirección de reportes ***************************************
const direc_actual = window.location.href.substring(0, window.location.href.lastIndexOf('/')+1);
const direc_com = window.location.href; 

$('#repMensual').click(function(){
	if(direc_com == (direc_actual + "homeRepCompras.html")){
		document.location.href = "repMensualCompras.html"; 
	}else
	{
		if (direc_com == (direc_actual + "homeRepIngresos.html")){
			document.location.href ="repMensualIngresos.html";
		}else
		{
			if (direc_com == (direc_actual + "homeRepVentas.html")){
				document.location.href = "repMensualVentas.html"
			}else
			{
				if (direc_com ==(direc_actual + "homeRepProduccion.html")){
					document.location.href = "repMensualProd.html"; 
				}
			}
		}
	}
});

$('#repAnual').click(function(){
	if(direc_com == (direc_actual + "homeRepCompras.html")){
		document.location.href = "repAnualCompras.html"; 
	}else
	{
		if (direc_com == (direc_actual + "homeRepIngresos.html")){
			document.location.href ="repAnualIngresos.html";
		}else
		{
			if (direc_com == (direc_actual + "homeRepVentas.html")){
				document.location.href = "repAnualVentas.html"
			}
			else 
			{
				if (direc_com ==(direc_actual + "homeRepProduccion.html")){
					document.location.href = "repAnualProd.html"; 
				}
			}
		}
	}
});
//*************************************************************
$('#sigPag').click(function(){
	if (direc_com == (direc_actual + "repAnualCompras.html")){
		document.location.href = "pagina2.html"; 
	}else{
		document.location.href = "repAnualCompras.html"; 
	}
});

//**************************************************

$('#comer').click(function(){
	document.location.href = "../comercializacion/comercializacion.html"; 
});

$('#admin').click(function(){
	document.location.href = "../administracion/administracion.html"; 
}); 

$('#produc').click(function(){
	document.location.href = "../produccion/produccion.html"; 
});



