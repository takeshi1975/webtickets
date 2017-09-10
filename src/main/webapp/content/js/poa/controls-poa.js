/**
    Author: Juanjo Alejandro
    Definition: Gestión del control de pestañas y otros controles de la página de POA
**/
(function ($){
	$.fn.switchfy = function() {		
		
		var reference = this;
		
		this.find(".img-one").css( 'cursor', 'pointer' );
		
		this.find(".img-two").css( 'cursor', 'pointer' );
		
		this.find(".img-one").click(function(){
			window.console && console.log("Se ha hecho click sobre el panel 1");
			reference.find(".img-one").find("img").attr("src","/webtickets/content/images/poa/BotonesH-P_02.png");
			reference.find(".img-two").find("img").attr("src","/webtickets/content/images/poa/Entradas.png");
			reference.find("#tab-one").show(1000);
			reference.find("#tab-two").hide(1000);				
		});
		
		this.find(".img-two").click(function(){
			window.console && console.log("Se ha hecho click sobre el panel 2");
			reference.find(".img-one").find("img").attr("src","/webtickets/content/images/poa/BotonesH-P.png");
			reference.find(".img-two").find("img").attr("src","/webtickets/content/images/poa/Entradas_02.png");
			reference.find("#tab-one").hide(1000);
			reference.find("#tab-two").show(1000);				
		});
		
		this.find("#tab-one").css("position","relative");
						
		this.find("#tab-two").css("position","relative").hide();				
		this.find("#tab-two").css("padding", "10px");
		this.find("#tab-one").css("padding-left", "15px");
	};

	$.fn.fechasEPL=function(){
		this.each(function(){
			var ancho = $(this).parent().width()-50;
			window.console && console.log($(this).parent().attr("name"));
			window.console && console.log("Ancho detectado:"+ancho);
			$(this).css("width", ancho);
			$(this).css("float", "left");				
			$(this).parent().append("<span class='littleButton'><i class='fa fa-calendar'></i></span>");				
			$(this).parent().find("span").click(function(){					
				$(this).parent().find(".fechasEPL").datepicker("show");
				window.console && console.log("Se ha pulsado el control de fechas");
			});							
			$(this).parent().find(".littleButton").click(function(){					
				$(this).parent().find(".fechasEPL").datepicker("show");
				window.console && console.log("Se ha pulsado un botón");
			});	
			
			$(this).datepicker({
				dateFormat: 'dd/mm/yy', 
				dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'], // días de la semana
				dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'], // días de la semana (versión super-corta)
				dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'], // días de la semana (versión corta)
				firstDay: 1, // primer día de la semana (Lunes)
				minDate: '0',
				monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], // meses
				monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // meses
				selectOtherMonths: false,
				navigationAsDateFormat: true,
				changeYear: false,
				changeMonth: false
			});						
		});
	};
	
	$.fn.menuFooter = function() {
		var previous = "opt0"; // initial value
		var buffer=["poa", "mundos", "acuatic-park", "ferrari-land", "eventos", "promociones"];

		function change_image( panel, active){			
			var index = (panel.charAt(3)-'0');			
			var img = buffer[Number(index)]+((active)?"-2.png":".png");
			window.console && console.log("Indice-->" +index);
			window.console && console.log("Imagen Nueva-->" +img);
			$("#"+panel).find("img").attr("src","/webtickets/content/images/poa/"+img);		
		}
					
		function _previous(){
			return previous;
		}
		
		window.console && console.log("Se va a iniciar el proceso de inicialización del plugin");	
		$(this).css('cursor', 'pointer');
		$("#opt0, #opt1, #opt2, #opt3, #opt4, #opt5").click(function(){
			var current_id = $(this).attr("id");
			window.console && console.log("Id del objeto clickado: "+current_id);			
			if (current_id!=previous){
				change_image( previous, false);				
				change_image( current_id, true);
				previous = current_id;
			}						
		});// fin del evento click		
	};
	
	$.fn.slider = function(){
		var scrollCarousel = function(){
			$('.jcarousel').jcarousel('scroll', '+=1',true);
		}		
		$('.jcarousel').jcarousel({wrap:'circular'});
		setInterval( scrollCarousel, 5000);
		window.console && console.log("Se ha finalizado el proceso de configuración del slider");
	}; // slider...
	
})(jQuery);

$(document).ready(function() {
	// Buscador 1 
	$(".fechasEPL").fechasEPL();
	$(".wrapper").switchfy();
	$(".two").css("margin-left:-4px");
	window.console && console.log("Se ha completado el control de fechas");
	$(".spinner").spinner({
		spin : function(event, ui) {
			if (ui.value > 100) {
				$(this).spinner("value", 100);
				return false;
			} else if (ui.value < 0) {
				$(this).spinner("value", 0);
				return false;
			}
		}
	}).width(60);
	
	// Fin de buscador 1
	$('#carouselPortada').carousel({
		interval : 5000,
		pause : "false"
	});
	// El valor siempre debe ser el mismo falta averigual cual es...	
    $("#carouselPie5").carousel({
        interval: 5000,
        pause: "false"
    });
});
