/*function getAbsolutePath() {
    var loc = window.location; //posición actual incluido el .html
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
} 
Esa función era mi primera prueba, la comento por las dudas si surge un problema
con la otra forma de obtener la ruta absoluta del archivo*/

const direc_actual = window.location.href.substring(0, window.location.href.lastIndexOf('/')+1);
const produccion = {'user':"produccion", 'pass':"1234",'link':"templates/produccion/homeProd.html"};
const ventas = {'user':"ventas", 'pass':"1234",'link':"templates/ventas/comercializacion.html"};
const administracion = {'user':"administracion", 'pass':"1234", 'link':"templates/administracion/administracion.html"}; 
const compras = {'user':"compras",'pass':"1234", 'link':"templates/compras/homeCompras.html"};


$("#ingresar").click(function(){
	let user = $("#usuario").val(); 
	let pass = $("#contraseña").val(); 
	if ((produccion.user == user) && (produccion.pass == pass)){
		document.location.href = direc_actual + produccion.link; 
	}

	if ((ventas.user == user) && (ventas.pass == pass)){
		document.location.href = direc_actual + ventas.link; 
	}

	if ((administracion.user == user) && (administracion.pass == pass)){
		document.location.href = direc_actual + administracion.link; 
	}

	if ((compras.user == user) && (compras.pass == pass)){
		document.location.href = direc_actual + compras.link; 
	}
	
});
